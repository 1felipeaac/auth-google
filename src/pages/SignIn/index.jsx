import './styles.scss';
import {GoogleLogo} from '@phosphor-icons/react'
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {auth} from '../../services/firebase'
import { useState } from 'react';
export function SignIn(){
    const [user, setUser] = useState();
    function handleGoogleSignIn(){
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result)=>{
                setUser(result.user)
                //console.log(result.user)
            })
            .catch((error)=>{console.log(error)})

    }
    return(
        <div className="container">
            {user && <div className='user'>
                {
                    user.photoURL && <img src={user.photoURL} alt='Foto do usuario'/>
                }
                <strong>{user.displayName}</strong>
                <small>{user.email}</small>
            </div> }
            <h1>Acesse sua conta</h1>
            <span>
                Utilizando autenticação social, por exemplo, autenticação com Google você <br/>
                facilita a vida do usuário permitindo utilizar sua aplicação sem fazer cadastro.
            </span>

            <button type="button" className="button" onClick={handleGoogleSignIn}>
                <GoogleLogo/>
                Entrar com Google
            </button>


        </div>
    )
}