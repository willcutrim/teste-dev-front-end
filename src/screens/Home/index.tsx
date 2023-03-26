import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Navbar } from "../../components/Navbar";

import { Footer } from "../../components/Footer";
import './styles.css';
import { PostsDTO } from "../../dtos/PostsDTO";
import { api } from "../../services/api";
import { CommentsDTO } from "../../dtos/CommentsDTO";
import { Button } from "../../components/Button";
import { ModalComments } from "../../components/ModalComments";
import { CardComments } from "../../components/CardComments";
import { ModalPost } from "../../components/ModalPostDetails";




export function Home() {

    const [posts, setPosts] = useState<PostsDTO[]>([])
    const [commentsQt, setCommentsQt] = useState<CommentsDTO[]>([])
    const [comentarios, setComentarios] = useState<CommentsDTO[]>([])
    const [displayedItems, setDisplayedItems] = useState(6);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenModalPost, setIsOpenModalPost] = useState(false);

    const [titlePost, setTitlePost] = useState('')
    const [bodyPost, setBodyPost] = useState('')


    async function openModal(id: string) {
        try {
            setIsOpenModal(true)
            const { data } = await api.get(`posts/${id}/comments`);

            setComentarios(data)
        } catch (error) {
            console.log(error)
        }

    }

    async function openModalPost(id: string) {
        try {
            setIsOpenModalPost(true)
            const { data } = await api.get(`posts/${id}`);
            console.log(data)

            setTitlePost(data['title'])
            setBodyPost(data['body'])
        } catch (error) {
            console.log(error)
        }

    }

    function closeModalPost() {
        setIsOpenModalPost(false)
    }

    function closeModal() {
        setIsOpenModal(false)
    }

    async function fetchPosts() {
        try {
            const { data } = await api.get('posts');
            setPosts(data);
        } catch (error) {
            console.log(error);
        }
    }

    async function getComments() {
        try {

            for (let post of posts) {
                const { data } = await api.get(`posts/${post.id}/comments`);
                setCommentsQt(data)
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    useEffect(() => {
        getComments();
    }, [posts])


    return (
        <>
            <Navbar
                title="Home"
            />

            <ModalComments
                isOpen={isOpenModal}
                onClose={closeModal}
                title="Comentarios"
                data={comentarios.map(comentarios => (
                    comentarios ?
                        <CardComments
                            name={comentarios.name}
                            body={comentarios.body}
                        /> : ''
                ))}
            />

            <ModalPost
                isOpen={isOpenModalPost}
                onClose={closeModalPost}
                title="Post"
                titlePost={titlePost}
                bodyPost={bodyPost}
            />

            <div className="home">

                {posts.slice(0, displayedItems).map(posts => (
                    <Card
                        key={posts.id}
                        title={posts.title}
                        texto={posts.body}
                        qty={commentsQt.length}
                        onCLick={() => openModal(posts.id)}
                        onCLickVerMais={() => openModalPost(posts.id)}
                    />
                ))}
            </div>
            <div className="container-btn">
                {posts.length > displayedItems && (
                    <Button
                        title="Mostrar mais"
                        onClick={() => setDisplayedItems(displayedItems + 4)}
                    />
                )}
            </div>
            <Footer />
        </>
    )
}