import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App.jsx';

// Render the App component inside the BrowserRouter
// and wrap it with the Routes and Route components
// to enable routing in the application
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
);
