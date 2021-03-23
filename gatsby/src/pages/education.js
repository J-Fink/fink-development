import React from 'react';
import BasicPageStyles from '../styles/BasicPageStyles';

export default function EducationPage() {
    return (
        <BasicPageStyles>
            <section>
            This is about education!!
            <ul>
                <li>BA Philosophy - University of St. Thomas, St. Paul, MN</li>
                <li>The Web Developer Bootcamp - Instructor| Colt Steele</li>
                {/* <li>Master Gatsby| Wes Bos | <a href="https://mastergatsby.com/" rel="noreferrer" target="_blank"></a></li> */}
            </ul>
        </section>
        </BasicPageStyles>
    )
}