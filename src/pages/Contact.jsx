import ContactInfo from '../components/ContactInfo/ContactInfo'
import ContactInputs from '../components/ContactInputs/ContactInputs'
import ContactTitles from '../components/ContactTitles/ContactTitles'
import './Contact.css'

const Contact = ({contactTitles , contactInfo , contactInputs}) => {
    return (
        <div id='contact'>
            <div className="contactTitles">
                {contactTitles.map((item , index)=>(
                    <ContactTitles
                        key={index}
                        mainTitle={item.mainTitle}
                        secondTitle={item.secondTitle}
                        secondTitleSpecial={item.secondTitleSpecial}
                    />
                ))}
            </div>
            <div className="contactContent">
                <div className="contactInfo">
                    {contactInfo.map((item , index)=>(
                        <ContactInfo
                            key={index}
                            icon={item.icon}
                            sideTitle={item.sideTitle}
                            info={item.info}
                        />
                    ))}
                </div>
                <div className="contactInputs">
                    {contactInputs.map((item , index)=>(
                        <ContactInputs
                            key={index}
                            nameinputType={item.nameinputType}
                            nameinputDesc={item.nameinputDesc}
                            emailinputType={item.emailinputType}
                            emailinputDesc={item.emailinputDesc}
                            phoneinputType={item.phoneinputType}
                            phoneinputDesc={item.phoneinputDesc}
                            messageinputType={item.messageinputType}
                            messageinputDesc={item.messageinputDesc}
                            btn={item.btn}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Contact