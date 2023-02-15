import Link from "next/link";
import Layout from "../component/Layout";

function Page404() {
    return (
        <Layout>
            <div className="text-center">
             <h1>404 Page</h1>
             <p>This page does not exist. Please return to
             </p>
             <Link className="btn btn-dark" href='/'>
                    Home
                </Link>
            </div>
             
        </Layout>

    )

}

export default Page404 ;