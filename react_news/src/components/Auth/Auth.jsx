function Auth({ handleAuth, isAuth, logout }) {
    function auth() {
        if(isAuth) logout()
        else handleAuth()
    }
    return (
        <div className="auth">
            <button onClick={() => handleAuth()} className="button">
                { isAuth ? 'Log out' : 'Log in' }
            </button>
        </div>
    )
}

export default Auth