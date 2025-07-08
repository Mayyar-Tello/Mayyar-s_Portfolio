import HeroImages from '../HeroImages/HeroImages'
import HeroTitlesAndBtn from '../HeroTitlesAndBtn/HeroTitlesAndBtn'
import './Hero.css'
import lines from '../../assets/img/lines.png'

const Hero = ({heroTitlesAndBtn , heroImages}) => {
    return (
        <div id="hero">
            <img src={lines} alt="lines" className='lines' />
            {heroTitlesAndBtn?.map((item , index)=>(
                <div key={index} className="heroTitlesAndBtn">
                    <HeroTitlesAndBtn
                        title={item.title}
                        description={item.description}
                        btn={item.btn}
                        imgDesc={item.imgDesc}
                    />
                </div>
            ))}
                <div className="heroImg" >
                    {heroImages?.map((item , index)=>(
                        <div  className='sectionImage' key={index}>
                            <HeroImages
                                circleImgDesc={item.circleImgDesc}
                                personalImgDesc={item.personalImgDesc}
                                squaresImgDesc={item.squaresImgDesc}
                            />
                        </div>
                    ))}
                </div>
        </div>
    )
}

export default Hero