import React, { useState, useEffect } from 'react';
import Loader from 'react-loader';

const MainLayout = ({ isLoading,children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {
                isLoading && (<div className="shadow-lg">
                    <Loader />
                </div>)
            }
            <div className='bg-white md:m-4 '>
            {children}

            </div>
        </>
    );
}

export default MainLayout;