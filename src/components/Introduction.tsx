import "../styles/Introduction.css";
import {useState} from "react";
import Welcome from "./project_descriptions/Welcome.tsx";
import ProjectSelect from "./ProjectSelect.tsx";
import WPS_GIS from "./project_descriptions/WPS_GIS.tsx";
import WordleAI from "./project_descriptions/WordleAI.tsx";
import PandemicSim from "./project_descriptions/PandemicSim.tsx";
import ECommerce from "./project_descriptions/E-Commerce.tsx";
import WebScraper from "./project_descriptions/WebScraper.tsx";

export default function Introduction() {

    const [active, setActive] = useState("Welcome");

    return (
        <div className={'full-screen-container'}>
            <div className={"main-content-container"}>
                <img src="/assets/corner_ornament_complex2.svg" alt="ornament top left" className={"ornament-top-left"}/>
                <img src="/assets/corner_ornament_complex2.svg" alt="ornament bottom right" className={"ornament-bottom-right"}/>
                <div className={"main-subcontainer-left"}>
                    <Welcome active={active}/>
                    <WPS_GIS active={active}/>
                    <WordleAI active={active}/>
                    <PandemicSim active={active}/>
                    <ECommerce active={active}/>
                    <WebScraper active={active}/>
                </div>
                <div className={"main-subcontainer-right"}>
                    <ProjectSelect setActive={setActive}/>
                </div>
            </div>
        </div>
    )
}