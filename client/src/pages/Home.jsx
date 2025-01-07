import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox, MdOutlineTableRows, MdOutlineApps } from 'react-icons/md';
import BooksCard from '../components/home/BooksCard';
import BooksTable from '../components/home/BooksTable';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('card');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:4000/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
      <h1 className='text-3xl my-8'>Books List</h1>
      <div className='flex justify-between item-center gap-x-4 p-4'>
        <div className='flex gap-2 items-center'>
          <p className='max-md:hidden'>View options</p>
          <button
            className='bg-blue hover:bg-light-blue px-4 py-1 rounded-lg'
            onClick={() => setShowType('table')}
          >
            <MdOutlineTableRows />
          </button>
          <button
            className='bg-blue hover:bg-light-blue px-4 py-1 rounded-lg'
            onClick={() => setShowType('card')}
          >
            <MdOutlineApps />
          </button>
        </div>
        <Link to='/books/create' className='flex items-center gap-2'>
          <p className='max-md:hidden'>Add book</p>
          <MdOutlineAddBox className='text-gunmetal text-4xl' />
        </Link>
      </div>
      <div className='flex justify-between items-center'>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;