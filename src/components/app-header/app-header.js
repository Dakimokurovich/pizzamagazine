import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './app-header.scss';

const AppHeader = ({total}) => {
    return (
        <header className="header">
            <Link className="header__link" to="/menu">
                Menu
            </Link>
            <Link className="header__link" to="/basket">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {total} $
            </Link>
        </header>
    )
};

const mapStateToProps = (state) => {
    return {
        total: state.total
    }
}

export default connect(mapStateToProps)(AppHeader);