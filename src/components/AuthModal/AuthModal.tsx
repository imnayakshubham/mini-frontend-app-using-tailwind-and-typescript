import React, { useState } from 'react'
import { Login } from '../Login/Login';
import { Signup } from '../Signup/Signup';
import Modal from '../Modal/Modal';

type AuthModalPropTypes = {
    isOpen: boolean,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthModal = ({ isOpen, setIsModalOpen }: AuthModalPropTypes) => {
    const [showPage, setShowPage] = useState<"login" | "signup">("signup")

    const handleClose = () => {
        setIsModalOpen(false)
        setShowPage("login")
    }

    if (!isOpen) return null;

    return (
        <Modal
            isOpen={isOpen}
            onClose={() => handleClose()}>
            {showPage === "login" ? (
                <Login from="auth_modal" setShowPage={setShowPage} />
            ) : (
                <Signup from="auth_modal" setShowPage={setShowPage} />
            )}
        </Modal>

    )
}
