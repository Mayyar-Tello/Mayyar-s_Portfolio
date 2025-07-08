import HTML5AndReactBlueStyle from '../../assets/img/HTML5AndReactBlueStyle.png';
import HTML5AndReactPrecentage from '../../assets/img/HTML5AndReactPrecentage.png';
import CSS3BlueStyle from '../../assets/img/CSS3BlueStyle.png';
import CSS3Precentage from '../../assets/img/CSS3Precentage.png';
import JavascriptBlueStyle from '../../assets/img/JavascriptBlueStyle.png';
import JavascriptPrecentage from '../../assets/img/JavascriptPrecentage.png';
import greyProgressStyle from '../../assets/img/greyProgressStyle.png';
import precentageCircle from '../../assets/img/precentageCircle.png';

const AboutProgress = ({firstExperienceTitle , secondExperienceTitle , thirdExperienceTitle , fourthExperienceTitle}) => {
    return (
        <>
            <div className="firstExperience">
                <h2>{firstExperienceTitle}</h2>
                <img src={greyProgressStyle} className="greyStyle"/>
                <img src={HTML5AndReactBlueStyle} className="firstExperienceSecondColor"/>
                <img src={precentageCircle} className="firstExperiencePrecentageCircle"/>
                <img src={HTML5AndReactPrecentage} className="firstExperiencePrecentage"/>
            </div>
            <div className="secondExperience">
                <h2>{secondExperienceTitle}</h2>
                <img src={greyProgressStyle} className="greyStyle"/>
                <img src={CSS3BlueStyle} className="secondExperienceSecondColor"/>
                <img src={precentageCircle} className="secondExperiencePrecentageCircle"/>
                <img src={CSS3Precentage} className="secondExperiencePrecentage"/>
            </div>
            <div className="thirdExperience">
                <h2>{thirdExperienceTitle}</h2>
                <img src={greyProgressStyle} className="greyStyle"/>
                <img src={JavascriptBlueStyle} className="thirdExperienceSecondColor"/>
                <img src={precentageCircle} className="thirdExperiencePrecentageCircle"/>
                <img src={JavascriptPrecentage} className="thirdExperiencePrecentage"/>
            </div>
            <div className="fourthExperience">
                <h2>{fourthExperienceTitle}</h2>
                <img src={greyProgressStyle} className="greyStyle"/>
                <img src={HTML5AndReactBlueStyle} className="fourthExperienceSecondColor"/>
                <img src={precentageCircle} className="fourthExperiencePrecentageCircle"/>
                <img src={HTML5AndReactPrecentage} className="fourthExperiencePrecentage"/>
            </div>
        </>
    )
}

export default AboutProgress