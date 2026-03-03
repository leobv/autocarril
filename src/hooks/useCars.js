import { useState, useEffect } from 'react';
import carsData from '../data/carsData.json';

const useCars = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulate a network request
        const fetchCars = async () => {
            try {
                // In a real scenario, this would be a fetch call to an API
                // const response = await fetch('/api/cars');
                // const data = await response.json();

                // For now, use the imported local JSON data
                // Simulating network delay for realism (300ms)
                setTimeout(() => {
                    setCars(carsData);
                    setLoading(false);
                }, 300);
            } catch (err) {
                setError(err.message || 'Failed to fetch cars');
                setLoading(false);
            }
        };

        fetchCars();
    }, []);

    return { cars, loading, error };
};

export default useCars;
