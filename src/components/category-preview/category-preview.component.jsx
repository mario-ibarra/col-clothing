import ProductCard from '../product-card/product-card.component';

import {
    CategoryPreviewContainer,
    PreviewLink,
    CategoryPreviewTitle,
    Preview
} from './category-preview.styles';



const CategoryPreview = ({ title, products }) => {
return (
    <CategoryPreviewContainer>
        <PreviewLink>
            <CategoryPreviewTitle to={title}>{title}</CategoryPreviewTitle>
        </PreviewLink>
    <Preview>
        {
            products.filter((_, idx) => idx < 4 )
            .map((product) =>
             <ProductCard key={product.id} product={product} />)
        }
    </Preview>
    </CategoryPreviewContainer>
)
}

export default CategoryPreview;