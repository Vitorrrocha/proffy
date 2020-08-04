import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/44412471?s=460&u=476f0458df2f971a353b1c2c288192ca89bb6f86&v=4" alt="Vitor Rocha"/>
                <div>
                    <strong>Vitor Rocha</strong>
                    <span>Tecnologia</span>
                </div>
            </header>

            <p>
                Entusiasta desenvolvedor javascript.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>$15,00</strong>
                </p>
                <button type="button" >
                    <img src={whatsappIcon} alt="Entrar em contato"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;