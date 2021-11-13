import React from 'react';
import styled from 'styled-components';
import { BiLinkExternal } from 'react-icons/bi';

const ViewOutsideContentStyles = styled.div`
    
        box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 3px;
        background-color: var(--postTitleColor);
        height: 3.75vh;
        line-height: 3.75vh;
        width: fit-content;
        margin: 12.5px auto;
        padding: 0 20px;
        font-size: 12px;
        transform: skew(var(--postTitleSkew));
        svg {
            position: absolute;
            bottom: 1px;
            right: -22px;
            transform: skew(calc(-1 * var(--postTitleSkew)));
        }
        span {
            display: inline-block;
            transform: skew(calc(-1 * var(--postTitleSkew)));
            position: relative;
        }
        a {
            text-decoration: none;
            color: var(--navTextColor);
            display: inline-block;
            white-space: nowrap;
            margin: 0 1vw;
            position: relative;
            /* background-color: purple; */
            :after {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            width: 0%;
            content: "";
            color: transparent;
            background: var(--navTextHoverColor);
            height: 3px;
            transition: all 0.25s ease-in-out;
        }
            :hover {
                /* color: var(--navTextHoverColor); */
                ::after {
                    width: var(--navUnderlineWidth);
                }
            }
}
`;
export default function ViewOutsideContent({ message, href, rel, target }) {
    return (
        <ViewOutsideContentStyles>
            <a href={href} rel={rel} target={target}>
                <span>{message}</span>
                <BiLinkExternal size="15" /> 
            </a>
        </ViewOutsideContentStyles>
    )
};