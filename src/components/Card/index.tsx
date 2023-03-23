import { Button } from "../Button";
import comentarios from '../../assets/comentarios.svg'
import './styles.css'

type PropsCard = {
    title: string;
    texto: string;
    qty?: number;
}

export function Card({ texto, title, qty }: PropsCard) {
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
                        <Button />
                    </div>
                    <div className="icon-coments">
                        <div><p>10</p></div>
                        <img src={comentarios} alt='comentarios' />
                    </div>
                </div>
            </div>
        </div>
    );
}