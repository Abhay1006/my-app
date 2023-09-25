import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@mui/icons-material/School"
import "../styles/Experience.css"
function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline linecolor="#3e497a">
        <VerticalTimelineElement 
        className="vertical-timeline-element-education"
        date="2019-2021"
        iconStyle={{ background: "#3e497a", color: "#fff"}}
        icon={<SchoolIcon />}
        >
        <h3 className="vertical-timeline-element-title">
          Nehru World School, Shastri Nagar, Ghaziabad, Uttar Pradesh
        </h3>
        <p>Class 12th CBSE </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className="vertical-timeline-element-education"
        date="2021-2025"
        iconStyle={{ background: "#3e497a", color: "#fff"}}
        icon={<SchoolIcon />}
        >
        <h3 className="vertical-timeline-element-title">
          Ajay Kumar Garg Engineering College, Ghaziabad, Uttar Pradesh
        </h3>
        <p>Computer Science Engineering(Artificia Inteligence and Machine Learning) </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
