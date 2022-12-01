import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h3>Now you agree with our terms and conditions</h3>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;