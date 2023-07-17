import CustomList from "./CustomList.tsx";
import {coming_soon, projects} from "../data/projects.ts";
import React from "react";

export default function ProjectSelect ({setActive}: {setActive: React.Dispatch<React.SetStateAction<string>>}) {
    return (
        <div className={"small-ornament-container"}>
            <img src="src/assets/corner_ornament_complex2.svg" alt="" className={"ornament-top-left ornament-small"}/>
            <div className={"info-container-small"}>
                <div className={'projects-container'}>
                    <h1 className={'projects-heading'}>Projects</h1>
                    <CustomList comingSoonText={coming_soon} projectNames={projects} setActive={setActive}/>
                </div>
            </div>
        </div>
    )
}