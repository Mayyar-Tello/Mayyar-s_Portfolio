import HeroImages from '../HeroImages/HeroImages'
import HeroTitlesAndBtn from '../HeroTitlesAndBtn/HeroTitlesAndBtn'
import './Hero.css'

const Hero = ({heroTitlesAndBtn , heroImages}) => {
    return (
        <div id="hero">
            <img src="./src/assets/img/lines.png" alt="lines" className='lines' />
            {heroTitlesAndBtn?.map((item , index)=>(
                <div key={index} className="heroTitlesAndBtn">
                    <HeroTitlesAndBtn
                        title={item.title}
                        description={item.description}
                        btn={item.btn}
                        img={item.img}
                        imgDesc={item.imgDesc}
                    />
                </div>
            ))}
                <div className="heroImg" >
                    {heroImages?.map((item , index)=>(
                        <div  className='sectionImage' key={index}>
                            <HeroImages
                                circleImg={item.circleImg}
                                circleImgDesc={item.circleImgDesc}
                                personalImgDesc={item.personalImgDesc}
                                squaresImg={item.squaresImg}
                                squaresImgDesc={item.squaresImgDesc}
                            />
                        </div>
                    ))}
                </div>
        </div>
    )
}

export default Hero