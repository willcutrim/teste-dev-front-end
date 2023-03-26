import { Button } from "../Button";
import { Link } from "react-router-dom";
import comentarios from '../../assets/comentarios.svg'
import './styles.css'

type PropsCard = {
    title: string;
    texto: string;
    qty?: number;
    onCLick?: () => void;
    onCLickVerMais?: () => void;
    
}

export function Card({ texto, title, qty, onCLick, onCLickVerMais }: PropsCard) {


    return (
        <div className="card-container">
            <div className="body-card">
                <div className="title-card">
                    <h1>{title}</h1>
                </div>
                <div className="subject-card">
                    <p>{texto}</p>
                </div>
                <div className="group-button">
                    <div>
                        <Button
                            title="Ver mais"
                            onClick={onCLickVerMais}
                        />
                    </div>
                    <div className="icon-coments">
                        <div><p>{qty}</p></div>
                        <button onClick={onCLick}>
                            <img src={comentarios} alt='comentarios' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}