import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
    return (
        <div className="flex h-screen w-full bg-gray-50 text-gray-900">
            {/* Sidebar will go here */}

            <div className="flex-1 flex flex-col h-full overflow-hidden">
                {/* Header Mobile will go here */}

                <main className="flex-1 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
