
const EducationContent = ({myEducationImg , firstEducationTitle , firstEducationDesc , firstExperienceTitle , firstExperienceDesc , secondExperienceTitle , secondExperienceDesc , thirdExperienceTitle , thirdExperienceDesc}) => {
    return (
        <>
            <div className="firstViewContent">
                <img src={myEducationImg}/>
                <div className="firstView">
                    <h3>{firstEducationTitle}</h3>
                    <p className="descStyle">{firstEducationDesc}</p>
                    <h3>{firstExperienceTitle}</h3>
                    <p>{firstExperienceDesc}</p>
                </div>
            </div>
            <div className="secondViewContent">
                <img src={myEducationImg}/>
                <div className="secondView">
                    <h3>{secondExperienceTitle}</h3>
                    <p className="descStyle">{secondExperienceDesc}</p>
                    <h3>{thirdExperienceTitle}</h3>
                    <p>{thirdExperienceDesc}</p>
                </div>
            </div>
        </>
    )
}

export default EducationContent