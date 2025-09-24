import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactList from './Contactlist';
import SearchBar from './SearchBar';
import './App.css';

const API_URL = 'https://jsonplaceholder.typicode.com/users'; // Using a public API for demonstration

function App() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(API_URL);
        setContacts(response.data);
      } catch (err) {
        setError("Failed to fetch contacts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.phone.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <div className="loading">Loading contacts...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>TrueCaller Clone 📞</h1>
      </header>
      <SearchBar onSearch={handleSearch} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
}

export default App;
