import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeaderContent";
const Projects=()=>{
    return(
        <section id= "projects" className="projects">
            <PageHeaderContent
            headerText = "My Projects"
            icon={<BsInfoCircleFill size={40}/>}
            />
        </section>
    )
}
export default Projects;