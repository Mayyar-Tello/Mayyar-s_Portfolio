
const ContactInputs = ({nameinputType , nameinputDesc , emailinputType , emailinputDesc , phoneinputType , phoneinputDesc , messageinputType , messageinputDesc , btn}) => {
    return (
        <>
            <div className="inputs">
                <input type={nameinputType} placeholder={nameinputDesc} className="name" />
                <input type={emailinputType} placeholder={emailinputDesc} className="email" />
                <input type={phoneinputType} placeholder={phoneinputDesc} className="phone" />
                <input type={messageinputType} placeholder={messageinputDesc} className="message" />
                <button>{btn}</button>
            </div>
        </>
    )
}

export default ContactInputs