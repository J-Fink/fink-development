import styled from 'styled-components';

const BasicPageStyles = styled.div`
    margin-top: var(--header-height);
    font-size: var(--nav-font-size);
    text-align: center;
    ul {
        width: 30%;
        margin: auto;
    }
    @media (max-width: 768px) {
        /* margin-top: 0; */
    }
`;
export default BasicPageStyles;