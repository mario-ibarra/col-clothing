import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';

import { useNavigate } from 'react-router-dom';

import {  useSelector } from 'react-redux';
import { selectCartItems } from '../../features/cart/cart.selector';


import CartItem from '../cart-item/cart-item.component';
import Button, {BUTTON_TYPES_CLASSES} from '../button/button.component';


const CartDropdown = () => {
    const  cartItems  = useSelector(selectCartItems);

    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
     navigate('/checkout');
    }

    return (
      <CartDropdownContainer>
        <CartItems />
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty!!</EmptyMessage>
        )}
        
        {
                cartItems.length >=1 &&
                <Button buttonType={BUTTON_TYPES_CLASSES.inverted} onClick={goToCheckoutHandler}>Checkout</Button>
            }
      </CartDropdownContainer>
    );
};

export default CartDropdown;