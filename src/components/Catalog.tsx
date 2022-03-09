import {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import api from '../services/api';
import { IProduct } from '../store/modules/cart/types';
import {addProductToCart} from "../store/modules/cart/actions";

export default function Catalog() {
    const dispatch = useDispatch();
    const [catalog, setCatalog] = useState<IProduct[]>([]);

    useEffect(() => {
        api.get('products').then(response => {
            setCatalog(response.data);
        });
    }, []);

    const handleAddProductToCart = useCallback((product: IProduct) => {
        dispatch(addProductToCart(product));
    },  [dispatch]);

    return (
        <main>
            <h1>Catalog</h1>
            {catalog.map(product => (
                <article key={product.id}>
                    <strong>{product.title}</strong> {" - "}
                    <span>{product.price}</span> {" "}

                    <button
                        onClick={() => handleAddProductToCart(product)}
                        type="button">Comprar</button>
                </article>
            ))}
        </main>
    )
}
