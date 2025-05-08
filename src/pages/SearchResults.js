
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import './SearchResults.css';

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('query');

    // In a real app, you would fetch from your API here
    const fetchResults = async () => {
      try {
        // Simulate API call
        setTimeout(() => {
          // Mock data - replace with actual API call
          const mockResults = [
            { id: 1, name: 'Wireless Headphones', price: 99.99, image: 'https://example.com/headphones.jpg' },
            { id: 2, name: 'Smart Watch', price: 199.99, image: 'https://example.com/watch.jpg' },
            // Add more mock results as needed
          ].filter(item => 
            item.name.toLowerCase().includes(query.toLowerCase())
          );
          
          setResults(mockResults);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error('Error fetching search results:', error);
        setLoading(false);
      }
    };

    if (query) {
      fetchResults();
    }
  }, [location.search]);

  return (
    <div className="search-results">
      <h2>Search Results</h2>
      
      {loading ? (
        <div className="loading">Loading...</div>
      ) : results.length > 0 ? (
        <div className="results-grid">
          {results.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <p>No products found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;