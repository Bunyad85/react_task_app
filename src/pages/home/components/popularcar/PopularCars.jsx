import { useState } from "react"
import PopularCar from "./PopularCar"

const PopularCars = ({ allCars = [], cars, favoriteIds, onToggleFavorite, hasActiveFilters, isFilterOpen }) => {
    const [visibleCount, setVisibleCount] = useState(12)
    const sourceCars = allCars.length ? allCars : cars

    const showMore = () => {
        setVisibleCount((prev) => prev + 12)
    }

    const showAll = () => {
        setVisibleCount(cars.length)
    }

    const popularCars = sourceCars.slice(0, 4)
    const popularCarsLoop = [...popularCars, ...popularCars]
    const recommendationCars = hasActiveFilters
        ? cars
        : isFilterOpen
            ? cars.slice(0, visibleCount)
            : cars.slice(4, visibleCount)
    const showMoreVisible = !isFilterOpen && !hasActiveFilters && visibleCount < cars.length

    return (
        <section className="popular-cars">
            {!isFilterOpen && (
                <>
                    <div className="section-header">
                        <h5>Popular Car</h5>
                        <button type="button" className="view-all-btn" onClick={showAll}>View All</button>
                    </div>

                    <div className="car-grid popular-grid-desktop">
                        {popularCars.map((car) => (
                            <PopularCar
                                key={car.id}
                                car={car}
                                isFavorite={favoriteIds.includes(car.id)}
                                onToggleFavorite={onToggleFavorite}
                            />
                        ))}
                    </div>

                    <div className="popular-marquee">
                        <div className="popular-marquee-track">
                            {popularCarsLoop.map((car, index) => (
                                <PopularCar
                                    key={`${car.id}-${index}`}
                                    car={car}
                                    isFavorite={favoriteIds.includes(car.id)}
                                    onToggleFavorite={onToggleFavorite}
                                />
                            ))}
                        </div>
                    </div>
                </>
            )}

            <div className="section-header recommendation-header">
                <h5>Recommendation Car</h5>
            </div>

            <div className="car-grid recommendation-grid">
                {recommendationCars.length === 0 ? (
                    <div className="favorites-empty">No cars found for this search.</div>
                ) : (
                    recommendationCars.map((car) => (
                        <PopularCar
                            key={car.id}
                            car={car}
                            isFavorite={favoriteIds.includes(car.id)}
                            onToggleFavorite={onToggleFavorite}
                        />
                    ))
                )}
            </div>

            {showMoreVisible && (
                <div className="show-more">
                    <button type="button" onClick={showMore}>Show More Car</button>
                </div>
            )}
        </section>
    )
}

export default PopularCars
