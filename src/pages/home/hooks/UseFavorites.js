import { useEffect, useMemo, useState } from "react"

const FAVORITES_STORAGE_KEY = "favoriteCarIds"

const getInitialFavoriteIds = () => {
    try {
        const storedValue = localStorage.getItem(FAVORITES_STORAGE_KEY)
        if (!storedValue) return []

        const parsed = JSON.parse(storedValue)
        return Array.isArray(parsed) ? parsed : []
    } catch {
        return []

    }
}

const useFavorites = (cars = []) => {
    const [favoriteIds, setFavoriteIds] = useState(getInitialFavoriteIds)

    useEffect(() => {
        localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favoriteIds))
    }, [favoriteIds])

    const toggleFavorite = (carId) => {
        setFavoriteIds((prev) => (
            prev.includes(carId)
                ? prev.filter((id) => id !== carId)
                : [...prev, carId]
        ))
    }

    const favoriteCars = useMemo(
        () => cars.filter((car) => favoriteIds.includes(car.id)),
        [cars, favoriteIds]
    )

    const isFavorite = (carId) => favoriteIds.includes(carId)

    return {
        favoriteIds,
        favoriteCars,
        isFavorite,
        toggleFavorite,
    }
}

export default useFavorites
