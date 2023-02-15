

import { useEffect } from "react";
import Layout from "../component/Layout";
import  Error from './_error';
const  gitHub = ({data , status}) => {
    
       useEffect(()=> {
      console.log(data);
       },[])

     if(status){
            return <Error statusCode= {status} ></Error>
      }
      return (
            <Layout footer={false}>
                  <div className="row">
                        <div className="col-md-4 offset-md-4">
                               <div className="card card-body text-center">
                                    <h1>{data.name}</h1>
                                    <img src={data.avatar_url} alt="" />
                                    <p>{data.bio}</p>
                                    <a href={data.html_url} className="btn btn-outline-secondary" target='_blank'>
                                          Go to GitHub
                                    </a>
                               </div>
                        </div>
                  </div>
            </Layout>
      )

}
export async function getServerSideProps() {
      const res = await fetch(`https://api.github.com/users/danielm-qva`)
      const data = await res.json()
      const status = res.status > 200 ? res.status : false;

      return { props: { data,status } }
    }

export default gitHub;