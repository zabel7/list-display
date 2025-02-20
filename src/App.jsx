// style
import './App.css';

// layout
import Layout from 'layout';
// pages
import HomePage from 'pages/HomePage';

// App component is the root component of the application
// It renders the Layout component and the HomePage component
const App = () => {
    return (
        <Layout>
            <HomePage />
        </Layout>
    );
};

export default App;
