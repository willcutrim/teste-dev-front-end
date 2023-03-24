import './styles.css'

type Props ={
    name?: string | undefined;
    body?: string | undefined;
}

export  function CardComments({ name ,body }: Props) {
    return (
        <div className="card-comments">
            <strong>{name}</strong>
            <p>{body}</p>
        </div>
    )
}