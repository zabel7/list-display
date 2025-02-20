import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router';

// components
import Logo from 'components/Logo';
import { Loader } from 'UI/Loader';
// hooks
import useAxios from 'hooks/useAxios';
// api
import { getCategories } from 'api/products';

// Sidebar component
// It renders the sidebar with the list of categories fetched from the API.
// It also handles the category selection and closing the sidebar
const Sidebar = ({ open, onClose }) => {
    const { data, loading } = useAxios(getCategories);
    const [searchParams, setSearchParams] = useSearchParams();

    const handleCategoryClick = (category) => {
        setSearchParams({ category });
        onClose();
    };

    return (
        <>
            <aside
                className={`${
                    open ? 'left-2' : '-translate-x-full'
                } w-72 p-4 transition-transform duration-300 bg-gray-50 shadow-md backdrop-blur border rounded-lg border-gray-200 fixed z-50 inset-y-2`}
            >
                <span className="text-center ">
                    <Logo />
                </span>
                <hr className="border-gray-300 my-4" />
                <Loader loading={loading}>
                    <ul className="space-y-2">
                        <MenuItem
                            selected={!searchParams.has('category')}
                            onClick={() => handleCategoryClick('')}
                        >
                            All Categories
                        </MenuItem>
                        {data.map((category) => (
                            <MenuItem
                                key={category}
                                selected={
                                    searchParams.get('category') === category
                                }
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category}
                            </MenuItem>
                        ))}
                    </ul>
                </Loader>
            </aside>
            <div
                onClick={onClose}
                className="fixed top-0 left-0 right-0 z-40 w-full h-full overflow-x-hidden overflow-y-auto md:inset-0 h-modal backdrop-blur-md"
                style={{
                    display: open ? 'flex' : 'none',
                }}
            />
        </>
    );
};

const MenuItem = ({ children, onClick, selected }) => {
    return (
        <li
            onClick={onClick}
            className={`${
                selected ? 'bg-white shadow' : ''
            } p-4 cursor-pointer hover:bg-white hover:shadow rounded-lg capitalize text-sm font-medium`}
        >
            {children}
        </li>
    );
};

MenuItem.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
};

Sidebar.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Sidebar;
