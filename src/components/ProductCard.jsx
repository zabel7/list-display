import PropTypes from 'prop-types';

// assets
import StarIcon from 'assets/star-icon.svg';

const ProductCard = ({ product, view, onSelect }) => (
    <div
        key={product.id}
        onClick={onSelect}
        className={`${
            view === 'list' ? 'flex-row' : 'flex-col'
        } relative cursor-pointer flex group shadow border-b border-gray-200 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105`}
    >
        <img
            className={`${
                view === 'list' ? 'w-42 h-full' : 'w-full h-64'
            } aspect-square p-4 border-gray-200 bg-white rounded-xl object-contain group-hover:opacity-75 blur-s`}
            src={product.image}
            alt={product.title}
            onLoad={(e) => e.target.classList.remove('blur-sm')}
        />
        <div className="flex-1 p-4 items-stretch flex flex-col">
            <h3 className="mt-2 mb-4 text-sm font-medium text-gray-700 ">
                <span aria-hidden="true" className="absolute inset-0" />
                {product.title}
            </h3>
            <span className="text-xs block font-normal mb-1 mt-auto capitalize text-gray-500">
                {product.category}
            </span>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                    <img
                        src={StarIcon}
                        alt="star"
                        className="w-4 h-4 inline-block"
                    />
                    <p className="text-sm text-gray-500">
                        {product.rating.rate} ({product.rating.count})
                    </p>
                </div>

                <p className="text-sm font-medium flex-none text-gray-900">
                    AED {product.price}
                </p>
            </div>
        </div>
    </div>
);

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        rating: PropTypes.shape({
            rate: PropTypes.number.isRequired,
            count: PropTypes.number.isRequired,
        }).isRequired,
    }).isRequired,
    view: PropTypes.oneOf(['grid', 'list']).isRequired,
    onSelect: PropTypes.func.isRequired,
};

export default ProductCard;
