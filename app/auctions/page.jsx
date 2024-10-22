'use client';
import React from 'react'
import Navigator from "../components/navigator";
import Footer from '../components/footer';
import ModalComponent from '../components/modalComponent';
import '../globals.scss'
import Image from "next/image";
import { useState } from 'react';

export default function Family() {
    const [show, setShow] = useState(false);
    const [imageUrl, setUrl] = useState('');
    const openModal = () => {
        setShow(true);
    };

    const closeModal = () => {
        setShow(false);
        setUrl('');
    };
    return (
        <div className="bg-white w-full flex flex-col items-center justify-center min-h-screen h-auto">
            <Navigator />
            <section className="flex flex-col w-full h-full mt-44 desktop:px-40 laptop:px-10 tablet:px-10 mobile:px-0 mb-10">
                <div className='w-full h-full gap-4 flex flex-col mobile:gap-x-0  tablet:gap-x-5 laptop:gap-x-4 desktop:gap-x-0'>
                    <div className='flex justify-center w-full py-8'>
                        <span className='text-gray-800 text-[50px] font-bold font-lora'> Auction Pieces </span>
                    </div>
                    <div className='flex flex-col gap-8 mobile:items-center tablet:items-center laptop:items-center desktop:items-center justify-center w-full'>
                        <Image src="/images/auction_1.jpg" alt="" width={1000} height={1000}
                            className='transition ease-in-out delay-150 hover:-translate-y-1 cursor-pointer hover:scale-105 duration-300 w-1/2'
                            onClick={() => {
                                openModal();
                                setUrl('/images/auction_1.jpg');
                            }}
                        />
                        <Image src="/images/auction_2.jpg" alt="" width={1000} height={1000}
                            className='transition ease-in-out delay-150 hover:-translate-y-1 cursor-pointer hover:scale-110 duration-300 w-1/2'
                            onClick={() => {
                                openModal();
                                setUrl('/images/auction_2.jpg');
                            }}
                        />
                        <Image src="/images/auction_3.jpg" alt="" width={1000} height={1000}
                            className='transition ease-in-out delay-150 hover:-translate-y-1 cursor-pointer hover:scale-110 duration-300 w-1/2'
                            onClick={() => {
                                openModal();
                                setUrl('/images/auction_3.jpg');
                            }}
                        />
                        <Image src="/images/auction_4.jpg" alt="" width={1000} height={1000}
                            className='transition ease-in-out delay-150 hover:-translate-y-1 cursor-pointer hover:scale-110 duration-300 w-1/2'
                            onClick={() => {
                                openModal();
                                setUrl('/images/auction_4.jpg');
                            }}
                        />
                        <Image src="/images/auction_5.jpg" alt="" width={1000} height={1000}
                            className='transition ease-in-out delay-150 hover:-translate-y-1 cursor-pointer hover:scale-110 duration-300 w-1/2'
                            onClick={() => {
                                openModal();
                                setUrl('/images/auction_5.jpg');
                            }}
                        />
                        <Image src="/images/auction_6.jpg" alt="" width={1000} height={1000}
                            className='transition ease-in-out delay-150 hover:-translate-y-1 cursor-pointer hover:scale-110 duration-300 w-1/2'
                            onClick={() => {
                                openModal();
                                setUrl('/images/auction_6.jpg');
                            }}
                        />
                        <Image src="/images/auction_7.jpg" alt="" width={1000} height={1000}
                            className='transition ease-in-out delay-150 hover:-translate-y-1 cursor-pointer hover:scale-110 duration-300 w-1/2'
                            onClick={() => {
                                openModal();
                                setUrl('/images/auction_7.jpg');
                            }}
                        />
                    </div>
                </div>

            </section>
            <Footer />
            <ModalComponent isShow={show} closeModal={closeModal} urlSrc={imageUrl} />
        </div>
    )
}