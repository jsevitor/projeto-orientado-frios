import React from "react";

import Button from '../../components/Button/Button';

import '../Login/login.sass';


export default function Login() {
    return(
        <div className="login_page">

            <div className="login_container">

                <label htmlFor="">Usuário</label>
                <input type="text" />

                <label htmlFor="">Senha</label>
                <input type="password" />

                <Button label={"Entrar"} />
            </div>                        
        </div>
    );
}