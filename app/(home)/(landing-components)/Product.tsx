import React from 'react'
import ProductPreview from './ProductPreview'

function Product() {
    return (
        <>
        <div className='p-5 md:p-10 lg:p-20 bg-secondary-5 text-white'>
            <div className='lg:w-[80%] mx-auto flex flex-col justify-center items-center '>
                <div>
                    <h2 className='font-bold text-center text-4xl'>Kshavi 2.0</h2>
                </div>
                <div className='my-5 md:my-10'>
                    <ProductPreview />
                </div>
            </div>
        </div>
        </>
    )
}

export default Product