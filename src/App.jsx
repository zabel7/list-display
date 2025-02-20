import { Route, Routes } from 'react-router';

// style
import './App.css';

// layout
import Layout from 'layout';
// pages
import HomePage from 'pages/HomePage';
import ProductPage from 'pages/ProductPage';

// App component is the root component of the application
// It renders the Layout component and the HomePage component
const App = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />}>
                    <Route path="/product/:id" element={<ProductPage />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default App;
