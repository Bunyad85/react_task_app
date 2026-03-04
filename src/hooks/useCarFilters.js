import { useEffect, useMemo, useState } from "react"

const TYPE_OPTIONS = ["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"]
const CAPACITY_OPTIONS = [2, 4, 6, 8]

const getCarPrice = (priceText = "") => Number.parseFloat(priceText.replace(/[^0-9.]/g, "")) || 0

const getCarCapacity = (carType = "") => {
    const normalizedType = carType.trim().toLowerCase()

    if (normalizedType === "sport" || normalizedType === "coupe") return 2
    if (normalizedType === "sedan" || normalizedType === "hatchback" || normalizedType === "electric" || normalizedType === "hybrid") return 4
    if (normalizedType === "suv" || normalizedType === "crossover" || normalizedType === "luxury") return 6
    if (normalizedType === "pickup" || normalizedType === "van" || normalizedType === "mpv") return 8

    return 4
}

const useCarFilters = (cars, favoriteCars) => {
    const defaultMaxPrice = useMemo(() => {
        if (!cars.length) return 0
        return Math.ceil(Math.max(...cars.map((car) => getCarPrice(car.price))))
    }, [cars])

    const [searchTerm, setSearchTerm] = useState("")
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [filters, setFilters] = useState({
        types: [],
        capacities: [],
        maxPrice: defaultMaxPrice,
    })

    const normalizedSearch = searchTerm.trim().toLowerCase()
    const normalizedFilters = useMemo(
        () => ({
            ...filters,
            maxPrice: Math.min(filters.maxPrice, defaultMaxPrice),
        }),
        [filters, defaultMaxPrice]
    )

    useEffect(() => {
        if (!isFilterOpen) return

        const onEscape = (event) => {
            if (event.key === "Escape") setIsFilterOpen(false)
        }

        window.addEventListener("keydown", onEscape)

        return () => {
            window.removeEventListener("keydown", onEscape)
        }
    }, [isFilterOpen])

    const toggleType = (type) => {
        setFilters((prev) => ({
            ...prev,
            types: prev.types.includes(type)
                ? prev.types.filter((item) => item !== type)
                : [...prev.types, type],
        }))
    }

    const toggleCapacity = (capacity) => {
        setFilters((prev) => ({
            ...prev,
            capacities: prev.capacities.includes(capacity)
                ? prev.capacities.filter((item) => item !== capacity)
                : [...prev.capacities, capacity],
        }))
    }

    const changeMaxPrice = (nextPrice) => {
        setFilters((prev) => ({ ...prev, maxPrice: nextPrice }))
    }

    const resetFilters = () => {
        setFilters({
            types: [],
            capacities: [],
            maxPrice: defaultMaxPrice,
        })
    }

    const searchFilteredCars = useMemo(() => {
        if (!normalizedSearch) return cars
        return cars.filter((car) => car.name.toLowerCase().includes(normalizedSearch))
    }, [cars, normalizedSearch])

    const searchFilteredFavoriteCars = useMemo(() => {
        if (!normalizedSearch) return favoriteCars
        return favoriteCars.filter((car) => car.name.toLowerCase().includes(normalizedSearch))
    }, [favoriteCars, normalizedSearch])

    const filteredCars = useMemo(() => searchFilteredCars.filter((car) => {
        const typePass = normalizedFilters.types.length === 0 || normalizedFilters.types.includes(car.type)
        const carCapacity = getCarCapacity(car.type)
        const capacityPass = normalizedFilters.capacities.length === 0 || normalizedFilters.capacities.some((capacity) => (
            capacity === 8 ? carCapacity >= 8 : carCapacity === capacity
        ))
        const pricePass = getCarPrice(car.price) <= normalizedFilters.maxPrice

        return typePass && capacityPass && pricePass
    }), [searchFilteredCars, normalizedFilters])

    const filteredFavoriteCars = useMemo(() => searchFilteredFavoriteCars.filter((car) => {
        const typePass = normalizedFilters.types.length === 0 || normalizedFilters.types.includes(car.type)
        const carCapacity = getCarCapacity(car.type)
        const capacityPass = normalizedFilters.capacities.length === 0 || normalizedFilters.capacities.some((capacity) => (
            capacity === 8 ? carCapacity >= 8 : carCapacity === capacity
        ))
        const pricePass = getCarPrice(car.price) <= normalizedFilters.maxPrice

        return typePass && capacityPass && pricePass
    }), [searchFilteredFavoriteCars, normalizedFilters])

    const hasActiveFilters = useMemo(
        () => (
            normalizedSearch.length > 0
            || normalizedFilters.types.length > 0
            || normalizedFilters.capacities.length > 0
            || normalizedFilters.maxPrice < defaultMaxPrice
        ),
        [normalizedSearch, normalizedFilters, defaultMaxPrice]
    )

    const typeCounts = useMemo(() => TYPE_OPTIONS.reduce((acc, type) => {
        acc[type] = cars.filter((car) => car.type === type).length
        return acc
    }, {}), [cars])

    const capacityCounts = useMemo(() => CAPACITY_OPTIONS.reduce((acc, capacity) => {
        acc[capacity] = cars.filter((car) => {
            const carCapacity = getCarCapacity(car.type)
            return capacity === 8 ? carCapacity >= 8 : carCapacity === capacity
        }).length
        return acc
    }, {}), [cars])

    return {
        searchTerm,
        setSearchTerm,
        isFilterOpen,
        openFilter: () => setIsFilterOpen(true),
        closeFilter: () => setIsFilterOpen(false),
        filters: normalizedFilters,
        typeOptions: TYPE_OPTIONS,
        capacityOptions: CAPACITY_OPTIONS,
        typeCounts,
        capacityCounts,
        toggleType,
        toggleCapacity,
        changeMaxPrice,
        resetFilters,
        maxPriceLimit: defaultMaxPrice,
        hasActiveFilters,
        filteredCars,
        filteredFavoriteCars,
    }
}

export default useCarFilters
