import bgcolor from '../../assets/img/bgcolor.png'
const HeroTitlesAndBtn = ({ title , description , btn , imgDesc }) => {
    return (
        <>
            <h1><span>HEY!</span> {title}</h1>
            <p>{description}</p>
            <a href="/MYCV.pdf" download="MYCV">
                <button>{btn}</button>
            </a>
            <img src={bgcolor} alt={imgDesc} />
        </>
    );
};

export default HeroTitlesAndBtn