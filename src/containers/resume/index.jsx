import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PageHeaderContent from "../../components/PageHeaderContent";
import { data } from "./utils";
import "./styles.scss";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="MY RESUME"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="timeline">
        {/* ===== Experience Section ===== */}
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>

          <VerticalTimeline
            layout="1-column"
            lineColor="white"
          >
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  color: "white",
                  border: "1.5px solid white",
                }}
                date={item.date || "2020 - Present"}
                icon={<MdWork />}
                iconStyle={{
                  background: "white",
                  color: "skyblue",
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>{item.title}</h3>
                  <h4>{item.subTitle}</h4>
                </div>
                <p className="vertical-timeline-element-title-wrapper-description">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        {/* ===== Education Section ===== */}
        <div className="timeline__education">
          <h3 className="timeline__education__header-text">Education</h3>

          <VerticalTimeline
            layout="1-column"
            lineColor="white"
          >
            {data.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__education__vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  color: "white",
                  border: "1.5px solid white",
                }}
                date={item.date || "2020 - Present"}
                icon={<MdWork />}
                iconStyle={{
                  background: "white",
                  color: "skyblue",
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>{item.title}</h3>
                  <h4>{item.subTitle}</h4>
                </div>
                <p className="vertical-timeline-element-title-wrapper-description">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;