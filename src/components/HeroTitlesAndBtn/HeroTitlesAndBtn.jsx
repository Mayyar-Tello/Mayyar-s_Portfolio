
const HeroTitlesAndBtn = ({ title , description , btn , img , imgDesc }) => {
    return (
        <>
            <h1><span>HEY!</span> {title}</h1>
            <p>{description}</p>
            <a href="/MYCV.pdf" download="MYCV">
                <button>{btn}</button>
            </a>
            <img src={img} alt={imgDesc} />
        </>
    );
};

export default HeroTitlesAndBtn