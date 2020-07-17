import React, {Component} from "react";
import ProjectDetailsHeader from "./ProjectDetailsHeader"
import ProfileDescription from "./ProjectDescription"



export class ProjectDetailsContainer extends Component {
    render() {
        return (
            <div>
                <ProjectDetailsHeader/>
                <ProfileDescription/>
            </div>
        )
    }
}

export default ProjectDetailsContainer
