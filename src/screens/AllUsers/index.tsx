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

export function AllUsers() {
    const [user, setuser] = useState<UserDTO[]>([]);
    const [displayedItems, setDisplayedItems] = useState(5);
    const [isLoading, setIsLoading] = useState(false);


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
            <div className="content">
                {user.slice(0, displayedItems).map(user => (
                    <CardUser
                        key={user.id}
                        nome={user.name}
                        email={user.email}

                    />
                ))}
                <div className="container-btn-user">
                    {user.length > displayedItems && (
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