import { useEffect, useState } from "react";
import { Button } from "../Button";

import './styles.css'
import { CommentsDTO } from "../../dtos/CommentsDTO";


type ModalProps = {
    title: string;
    titlePost: string;
    bodyPost: string;
    data?: string;
    isOpen: boolean;
    onClose: () => void;
}

export function ModalPost({ isOpen, onClose, data, title, titlePost, bodyPost }: ModalProps) {
    
    if (!isOpen) {
        return null;
    }
    console.log(titlePost, bodyPost);
    return (

        <div className="modal-container-post">
            <div className="modal-content-post">
                <div className="comments-content-post">
                    <h3>{title}</h3>
                    <Button
                        onClick={onClose}
                        title="Fechar"
                    />
                </div>
                <div className="body-content">
                    <h1>{titlePost}</h1>
                    <p>{bodyPost}</p>
                </div>
            </div>
        </div>
    );
}