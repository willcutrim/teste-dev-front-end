import { useEffect, useState } from "react";
import { UserDTO } from "../../dtos/UsersDTO";
import { Button } from "../Button";
import './styles.css'

type ModalProps = {
    info: UserDTO[] | any;
    title: string;
    isOpen: boolean;
    onClose: () => void;
}

export function ModalUser({ isOpen, onClose, title, info }: ModalProps) {
    
    if (!isOpen) {
        return null;
    }    
    // console.log(info['address']['street'])
    return (

        <div className="modal-container-user">
            <h3>{title}</h3>
            <div className="modal-content-user">
                <div className="comments-content-user">
                    <button onClick={onClose}>x</button>
                </div>
                <div className="body-content">
                    <div className="content-info">
                        <h3>Dados pessoais</h3>
                        
                        <p><strong>Nome:</strong> {info['name']}</p>
                        <p><strong>E-mail:</strong> {info['email']}</p>
                        <p><strong>Telefone:</strong> {info['phone']}</p>
                        <p><strong>Site:</strong> {info['website']}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}