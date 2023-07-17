import React from "react";

export default function CustomListItem({projectText, setActive}: {projectText: string, setActive: React.Dispatch<React.SetStateAction<string>>}) {
    return (
        <div className={"custom-list-item"}>
            <div className={"sidebar"}>
                <div className={"sidebar-inner"}>

                </div>
            </div>
            <div className={"sidebar-highlight-square"}>
                <div className={"sidebar-highlight-inner-square"}>

                </div>
            </div>
            <div className={"project-name"} onClick={() => setActive(projectText)}>
                <p>{projectText}</p>

            </div>
        </div>
    )
}