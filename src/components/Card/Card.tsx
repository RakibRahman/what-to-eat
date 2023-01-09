import { Flex, Tag } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { GrStar } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { Product } from "../../models/products";
import { addToCart } from "../../slices/cartSlice";
import styles from "./Card.module.css";

export const Card = ({ product }: { product: Product }) => {
    const dispatch = useDispatch();
    return (
        <div className={styles.cardBox}>
            <p className={styles.vat}>{product.vat}%</p>
            <img src={product.image} alt={product.name} />
            <div className={styles.productInfo}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p>${product.price}</p>
            </div>

            <div className={styles.productInfo} >
                <Flex gap='5px' alignItems={'center'}>
                    <Flex alignItems={'center'} gap='2px'>
                        <Tag> <GrStar style={{
                            marginRight: '5px'
                        }} /> 4.7</Tag>
                    </Flex>
                    <Tag>50-79 min</Tag>
                </Flex>
                <button
                    onClick={() => {
                        dispatch(addToCart(product));
                    }}
                    className={styles.cartButton}
                >
                    <FaPlus color="#FFFFFF" />
                </button>
            </div>
        </div>
    );
};
