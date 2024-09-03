import { FC } from 'react'
import { NavLink } from 'react-router-dom';
import { Page_List } from '../../app/routes/AppRouter';
import './Header.scss'

export interface I { }

const Header: FC = () => {
    return (
        <header className="header">
            <div className="container">
                <NavLink to="/" className="header__logo">
                </NavLink>
                <nav className="header__menu">
                    <NavLink to={Page_List.Section} className='header__link'> Home </NavLink>
                    <NavLink to={Page_List.Action} className='header__link'> Action </NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;

