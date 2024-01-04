import { useState } from "react";
import { ICONS, IMAGES } from "../../assets"
import { Button, HeroTitle } from "../../components"
import './contactPage.css'
import toast, { Toaster } from "react-hot-toast";

let url = import.meta.env.VITE_GOOGLE_SCRIPT_URL;


const validate = {
    email: (value) => {
        const REX = /\S+@\S+\.\S+/;
        return REX.test(value);
    },

    name: (value) => {
        return value.length > 3;
    },

    phoneNumber: (value) => {
        const REX = /^[7-9]\d{9}$/; // This regex checks for a 10 digit number starting with 7, 8, or 9
        return REX.test(value);
    },

    timeToCall: (value) => {
        const REX = /^([01]?[0-9]|2[0-3])(:[0-5][0-9])?$/; // This regex checks for a time in 24-hour format
        return REX.test(value);
    },
};

const changeValue = (value) => {
    let [hours, minutes] = value.split(':');

    if (hours.length === 1) {
        hours = '0' + hours;
    }

    if (!minutes || minutes.length === 0) {
        minutes = '00';
    } else if (minutes.length === 1) {
        minutes = '0' + minutes;
    }

    return `${hours}:${minutes}`;
}


const ContactPage = () => {

    const initialFormData = {
        email: '',
        name: '',
        phoneNumber: '',
        timeToCall: ''
    };

    // Component states for form data, errors and focus 
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState(initialFormData);
    const [focus, setFocus] = useState(initialFormData);


    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: value !== '' ? !validate[name](value) : false
        }));

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

    };

    const handleFocus = (e) => {
        const { name } = e.target;
        setFocus(prevFocus => ({
            ...prevFocus,
            [name]: true
        }));
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setFocus(prevFocus => ({
            ...prevFocus,
            [name]: false
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        let message = '';
        let submit = true;


        Object.keys(formData).forEach((key) => {
            if (formData[key] == '') {
                message = 'Please fill out all fields'
                submit = false;
            }
        })

        Object.keys(errors).forEach((key) => {
            if (errors[key] == true) {
                message += 'Please fill out all fields in Correct Format  '
                submit = false;
            }
        })

        if (submit) {
            setFormData(prevState => ({
                ...prevState,
                'timeToCall': changeValue(formData.timeToCall)
            }));

            let dataUrl = `?email=${formData.email}&name=${formData.name}&phoneNumber=${formData.phoneNumber}&timeToCall=${formData.timeToCall}`

            // reset form data
            setFormData(initialFormData);
            setErrors(initialFormData);

            fetch(url+dataUrl, {
                method: 'GET',
                content : 'application/text'

            }).then(res => {
                return res.text()
            }).then(data => {
                if (data === 'success') {
                    toast.success('Message Sent Successfully')
                } else {
                    toast.error('Message Not Sent')
                }
            }).catch(err => {
                toast.error(err)
            })
        } else {
            toast.error(message)
        }
    }




    return (
        <div id="contactUsPage">

            <div id="contactHeroTitle" >
                <HeroTitle
                    logo={ICONS.wave}
                    color1="var(--dark)"
                    color2="var(--primary)"
                    subtitle="Let us know how we can help."
                    title={{
                        emphasize: 'Contact our ',
                        remaining: 'Friendly Team.'
                    }}
                />

                
            </div>

            <div id="contactUsPageContent">
                <div id="formContainer">

                    <form onSubmit={handleSubmit}>

                        <div id="inputs">

                            <div className="leftContainer">

                                <div className="inputContainer">
                                    <p className="error">
                                        {!focus.email && errors.email ? 'Email Invalid' : ''}
                                    </p>


                                    <label htmlFor="email">
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            onFocus={handleFocus}
                                            onBlur={handleBlur} />
                                    </label>
                                </div>

                                <div className="inputContainer">
                                    <p className="error">
                                        {!focus.name && errors.name ? 'Name Invalid' : ''}
                                    </p>


                                    <label htmlFor="name">
                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            onFocus={handleFocus}
                                            onBlur={handleBlur} />
                                    </label>
                                </div>

                            </div>

                            <div className="rightContainer">

                                <div className="inputContainer">
                                    <p className="error">
                                        {!focus.phoneNumber && errors.phoneNumber ? 'Phone Number Invalid' : ''}
                                    </p>

                                    <label htmlFor="number">
                                        <input
                                            id="number"
                                            type="tel"
                                            name="phoneNumber"
                                            placeholder="Phone Number"
                                            value={formData.phoneNumber}
                                            onChange={handleInputChange}
                                            onFocus={handleFocus}
                                            onBlur={handleBlur} />
                                    </label>
                                </div>

                                <div className="inputContainer">
                                    <p className="error">
                                        {!focus.timeToCall && errors.timeToCall ? 'Time Invalid' : ''}
                                    </p>

                                    <label htmlFor="time">
                                        <input
                                            id="time"
                                            type="text"
                                            name="timeToCall"
                                            placeholder="Good Time to Call [24-hour format]"
                                            value={formData.timeToCall}
                                            onChange={handleInputChange}
                                            onFocus={handleFocus}
                                            onBlur={handleBlur} />
                                    </label>
                                </div>

                            </div>

                        </div>

                        <div className="center submitBtn" >
                            <Button text="Submit" type="submit" />
                        </div>

                    </form>

                    <p>Someone will be in touch very soon </p>

                </div>
            </div>

            <Toaster
                position="top-center"
                reverseOrder={false}
             />



            {/* <div id= "imgContainer" >
                <img src={IMAGES.contact_us_1} alt="" id="contactUsImg" />
            </div> */}



        </div>
    )
}

export default ContactPage