import TryMeTitlesAndBtn from '../components/TryMeTitlesAndBtn/TryMeTitlesAndBtn'
import './TryME.css'

const TryMe = ({tryMetitlesAndBtn}) => {
    return (
        <div className='tryMe'>
            {tryMetitlesAndBtn.map((item , index)=>(
                <TryMeTitlesAndBtn
                    key={index}
                    tryMeImg={item.tryMeImg}
                    mainTitle={item.mainTitle}
                    desc={item.desc}
                    questionsDesc={item.questionsDesc}
                    btn={item.btn}
                    btnIcon={item.btnIcon}
                />
            ))}
        </div>
    )
}

export default TryMe