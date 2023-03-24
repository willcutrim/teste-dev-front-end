import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Navbar } from "../../components/Navbar";

import { Footer } from "../../components/Footer";
import './styles.css';
import { PostsDTO } from "../../dtos/PostsDTO";
import { api } from "../../services/api";
import { CommentsDTO } from "../../dtos/CommentsDTO";
import { Button } from "../../components/Button";


export function Home() {

    const [posts, setPosts] = useState<PostsDTO[]>([])
    const [commentsQt, setCommentsQt] = useState<CommentsDTO[]>([])
    const [displayedItems, setDisplayedItems] = useState(6);

    async function fetchPosts() {
        try {
            const { data } = await api.get('posts');
            setPosts(data);


        } catch (error) {
            console.log(error);
        }
    }

    async function fetchComments() {
        try {
            const { data } = await api.get(`posts/${posts[0]['id']}/comments`);
            setCommentsQt(data)

        } catch (error) {
            console.log(`erro do comentario - ${error}`);
        }
    }
    useEffect(() => {
        fetchPosts();
    }, [])

    useEffect(() => {
        fetchComments();
    }, [posts])

    return (
        <>
            <Navbar
                title="Home"
            />
            <div className="home">

                {posts.slice(0, displayedItems).map(posts => (
                    <Card
                        key={posts.id}
                        title={posts.title}
                        texto={posts.body}
                        qty={commentsQt.length}
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