import React from 'react';

function ProductPage(props) {
    const id = props.match.params.id;
    const product = props.products.find(product => `${product.id}` === id)
    console.log(id)
    return (
        <div>
            <h1>{product.title}</h1>
        </div>
    )
}

export default ProductPage;