import { useState } from 'react';

import Header from 'layout/Header';
import Sidebar from 'layout/Sidebar';

// Navigation component
// It renders the Header and Sidebar components
// It also manages the state of the Sidebar component
const Nav = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const handleSidebarToggle = () => setShowSidebar((prev) => !prev);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
            <Header onOpen={handleSidebarToggle} />
            <Sidebar open={showSidebar} onClose={handleSidebarToggle} />
        </nav>
    );
};

export default Nav;
