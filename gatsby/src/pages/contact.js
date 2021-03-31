import React from 'react';
import BasicPageStyles from '../styles/BasicPageStyles';
import styled from 'styled-components';

const ContactPageStyles = styled.div`
    text-align: center;
    width: 50vw;
    height: 50vh;
    background-color: rgba(226, 226, 226, 0.5);
    border-radius: 5px;
    margin: auto;
    .container {
        text-align: center;
    }
    form {
        margin-top: 15px;
    }
    .submit-button, .reset {
        color: var(--textColor);
        background-color: var(--navColor);
        border: 1px solid transparent;
        border-radius: 5px;
        padding: 0.6rem 1rem;
        margin: 5px;
        cursor: pointer;
        text-shadow: rgb(0 0 0 / 20%) 0.5px 0.5px 0px;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        box-shadow: 0px 8px 15px var(--buttonBoxShadowColor);
        transition: all 0.2s ease 0s;
        /* opacity: 0.85; */
    }
    .submit-button:hover, .reset:hover {
        border-radius: 5px;
        border: 1px solid var(--navTextColor);
    }
    label {
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
        text-align: center;
    }
    label input {
        border-radius: 5px;
        height: 25px;
        width: 30vw;
    }
    label:nth-child(3) {
        padding-top: 35px;
        /* background-color: blue; */
    }
    textarea {
        padding-top: 50px;
    }
`;


export default function ContactPage() {
    return (
        <BasicPageStyles>
            <ContactPageStyles>
                <h1>CONTACT ME</h1>
                <div className="container">
                    <form action="/success" method="POST" netlify-honeypot="bot-field" data-netlify="true" name="contact">
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" value="contact" />
                        <label>
                            <input required placeholder="What's your name?" type="text" name="name" id="name" />
                        </label>
                        <label>
                            <input required placeholder="Can I get your email too?" type="email" name="email" id="email" />
                        </label>
                        {/* <label>
                            <input placeholder="Just wanting to connect?" type="text" name="subject" id="subject" />
                        </label> */}
                        <label>
                            <textarea required name="message" id="message" rows="5" placeholder="Send me a message"></textarea>
                        </label>
                        <button className="submit-button" type="submit">Send</button>
                        <input className="reset" type="reset" value="Whoopsy!" />
                    </form>
                </div>
            </ContactPageStyles>            
        </BasicPageStyles>
    )
}
