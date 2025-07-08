import './App.css'
import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import { BsMoonFill } from 'react-icons/bs'
import { FaArrowRight, FaBarsStaggered, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { GoArrowUpRight, GoMail } from 'react-icons/go'
import { LuCircleArrowOutUpRight, LuSun } from 'react-icons/lu'
import { HiOutlinePhone } from 'react-icons/hi'
import { GrLocation } from 'react-icons/gr'
import Footer from './pages/Footer'
import OpenProject from './pages/OpenProject'
import { useEffect } from 'react'
import educationImgDarkMode from './assets/img/educationImgDarkMode.png';
import educationImg from './assets/img/educationImg.png';
import educationalPlatform1 from './assets/img/educationalPlatform1.png';
import dashboardProject from './assets/img/dashboardProject.png';
import managePostsProject from './assets/img/managePostsProject.png';
import trainersBuyProject from './assets/img/trainersBuyProject.png';
import miniJSProject from './assets/img/miniJSProject.png';
import educationalPlatform2 from './assets/img/educationalPlatform2.png';

function App() {

  const [activeSection, setActiveSection] = useState('')
  const handleScroll = () => {
    const divs = document.querySelectorAll('div')
    let currentDiv = ''
    divs.forEach((div) => {
      const divTop = div.offsetTop;
      const divHeight = div.clientHeight;
      const scrollPosition = window.scrollY;
      if (scrollPosition >= divTop && scrollPosition < divTop + divHeight) {
        currentDiv = div.id
      }
    })
    setActiveSection(currentDiv)
  }
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
    return()=>{
      window.removeEventListener('scroll', handleScroll)
    }
  },[])

    const [darkMode , setDarkMode] = useState(false)
    const toggleDarkMode = () => {
      setDarkMode((prev) => !prev)
    }

    const [navPopup, setNavPopup] = useState(false)
    const handlePopup = () => {
      setNavPopup((prev) => !prev)
    }

  const navItems = [
    { href: '/',
      content: 'Home'
    },
    { href: 'aboutMe',
      content: 'About me'
    },
    { href: 'education',
      content: 'Education'
    },
    { href: 'projects',
      content: 'Projects'
    },
    { href: 'contact',
      content: 'Contact'
    }
  ]

  const navLogos = [
    {
      logo: darkMode 
        ? <LuSun className="sunIcon" onClick={toggleDarkMode} />
        : <BsMoonFill className="moonIcon" onClick={toggleDarkMode} />
    },
    {
      logo: <FaBarsStaggered className="barsIcon" onClick={handlePopup} />
    }
  ]

  const heroTitlesAndBtn = [
    {
      title : "I’m Mayyar, Frontend Developer",
      description : "Agency-quality Webflow websites with the personal touch of a freelancer.",
      btn : "Download Cv",
      imgDesc : "lines"
    }
  ]

  const heroImages = [
    {
      circleImgDesc : "circle"
    },
    {
      personalImgDesc : "personal"
    },
    {
      squaresImgDesc : "squares"
    }
  ]

  const aboutSideImg = [
    {
      sideImgDesc : "myExperiences"
    }
  ]

  const aboutTitles = [
    {
      mainTitle : "About Me ",
      aboutDesc : "Motivated and skilled Frontend Web Developer with a passion for creating user-friendly, visually appealing websites. Experienced in collaborating with teams and delivering high-quality projects on time."
    }
  ]

  const aboutProgress = [
    {
      firstExperienceTitle : "HTML5",
      secondExperienceTitle : "CSS3",
      thirdExperienceTitle : "Javascript",
      fourthExperienceTitle : "React"
    }
  ]

  const educationTitles = [
    {
      mainTitle : "Education and Experience",
      secondTitle : "Education & Experience",
    }
  ]

  const educationContent = [
    {
      myEducationImg : darkMode
      ?{educationImgDarkMode}
      :{educationImg},
      firstEducationTitle : "Computer Engineering",
      firstEducationDesc : "Automating assembly lines, quality checks, and production processes and Designing autonomous robots.",
      firstExperienceTitle : "Frontend Developer",
      firstExperienceDesc : "responsible for implementing the design and functionality of user interfaces. bridge the gap between the design and the backend logic.",
      secondExperienceTitle : "English Speaking",
      secondExperienceDesc : "Moderate proficiency, with practical experience in technical communication, collaborative teamwork, and ongoing skill development.",
      thirdExperienceTitle : "GitHub",
      thirdExperienceDesc : "Published personal and collaborative projects, showcasing skills in frontend development and version control."
    }
  ]

  const educationSideStyles = [
    {

    }
  ]
  
  const tryMetitlesAndBtn = [
    {
      mainTitle : "Try me out, risk free!",
      desc : "If you’re not happy with the design after the first draft, I’ll refund your deposit, ",
      questionsDesc : "no questions asked",
      btn : "Contact",
      btnIcon : <FaArrowRight />
    }
  ]

  const projectsTitlesAndBtn = [
    {
      mainTitle : "Portfolio",
      secondTitle : "My Creative Works Latest",
      secondTitleSpecial : "Projects",
      btn : "View Github",
      btnIcon : <GoArrowUpRight />
    }
  ]

  const projectsCards = [
    {
      id : "1",
      projectImg : {educationalPlatform1},
      title : "Educational Platform",
      desc : "Html-Css3-Vanilla javscript-React",
      icon : <LuCircleArrowOutUpRight />,
      demoUrl : "https://mayyar-tello.github.io/educational-Platform/"
    },
    {
      id : "2",
      projectImg : {dashboardProject},
      title : "Products Manage",
      desc : "Html-Css3-Vanilla javscript-React",
      icon : <LuCircleArrowOutUpRight />,
      demoUrl : "https://mayyar-tello.github.io/Products-Manage/"
    },
    {
      id : "3",
      projectImg : {managePostsProject},
      title : "Posts Manage",
      desc : "Html-Css3-Vanilla javscript",
      icon : <LuCircleArrowOutUpRight />,
      demoUrl : "https://mayyar-tello.github.io/Posts-Manage/"
    },
    {
      id : "4",
      projectImg : {trainersBuyProject},
      title : "Trainers Buy",
      desc : "Html-Css3-Vanilla javscript",
      icon : <LuCircleArrowOutUpRight />,
      demoUrl : "https://mayyar-tello.github.io/Buy-Trainers/"
    },
    {
      id : "5",
      projectImg : {miniJSProject},
      title : "Demo JS Project",
      desc : "Html-Css3-Vanilla javscript",
      icon : <LuCircleArrowOutUpRight />,
      demoUrl : "https://mayyar-tello.github.io/Demo-JS-Project/"
    },
    {
      id : "6",
      projectImg : {educationalPlatform2},
      title : "Educational Platform",
      desc : "Html-Css3",
      icon : <LuCircleArrowOutUpRight />,
      demoUrl : "https://mayyar-tello.github.io/Edupress/"
    }
  ]

  const contactTitles = [
    {
      mainTitle : "Contact",
      secondTitle : "Let’s Discuss Your",
      secondTitleSpecial : "Project"
    }
  ]

  const contactInfo = [
    {
      icon : <HiOutlinePhone />,
      sideTitle : "Call me",
      info : "+963993802283"
    },
    {
      icon : <GoMail />,
      sideTitle : "Email me",
      info : "mayyarm2004@gmail.com"
    },
    {
      icon : <GrLocation />,
      sideTitle : "Address",
      info : "Damascus,syria"
    }
  ]

  const contactInputs = [
    {
      nameinputType : "name",
      nameinputDesc : "Full name",
      emailinputType : "email",
      emailinputDesc : "Your email",
      phoneinputType : "text",
      phoneinputDesc : "Phone number",
      messageinputType : "text",
      messageinputDesc : "Message",
      btn : "Send Message"
    }
  ]

  const footerContent = [
    {
      rightsYear : "@ 2025. All Rights Reserved",
      developer : "Develpoment by Mayyar",
      facebookIcon : <FaFacebookF />,
      linkedinIcon : <FaLinkedinIn />,
      instaIcon : <FaInstagram />
    }
  ]

  return (
    <>
      <div className={darkMode?"darkMode":""}>
        <NavBar name="Mayyar" navItems={navItems} navLogos={navLogos} navPopup={navPopup} handlePopup={handlePopup}/>
        <Routes>
          <Route
            path='/'
            element={
              <Home
                heroTitlesAndBtn={heroTitlesAndBtn}
                heroImages={heroImages}
                aboutSideImg={aboutSideImg}
                aboutTitles={aboutTitles}
                aboutProgress={aboutProgress}
                educationTitles={educationTitles}
                educationContent={educationContent}
                educationSideStyles={educationSideStyles}
                tryMetitlesAndBtn={tryMetitlesAndBtn}
                projectsTitlesAndBtn={projectsTitlesAndBtn}
                projectsCards={projectsCards}
                contactTitles={contactTitles}
                contactInfo={contactInfo}
                contactInputs={contactInputs}
              />
            }
          />
          <Route path='/project/:id'element={<OpenProject/>}/>
        </Routes>
        <Footer footerContent={footerContent}/>
      </div>
    </>
  )
}

export default App