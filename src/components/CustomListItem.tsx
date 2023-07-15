export default function CustomListItem({projectText}: {projectText: string}) {
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
            <div className={"project-name"}>
                <p>{projectText}</p>

            </div>
        </div>
    )
}