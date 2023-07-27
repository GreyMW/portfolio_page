import IconLink from "../svg/IconLink.tsx";
import RustIcon from "../svg/RustIcon.tsx";
import GitHubIcon from "../svg/GitHubIcon.tsx";
import NetlifyIcon from "../svg/NetlifyIcon.tsx";
import "../../styles/PandemicSim.css";
import DioxusIcon from "../svg/Dioxus.tsx";

export default function ECommerce({active}: {active: string}) {
    return (
        <div className={active === "E-Commerce" ? "left-pane-content" : "left-pane-content lower"}>
            <div>
                <h1 className={'title-text'}>E-Commerce</h1>
            </div>
            <div>
                <div className={"flex"}>
                    <div className={"text-ornament"}>
                        <div className={"text-ornament-inner"}></div>
                    </div>
                    <div>
                        <h1 className={'dev-text'}>
                            In the mood for some shopping?
                            <br/>
                            <br/>
                            A copy of Amazon built completely with Dioxus, which is Rust's version of React.
                            <br/>
                            <br/>
                            Take a look <a href="" tabIndex={-1}><strong>here</strong></a> (unfinished).


                        </h1>

                        <h1 className={'dev-text'}>
                            <br/>
                            Technologies: <IconLink link={"https://www.rust-lang.org/"} svg={<RustIcon/>} hoverText={"Rust"}/>
                            , <IconLink link={"https://dioxuslabs.com/"} svg={<DioxusIcon/>} hoverText={"Dioxus"}/>
                            , <IconLink link={""} svg={<GitHubIcon/>} hoverText={"GitHub"}/>
                            , <IconLink link={"https://www.netlify.com/"} svg={<NetlifyIcon/>} hoverText={"Netlify"}/>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}