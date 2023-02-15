import Link from "next/link";
import Layout from "../component/Layout";

const _error = ({statusCode}) => {
    return (
        <Layout>
            {
                  statusCode ? (
                    <div className="text-center">
                    <p>Could not load your page. Status Code: {statusCode}</p>
                </div>
                  ):
                  <div className="text-center">
                  <p>Could not get this page.</p>
              </div>
            }
          

        </Layout>

    )

}

export default _error;