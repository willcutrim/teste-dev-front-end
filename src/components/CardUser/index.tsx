import './styles.css'

import info from '../../assets/information.svg'

type UserProps = {
    nome: string;
    email: string;
    onClick?: () => void;
}

export function CardUser({ nome, email, onClick }: UserProps){
    return (
        <div className="card">
            <div className='body-card-user'>
                <div className='info-user'>
                    <strong>{nome}</strong>
                    <p>{email}</p>
                </div>
                <div className='icon-div'>
                    <button onClick={onClick}>
                        <img src={info} alt='comentarios' />
                    </button>
                </div>
            </div>
        </div>
    )
}