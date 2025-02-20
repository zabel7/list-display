import PropTypes from 'prop-types';

export const Loader = ({ loading, children }) => {
    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2  border-gray-900" />
            </div>
        );
    }

    return children;
};

Loader.propTypes = {
    loading: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};
