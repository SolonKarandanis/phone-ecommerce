import React, { Component } from 'react';

import Product from './Product.jsx';
import Title from './Title.jsx';

import { ProductConsumer } from '../context.jsx';

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products"></Title>
                        <div className="row">
                            <ProductConsumer>
                                {(store)=> {
                                    return store.products.map(product=>{
                                        return <Product 
                                                key={product.id}
                                                product={product} 
                                                />
                                    });
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
