import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {IProduct} from "../store/modules/cart/types";
import {addProductToCartRequest} from "../store/modules/cart/actions";
import {IState} from "../store";

interface CatalogItemProps {
    product: IProduct;
}

export default function CatalogItem({product}: CatalogItemProps){
    const dispatch = useDispatch();

    const hasFailedStockCheck = useSelector<IState, boolean>(state => {
        return state.cart.failedStockCheck.includes(product.id);
    })

    const handleAddProductToCart = useCallback(() => {
        dispatch(addProductToCartRequest(product));
    },  [dispatch, product]);

    return (
        <article key={product.id}>
            <strong>{product.title}</strong> {" - "}
            <span>{product.price}</span> {" "}

            <button
                onClick={() => handleAddProductToCart()}
                type="button">Comprar</button>

            {hasFailedStockCheck && <span style={{color: 'red'}}>Produto fora de estoque</span>}
        </article>
    )
}
