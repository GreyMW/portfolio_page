import IconLink from "../svg/IconLink.tsx";
import FontAwesomeReactIcon from "../svg/FontAwesomeReactIcon.tsx";
import RustIcon from "../svg/RustIcon.tsx";
import GitHubIcon from "../svg/GitHubIcon.tsx";
import NetlifyIcon from "../svg/NetlifyIcon.tsx";
import TypescriptIcon from "../svg/TypescriptIcon.tsx";
import "../../styles/PandemicSim.css";

export default function PandemicSim({active}: {active: string}) {
    return (
        <div className={active === "Pandemic Sim" ? "left-pane-content" : "left-pane-content lower"}>
            <div>
                <h1 className={'title-text'}>Pandemic Simulation</h1>
            </div>
            <div>
                <div className={"flex"}>
                    <div className={"text-ornament"}>
                        <div className={"text-ornament-inner"}></div>
                    </div>
                    <div>
                        <h1 className={'dev-text'}>
                            An at-a-glance way to model the effect of prevention measures among diverse populations.
                            <br/>
                            <br/>
                            A dashboard style interface allows you to adjust parameters relating to a population and prevention methods.
                            <br/>
                            <br/>
                            A true nerd at heart, this is inspired by one of many math YouTubers I follow, <a
                            href="https://www.youtube.com/@3blue1brown">3Blue1Brown</a> .
                            <br/>
                            <br/>
                            Take a look <a href=""><strong>here</strong></a> (unfinished).


                        </h1>

                        <h1 className={'dev-text'}>
                            <br/>
                            Technologies: <IconLink link={"https://react.dev/"} svg={<FontAwesomeReactIcon/>} hoverText={"React"}/>
                            , <IconLink link={"https://www.typescriptlang.org/"} svg={<TypescriptIcon/>} hoverText={"TypeScript"}/>
                            , <IconLink link={"https://www.rust-lang.org/"} svg={<RustIcon/>} hoverText={"Rust"}/>
                            , <IconLink link={""} svg={<GitHubIcon/>} hoverText={"GitHub"}/>
                            , <IconLink link={"https://www.netlify.com/"} svg={<NetlifyIcon/>} hoverText={"Netlify"}/>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}