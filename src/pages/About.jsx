import './About.css'
import AboutSideImg from "../components/AboutSideImg/AboutSideImg"
import AboutTitles from "../components/AboutTitles/AboutTitles"
import AboutProgress from '../components/AboutProgress/AboutProgress'

const About = ({ aboutSideImg , aboutTitles , aboutProgress }) => {
    return (
        <div id="about">
            {aboutSideImg?.map((item , index) => (
                <AboutSideImg
                    key={index}
                    sideImgLink={item.sideImgLink}
                    sideImgDesc={item.sideImgDesc}
                />
            ))}
            <div className="aboutTitlesAndPhotos">
                <div className="aboutTitles">
                    {aboutTitles?.map((item , index)=>(
                        <AboutTitles
                            key={index}
                            mainTitle={item.mainTitle}
                            aboutDesc={item.aboutDesc}
                        />
                    ))}
                </div>
                <div className="aboutProgress">
                    {aboutProgress?.map((item , index)=>(
                        <AboutProgress
                            key={index}
                            firstExperienceTitle={item.firstExperienceTitle}
                            firstExperienceSecondColor={item.firstExperienceSecondColor}
                            firstExperiencePrecentage={item.firstExperiencePrecentage}
                            secondExperienceTitle={item.secondExperienceTitle}
                            secondExperienceSecondColor={item.secondExperienceSecondColor}
                            secondExperiencePrecentage={item.secondExperiencePrecentage}
                            thirdExperienceTitle={item.thirdExperienceTitle}
                            thirdExperienceSecondColor={item.thirdExperienceSecondColor}
                            thirdExperiencePrecentage={item.thirdExperiencePrecentage}
                            fourthExperienceTitle={item.fourthExperienceTitle}
                            fourthExperienceSecondColor={item.fourthExperienceSecondColor}
                            fourthExperiencePrecentage={item.fourthExperiencePrecentage}
                            ExperienceFirstColor={item.ExperienceFirstColor}
                            ExperiencePrecentageCircle={item.ExperiencePrecentageCircle}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About