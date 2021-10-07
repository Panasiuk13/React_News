function Auth({ handleAuth, isAuth }) {

    return (
        <div className="auth">
            <button onClick={() => handleAuth()} className="button">
                { isAuth ? 'Log out' : 'Log in' }
            </button>
        </div>
    )
}

export default Auth