// src/components/Menu.js
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <nav className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-around">
                <Link
                    to="/dashboard"
                    className="px-4 py-2 rounded hover:bg-gray-700 transition"
                >
                    Dashboard
                </Link>
                <Link
                    to="/user-management"
                    className="px-4 py-2 rounded hover:bg-gray-700 transition"
                >
                    User Management
                </Link>
                <Link
                    to="/roles-management"
                    className="px-4 py-2 rounded hover:bg-gray-700 transition"
                >
                    Roles Management
                </Link>
                <Link
                    to="/permissions-management"
                    className="px-4 py-2 rounded hover:bg-gray-700 transition"
                >
                    Permission Management
                </Link>
            </div>
        </nav>
    );
};

export default HomePage;
