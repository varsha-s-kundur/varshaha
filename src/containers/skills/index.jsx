import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeaderContent"
import { skillsData } from "./utils";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import './styles.scss';

const Skills = () => {
    return (
        <section id='skills' className="skills">
            <PageHeaderContent
                headerText="MY SKILLS"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="skills__content-wrapper">
                {
                    skillsData.map((item, i) => (
                        <div key={i} className="skills__content-wrapper__inner-content">
                            <Animate
                                play
                                duration={1}
                                delay={0.3}
                                start={{
                                    transform: 'translateX(-200px)'
                                }}

                                end={{
                                    transform: 'translateX(0px)'
                                }}
                            >
                                <h3 className="skills__content-wrapper__inner-content__category-text">{item.label}</h3>
                                <div className="skills__content-wrapper__inner-content__progressbar-container">
                                    {item.data.map((skillsItem, j) => (
                                        <AnimateKeyframes
                                            play
                                            duration={1}
                                            keyframes={["opacity:1", "opacity:0"]}
                                            iterationCount="1"
                                        >
                                            <div className="progressbar-wrapper" key={j}>
                                                <div className="progressbar-content">
                                                    <p className="skill-label">{skillsItem.skillName}</p>
                                                    <Line
                                                        percent={skillsItem.percentage}
                                                        strokeWidth="4"
                                                        strokeColor="skyblue"
                                                        trailWidth="4"
                                                        strokeLinecap="round"
                                                    />
                                                </div>
                                                <div className="skill-usage">{skillsItem.usage}</div>
                                            </div>


                                        </AnimateKeyframes>
                                    ))}
                                </div>

                            </Animate>
                        </div>
                    ))
                }

            </div>
        </section>
    )
}

export default Skills;