import './styles.css'

interface ButtonInterface {
    title: string;
    onClick?: () => void;
}

export function Button({ title, onClick}: ButtonInterface){
    return (
        <div className='button-container'>
            <button onClick={onClick}>{title}</button>
            
        </div>
    )
}