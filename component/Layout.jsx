
import { useEffect } from "react";
import Nav_app from "./Nav";
import { useRouter } from 'next/router'
// import loader from 'nprogress';

function Layout({ children, footer = true}) {

    const router = useRouter();

    useEffect(() => {
        router.events.on('routeChangeStart', (url) => { return console.log(url) })
    }, [])

    return (
        <>
            <Nav_app />
            <main className="container py-4">
                {children}
            </main>
            {
                footer ? (<footer className=" bg-dark text-light text-text-center">
                    <div className="container p-4">
                        <div className="row">
                            <h1>&copy; Daniel Mastrapa Jimenez</h1>
                            <p>2020 - {new Date().getFullYear()}</p>
                            <p>All rights Reservs.</p>
                        </div>
                    </div>
                </footer>) :
                    (<></>)

            }
        </>
    )
}
export default Layout;