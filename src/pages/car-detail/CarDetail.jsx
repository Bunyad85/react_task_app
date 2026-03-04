import { useMemo, useState } from "react"
import { Link, useParams } from "react-router-dom"
import DetailTopSection from "./components/DetailTopSection"
import ReviewCard from "./components/ReviewCard"
import CarListSection from "./components/CarListSection"
import { reviews } from "./data/reviews"
import "./style.scss"

const CarDetail = ({ cars = [], favoriteIds = [], onToggleFavorite }) => {
    const { id } = useParams()

    const selectedCar = useMemo(
        () => cars.find((car) => car.id === id),
        [cars, id]
    )

    const viewImages = ["/View.png", "/View 1.png", "/View 2.png", "/View 3.png"]

    const [activeImageByCar, setActiveImageByCar] = useState({})
    const activeImage = activeImageByCar[id] || viewImages[0]

    const handleThumbClick = (nextImage) => {
        setActiveImageByCar((prev) => ({
            ...prev,
            [id]: nextImage,
        }))
    }

    if (!selectedCar) {
        return (
            <div className="car-detail-page">
                <div className="car-detail-not-found">
                    Car not found.
                    <Link to="/"> Back to home</Link>
                </div>
            </div>
        )
    }

    const previewImages = viewImages.slice(1)

    const recentCars = cars.filter((car) => car.id !== selectedCar.id).slice(0, 3)
    const recommendationCars = cars.filter((car) => car.id !== selectedCar.id).slice(3, 6)
    const isFavorite = favoriteIds.includes(selectedCar.id)

    return (
        <div className="home car-detail-page">
            <DetailTopSection
                selectedCar={selectedCar}
                activeImage={activeImage}
                previewImages={previewImages}
                isFavorite={isFavorite}
                onToggleFavorite={onToggleFavorite}
                onThumbClick={handleThumbClick}
            />

            <ReviewCard reviews={reviews} />

            <CarListSection
                title="Recent Car"
                cars={recentCars}
                favoriteIds={favoriteIds}
                onToggleFavorite={onToggleFavorite}
            />

            <CarListSection
                title="Recommendation Car"
                cars={recommendationCars}
                favoriteIds={favoriteIds}
                onToggleFavorite={onToggleFavorite}
            />
        </div>
    )
}

export default CarDetail
