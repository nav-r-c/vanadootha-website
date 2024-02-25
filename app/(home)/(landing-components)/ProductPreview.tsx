'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { StaticImageData } from 'next/image';

import ProductMain from "@/public/landing-page/product-main.png";
import ProductPreview2 from "@/public/landing-page/product-preview-1.png";
import ProductPreview3 from "@/public/landing-page/product-preview-2.png";
import ProductPreview4 from "@/public/landing-page/product-preview-3.png";
import ProductPreview1 from "@/public/landing-page/product-main.png";

function ProductPreview(): JSX.Element {
    const [selectedImage, setSelectedImage] = useState(ProductMain);

    const handleImageClick = (image: StaticImageData) => {
        setSelectedImage(image);
    };

    return (
        <>
            <div className='flex lg:flex-row flex-col justify-between items-top gap-5'>
                <div>
                    <Image src={selectedImage} width={600} height={600} className='h-[20%] lg:h-[100%] border-2 border-[#505050] rounded-md' alt='Kshavi 2.0' />
                </div>
                <div className="flex lg:flex-col lg:absolute justify-center gap-2 mt-2 lg:mt-0">
                    <MiniImagePreview src={ProductPreview1} onClick={() => handleImageClick(ProductPreview1)} />
                    <MiniImagePreview src={ProductPreview2} onClick={() => handleImageClick(ProductPreview2)} />
                    <MiniImagePreview src={ProductPreview3} onClick={() => handleImageClick(ProductPreview3)} />
                    <MiniImagePreview src={ProductPreview4} onClick={() => handleImageClick(ProductPreview4)} />
                </div>
                <div className='text-center lg:text-left lg:w-[50%]'>
                    <h1 className='font-bold my-5 text-xl md:text-2xl'>{"Meet farmer’s First line of Defense"}</h1>
                    <p className='hidden lg:block my-5 text-sm lg:text-md'>Introducing Kshavi, a revolutionary solution in the realm of wildlife management. Harnessing the power of IoT technology, Kshavi is meticulously designed to safeguard human-inhabited areas from the intrusion of herbivore wild animals. </p>
                    <p className='hidden lg:block my-10 text-sm lg:text-md'>Through cutting-edge cameras and sophisticated algorithms, Kshavi detects, tracks, and effectively deters wildlife using a combination of ultrasonic and infrasonic frequencies, coupled with strategic flashlight deployment. With Kshavi, Vanadootha pioneers a new era of coexistence, where humans and wildlife thrive harmoniously, ensuring peace of mind for communities while preserving the natural world.</p>
                    <div className='flex justify-center lg:justify-start items-center gap-5'>
                        <Link href='#contact-us' className="font-bold bg-primary-2 rounded-full p-2 px-5 text-black text-lg transition-all ease-in-out hover:scale-110">Contact Us</Link>
                        <button className='rounded-full py-2 px-5 border-2 border-white block lg:hidden'>Read More</button>
                    </div>
                
                </div>
            </div>
        </>
    )
}

const MiniImagePreview: React.FC<{ src: StaticImageData; onClick: () => void }> = ({ src, onClick }) => {
    return (
        <div onClick={onClick} className="cursor-pointer border-4 border-[#505050] rounded-md">
            <Image src={src} width={100} height={100} alt='Mini Preview' className="w-20 h-20" />
        </div>
    );
};

export default ProductPreview;
