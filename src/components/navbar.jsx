function NavBar(){
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">BadBank</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" id="createaccount" href="#/CreateAccount">Create Account</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" id="deposit" href="#/deposit">Deposit</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" id="withdraw" href="#/withdraw">Withdraw</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" id="alldata" href="#/alldata">All Data</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </>
    );
}

export default NavBar;