import React from "react";
import { Product } from "../../models/products";
import { Card } from "../Card/Card";
import styles from "./CardContainer.module.css";

export const CardContainer = ({ productList }: { productList: Product[] }) => {
    return (
        <div className={styles.cardContainer}>
            {productList?.map((product: Product) => (
                <Card key={product.id} product={product} />
            ))}
        </div>
    );
};
