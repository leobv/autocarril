import React, { useState, useEffect, useMemo } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import useCars from '../../hooks/useCars';
import CarCard from './CarCard';
import CarFilterBar from './CarFilterBar';
import './CarGalleryStyle.css';

const CarGallery = () => {
    // 1. Data Fetching via Custom Hook
    const { cars, loading, error } = useCars();

    // 2. State Management for Filters
    const [filters, setFilters] = useState({ search: '', brand: '', type: '' });

    // 3. Pagination / "Load More" logic
    const baseCount = 10;
    const [visibleCount, setVisibleCount] = useState(baseCount);

    // 4. Derived State for Filters (Memoized for performance)
    const uniqueBrands = useMemo(() => {
        const brands = new Set(cars.map(car => car.brand));
        return Array.from(brands).sort();
    }, [cars]);

    const uniqueTypes = useMemo(() => {
        const types = new Set(cars.map(car => car.type));
        return Array.from(types).sort();
    }, [cars]);

    const filteredCars = useMemo(() => {
        return cars.filter(car => {
            const searchStr = (filters.search || '').toLowerCase();
            const matchesSearch = (car.model || '').toLowerCase().includes(searchStr) ||
                (car.brand || '').toLowerCase().includes(searchStr);
            const matchesBrand = !filters.brand || car.brand === filters.brand;
            const matchesType = !filters.type || car.type === filters.type;

            return matchesSearch && matchesBrand && matchesType;
        });
    }, [cars, filters]);

    // Reset layout count if filters change
    useEffect(() => {
        setVisibleCount(baseCount);
    }, [filters, baseCount]);

    // 5. Handlers
    const handleToggleExpand = () => {
        if (visibleCount > baseCount) {
            setVisibleCount(baseCount);
            document.getElementById('flota')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            setVisibleCount(filteredCars.length);
        }
    };

    const handleCarClick = (car) => {
        if (car.url) {
            window.open(car.url, '_blank');
        }
    };

    const displayedCars = filteredCars.slice(0, visibleCount);
    const isExpanded = visibleCount > baseCount;

    // Loading State
    if (loading) {
        return (
            <div className="gallery-wrapper loading-state">
                <p>Cargando vehículos...</p>
            </div>
        );
    }

    // Error State
    if (error) {
        return (
            <div className="gallery-wrapper error-state">
                <p>Error cargando los datos: {error}</p>
            </div>
        );
    }

    return (
        <div className="gallery-wrapper">
            <div className="section-header">
                <h2 className="section-headline">Nuestros Autos</h2>
            </div>

            {/* Filter Bar Component */}
            <CarFilterBar
                filters={filters}
                setFilters={setFilters}
                uniqueBrands={uniqueBrands}
                uniqueTypes={uniqueTypes}
            />

            {/* Gallery Grid */}
            <div className="gallery-grid">
                <AnimatePresence>
                    {displayedCars.map((car) => (
                        <CarCard key={car.id} car={car} onClick={handleCarClick} />
                    ))}
                </AnimatePresence>
            </div>

            {/* Empty State Feedback */}
            {filteredCars.length === 0 && (
                <div className="no-results-state">
                    <p>No se encontraron vehículos que coincidan con tu búsqueda.</p>
                    <button
                        className="reset-filter-btn"
                        onClick={() => {
                            setFilters({ search: '', brand: '', type: '' });
                        }}
                    >
                        Limpiar filtros
                    </button>
                </div>
            )}

            {/* Load More/Less Button */}
            {filteredCars.length > baseCount && (
                <div className="load-more-container">
                    <button className="load-more-btn" onClick={handleToggleExpand}>
                        {isExpanded ? 'Ver Menos Autos' : 'Ver Todos Los Autos'}
                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                </div>
            )}
        </div>
    );
};

export default CarGallery;

