import {ProductCardContainer, FooterCard} from './product-card.styles.jsx';
import Button, { BUTTON_TYPES_CLASSES } from '../button/button.component';

import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, selectCartItems} from '../../features/cart/cart.selector';



const ProductCard = ({ product }) => {

    const { name, price, imageUrl } = product;
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

    return (
      <ProductCardContainer>
        <img src={imageUrl} alt={`${name}`} />
        <FooterCard>
          <span className="name">{name}</span>
          <span className="price">{price} €</span>  
        </FooterCard>
        <Button 
          buttonType={BUTTON_TYPES_CLASSES.inverted} 
          onClick={addProductToCart}>
            Add to card
          </Button>
      </ProductCardContainer>
    );
};


export default ProductCard;