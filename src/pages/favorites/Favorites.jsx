import PopularCar from "../home/components/popularcar/PopularCar"
import "./style.scss"

const Favorites = ({ favoriteCars = [], favoriteIds = [], onToggleFavorite, isFilterOpen }) => {
    return (
        <div className={`home favorites-page ${isFilterOpen ? "filter-open" : ""}`}>
            <section className="popular-cars">
                <div className="section-header">
                    <h5>Favorite Cars</h5>
                </div>


                {
                    favoriteCars.length === 0 ? (
                        <div className="favorites-empty">No favorite cars yet.</div>
                    ) : (
                        <div className="car-grid">
                            {favoriteCars.map((car) => (
                                <PopularCar
                                    key={car.id}
                                    car={car}
                                    isFavorite={favoriteIds.includes(car.id)}
                                    onToggleFavorite={onToggleFavorite}
                                />
                            ))}
                        </div>
                    )
                }
            </section >
        </div >
    )
}

export default Favorites
