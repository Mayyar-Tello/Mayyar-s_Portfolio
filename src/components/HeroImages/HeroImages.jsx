import personalPhoto from '../../assets/img/personalPhoto.png';
import circle from'../../assets/img/circle.png';
import squares from'../../assets/img/squares.png';
const HeroImages = ({ circleImgDesc , personalImgDesc , squaresImgDesc }) => {
    return (
        <>
            <img src={circle} alt={circleImgDesc} className='circleImg' />
            <img src={personalPhoto} alt={personalImgDesc} className='personalImg' />
            <img src={squares} alt={squaresImgDesc} className='squaresImg' />
        </>
    )
}

export default HeroImages