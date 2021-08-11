import React from 'react';
import BasicPageStyles from '../styles/BasicPageStyles';
import styled from 'styled-components';

const ContactPageStyles = styled.div`
    border: 2px solid black;
    text-align: center;
    width: 50vw;
    height: 65vh;
    background-color: rgba(226, 226, 226, 0.5);
    border-radius: 5px;
    margin: auto;
    margin-top: 15px;
    min-height: 390px;
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
        width: 45vw;
    }
    label:nth-child(3) {
        padding-top: 35px;
        /* background-color: blue; */
    }
    textarea {
        border-radius: 5px;
        padding-top: 50px;
        width: 45vw;
        border-width: 2px;
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
                            <input required placeholder="Name" type="text" name="name" id="name" />
                        </label>
                        <label>
                            <input required placeholder="Email" type="email" name="email" id="email" />
                        </label>
                        {/* <label>
                            <input placeholder="Just wanting to connect?" type="text" name="subject" id="subject" />
                        </label> */}
                        <label>
                            <textarea required name="message" id="message" rows="5" placeholder="Contact me"></textarea>
                        </label>
                        <button className="submit-button" type="submit">Send</button>
                        <input className="reset" type="reset" value="Reset" />
                    </form>
                </div>
            </ContactPageStyles>            
        </BasicPageStyles>
    )
}
