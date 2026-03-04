import React from 'react';
import { Tag } from 'lucide-react';
import { motion } from 'framer-motion';

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.4,
            ease: "easeOut"
        }
    }
};

const CarCard = ({ car, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="gallery-item-wrapper"
            whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.3 }
            }}
            onClick={() => onClick(car)}
        >
            <div className="gallery-item">
                <div className="gallery-image-container">
                    <img
                        src={car.src}
                        alt={`${car.brand} ${car.model} ${car.year}`} // SEO and a11y improvements
                        className="gallery-image"
                        loading="lazy" // Performance improvement
                    />
                    <div className="gallery-overlay">
                        <span className="view-details-txt">
                            Ver en Meli
                        </span>
                    </div>
                </div>

                <div className="gallery-item-info">
                    <h3 className="item-model">{car.description}</h3>
                    <span className="item-brand">{car.brand} {car.model}</span>

                    <div className="item-details-row" style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            <span className="item-type-badge">{car.type}</span>
                            <span className="item-type-badge">{car.year}</span>
                        </div>
                    </div>
                    <div style={{ marginTop: '0.5rem' }}>
                        <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-main)' }}>{car.price}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CarCard;
