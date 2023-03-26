import './styels.css'

type Props = {
    title: string;
    body: string;
}

export function CardPost({ title, body }: Props){
    return (
        <div className="card-post">
            <div className="card-content">
                <div className='title-card'>
                    <h2>{title}</h2>
                </div>
                <p>{body}</p>
            </div>
        </div>
    )
}