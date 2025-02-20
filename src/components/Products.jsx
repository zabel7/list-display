import { memo } from 'react';

import ProductCard from 'components/ProductCard';

const ProductMemo = memo(ProductCard);

const Products = ({ products, view }) => {
    return products.map((product) => (
        <ProductMemo key={product.id} product={product} view={view} />
    ));
};

export default Products;
