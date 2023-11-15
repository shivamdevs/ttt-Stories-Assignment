import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="text-center space-y-6 py-20">
            <h1 className="text-2xl font-bold text-gray-600">Looks like you got lost!!!</h1>
            <h2 className="text-xl font-bold text-gray-500">This page doesn't exist</h2>
            <img src="/images/404.jpeg" width={512} height={512} className="w-full max-w-xs aspect-square rounded-full mx-auto" alt="Page not found" />
            <div className="text-lg"><Link to="/">Back to home</Link></div>
        </div>
    )
}

export default NotFound;