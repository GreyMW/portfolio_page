import "../styles/CustomList.css";
import CustomListItem from "./CustomListItem.tsx";

export default function CustomList({projectNames, comingSoonText}: {projectNames: string[], comingSoonText: string[]}) {

    const ListItems = function(text: string) {
        return (
            <CustomListItem projectText={text}/>
        )
    }


    return (
        <div className={"custom-list-container"}>

            {projectNames.map(ListItems)}
            {/*<CustomListItem projectText={"test"}/>*/}
            {/*<CustomListItem projectText={"test2"}/>*/}
            {/*<CustomListItem projectText={"test3"}/>*/}
            <p className={"coming-soon"}>Coming Soon</p>
            {/*<CustomListItem projectText={"test"}/>*/}
            {/*<CustomListItem projectText={"test2"}/>*/}
            {/*<CustomListItem projectText={"test3"}/>*/}
            {comingSoonText.map(ListItems)}


        </div>
    )
}