import PropTypes from 'prop-types';
import { Outlet } from 'react-router';

import Nav from 'layout/Nav';

// Layout component
// It renders the Navigation and the main content of the
// as children components. It responsible for the overall
// layout of the application
const Layout = () => {
    return (
        <div className="w-screen h-screen bg-gray-50 overflow-auto">
            <Nav />
            <main className="p-4 mt-[2rem]">
                <Outlet />
            </main>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
