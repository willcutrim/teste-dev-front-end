import { Link } from "react-router-dom";

import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import back from '../../assets/back.svg'

import './styles.css'
import { CardPost } from "../../components/CardPost";
import { useEffect, useState } from "react";
import { PostsDTO } from "../../dtos/PostsDTO";
import { api } from "../../services/api";


export function Post(){

    const [postTitle, setPostTitle] = useState('')
    const [postBody, setPostBody] = useState('')

    async function fecthPostDetails(id: string){
        try {
            const {data} = await api.get(`posts/${id}`);
            
            setPostTitle(data['title']);
            setPostBody(data['body']);

        } catch (error) {
            console.log(error)
        }
    }

    // useEffect(() => {
    //     fecthPostDetails()
    // }, [])

    return (
        <>
            <Navbar title="Post"/>
            <div className="icon-back">
                <Link to='/'>
                    <img src={back} alt="voltar" />
                </Link>
            </div>
            <div className="post-div">
                <CardPost
                    title={postTitle}
                    body={postBody}
                />
            </div>
            <Footer/>
        </>
    )
}