import { useEffect, useState } from "react";
import { Button } from "../Button";

import './styles.css'
import { CommentsDTO } from "../../dtos/CommentsDTO";


type ModalProps = {
    data: string;
    isOpen: boolean;
    onClose: () => void;
}

export function ModelComments({ isOpen, onClose, data }: ModalProps) {
    
    if (!isOpen) {
        return null;
    }

    return (

        <div className="modal-container">
            <div className="modal-content">
                <div className="comments-content">
                    <h3>Comentarios</h3>
                    <Button
                        onClick={onClose}
                        title="Fechar"
                    />
                </div>
                {data}
            </div>
        </div>
    );
}