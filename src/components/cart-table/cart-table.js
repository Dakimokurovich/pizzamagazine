import React from 'react';
import './cart-table.scss';
import {deletedFromCart, addedToCart} from '../../actions';
import {connect} from 'react-redux';


const CartTable = ({items, deletedFromCart, addedToCart}) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">

                {
                    items.map((item) => {
                        const {title, price, url, id, sum} = item;
                        return (
                            <div key={id} className="cart__item">
                                <div onClick={() => addedToCart(id)} className="plus">+</div>
                                <div className="sum">{sum}</div>
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$</div>
                                <div onClick={() => deletedFromCart(id)} className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }

            </div>
            <button className="btn">Buy</button>
        </>
    );
};


const mapStateToProps  = ({items}) => {
    return {
        items
    }
};

const mapDispatchToProps = {
    deletedFromCart,
    addedToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);