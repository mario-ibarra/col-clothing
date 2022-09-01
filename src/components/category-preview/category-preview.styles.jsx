import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = styled.div`
    display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`

export const PreviewLink = styled.h2`
    margin-bottom: 10px;
`

export const CategoryPreviewTitle = styled(Link)`
   font-size: 28px;
    text-transform: uppercase;
    cursor: pointer;
`

export const Preview = styled.div`
   display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
`

