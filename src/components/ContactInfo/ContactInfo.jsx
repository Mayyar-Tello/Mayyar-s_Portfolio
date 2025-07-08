
const ContactInfo = ({icon , sideTitle , info}) => {
    return (
        <>
            <div className="cards">
                <button>{icon}</button>
                <div className="info">
                    <h5>{sideTitle}</h5>
                    <p>{info}</p>
                </div>
            </div>
        </>
    )
}

export default ContactInfo