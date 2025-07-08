
const HeroImages = ({ circleImg , circleImgDesc , personalImg , personalImgDesc , squaresImg , squaresImgDesc }) => {
    return (
        <>
            <img src={circleImg} alt={circleImgDesc} className='circleImg' />
            <img src={personalImg} alt={personalImgDesc} className='personalImg' />
            <img src={squaresImg} alt={squaresImgDesc} className='squaresImg' />
        </>
    )
}

export default HeroImages