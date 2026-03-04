import React from 'react';

const CarCard = ({ car, onClick }) => {
    return (
        <div className="gallery-item" onClick={() => onClick(car)}>
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
    );
};

export default CarCard;
