import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';

// UI
import { Modal } from 'UI/Modal';
import { Loader } from 'UI/Loader';
// hooks
import useAxios from 'hooks/useAxios';
// api
import { getProduct } from 'api/products';
// assets
import StarIcon from 'assets/star-icon.svg';

const ProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const {
        data: product,
        loading,
        refetch,
    } = useAxios(getProduct, {
        fetchOnMount: false,
    });

    useEffect(() => {
        if (!id) return;

        refetch(id);
    }, [id, refetch]);

    const handleClose = () => navigate('/');

    return (
        <Modal show onClose={handleClose}>
            <div className="flex flex-1 w-full h-full p-6 min-h-96">
                <Loader loading={loading}>
                    <div className="flex flex-wrap lg:flex-nowrap gap-8">
                        <img
                            src={product?.image}
                            alt={product?.title}
                            className="w-auto h-68 mx-auto my-auto object-contain aspect-square rounded-lg"
                        />
                        <div className="flex flex-col gap-4">
                            <h2 className="text-3xl font-semibold">
                                {product?.title}
                            </h2>
                            <div className="flex gap-4">
                                <p className="text-2xl font-light border-r border-gray-300 pr-4 ">
                                    AED {product?.price}
                                </p>
                                <div className="flex items-center gap-2">
                                    <img
                                        src={StarIcon}
                                        alt="star"
                                        className="w-4 h-4 inline-block"
                                    />
                                    <p className="text-base font-light text-gray-400 ">
                                        {product.rating?.rate} (
                                        {product.rating?.count})
                                    </p>
                                </div>
                            </div>
                            <span className="text-lg capitalize font-medium text-gray-500">
                                {product?.category}
                            </span>
                            <span className="text-sm font-semibold text-gray-700">
                                Description
                            </span>
                            <p className="text-sm font-light text-gray-500">
                                {product?.description}
                            </p>
                        </div>
                    </div>
                </Loader>
            </div>
        </Modal>
    );
};

export default ProductPage;
