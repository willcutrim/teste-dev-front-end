import './styles.css'

import info from '../../assets/information.svg'

type UserProps = {
    nome: string;
    email: string;
}

export function CardUser({nome, email}: UserProps){
    return (
        <div className="card">
            <div className='body-card-user'>
                <div className='info-user'>
                    <strong>{nome}</strong>
                    <p>{email}</p>
                </div>
                <div className='icon-div'>
                    <img src={info} alt='comentarios' />
                </div>
            </div>
        </div>
    )
}