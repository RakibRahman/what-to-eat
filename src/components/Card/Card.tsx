import React from 'react'
import { Product } from '../../models/products'
import { GrStar } from "react-icons/gr";
import { FaPlus } from "react-icons/fa";
import styles from './Card.module.css'
import { addToCart } from '../../slices/cartSlice'
import { useDispatch } from 'react-redux';

export const Card = ({ product }: { product: Product }) => {
    const dispatch = useDispatch()
    return (
        <div className={styles.cardBox}>
            <p className={styles.vat}>{product.vat}%</p>
            <img src={product.image} alt={product.name} />
            <div className={styles.productInfo}>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
            </div>

            <div className={styles.productInfo}>
                <div>
                    <p><GrStar /> 4.7</p>
                    <p>50-79 min</p>
                </div>
                <button onClick={() => {
                    dispatch(addToCart(product))
                }} className={styles.cartButton}><FaPlus color='#FFFFFF' /></button>
            </div>
        </div>
    )
}
