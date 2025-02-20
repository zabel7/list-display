import PropTypes from 'prop-types';

// assets
import MenuIcon from 'assets/menu-icon.svg';
// components
import Logo from 'components/Logo';

// Header component
// It renders the header of the application fixed at the top
const Header = ({ onOpen }) => {
    return (
        <header className="fixed top-1 rounded-xl z-30 inset-x-2 shadow justify-center border border-gray-200  bg-white/75 backdrop-blur p-2 text-white bg-opacity-50">
            <div className="flex items-center gap-4">
                <button onClick={onOpen}>
                    <img
                        src={MenuIcon}
                        alt="menu"
                        className="w-10 h-10 hover:bg-gray-100 rounded-full p-2 cursor-pointer"
                    />
                </button>
                <Logo />
            </div>
        </header>
    );
};

Header.propTypes = {
    onOpen: PropTypes.func.isRequired,
};

export default Header;
