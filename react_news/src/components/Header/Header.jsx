import './Header.css';

import Auth from '../Auth/Auth'

function Header({ handleAuth, isAuth }) {
    return (
        <div className="header">
            <p className="header__logo">
                Cats
            </p>

            <Auth isAuth={ isAuth } handleAuth={ handleAuth } />
        </div>
    )
}

export default Header