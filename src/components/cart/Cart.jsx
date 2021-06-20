import React, { Component } from 'react';
import Title from '../Title.jsx';
import CartColumns from './CartColumns.jsx';
import EmptyCart from './EmptyCart.jsx';
import {ProductConsumer} from '../../context.jsx';
import CartList from './CartList.jsx';
import CartTotals from './CartTotals.jsx';

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {store =>{
                        const {cart}= store;
                        if(cart.length>0){
                            return (
                                <React.Fragment>
                                    <Title name="your" title="cart" />
                                    <CartColumns />
                                    <CartList value= {store} />
                                    <CartTotals value={store} />
                                </React.Fragment>
                            )
                        }
                        else{
                            return(
                                <EmptyCart />
                            )
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}
