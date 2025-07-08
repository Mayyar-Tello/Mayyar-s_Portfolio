import personalPhoto from '../../assets/img/personalPhoto.png';
const HeroImages = ({ circleImg , circleImgDesc , personalImgDesc , squaresImg , squaresImgDesc }) => {
    return (
        <>
            <img src={circleImg} alt={circleImgDesc} className='circleImg' />
            <img src={personalPhoto} alt={personalImgDesc} className='personalImg' />
            <img src={squaresImg} alt={squaresImgDesc} className='squaresImg' />
        </>
    )
}

export default HeroImages