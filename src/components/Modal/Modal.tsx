import React, { useCallback, useEffect, useRef, useState } from 'react';
import "./Modal.css";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: React.ReactNode;
    titleClassName?: string;
    bodyClassName?: string;
    footer?: React.ReactNode;
    footerClassName?: string;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children,
    title,
    titleClassName = "modal__title__container",
    bodyClassName = "modal__body__container",
    footer,
    footerClassName = "modal__footer__container"
}) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(isOpen);

    const onAnimationEnd = useCallback(() => {
        if (modalRef.current) {
            modalRef.current.classList.remove('fadeout');
            modalRef.current.removeEventListener('animationend', onAnimationEnd);
            setIsVisible(false);
            onClose();
        }
    }, [onClose])

    const handleClose = useCallback(() => {
        if (modalRef.current) {
            modalRef.current.classList.add('fadeout');
            modalRef.current.addEventListener('animationend', onAnimationEnd);
        }
    }, [onAnimationEnd])



    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                handleClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            setIsVisible(true);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, handleClose]);

    useEffect(() => {
        if (wrapperRef.current) {
            if (isOpen) {
                wrapperRef.current.classList.add('show');
            } else {
                wrapperRef.current.classList.remove('show');
            }
        }
    }, [isOpen]);


    return (
        <>
            {isVisible && (
                <div
                    ref={wrapperRef}
                    className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20  modal__wrapper ${isOpen ? 'show' : ''}`}
                >
                    <div
                        ref={modalRef}
                        className={`bg-[#131319] p-6 rounded-lg shadow-lg transform modal__container ${isOpen ? '' : 'fadeout'}`}
                    >
                        <div className={titleClassName}>
                            {title ? title : (
                                <button
                                    onClick={handleClose}
                                    className="absolute top-4 right-4 bg-[#000] w-8 h-8 items-center rounded-full bordered"
                                    aria-label="Close"
                                >
                                    <div className='text-xl'>&times;</div>
                                </button>
                            )}
                        </div>

                        <div className={bodyClassName}>
                            {children}
                        </div>

                        {footer && (
                            <div className={footerClassName}>
                                {footer}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
