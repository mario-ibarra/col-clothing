import { useDispatch, useSelector } from 'react-redux';
import {CartIconContainer, ShoppingIcon, ItemCount} from './cart-icon.styles';

import { selectCartCount, selectIsCartOpen } from '../../features/cart/cart.selector';
import { setIsCartOpen } from '../../features/cart/cartSlice';

const CartIcon = () => {
const dispatch = useDispatch();

const cartCount = useSelector(selectCartCount);
const isCartOpen = useSelector(selectIsCartOpen)

const toogleIsCartOpen = ()=> dispatch(setIsCartOpen(!isCartOpen))
    return (
      <CartIconContainer onClick={toogleIsCartOpen}
      >
        <ShoppingIcon />
        <ItemCount>{cartCount}</ItemCount>
      </CartIconContainer>
    );
}

export default CartIcon;