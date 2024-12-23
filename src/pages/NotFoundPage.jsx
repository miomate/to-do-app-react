import React from 'react';
import { Link } from 'react-router-dom';


const NotFoundPage = () => {
    return ( 
        <div>
            <h2>404 Not Found</h2>
            <p>Sorry, the page you're looking for doesn't exist.</p>
            <Link to="/">Back to Home Page</Link>
        </div>
     );
}
 
export default NotFoundPage;