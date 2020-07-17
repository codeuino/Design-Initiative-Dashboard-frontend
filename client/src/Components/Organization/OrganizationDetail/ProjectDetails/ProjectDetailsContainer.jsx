import React, {Component} from "react";
import ProjectDetailsHeader from "./ProjectDetailsHeader"
import ProjectDescription from "./ProjectDescription"



export class ProjectDetailsContainer extends Component {
    render() {
        return (
            <div>
                <ProjectDetailsHeader/>
                <ProjectDescription/>
            </div>
        )
    }
}

export default ProjectDetailsContainer
