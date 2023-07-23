import CustomList from "./CustomList.tsx";
import {coming_soon, projects} from "../data/projects.ts";
import React from "react";
import "../styles/ProjectSelect.css";

export default function ProjectSelect ({setActive}: {setActive: React.Dispatch<React.SetStateAction<string>>}) {
    return (

        <div className={"project-select-container"}>
            <img src="../../public/assets/corner_ornament_complex2.svg" alt="" className={"ornament-small"}/>
            <div className={'projects-container'}>
                <h1 className={'projects-heading'}>Projects</h1>
                <CustomList comingSoonText={coming_soon} projectNames={projects} setActive={setActive}/>
            </div>
        </div>
    )
}