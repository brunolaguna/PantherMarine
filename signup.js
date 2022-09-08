const signup_react = document.getElementById('App')

function App(){

    

    return(
        <div className="form">
            <img src="imagens/Icone_site2.png" alt=""></img>
            <h1>Sign Up</h1>

            <div className="fullName">
                <strong><label for="nome" id="nome_completo">Full name:</label></strong>
                <input type="text" name="" id="nome"></input>
            </div>

            <div className="email_container">
                <strong><label for="nome" id="e-mail">Email address:</label></strong>
                <input type="email" name="" id="input_email"></input>
            </div>

            <div className="password_container">
                <strong><label for="nome" id="label_senha">Password:</label></strong>
                <input type="password" name="" id="input_senha"></input>
            </div>

            <div className="confirm_password_container">
                <strong><label for="" id="label_confirm_password">Confirm password:</label></strong>
                <input type="password" name="" id="input_confirm_password"></input>
            </div>

            <input type="button" value="Create an account" id="btn-seguinte"></input>
        </div>
    )
}

ReactDOM.render(
    <App></App>
    , signup_react)

