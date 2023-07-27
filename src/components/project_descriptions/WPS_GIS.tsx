import "../../styles/WPS_GIS.css";
import "../../styles/project_info.css";
import FontAwesomeReactIcon from "../svg/FontAwesomeReactIcon.tsx";
import TypescriptIcon from "../svg/TypescriptIcon.tsx";
import LeafletIcon from "../svg/LeafletIcon.tsx";
import GitHubIcon from "../svg/GitHubIcon.tsx";
import NetlifyIcon from "../svg/NetlifyIcon.tsx";
import IconLink from "../svg/IconLink.tsx";

export default function WPS_GIS ({active}: {active: string}) {
    return (
        <div className={active === "Crime Analysis GIS" ? "left-pane-content" : "left-pane-content lower"}>
            <div>
                <h1 className={'gis-title-text'}>Crime Analysis GIS</h1>
            </div>
            <div>
                <div className={"flex"}>
                    <div className={"text-ornament"}>
                        <div className={"text-ornament-inner"}></div>
                    </div>
                    <div>
                        <h1 className={'dev-text'}>
                            As a Crime Analyst we utilized GIS (Geographic Information Systems). The one we used wasn't cutting it,
                            so I developed my own in Java.
                            <br/>
                            <br/>
                            It ended up being used by the entire department for <strong><em>five years</em></strong>, in scores of
                            investigations.
                            <br/>
                            <br/>
                            <a href={"https://www.graemeweiss.dev/GIS"}><strong>This</strong></a> is a
                            recreation of that project for the web.
                        </h1>

                        <h1 className={'dev-text'}>
                            <br/>
                            Technologies: <IconLink link={"https://react.dev/"} svg={<FontAwesomeReactIcon/>} hoverText={"React"}/>
                            , <IconLink link={"https://leafletjs.com/"} svg={<LeafletIcon/>} hoverText={"Leaflet"}/>
                            , <IconLink link={"https://www.typescriptlang.org/"} svg={<TypescriptIcon/>} hoverText={"TypeScript"}/>
                            , <IconLink link={"https://github.com/GreyMW/cell_tower_gis"} svg={<GitHubIcon/>} hoverText={"GitHub"}/>
                            , <IconLink link={"https://www.netlify.com/"} svg={<NetlifyIcon/>} hoverText={"Netlify"}/>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}