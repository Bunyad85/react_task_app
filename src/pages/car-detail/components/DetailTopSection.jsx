import Button from "../../../ui/button"
import { useNavigate } from "react-router-dom"

const DetailTopSection = ({
    selectedCar,
    activeImage,
    previewImages,
    isFavorite,
    onToggleFavorite,
    onThumbClick,
}) => {
    const navigate = useNavigate()
    const cleanPrice = selectedCar.price.replace(/\/day/i, "").trim()
    const favoriteIconPath = isFavorite ? "/truefavoriteicon.svg" : "/favoriteicon.svg"

    return (
        <div className="car-detail-top">
            <div className="detail-media">
                <div className="detail-hero-card">
                    <img className="detail-hero-preview" src={activeImage} alt="car preview" />
                </div>
                <div className="detail-thumbs">
                    {previewImages.map((image, index) => (
                        <button
                            key={`${image}-${index}`}
                            type="button"
                            className={activeImage === image ? "active" : ""}
                            onClick={() => onThumbClick(image)}
                        >
                            <img src={image} alt={`preview ${index + 1}`} />
                        </button>
                    ))}
                </div>
            </div>

            <div className="detail-info-card">
                <div className="title-row">
                    <div className="title-block">
                        <h3>{selectedCar.name}</h3>
                        <div className="car-rating" aria-label="Rating 4 out of 5">
                            <div className="stars">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <img
                                        key={index}
                                        src={index === 4 ? "/stairnull.svg" : "/stair.svg"}
                                        alt="star"
                                    />
                                ))}
                            </div>
                            <span>440+ Reviewer</span>
                        </div>
                    </div>
                    <button type="button" className="favorite-btn" onClick={() => onToggleFavorite(selectedCar.id)}>
                        <img src={favoriteIconPath} alt="favorite" />
                    </button>
                </div>
                <p className="description">
                    NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".
                </p>
                <div className="spec-grid">
                    <span>Type Car <strong>{selectedCar.type}</strong></span>
                    <span>Capacity <strong>2 Person</strong></span>
                    <span>Steering <strong>Manual</strong></span>
                    <span>Gasoline <strong>70L</strong></span>
                </div>
                <div className="price-row">
                    <div>
                        <h4>
                            {cleanPrice}
                            <span> / day</span>
                        </h4>
                        {selectedCar.oldPrice && <p>{selectedCar.oldPrice}</p>}
                    </div>
                    <Button
                        className="detail-rent-btn"
                        onClick={() => navigate(`/payment/${selectedCar.id}`)}
                    >
                        Rent Now
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default DetailTopSection
