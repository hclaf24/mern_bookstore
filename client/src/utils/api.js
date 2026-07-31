import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'https://mern-bookstore-scqo.onrender.com';
const REQUEST_TIMEOUT = 15000;
const WAKE_PING_TIMEOUT = 10000;
const POLL_INTERVAL = 5000;
const MAX_WAKE_WAIT = 120000;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const looksAsleep = (error) => error.code === 'ECONNABORTED' || !error.response;

async function waitForBackend() {
  const deadline = Date.now() + MAX_WAKE_WAIT;
  while (Date.now() < deadline) {
    try {
      await axios.get(BACKEND_URL, { timeout: WAKE_PING_TIMEOUT });
      return true;
    } catch {
      await sleep(POLL_INTERVAL);
    }
  }
  return false;
}

// Render's free tier spins the backend down after inactivity. If a request
// times out or fails to connect, ping the backend directly to wake it,
// poll until it responds, then retry the original request once.
export async function apiRequest(config) {
  try {
    return await axios({ timeout: REQUEST_TIMEOUT, ...config });
  } catch (error) {
    if (!looksAsleep(error)) throw error;

    const awake = await waitForBackend();
    if (!awake) throw error;

    return axios({ timeout: REQUEST_TIMEOUT, ...config });
  }
}

export default apiRequest;
