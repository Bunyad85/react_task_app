import LeftFooter from './LeftFooter'
import RightFooter from './RightFooter'
import './style.scss'

const Footer = () => {
    return (
        <footer className='footer-wrapper'>
            <div className="footer">
                <div className="footer-top">
                    <LeftFooter />
                    <RightFooter />
                </div>

                <div className="footer-divider" />

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        <img src="/©2022 MORENT. All rights reserved.svg" alt="(c)2022 MORENT. All rights reserved" />
                    </p>

                    <div className="footer-legal-links">
                        <a href="#">Privacy &amp; Policy</a>
                        <a href="#">Terms &amp; Condition</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
