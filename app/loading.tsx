import { Spinner } from 'flowbite-react'
import React from 'react'

function loading() {
    return (
        <>
            <div className='h-screen flex flex-col justify-center items-center'>
                <Spinner color={'success'} size={'xl'} />
                <h1 className='my-2 font-medium'>Loading...</h1>
            </div>
        </>
    )
}

export default loading