import { Element } from "react-scroll"
import Hero from '../components/Hero/Hero'
import About from "./About"
import Education from "./Education"
import TryMe from "./TryMe"
import Projects from "./Projects"
import Contact from "./Contact"

const Home = ({ heroTitlesAndBtn , heroImages , aboutSideImg , aboutTitles , aboutProgress , educationTitles , educationContent , educationSideStyles , tryMetitlesAndBtn , projectsTitlesAndBtn , projectsCards , contactTitles , contactInfo , contactInputs}) => {
    return (
        <div>
            <Element name="/">
                <Hero heroTitlesAndBtn={heroTitlesAndBtn} heroImages={heroImages} />
            </Element>
            <Element name="aboutMe">
                <About aboutSideImg={aboutSideImg} aboutTitles={aboutTitles} aboutProgress={aboutProgress} />
            </Element>
            <Element name="education">
                <Education educationTitles={educationTitles} educationContent={educationContent} educationSideStyles={educationSideStyles} />
            </Element>
            <TryMe tryMetitlesAndBtn={tryMetitlesAndBtn} />
            <Element name="projects">
                <Projects projectsTitlesAndBtn={projectsTitlesAndBtn} projectsCards={projectsCards} />
            </Element>
            <Element name="contact">
                <Contact contactTitles={contactTitles} contactInfo={contactInfo} contactInputs={contactInputs} />
            </Element>
        </div>
    );
};

export default Home