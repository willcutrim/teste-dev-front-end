import { useEffect, useState } from "react";
import { CardUser } from "../../components/CardUser";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { api } from "../../services/api";
import './styles.css'
import { UserDTO } from "../../dtos/UsersDTO";
import { Button } from "../../components/Button";
import back from '../../assets/back.svg'
import { Link } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { ModalUser } from "../../components/ModalUser";

export function AllUsers() {
    const [users, setuser] = useState<UserDTO[]>([]);
    const [displayedItems, setDisplayedItems] = useState(5);
    const [isLoading, setIsLoading] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [user, setUserDetail] = useState<UserDTO[]>([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    async function openModal(id: string) {
        try {
            setIsOpenModal(true)
            const { data } = await api.get(`users/${id}`);
            // console.log(data['name'])
            setUserDetail(data)
            setName(data['name']);
            setEmail(data['email']);
        } catch (error) {
            console.log(error)
        }

    }
    
    function closeModal() {
        setIsOpenModal(false)
    }

    async function fetchUsers() {
        try {
            setIsLoading(true)
            const { data } = await api.get('users');
            setuser(data);
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <>
            <Navbar
                title="Usuários"
            />
            <div className="icon-back">
                <Link to='/'>
                    <img src={back} alt="voltar" />
                </Link>
            </div>
            <ModalUser
                isOpen={isOpenModal}
                onClose={closeModal}
                title="Info. do Usuário"
                info={user}
            />
            <div className="content">
                {users.slice(0, displayedItems).map(users => (
                    <CardUser
                        key={users.id}
                        nome={users.username}
                        email={users.email}
                        onClick={() => openModal(users.id)}
                    />
                ))}
                <div className="container-btn-user">
                    {users.length > displayedItems && (
                        <Button
                            title="Mostrar mais"
                            onClick={() => setDisplayedItems(displayedItems + 3)}
                        />
                    )}
                </div>
            </div>
            <Footer />
        </>
    )
}