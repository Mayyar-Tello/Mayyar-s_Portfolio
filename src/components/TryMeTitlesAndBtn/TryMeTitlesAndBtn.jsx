
const TryMeTitlesAndBtn = ({tryMeImg , mainTitle , desc , questionsDesc , btn , btnIcon}) => {
    return (
        <>
            <div className="tryMeContent">
                <img src={tryMeImg}/>
                <div className="tryMeTitlesAndBtn">
                    <div className="titles">
                        <h1>{mainTitle}</h1>
                        <span>{desc}</span><span className="questionDesc">{questionsDesc}</span>
                    </div>
                    <a href="#contact">
                        <button>{btn}{btnIcon}</button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default TryMeTitlesAndBtn