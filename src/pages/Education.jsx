import './Education.css'
import EducationTitles from '../components/EducationTitles/EducationTitles'
import EducationContent from '../components/EducationContent/EducationContent'
import EducationSideStyles from '../components/EducationSideStyles/EducationSideStyles'
import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa6'

const Education = ({ educationTitles, educationContent, educationSideStyles }) => {
    const [showButton, setShowButton] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const educationSection = document.getElementById('education')
            const sectionTop = educationSection?.getBoundingClientRect().top
            const sectionBottom = educationSection?.getBoundingClientRect().bottom
            if (sectionTop <= window.innerHeight / 2 && sectionBottom >= 0) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
    } , [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div id="education">
            <div className="educationTitles">
                {educationTitles.map((item, index) => (
                    <EducationTitles
                        key={index}
                        mainTitle={item.mainTitle}
                        secondTitle={item.secondTitle}
                    />
                ))}
            </div>
            <div className="educationContent">
                {educationContent.map((item, index) => (
                    <EducationContent
                    key={index}
                    myEducationImg={item.myEducationImg}
                    firstEducationTitle={item.firstEducationTitle}
                    firstEducationDesc={item.firstEducationDesc}
                    firstExperienceTitle={item.firstExperienceTitle}
                    firstExperienceDesc={item.firstExperienceDesc}
                    secondExperienceTitle={item.secondExperienceTitle}
                    secondExperienceDesc={item.secondExperienceDesc}
                    thirdExperienceTitle={item.thirdExperienceTitle}
                    thirdExperienceDesc={item.thirdExperienceDesc}
                    />
                ))}
            </div>
            <div className="educationSideStyles">
                {educationSideStyles.map((item, index) => (
                    <EducationSideStyles
                    key={index}
                    circlesAndSquaresFirstStyle={item.circlesAndSquaresFirstStyle}
                    circlesAndSquaresSecondStyle={item.circlesAndSquaresSecondStyle}
                    />
                ))}
            </div>
            <div className="scrollBtn">
                {showButton && (
                    <button onClick={scrollToTop}>
                        <FaArrowUp />
                    </button>
                )}
            </div>
        </div>
    )
}

export default Education