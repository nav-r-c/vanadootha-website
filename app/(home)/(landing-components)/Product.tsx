import React from 'react'
import ProductPreview from './ProductPreview'

function Product() {
    return (
        <>
        <div className='p-5 lg:p-20 bg-secondary-5 h-screen text-white '>
            <div className='w-[80%] mx-auto'>
                <h1 className='font-bold text-center text-4xl'>Kshavi 2.0</h1>
                <div className='my-10'>
                    <ProductPreview />
                </div>
            </div>
        </div>
        </>
    )
}

export default Product