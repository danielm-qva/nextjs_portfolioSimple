
import Link from "next/link";

function Nav_app() {
    return (
        // <nav className="navbar navbar-expand-lg  navbar-dark  bg-dark" >
        //      <div class="container">
        //         <a className="navbar-brand" href="/">Portfolio</a>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse d-flex" id="navbarNav">
        //             <ul className="navbar-nav m-auto">
        //                 <li className="nav-item">
        //                     <Link className="nav-link" href='/blog'>
        //                             Blog
        //                     </Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link" href='/gitHub'>
        //                         gitHub
        //                     </Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link" target='_blank' href='https://www.linkedin.com/in/daniel-alejandro-mastrapa-jimenez-26659b19'>
        //                             linkedin
        //                     </Link>
        //                 </li>
        //             </ul>

        //         </div>
        //     </div>
        // </nav>
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