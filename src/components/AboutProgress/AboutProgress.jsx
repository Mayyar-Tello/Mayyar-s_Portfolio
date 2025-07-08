
const AboutProgress = ({firstExperienceTitle , firstExperienceSecondColor , firstExperiencePrecentage , secondExperienceTitle , secondExperienceSecondColor , secondExperiencePrecentage , thirdExperienceTitle , thirdExperienceSecondColor , thirdExperiencePrecentage , fourthExperienceTitle , fourthExperienceSecondColor , fourthExperiencePrecentage , ExperienceFirstColor , ExperiencePrecentageCircle}) => {
    return (
        <>
            <div className="firstExperience">
                <h2>{firstExperienceTitle}</h2>
                <img src={ExperienceFirstColor} className="greyStyle"/>
                <img src={firstExperienceSecondColor} className="firstExperienceSecondColor"/>
                <img src={ExperiencePrecentageCircle} className="firstExperiencePrecentageCircle"/>
                <img src={firstExperiencePrecentage} className="firstExperiencePrecentage"/>
            </div>
            <div className="secondExperience">
                <h2>{secondExperienceTitle}</h2>
                <img src={ExperienceFirstColor} className="greyStyle"/>
                <img src={secondExperienceSecondColor} className="secondExperienceSecondColor"/>
                <img src={ExperiencePrecentageCircle} className="secondExperiencePrecentageCircle"/>
                <img src={secondExperiencePrecentage} className="secondExperiencePrecentage"/>
            </div>
            <div className="thirdExperience">
                <h2>{thirdExperienceTitle}</h2>
                <img src={ExperienceFirstColor} className="greyStyle"/>
                <img src={thirdExperienceSecondColor} className="thirdExperienceSecondColor"/>
                <img src={ExperiencePrecentageCircle} className="thirdExperiencePrecentageCircle"/>
                <img src={thirdExperiencePrecentage} className="thirdExperiencePrecentage"/>
            </div>
            <div className="fourthExperience">
                <h2>{fourthExperienceTitle}</h2>
                <img src={ExperienceFirstColor} className="greyStyle"/>
                <img src={fourthExperienceSecondColor} className="fourthExperienceSecondColor"/>
                <img src={ExperiencePrecentageCircle} className="fourthExperiencePrecentageCircle"/>
                <img src={fourthExperiencePrecentage} className="fourthExperiencePrecentage"/>
            </div>
        </>
    )
}

export default AboutProgress