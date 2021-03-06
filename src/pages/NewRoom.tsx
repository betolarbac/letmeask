// import { useContext } from 'react';
import { Link } from 'react-router-dom'
// import { AuthContext } from '../contexts/AuthContext';

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg';


import { Button } from '../components/button'
import { useAuth } from '../hooks/useContext';

import '../styles/auth.scss';

export function NewRoom() {
 //const { user } = useAuth();

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="ilustração perguntas e resposta" />
                <strong>Toda pergunta tem uma resposta.</strong>
                <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
            </aside>
            <main >
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input 
                        type="text" 
                        placeholder="Nome da sala"
                        />
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>

                    <p> 
                        Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
                    </p>

                </div>
            </main>
        </div>
    )
}