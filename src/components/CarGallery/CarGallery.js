import React, { useState, useEffect, useMemo } from 'react';
import { X, MessageCircle, Tag, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CarList from '../carlist/CarList';
import './CarGalleryStyle.css';

const CarGallery = () => {
    const [cars, setCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState(null);
    const [selectedBrand, setSelectedBrand] = useState('Todas');
    const [selectedType, setSelectedType] = useState('Todos');

    // Dynamic column counting based on CSS breakpoints
    const [columns, setColumns] = useState(4); // Default fallback
    const [visibleCount, setVisibleCount] = useState(8);

    useEffect(() => {
        setCars(CarList());
    }, []);

    // Calculate columns on window resize to keep exactly 2 rows
    useEffect(() => {
        const updateColumns = () => {
            const width = window.innerWidth;
            let currentCols = 4; // default auto-fill estimation for mobile/small
            if (width >= 1600) currentCols = 8;
            else if (width >= 1200) currentCols = 6;
            else if (width >= 900) currentCols = 5;
            else if (width >= 600) currentCols = 3; // approximation for tablets
            else currentCols = 2; // approximation for mobile

            setColumns(currentCols);
            // If we are currently collapsed (showing base amount), update the visible count
            // We check this by seeing if the current visibleCount is equal to the old base count.
            // But a simpler approach is: if we aren't showing 'all', snap to the new 2-row base count.
            setVisibleCount(prev => prev >= 1000 ? 1000 : currentCols * 2);
        };

        updateColumns();
        window.addEventListener('resize', updateColumns);
        return () => window.removeEventListener('resize', updateColumns);
    }, []);

    const baseCount = columns * 2; // Exactly 2 rows

    const brands = useMemo(() => {
        const uniqueBrands = ['Todas', ...new Set(cars.map(car => car.brand))];
        return uniqueBrands.sort();
    }, [cars]);

    const types = useMemo(() => {
        const uniqueTypes = ['Todos', ...new Set(cars.map(car => car.type))];
        return uniqueTypes.sort();
    }, [cars]);

    const filteredCars = useMemo(() => {
        return cars.filter(car => {
            const brandMatch = selectedBrand === 'Todas' || car.brand === selectedBrand;
            const typeMatch = selectedType === 'Todos' || car.type === selectedType;
            return brandMatch && typeMatch;
        });
    }, [cars, selectedBrand, selectedType]);

    // Reset visible count to exactly 2 rows when filters change
    useEffect(() => {
        setVisibleCount(baseCount);
    }, [selectedBrand, selectedType, baseCount]);

    const handleToggleExpand = () => {
        if (visibleCount > baseCount) {
            // It's expanded, so collapse it back to 2 rows
            setVisibleCount(baseCount);
            // Scroll back up slightly so they don't lose context
            document.getElementById('flota').scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            // It's collapsed, show all
            setVisibleCount(filteredCars.length);
        }
    };

    const openModal = (car) => {
        setSelectedCar(car);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedCar(null);
        document.body.style.overflow = 'unset';
    };

    const displayedCars = filteredCars.slice(0, visibleCount);
    const isExpanded = visibleCount > baseCount;

    return (
        <div className="gallery-wrapper">
            <div className="section-header">
                <h2 className="section-headline">Nuestros Autos</h2>
            </div>

            {/* Filters */}
            <div className="gallery-filters">
                <div className="filter-group">
                    <span className="filter-label">Marca:</span>
                    <div className="filter-options">
                        {brands.map(brand => (
                            <button
                                key={brand}
                                className={`filter-btn ${selectedBrand === brand ? 'active' : ''}`}
                                onClick={() => setSelectedBrand(brand)}
                            >
                                {brand}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="filter-group">
                    <span className="filter-label">Tipo:</span>
                    <div className="filter-options">
                        {types.map(type => (
                            <button
                                key={type}
                                className={`filter-btn ${selectedType === type ? 'active' : ''}`}
                                onClick={() => setSelectedType(type)}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="gallery-grid">
                <AnimatePresence>
                    {displayedCars.map((car) => (
                        <motion.div
                            key={car.index}
                            className="gallery-item"
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            whileHover={{ y: -5 }}
                            onClick={() => openModal(car)}
                        >
                            <div className="gallery-image-container">
                                <img src={car.src} alt={`${car.brand} ${car.model}`} loading="lazy" />
                                <div className="gallery-overlay">
                                    <span className="view-details-txt">Ver Detalles</span>
                                </div>
                            </div>
                            <div className="gallery-item-info">
                                <h3 className="item-model">{car.model}</h3>
                                <div className="item-details-row">
                                    <span className="item-brand">{car.brand}</span>
                                    <span className="item-type-badge">{car.type}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Toggle Expand Button */}
            {filteredCars.length > baseCount && (
                <div className="load-more-container">
                    <button className="load-more-btn" onClick={handleToggleExpand}>
                        {isExpanded ? 'Ver Menos Autos' : 'Ver Todos Los Autos'}
                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                </div>
            )}

            {filteredCars.length === 0 && (
                <div className="no-results">
                    <p>No se encontraron vehículos que coincidan con tu búsqueda.</p>
                    <button className="reset-filter-btn" onClick={() => { setSelectedBrand('Todas'); setSelectedType('Todos'); }}>
                        Mostrar todos
                    </button>
                </div>
            )}

            {/* Detail Modal */}
            <AnimatePresence>
                {selectedCar && (
                    <motion.div
                        className="modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="modal-content"
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="close-modal-btn" onClick={closeModal} aria-label="Cerrar">
                                <X size={24} />
                            </button>

                            <div className="modal-grid">
                                <div className="modal-image-col">
                                    <img src={selectedCar.src} alt={selectedCar.model} />
                                </div>

                                <div className="modal-info-col">
                                    <div className="modal-header">
                                        <div className="modal-brand-row">
                                            <span className="modal-brand">{selectedCar.brand}</span>
                                            <span className="modal-type-badge">{selectedCar.type}</span>
                                        </div>
                                        <h2 className="modal-title">{selectedCar.model}</h2>
                                        <h3 className="modal-price">{selectedCar.price}</h3>
                                    </div>

                                    <div className="modal-body">
                                        <p className="modal-description">{selectedCar.description}</p>

                                        <div className="modal-tags">
                                            <div className="tag"><Tag size={16} /> Garantía</div>
                                            <div className="tag"><Tag size={16} /> Papeles al día</div>
                                        </div>
                                    </div>

                                    <div className="modal-footer">
                                        <a
                                            href={`https://api.whatsapp.com/send?phone=541139359902&text=Hola!%20Me%20interesa%20el%20${selectedCar.brand}%20${selectedCar.model}`}
                                            className="consult-btn"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <MessageCircle size={20} />
                                            Consultar por WhatsApp
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CarGallery;
