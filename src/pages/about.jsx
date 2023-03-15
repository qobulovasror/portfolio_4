import file from "./assets/Asror's_Resume.pdf"
const About = ()=> {
    const downloadFile = ()=>{
        window.location.href = file;
    }
    return ( 
        <>
            <div className="about">
                <div className="constainer">
                    <div className="header row between">
                        <h3>About Me.</h3>
                        <i class='bx bx-info-circle'></i>
                    </div>
                    <hr />
                    <div className="about-info row between">
                        <div className="about-me">
                            <h2>Web developer</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas rerum iure possimus quam soluta sit alias sapiente excepturi sequi magni cum dolores accusantium laudantium maxime recusandae, aliquid magnam nihil unde?</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas rerum iure possimus quam soluta sit alias sapiente excepturi sequi magni cum dolores accusantium laudantium maxime recusandae, aliquid magnam nihil unde?</p>
                        </div>
                        <div className="info">
                            <h3>Personal Information</h3>
                            <ul>
                                <li>
                                    <b>Name</b>: <span>Qobulov Asror</span>
                                </li>
                                <li>
                                    <b>Age</b>: <span>{new Date().getFullYear()-2001}</span>
                                </li>
                                <li>
                                    <b>Residence</b>: <span>Samarkand, Uzbekistan</span>
                                </li>
                                <li>
                                    <b>Address</b>: <span>Samarkand, Uzbekistan</span>
                                </li>
                                <li>
                                    <b>Email</b>: <span>qobulovasror0@gmail.com</span>
                                </li>
                                <li>
                                    <b>Phone</b>: <span>+9989 (93) 358 28 27</span>
                                </li>
                            </ul>
                            <button onClick={downloadFile}>Download Resume</button>
                        </div>
                    </div>
                    <hr />
                    <h3 className="servTitle">Services</h3>
                    <ul className="services row">
                        <li className="column">
                            <i class='bx bx-laptop'></i>
                            <h4>Web development</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, repudiandae, accusamus autem, fuga itaque dolore facere voluptas provident non libero voluptatum aut minima odio. Dolore quae quasi accusamus in suscipit.</p>
                        </li>
                        <li className="column">
                        <i class='bx bxs-layout'></i>
                            <h4>Responsive Design</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, repudiandae, accusamus autem, fuga itaque dolore facere voluptas provident non libero voluptatum aut minima odio. Dolore quae quasi accusamus in suscipit.</p>
                        </li>
                        <li className="column">
                            <i class='bx bx-globe'></i>
                            <h4>Web application</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, repudiandae, accusamus autem, fuga itaque dolore facere voluptas provident non libero voluptatum aut minima odio. Dolore quae quasi accusamus in suscipit.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
     );
}

export default About;