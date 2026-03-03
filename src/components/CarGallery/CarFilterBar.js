import React from 'react';
import { Search } from 'lucide-react';

const CarFilterBar = ({
    filters,
    setFilters,
    uniqueBrands,
    uniqueTypes
}) => {
    return (
        <div className="gallery-filters">
            {/* Search Input */}
            <div className="filter-group search-group">
                <span className="filter-label">Buscar:</span>
                <div className="search-input-wrapper">
                    <Search className="search-icon" size={18} />
                    <input
                        type="text"
                        placeholder="Modelo o marca..."
                        value={filters.search}
                        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                        className="search-input"
                    />
                </div>
            </div>

            {/* Brand Filter */}
            <div className="filter-group">
                <span className="filter-label">Marca:</span>
                <div className="filter-options">
                    <button
                        className={`filter-btn ${filters.brand === '' ? 'active' : ''}`}
                        onClick={() => setFilters({ ...filters, brand: '' })}
                    >Todas</button>
                    {uniqueBrands.map(brand => (
                        <button
                            key={brand}
                            className={`filter-btn ${filters.brand === brand ? 'active' : ''}`}
                            onClick={() => setFilters({ ...filters, brand })}
                        >
                            {brand}
                        </button>
                    ))}
                </div>
            </div>

            {/* Type Filter */}
            <div className="filter-group">
                <span className="filter-label">Tipo:</span>
                <div className="filter-options">
                    <button
                        className={`filter-btn ${filters.type === '' ? 'active' : ''}`}
                        onClick={() => setFilters({ ...filters, type: '' })}
                    >Todos</button>
                    {uniqueTypes.map(type => (
                        <button
                            key={type}
                            className={`filter-btn ${filters.type === type ? 'active' : ''}`}
                            onClick={() => setFilters({ ...filters, type })}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CarFilterBar;
