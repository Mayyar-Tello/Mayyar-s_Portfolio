import experiences from '../../assets/img/experiences.png';

const AboutSideImg = ({sideImgDesc}) => {
    return (
        <>
            <img src={experiences} alt={sideImgDesc} className='aboutSideImg'/>
        </>
    )
}

export default AboutSideImg