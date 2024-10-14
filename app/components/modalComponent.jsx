"use client";
import { Modal } from 'flowbite-react';
import Image from 'next/image'; // Ensure Image is imported here

export const ModalComponent = ({ isShow, closeModal, urlSrc }) => {
    return (
        <Modal
            show={isShow}
            onClose={closeModal} // Make sure the closeModal function is passed here
            size="5xl"
            dismissible
        >
            <Modal.Header></Modal.Header>
            <Modal.Body>
                <Image
                    src={urlSrc}
                    width={1000}
                    height={1000}
                    alt="Selected Image"
                    className="w-full h-full"
                />
            </Modal.Body>
        </Modal>
    );
};

export default ModalComponent;
