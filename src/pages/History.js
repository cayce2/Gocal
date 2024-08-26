import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const History = () => {
  const [data, setData] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10); // Change this value to set records per page
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/form');
        setData(response.data);
        setTotalRecords(response.data.length);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this record?');
    if (!confirmed) return;

    try {
      await axios.delete(`http://localhost:5000/form/${id}`);
      const updatedData = data.filter(item => item._id !== id);
      setData(updatedData);
      setTotalRecords(updatedData.length);
      toast.success('Record deleted successfully');
    } catch (error) {
      console.error('Error deleting data:', error);
      toast.error('Failed to delete record');
    }
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setCurrentPage(1);
  };

  const filteredData = selectedDate
    ? data.filter(item => new Date(item.date).toLocaleDateString() === new Date(selectedDate).toLocaleDateString())
    : data;

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredData.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(filteredData.length / recordsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 py-8">
      <ToastContainer />
      <h1 className="text-3xl font-semibold mb-4">History</h1>
      <p className="mb-4">Total Records: {totalRecords}</p>

      <div className="mb-4">
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Filter by Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-2 py-1">Full Name</th>
              <th className="px-2 py-1">Employee No.</th>
              <th className="px-2 py-1">Date</th>
              <th className="px-2 py-1">Shift</th>
              <th className="px-2 py-1">Route</th>
              <th className="px-2 py-1">Destination</th>
              <th className="px-2 py-1">Estate / Building</th>
              <th className="px-2 py-1">Phone No.</th>
              <th className="px-2 py-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                <td className="border px-2 py-1">{item.fullName}</td>
                <td className="border px-2 py-1">{item.employeeNo}</td>
                <td className="border px-2 py-1">{new Date(item.date).toLocaleDateString()}</td>
                <td className="border px-2 py-1">{item.shift}</td>
                <td className="border px-2 py-1">{item.route}</td>
                <td className="border px-2 py-1">{item.destination}</td>
                <td className="border px-2 py-1">{item.estate}</td>
                <td className="border px-2 py-1">{item.phoneNo}</td>
                <td className="border px-2 py-1">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        <nav className="block">
          <ul className="flex pl-0 rounded list-none flex-wrap">
            {[...Array(totalPages).keys()].map(number => (
              <li key={number + 1}>
                <button
                  onClick={() => paginate(number + 1)}
                  className={`px-3 py-2 ml-0 leading-tight border rounded ${currentPage === number + 1 ? 'bg-blue-500 text-white' : 'bg-white border-gray-300 text-gray-700'}`}
                >
                  {number + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default History;
