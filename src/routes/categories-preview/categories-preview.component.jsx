import { Fragment } from 'react';
import {CategoriesContainer} from './categories-preview.styles';
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../features/categories/category.selector';

import {  useSelector } from 'react-redux';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import Spinner from '../../components/spinner/spinner.component';



const CategoriesPreview = () => {

const categoriesMap = useSelector(selectCategoriesMap);
const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <Fragment>
    
      <CategoriesContainer>

        {isLoading ? (
          <Spinner />
        ) : (
          Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            return (
              <CategoryPreview key={title} title={title} products={products} />
            );
          })
        )}
      </CategoriesContainer>
    </Fragment>
  );
};

export default CategoriesPreview;
