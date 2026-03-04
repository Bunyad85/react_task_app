import { Link } from "react-router-dom"
import Button from "../../../../ui/button"

const SvgContent = ({ value, className, alt }) => {  //xususiyyetler iconu
    if (!value) return null

    return <img className={className} src={value} alt={alt || "icon"} />
}

const PopularCar = ({ car, isFavorite, onToggleFavorite }) => {
    const favoriteIconPath = isFavorite ? "/truefavoriteicon.svg" : "/favoriteicon.svg"  //urek ikonu true&false

    const handleToggleFavorite = () => {  //elave&sil function icon
        onToggleFavorite?.(car.id)
    }

    return (
        <div className="car-card">
            <div className="card-top">
                <div className="car-title-wrap">
                    <h3>{car.name}</h3>
                    <p>{car.type}</p>
                </div>

                <button
                    type="button"
                    className="favorite-btn"
                    aria-label={`Favorite ${car.name}`}
                    aria-pressed={isFavorite}
                    onClick={handleToggleFavorite}
                >
                    <img className="favorite-icon" src={favoriteIconPath} alt="favorite icon" />
                </button>
            </div>

            <div className="car-image-box">
                <img className="car-image" src={car.image} alt={car.name} />
                <img className="car-shadow" src="/shadow.png" alt="car shadow" />
            </div>

            <div className="features">
                <SvgContent value={car.features} className="features-svg" alt="car features" />
            </div>

            <div className="card-bottom">
                <div className="price-box">
                    <span className="price">{car.price}</span>

                    {car.oldPrice && (
                        <span className="old-price">
                            {car.oldPrice}
                        </span>
                    )}
                </div>

                <Link to={`/car/${car.id}`}>
                    <Button className="detail-btn">
                        Rent Now
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default PopularCar
