import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeaderContent";
import { Animate } from "react-simple-animate";
import './styles.scss';
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
    { label: "Name: ", value: "Varsha S Kundur", },
    { label: "Age: ", value: "21", },
    { label: "Location: ", value: "Bangalore, India", },
    { label: "Email ID: ", value: "varshaskundur@gmail.com", },
    { label: "Contact No.: ", value: "+91 8618438523", },
];
const jobSummary = " An Electronics and Communication Engineering student passionate about building impactful tech solutions. From robotics systems to IoT-powered applications and photonics-based innovations, I bring ideas to life with precision, creativity, and a strong focus on problem-solving. I’m always eager to take on new challenges, write clean code, and contribute meaningfully to product-driven teams.";

const About = () => {
    return (
        <section id='about' className="about">
            <PageHeaderContent
                headerText="ABOUT ME"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1.2}
                        delay={0}
                        start={{
                            transform: 'translateX(-900px)'
                        }}

                        end={{
                            transform: 'translateX(0px)'
                        }}
                    >
                        <h3>What am I?</h3>
                        <p>{jobSummary}</p>
                    </Animate>


                    <Animate
                        play
                        duration={1.5}
                        delay={0}
                        start={{
                            transform: 'translateX(500px)'
                        }}

                        end={{
                            transform: 'translateX(0px)'
                        }}
                    >

                        <h3 className="personalInformationHeaderText">Personal Information</h3>
                        <ul>
                            {
                                personalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>
                <div className="about__content__servicesWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={0}
                        start={{
                            transform: 'translateX(600px)'
                        }}

                        end={{
                            transform: 'translateX(0px)'
                        }}
                    >
                        <div className="about__content__servicesWrapper__innerContent">
                            <div>
                                <FaDev size={60} color="white" />
                            </div>
                            <div>
                                <DiAndroid size={60} color="white" />
                            </div>
                            <div>
                                <FaDatabase size={60} color="white" />
                            </div>
                            <div>
                                <DiApple size={60} color="white" />
                            </div>
                        </div>
                    </Animate>
                </div>
            </div>
        </section>
    )
}

export default About;