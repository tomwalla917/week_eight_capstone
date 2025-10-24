import { Link } from 'react-router-dom'

function Home() {
    return (

        <div className="page">

            <div className="page-content">
                <div class="row mt-5">
                    <div class="col-md-7">
                        <div className="box">
                            
                            <p>
                                Welcome! I'm Thomas Wallace,
                                Full-Stack Developer & Problem Solver

                                I'm passionate about creating efficient, user-friendly web applications
                                that solve real-world problems. With expertise in JavaScript, React,
                                and modern web technologies, I bring ideas to life through code.
                            </p>
                            <p>avatar/headshot goes here</p>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div className="box">
                        <p>
                            Navigate to my portfolio page to see what I have worked on, and click on my contact page to connect!
                        </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Home