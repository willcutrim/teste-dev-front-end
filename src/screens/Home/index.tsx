import { useState } from "react";
import { Card } from "../../components/Card";
import { Navbar } from "../../components/Navbar";

import { Footer } from "../../components/Footer";
import './styles.css';
export function Home() {

    const [noticia, setNoticia] = useState([{
        titulo: 'Musica nas escolas',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi expedita eveniet consectetur, voluptates voluptatum, sit excepturi earum. Veniam eius amet, accusantium, deserunt officia, quos qui debitis laboriosam velit quis autem!'
    },
    {
        titulo: 'Musica nas escolas',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi expedita eveniet consectetur, voluptates voluptatum, sit excepturi earum. Veniam eius amet, accusantium, deserunt officia, quos qui debitis laboriosam velit quis autem!'
    },
    {
        titulo: 'Musica nas escolas',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi expedita eveniet consectetur, voluptates voluptatum, sit excepturi earum. Veniam eius amet, accusantium, deserunt officia, quos qui debitis laboriosam velit quis autem!'
    },

    {
        titulo: 'Musica nas escolas',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi expedita eveniet consectetur, voluptates voluptatum, sit excepturi earum. Veniam eius amet, accusantium, deserunt officia, quos qui debitis laboriosam velit quis autem!'
    },
    {
        titulo: 'Musica nas escolas',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi expedita eveniet consectetur, voluptates voluptatum, sit excepturi earum. Veniam eius amet, accusantium, deserunt officia, quos qui debitis laboriosam velit quis autem!'
    },

    ])

    return (
        <>
            <Navbar />
            <div className="home">

                {noticia.map(noticia => (
                    <Card
                        title={noticia.titulo}
                        texto={noticia.texto}
                    />
                ))}
            </div>
            <Footer/>
        </>
    )
}