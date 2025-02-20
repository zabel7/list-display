import PropTypes from 'prop-types';

// assets
import xIcon from 'assets/x-icon.svg';

export const CloseButton = ({ onClick }) => (
    <button className="absolute -inset-2 rounded-lg" onClick={onClick}>
        <img
            src={xIcon}
            alt="close"
            className="w-8 h-8 hover:bg-gray-100 rounded-full p-2 cursor-pointer"
        />
    </button>
);

CloseButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};
