import React from 'react';
import BasicPageStyles from '../styles/BasicPageStyles';
import styled from 'styled-components';

const ContactPageStyles = styled.div`
    .submit-button, .reset {
        color: var(--textColor);
        background-color: var(--navColor);
        border: 1px solid transparent;
        border-radius: 2px;
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
        opacity: 1;
        border-radius: 2px;
        border: 1px solid var(--navTextColor);
    }
`;


export default function ContactPage() {
    return (
        <BasicPageStyles>
            <ContactPageStyles>
                <form action="/success" method="POST" netlify-honeypot="bot-field" data-netlify="true" name="contact">
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />
                    <label>
                        Name
                        <input placeholder="What's your name?" type="text" name="name" id="name" />
                    </label>
                    <label>
                        Email
                        <input placeholder="Can I get your email too?" type="email" name="email" id="email" />
                    </label>
                    <label>
                        Subject
                        <input placeholder="Just wanting to connect?" type="text" name="subject" id="subject" />
                    </label>
                    <label>
                        Message
                        <textarea name="message" id="message" rows="5" placeholder="Send me a message"></textarea>
                    </label>
                    <button className="submit-button" type="submit">Send</button>
                    <input className="reset" type="reset" value="Whoopsy!" />
                </form>
            </ContactPageStyles>            
        </BasicPageStyles>
    )
}
