import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/home/Home'
import Favorites from './pages/favorites/Favorites'
import CarDetail from './pages/car-detail/CarDetail'
import Payment from './pages/payment/Payment'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import ScrollToTop from './components/ScrollToTop'
import { cars } from './mockdata/data'
import useFavorites from './pages/home/hooks/UseFavorites'
import FilterSidebar from './components/filter-sidebar/FilterSidebar'
import useCarFilters from './hooks/useCarFilters'

const App = () => {
  const location = useLocation()
  const isPaymentPage = location.pathname.startsWith('/payment')
  const { favoriteIds, favoriteCars, toggleFavorite } = useFavorites(cars)
  const {
    searchTerm,
    setSearchTerm,
    isFilterOpen,
    openFilter,
    closeFilter,
    filters,
    typeOptions,
    capacityOptions,
    typeCounts,
    capacityCounts,
    toggleType,
    toggleCapacity,
    changeMaxPrice,
    resetFilters,
    maxPriceLimit,
    hasActiveFilters,
    filteredCars,
    filteredFavoriteCars,
  } = useCarFilters(cars, favoriteCars)

  return (
    <div className='app'>
      <ScrollToTop />
      <Header
        favoriteCars={favoriteCars}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onFilterToggle={isPaymentPage ? undefined : openFilter}
      />
      <div className={`app-layout ${!isPaymentPage && isFilterOpen ? "with-filter" : ""}`}>
        {!isPaymentPage && (
          <FilterSidebar
            isOpen={isFilterOpen}
            onClose={closeFilter}
            filters={filters}
            typeOptions={typeOptions}
            capacityOptions={capacityOptions}
            typeCounts={typeCounts}
            capacityCounts={capacityCounts}
            onTypeToggle={toggleType}
            onCapacityToggle={toggleCapacity}
            onPriceChange={changeMaxPrice}
            onReset={resetFilters}
            maxPriceLimit={maxPriceLimit}
          />
        )}
        <main className='app-content'>
          <Routes>
            <Route
              path='/' element={
                <Home
                  allCars={cars}
                  cars={filteredCars}
                  favoriteIds={favoriteIds}
                  onToggleFavorite={toggleFavorite}
                  isFilterOpen={isFilterOpen}
                  hasActiveFilters={hasActiveFilters}
                />
              }
            />
            <Route
              path='/favorites' element={
                <Favorites
                  favoriteCars={filteredFavoriteCars}
                  favoriteIds={favoriteIds}
                  onToggleFavorite={toggleFavorite}
                  isFilterOpen={isFilterOpen}
                />
              }
            />
            <Route
              path='/car/:id' element={
                <CarDetail
                  cars={cars}
                  favoriteIds={favoriteIds}
                  onToggleFavorite={toggleFavorite}
                />
              }
            />
            <Route
              path='/payment/:id' element={
                <Payment cars={cars} />
              }
            />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
