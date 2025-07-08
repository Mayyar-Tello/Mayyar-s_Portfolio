
const ProjectsTitlesAndBtn = ({mainTitle , secondTitle , secondTitleSpecial , btn , btnIcon}) => {
    return (
        <>
            <div className="projectsTitlesAndBtn">
                <div className="titles">
                    <h2>{mainTitle}</h2>
                    <h1>{secondTitle} <span>{secondTitleSpecial}</span></h1>
                </div>
                <a href="https://github.com/Mayyar-Tello">
                    <button>{btn}{btnIcon}</button>
                </a>
            </div>
        </>
    )
}

export default ProjectsTitlesAndBtn