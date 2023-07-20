import "../styles/Introduction.css";
import {useState} from "react";
import Welcome from "./Welcome.tsx";
import ProjectSelect from "./ProjectSelect.tsx";
import WPS_GIS from "./WPS_GIS.tsx";
import WordleAI from "./WordleAI.tsx";

export default function Introduction() {

    const [active, setActive] = useState("Welcome");

    return (
        <div className={'full-screen-container'}>
            <div className={"main-content-container"}>
                <img src="src/assets/corner_ornament_complex2.svg" alt="ornament top left" className={"ornament-top-left"}/>
                <img src="src/assets/corner_ornament_complex2.svg" alt="ornament bottom right" className={"ornament-bottom-right"}/>
                <div className={"main-subcontainer-left"}>
                    <Welcome active={active}/>
                    <WPS_GIS active={active}/>
                    <WordleAI active={active}/>
                </div>
                <div className={"main-subcontainer-right"}>
                    <ProjectSelect setActive={setActive}/>
                </div>
            </div>
            {/*<div className={"ornament-container"}>*/}
            {/*    <img src="src/assets/corner_ornament_complex2.svg" alt="" className={"ornament-top-left"}/>*/}
            {/*    <img src="src/assets/corner_ornament_complex2.svg" alt="" className={"ornament-bottom-right"}/>*/}

            {/*        <div className={"holdout"}/>*/}
            {/*        /!*<Welcome active={active}/>*!/*/}
            {/*        /!*<WPS_GIS active={active}/>*!/*/}

            {/*        <ProjectSelect setActive={setActive}/>*/}

            {/*</div>*/}
        </div>
    )
}