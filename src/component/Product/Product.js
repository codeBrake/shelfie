import React from 'react'

export default function Product(props){
    let {imageUrl, productName, price} = props
    return(
        <div className="product-inventory">
            <img src={`${imageUrl}`} alt="url"/>
            <p>{productName}</p>
            <p>{price}</p>            

        </div>
    )
}
