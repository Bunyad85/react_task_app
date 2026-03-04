import { useState } from 'react'
import { Link } from 'react-router-dom'

const Right = ({ favoriteCars = [] }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const favoriteIconPath = favoriteCars.length > 0 ? '/truefavoriteicon.svg' : '/heart.svg'

    return (
        <div className={`header-right-side ${isMobileMenuOpen ? "mobile-open" : ""}`}>
            <Link className="favorite-link" to="/favorites" aria-label='Go to favorites'>
                <img src={favoriteIconPath} alt='favorite-button' />
            </Link>
            <div className="notification-button">
                <img src='/notification.svg' alt='notification-button' />
                <img className='notif' src='/Notif.svg' />
            </div>
            <div className="setting-button" >
                <img src='/setting.svg' alt='setting-button' />
            </div>
            <button
                type="button"
                className="profile-button"
                aria-label='Toggle header actions'
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
                <img src='/Profil.png' alt='profile-button' />
            </button>
        </div>
    )
}

export default Right
