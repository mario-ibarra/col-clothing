import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import CartItem from '../cart-item/cart-item.component';
import Button, {BUTTON_TYPES_CLASSES} from '../button/button.component';


const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
     navigate('/checkout');
    }

    return (
        <CartDropdownContainer>
            <CartItems />
            {
                cartItems.length ? (cartItems.map((item) => (
                    <CartItem  key={item.id} cartItem={item}/>
                ))) : (
                <EmptyMessage>Your cart is empty</EmptyMessage>
                )
                
            }
            {
                cartItems.length &&
                <Button buttonType={BUTTON_TYPES_CLASSES.inverted} onClick={goToCheckoutHandler}>Checkout</Button>
            }
        </CartDropdownContainer>
    );
};

export default CartDropdown;