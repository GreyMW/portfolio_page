import "../styles/CustomList.css";
import CustomListItem from "./CustomListItem.tsx";
import React from "react";

export default function CustomList(
    {projectNames, comingSoonText, setActive}:
    { projectNames: string[], comingSoonText: string[], setActive: React.Dispatch<React.SetStateAction<string>> }
) {

    const ListItems = function (text: string) {
        return (
            <CustomListItem projectText={text} setActive={setActive}/>
        )
    }


    return (
        <div className={"custom-list-container"}>

            {projectNames.map(ListItems)}
            <p className={"coming-soon"}>Coming Soon</p>
            {comingSoonText.map(ListItems)}


        </div>
    )
}