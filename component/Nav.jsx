
import Link from "next/link";

function Nav_app() {
    return (
        <nav className="navbar navbar-expand-lg  navbar-dark  bg-dark" >
            <div class="container">
                <a class="navbar-brand" href="/">Portfolio</a>
                <div className="d-flex">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item">
                            <Link className="nav-link" href='/gitHub'>
                                gitHub
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" target='_blank' href='https://www.linkedin.com/in/daniel-alejandro-mastrapa-jimenez-26659b19'>
                                linkedin
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Nav_app;