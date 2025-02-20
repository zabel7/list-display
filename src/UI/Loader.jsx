import PropTypes from 'prop-types';

export const Loader = ({ loading, children }) => {
    if (loading) {
        return (
            <div className="flex flex-1 h-full items-center justify-center m-auto">
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
