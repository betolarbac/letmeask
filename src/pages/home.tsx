import { useAuth } from "../hooks/useContext";

import { useNavigate } from "react-router-dom";

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/button'

import '../styles/auth.scss';




export function Home() {
    //função de rotas com react route dom 
    const navigate = useNavigate();

    const { user, signInWithGoogle } = useAuth()

    //autenticação com google popup
   async function handleCreateRoom(){
        if (!user) {
           await signInWithGoogle()
        }

        navigate('/rooms/new')
    }

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
                    
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="google logo" />
                        crie sua sala com Google 
                    </button>
                    <div className="separator">
                        ou entre em uma sala
                    </div>
                    <form>
                        <input 
                        type="text" 
                        placeholder="Digite o codigo de uma sala "
                        />
                        <Button type="submit" >
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}