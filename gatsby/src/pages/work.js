import React from 'react';
import BasicPageStyles from '../styles/BasicPageStyles';
import SEO from '../components/SEO';
export default function WorkPage() {
    return (
        <>
        <SEO title={`work page`} />
        <BasicPageStyles>
            <section>
                I have worked at the Cathedral of Saint Paul in St. Paul, MN since 2012! <br />
                Currently I have the title of Lead Maintenance/Facility Coordinator. <br />
                What do I do? <br />
                <ol>
                    <li>
                        Defacto Tech Guy
                        <ol>
                            <li>Maintain a Drupal 7 Website</li>
                            <li>Smoothly integrate Facebook Live events into the Cathedral Website</li>
                        </ol>
                    </li>
                    <li>Manage the Cathedral's event calendar and Maintenance Staff schedule</li>
                    <li>We're in MN and a church, so I move snow when it snows and help run the boiler!</li>
                </ol>
            </section>
        </BasicPageStyles>
        </>
    )
}