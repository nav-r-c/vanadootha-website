import React from 'react'
import { Spinner } from 'flowbite-react'


function loading() {
    return (
        <>
        <div className='h-screen flex flex-col justify-center items-center gap-5'>
            <Spinner color={'success'} size = {'xl'} />
            <h1>Loading...</h1>
        </div>
        </>
    )
}

export default loading