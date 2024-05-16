import React from 'react';
import Button from '../Button/Button';
import './modal.sass';

export default function Modal({ closeModal, confirmAction, message }) {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                <i className="bx bx-x close-button" onClick={closeModal}></i>
                <h3>Confirmação de Deleção</h3>
                <p>{message}</p>
                <Button label={"Sim"} onClick={confirmAction} />
                <Button label={"Não"} onClick={closeModal} />
            </div>
        </div>
    );
};



