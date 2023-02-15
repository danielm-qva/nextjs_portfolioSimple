
import Link from "next/link";
import Layout from "../component/Layout";
import { skill, Knowledge, proyect } from "../porfile";
function Home() {
     return (
          <Layout>
               <header className="row">
                    <div className="col-md-12">
                         <div className="card card-body bg-secondary text-light">
                              <div className="row">
                                   <div className="col-md-4 d-flex justify-content-center" >
                                        <img src="avatar-pre.png" className="img-fluid" height='200px' width='200px' />
                                   </div>
                                   <div className="col-md-8">
                                        <h1>Daniel Mastrapa</h1>
                                        <h3>Full Stack Developer</h3>
                                        <p>
                                             Computer engineer passionate about knowledge. Software developer focused on results in a multiplatform development environment. Teamwork skills; active listening, respect, sincerity, communication skills and focused on people. In my free time entrepreneurial apprentice.</p>
                                         <Link className="btn btn-dark" href='/hireme'>
                                                        Hire me
                                         </Link>
                                   </div >
                              </div>
                         </div>
                    </div>
               </header>

               <div className="row py-2">
                    <div className="col-md-4">
                         <div className="card bg-light">
                              <div className="card-body">
                                   <h3 className="text-center">Skill</h3>
                                   {
                                        skill.map((item, index) => (
                                             <div className="py-3" key={index}>
                                                  <h5>{item.skill}</h5>
                                                  <div className="progress">
                                                       <div className="progress-bar" role="progressbar"
                                                            style={{ width: `${item.percente}%` }}
                                                       ></div>
                                                  </div>
                                             </div>
                                        ))
                                   }
                              </div>
                              <div className="card-footer">
                                   <Link target='_blank' href='https://www.linkedin.com/in/daniel-alejandro-mastrapa-jimenez-26659b19'>
                                        Show more Skill
                                   </Link>
                              </div>
                         </div>
                    </div>
                    <div className="col-md-8">
                         <div className="card bg-light" >
                              <div className="card-body">
                                   <h3 className="text-center">Knowledge</h3>
                                   <ul>
                                        {
                                             Knowledge.map((item, index) => (
                                                  <li className="py-2" key={index}>
                                                       {item.text}
                                                  </li>
                                             ))
                                        }
                                   </ul>
                                   <Link className="btn btn-light" href='/expirencia'>
                                        Know more
                                   </Link>
                              </div>
                         </div>
                    </div>
               </div>


               <div className="row">
                    <div className="col-md-12">
                         <div className="card card-body bg-dark">
                              <div className="row">
                                   <div className="col-md-12">
                                        <h1 className="text-center  text-light">
                                             Proyect
                                        </h1>
                                   </div>
                                   {
                                        proyect.map((item, index) => (
                                             <div className="col-md-4 py-2" key={index}>
                                                  <div className="card h-100" >
                                                       <div className="overflow_card">
                                                            <img src="product.jpeg" className="card-img-top" />
                                                       </div>
                                                       <div className="card-body">
                                                            <h3>{item.title}</h3>
                                                            <h3>{item.tecn}</h3>
                                                            <p>{item.descript}</p>
                                                            <a className="btn btn-light" href={item.link_repo}>Know more (Repo)</a>
                                                       </div>
                                                  </div>
                                             </div>
                                        ))
                                   }

                              </div>
                              <div className="col-md-12 mt-4">
                                   <div className="text-center">
                                        <Link className="btn btn-dark" href='https://github.com/danielm-qva?tab=repositories'>
                                             More Repository
                                        </Link>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

          </Layout>
     )
}


export default Home;