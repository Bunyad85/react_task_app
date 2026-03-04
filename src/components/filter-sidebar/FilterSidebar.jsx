import "./style.scss"

const FilterSidebar = ({
    isOpen,
    onClose,
    filters,
    typeOptions,
    capacityOptions,
    typeCounts,
    capacityCounts,
    onTypeToggle,
    onCapacityToggle,
    onPriceChange,
    onReset,
    maxPriceLimit,
}) => {
    return (
        <aside className={`filter-sidebar ${isOpen ? "open" : ""}`} aria-hidden={!isOpen}>
            <div className="filter-inner">
                <div className="filter-header">
                    <h4>Filter</h4>
                    <button type="button" onClick={onClose}>Close</button>
                </div>

                <div className="filter-section">
                    <h6>TYPE</h6>
                    <ul>
                        {typeOptions.map((type) => (
                            <li key={type}>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={filters.types.includes(type)}
                                        onChange={() => onTypeToggle(type)}
                                    />
                                    <span>{type} ({typeCounts[type] || 0})</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="filter-section">
                    <h6>CAPACITY</h6>
                    <ul>
                        {capacityOptions.map((capacity) => (
                            <li key={capacity}>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={filters.capacities.includes(capacity)}
                                        onChange={() => onCapacityToggle(capacity)}
                                    />
                                    <span>
                                        {capacity === 8 ? "8 or More" : `${capacity} Person`} ({capacityCounts[capacity] || 0})
                                    </span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="filter-section price-section">
                    <h6>PRICE</h6>
                    <input
                        type="range"
                        min={0}
                        max={maxPriceLimit}
                        step={1}
                        value={filters.maxPrice}
                        onChange={(event) => onPriceChange(Number(event.target.value))}
                    />
                    <p>Max. ${filters.maxPrice.toFixed(2)}</p>
                </div>

                <button type="button" className="reset-filters" onClick={onReset}>
                    Reset Filters
                </button>
            </div>
        </aside>
    )
}

export default FilterSidebar
