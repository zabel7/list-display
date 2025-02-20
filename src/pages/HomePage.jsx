import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router';

// hooks
import useAxios from 'hooks/useAxios';
import useDebounce from 'hooks/useDebounce';
// api
import { getProducts } from 'api/products';
// components
import LayoutButtons from 'components/LayoutButtons';
import Products from 'components/Products';
// UI
import { Loader } from 'UI/Loader';
import { SearchBar } from 'UI/SearchBar';

// HomePage component
// It renders the search bar, layout buttons, and the list of products.
// It also handles the search, view change, and fetching products.
const HomePage = () => {
    const [search, setSearch] = useState('');
    const [view, setView] = useState('grid');
    const debounced = useDebounce((value) => setSearch(value));
    const [searchParams] = useSearchParams();
    const { loading, data, refetch } = useAxios(getProducts, {
        fetchOnMount: !searchParams.has('category'),
    });

    const handleSearch = (e) => {
        debounced(e.target.value);
    };

    const handleViewChange = (value) => setView(value);

    const filteredData = useMemo(() => {
        return data.filter((item) =>
            item.title?.toLowerCase().includes(search.toLowerCase()),
        );
    }, [data, search]);

    useEffect(() => {
        if (searchParams.has('category')) {
            refetch(searchParams.get('category'));
        }
    }, [searchParams, refetch]);

    return (
        <Loader loading={loading}>
            <div className="flex sticky top-10 z-10 gap-4 items-center justify-center h-32 w-full mx-auto lg:max-w-lg">
                <SearchBar
                    onChange={handleSearch}
                    placeholder="Search for products"
                />
                <LayoutButtons view={view} onChange={handleViewChange} />
            </div>
            {filteredData.length === 0 && (
                <div className="flex items-center justify-center h-full">
                    <p className="text-lg font-medium text-gray-500">
                        No products found
                    </p>
                </div>
            )}
            <div
                className={`${
                    view === 'list'
                        ? 'max-w-4xl'
                        : 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                } grid grid-cols-1 px-4 gap-8 xl:w-2/3 mx-auto`}
            >
                <Products products={filteredData} view={view} />
            </div>
        </Loader>
    );
};

export default HomePage;
