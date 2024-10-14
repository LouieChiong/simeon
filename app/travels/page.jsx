"use client";
import React from 'react'
import Navigator from "../components/navigator";
import Footer from '../components/footer';
import ModalComponent from '../components/modalComponent';
import '../globals.scss'
import Image from "next/image";
import { useState } from 'react';

export default function BooksPage() {
    const [show, setShow] = useState(false);
    const [imageUrl, setUrl] = useState('');
    const openModal = () => {
        setShow(true);
    };

    const closeModal = () => {
        setShow(false);
    };

    return (
        <div className="bg-white w-full flex flex-col items-center justify-center min-h-screen h-auto">
            <Navigator />
            <section className="flex flex-col w-full h-full mt-44 desktop:px-40 laptop:px-10 tablet:px-10 mobile:px-0 mb-10">
                <div className='w-full gap-5 h-full flex mobile:flex-col tablet:flex-row laptop:flex-row desktop:flex-row mobile:gap-x-0  tablet:gap-x-5 laptop:gap-x-4 desktop:gap-x-0'>
                    <div className=' flex mobile:items-center tablet:items-center laptop:items-start desktop:items-start justify-center mobile:w-full tablet:w-1/2 laptop:w-1/2'>
                        <Image  onClick={() => {
                            openModal();
                            setUrl('/images/travel.jpg');
                            }}
                            src="/images/travel.jpg" alt="" width={1000} height={1000}
                            className='mobile:w-1/2 tablet:w-full laptop:w-full desktop:w-[80%] cursor-pointer'
                        />
                    </div>
                    <div className='flex gap-5 flex-col mobile:items-center tablet:items-center laptop:items-start desktop:items-start justify-center mobile:w-full tablet:w-1/2 laptop:w-1/2'>
                        <Image
                            onClick={() => {
                                openModal();
                                setUrl('/images/image_7.jpg');
                            }}
                            src="/images/image_7.jpg" alt="" width={1000} height={1000}
                            className='mobile:w-1/2 tablet:w-full laptop:w-full desktop:w-[80%] cursor-pointer'
                        />
                        <Image
                            onClick={() => {
                                openModal();
                                setUrl('/images/image_8.jpg');
                            }}
                            src="/images/image_8.jpg" alt="" width={1000} height={1000}
                            className='mobile:w-1/2 tablet:w-full laptop:w-full desktop:w-[80%] cursor-pointer'
                        />
                    </div>
                </div>
                <div className='w-full h-full flex mobile:flex-col tablet:flex-row laptop:flex-row desktop:flex-row mobile:gap-x-0  tablet:gap-x-5 laptop:gap-x-4 desktop:gap-x-0'>
                    <div className='mb-10 flex mobile:items-center tablet:items-center laptop:items-start desktop:items-start justify-center mobile:w-full tablet:w-1/2 laptop:w-1/2'>
                    </div>
                    <div className='flex mobile:items-center tablet:items-center laptop:items-start desktop:items-start justify-center mobile:w-full tablet:w-1/2 laptop:w-1/2'>

                    </div>
                </div>
            </section>
            <Footer />

            <ModalComponent isShow={show} closeModal={closeModal} urlSrc={imageUrl} />
        </div>
    )
}