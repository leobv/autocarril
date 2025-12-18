import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CarList from '../carlist/CarList';
import './CarGalleryStyle.css';

const CarGallery = () => {
    const [cars, setCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState(null);

    useEffect(() => {
        setCars(CarList());
    }, []);

    const openModal = (car) => {
        setSelectedCar(car);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeModal = () => {
        setSelectedCar(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <div className="gallery-wrapper">
            <div className="section-header">
                <h2 className="section-headline">Tu Próximo Auto Está Aquí</h2>
            </div>
            {/* Removed old subtitle to clean up */}

            {/* Gallery Grid */}
            <div className="gallery-grid">
                {cars.map((car, index) => (
                    <motion.div
                        key={index}
                        className="gallery-item"
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
                            <span className="item-brand">{car.brand}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

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
                                        <span className="modal-brand">{selectedCar.brand}</span>
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
