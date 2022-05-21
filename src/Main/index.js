import React, {useEffect, useRef} from 'react';
import useScript from "../hook/useScript";
import useLink from "../hook/useLink";

const Index = () => {
    useLink("/vendor/bootstrap/css/bootstrap.min.css",'stylesheet')
    useLink("https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:100,200,300,400,500,600,700,800,900",'stylesheet')
    useLink("https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i",'stylesheet')
    useLink("/vendor/font-awesome/css/font-awesome.min.css",'stylesheet')
    useLink("/vendor/devicons/css/devicons.min.css",'stylesheet')
    useLink("/vendor/simple-line-icons/css/simple-line-icons.css",'stylesheet')
    useLink("/css/resume.min.css",'stylesheet')

    useScript("/vendor/jquery/jquery.min.js")
    useScript("/vendor/bootstrap/js/bootstrap.bundle.min.js")
    useScript("/vendor/bootstrap/js/bootstrap.bundle.min.js")
    useScript("/vendor/jquery-easing/jquery.easing.min.js")
    useScript("/js/resume.min.js")





    useEffect(() => {


    },[])
    return (

            <div id="page-top">

            <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <a class="navbar-brand js-scroll-trigger" href="#page-top">
                    <span class="d-block d-lg-none">Start Bootstrap</span>
                    <span class="d-none d-lg-block">
          <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.jpg" alt="" />
        </span>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#experience">Experience</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#education">Education</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#work">Work</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#awards">Awards</a>
                        </li>
                    </ul>
                </div>
            </nav>

              <div class="container-fluid p-0">

                <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
                    <div class="my-auto">
                        <h1 class="mb-0">Abdul
                            <span class="text-primary">Aziz</span>
                        </h1>
                        <div class="subheading mb-5">Hathazari,Chittagong,4337 · 01647156959 ·
                            <a href="mailto:name@email.com">shuvoahmedkhan202@email.com</a>
                        </div>
                        <p class="mb-5">
                            Hello! My name is Abdul Aziz and i'm a Web Developer more than 1.5 year professional
                            experience
                            . Learning about new technology is one of my passion.
                        </p>
                        <ul class="list-inline list-social-icons mb-0">

                            <li class="list-inline-item">
                                <a href="https://www.linkedin.com/in/abdul-aziz-shuvo-0585b5163/">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="https://github.com/Abdul-aziz-shuvo">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>

                <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
                    <div class="my-auto">
                        <h2 class="mb-5">Experience</h2>

                        <div class="resume-item d-flex flex-column flex-md-row mb-5">
                            <div class="resume-content mr-auto">
                                <h3 class="mb-0"> Web Developer</h3>
                                <div class="subheading mb-3">Shongjogyou</div>
                            </div>
                            <div class="resume-date text-md-right">
                                <span class="text-primary">Nav 2021 - April 2022</span>
                            </div>
                        </div>



                    </div>

                </section>

                <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
                    <div class="my-auto">
                        <h2 class="mb-5">Education</h2>

                        <div class="resume-item d-flex flex-column flex-md-row mb-5">
                            <div class="resume-content mr-auto">
                                <h3 class="mb-0">Masters </h3>
                                <div class="subheading mb-3">Management</div>
                            </div>
                            <div class="resume-date text-md-right">
                                <span class="text-primary">2021 - Running</span>
                            </div>
                        </div>


                    </div>
                </section>


                <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="work">
                    <div class="my-auto">
                        <h2 class="mb-5">Work</h2>

                        <a href="https://shongjogyou.com/" class="resume-item d-flex flex-column flex-md-row mb-5">
                            <div class="resume-content mr-auto">
                                <h3 class="mb-0">ShongjogYou </h3>
                                <div class="subheading mb-3">React,Bootstrap,Laravel,Mysql</div>
                            </div>

                        </a>

                        <a href="https://bitbucket.org/forkan295/inventory/src/master/" class="resume-item d-flex flex-column flex-md-row mb-5">
                            <div class="resume-content mr-auto">
                                <h3 class="mb-0">Inventory Management </h3>
                                <div class="subheading mb-3">Bootstrap,Laravel,Jquery,Mysql</div>
                            </div>
                        </a>

                        <a href="https://bitbucket.org/shuvobhai/laravel-blog/src/master/" class="resume-item d-flex flex-column flex-md-row mb-5">
                            <div class="resume-content mr-auto">
                                <h3 class="mb-0">Laravel Blog </h3>
                                <div class="subheading mb-3">Bootstrap,Laravel,Jquery,Mysql</div>
                            </div>
                        </a>

                        <a href="https://github.com/Abdul-aziz-shuvo/react-insta" class="resume-item d-flex flex-column flex-md-row mb-5">
                            <div class="resume-content mr-auto">
                                <h3 class="mb-0">Instagram Clone</h3>
                                <div class="subheading mb-3">Tailwind,React,Firebase</div>
                            </div>
                        </a>

                    </div>
                </section>

                <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
                    <div class="my-auto">
                        <h2 class="mb-5">Skills</h2>

                        <div class="subheading mb-3">Programming Languages &amp; Tools</div>
                        <ul class="list-inline list-icons">

                            <li class="list-inline-item" title="Javascript">
                                <i class="devicons devicons-javascript"></i>
                            </li>
                            <li class="list-inline-item" title="Jquery">
                                <i class="devicons devicons-jquery" ></i>
                            </li>
                            <li class="list-inline-item"  title="React">
                                <i class="devicons devicons-react"></i>
                            </li>
                            <li class="list-inline-item"  title="PHP">
                                <i class="devicons devicons-php"></i>
                            </li>
                            <li class="list-inline-item"  title="Laravel">
                                <i class="devicons devicons-laravel"></i>
                            </li>
                            <li class="list-inline-item" title="Git">
                                <i class="devicons devicons-git"></i>
                            </li>
                            <li class="list-inline-item" title="Sass">
                                <i class="devicons devicons-sass"></i>
                            </li>

                            <li class="list-inline-item" title="Bootstrap">
                                <i class="devicons devicons-bootstrap"></i>
                            </li>

                            <li class="list-inline-item" title="HTML">
                                <i class="devicons devicons-html5"></i>
                            </li>
                            <li class="list-inline-item" title="CSS">
                                <i class="devicons devicons-css3"></i>
                            </li>
                            <li class="list-inline-item" title="NPM">
                                <i class="devicons devicons-npm"></i>
                            </li>
                            <li class="list-inline-item" title="Composer">
                                <i class="devicons devicons-composer"></i>
                            </li>

                        </ul>

                        <div class="subheading mb-3">Workflow</div>
                        <ul class="fa-ul mb-0">
                            <li>
                                <i class="fa-li fa fa-check"></i>
                                Responsive Design</li>
                            <li>
                                <i class="fa-li fa fa-check"></i>
                                Single Page Web Application</li>
                            <li>
                                <i class="fa-li fa fa-check"></i>
                                Laravel Api</li>
                            <li>
                                <i class="fa-li fa fa-check"></i>
                                Laravel Website</li>
                        </ul>
                    </div>
                </section>



                <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
                    <div class="my-auto">
                        <h2 class="mb-5">Certifications</h2>
                        <ul class="fa-ul mb-0">
                            <li>
                                <i class="fa-li fa fa-trophy text-warning"></i>
                                Web Design - BITM,2017</li>
                        </ul>
                    </div>
                </section>

            </div>

            </div>





    );
};

export default Index;