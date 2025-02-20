import { memo } from 'react';

import ProductCard from 'components/ProductCard';

const ProductMemo = memo(ProductCard);

const Products = ({ products, view, onSelect }) => {
    return products.map((product) => (
        <ProductMemo
            key={product.id}
            product={product}
            view={view}
            onSelect={() => onSelect(product.id)}
        />
    ));
};

export default Products;
