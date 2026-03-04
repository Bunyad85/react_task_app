import "./style.scss"
import HeroSection from './components/hero-section/HeroSection'
import Categories from './components/categories/Categories'
import PopularCars from './components/popularcar/PopularCars'

const Home = ({ allCars, cars, favoriteIds, onToggleFavorite, isFilterOpen, hasActiveFilters }) => {
    return (
        <div className={`home ${isFilterOpen ? "filter-open" : ""}`}>
            {!isFilterOpen && <HeroSection />}
            <Categories />
            <PopularCars
                allCars={allCars}
                cars={cars}
                favoriteIds={favoriteIds}
                onToggleFavorite={onToggleFavorite}
                isFilterOpen={isFilterOpen}
                hasActiveFilters={hasActiveFilters}
            />
        </div>
    )
}

export default Home
