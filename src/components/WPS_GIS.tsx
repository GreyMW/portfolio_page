import "../styles/WPS_GIS.css";
import "../styles/project_info.css";
import FontAwesomeReactIcon from "./svg/FontAwesomeReactIcon.tsx";
import TypescriptIcon from "./svg/TypescriptIcon.tsx";
import LeafletIcon from "./svg/LeafletIcon.tsx";
import GitHubIcon from "./svg/GitHubIcon.tsx";
import NetlifyIcon from "./svg/NetlifyIcon.tsx";

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
                            As a Crime Analyst we utilized GIS (Geographic Information Systems). The one we used wasn't cutting it
                            so I developed my own in Java.
                            <br/>
                            <br/>
                            It ended up being used by the entire department for <strong><em>five years</em></strong>, in scores of
                            investigations.
                            <br/>
                            <br/>
                            <a href={""}><strong>This</strong></a> is a
                            recreation of that project for the web.
                        </h1>

                        <h1 className={'dev-text'}>
                            <br/>
                            Technologies: <FontAwesomeReactIcon/>
                            , <LeafletIcon/>
                            , <TypescriptIcon/>
                            , <GitHubIcon/>
                            , <NetlifyIcon/>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}