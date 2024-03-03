import React, { useState, useEffect } from 'react';
import { getCustomers } from '../Utils/api.js';
import Table from '../Components/Table.js';
import SearchBar from '../Components/SearchBar.js';
import Pagination from '../Components/Pagination.js';
import SortDropdown from '../Components/SortDropdown.js';

const Home = () => {
  const [customers, setCustomers] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('created_at');
  const limit = 20;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCustomers(page, limit, search, sortBy);
      setCustomers(data);
    };
    fetchData();
  }, [page, search, sortBy]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div>
      <SearchBar value={search} onChange={handleSearchChange} />
      <SortDropdown value={sortBy} onChange={handleSortChange} />
      <Table customers={customers} />
      <Pagination page={page} limit={limit} totalRecords={50} onPageChange={handlePageChange} />
    </div>
  );
};

export default Home;
