import PopularCar from "../../home/components/popularcar/PopularCar"

const CarListSection = ({ title, cars, favoriteIds, onToggleFavorite }) => {
    return (
        <section className="popular-cars detail-car-list">
            <div className="section-header">
                <h5>{title}</h5>
            </div>
            <div className="car-grid">
                {cars.map((car) => (
                    <PopularCar
                        key={car.id}
                        car={car}
                        isFavorite={favoriteIds.includes(car.id)}
                        onToggleFavorite={onToggleFavorite}
                    />
                ))}
            </div>
        </section>
    )
}

export default CarListSection
