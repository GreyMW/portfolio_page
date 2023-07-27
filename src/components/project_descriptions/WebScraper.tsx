import IconLink from "../svg/IconLink.tsx";
import FontAwesomeReactIcon from "../svg/FontAwesomeReactIcon.tsx";
import RustIcon from "../svg/RustIcon.tsx";
import GitHubIcon from "../svg/GitHubIcon.tsx";
import NetlifyIcon from "../svg/NetlifyIcon.tsx";
import TypescriptIcon from "../svg/TypescriptIcon.tsx";
import "../../styles/PandemicSim.css";

export default function WebScraper({active}: {active: string}) {
    return (
        <div className={active === "Web Scraper Dashboard" ? "left-pane-content" : "left-pane-content lower"}>
            <div>
                <h1 className={'title-text'}>Web Scraper Dashboard</h1>
            </div>
            <div>
                <div className={"flex"}>
                    <div className={"text-ornament"}>
                        <div className={"text-ornament-inner"}></div>
                    </div>
                    <div>
                        <h1 className={'dev-text'}>
                            Information is key to good analysis. I've decided to analyze some gambling sites and see how their sports odds compare.
                            <br/>
                            <br/>
                            A dashboard style interface allows you to easily compare the data that is constantly being scraped to inform your decisions.
                            <br/>
                            <br/>
                            Let's see which site is the most loose with their odds... and maybe find some arbitrage opportunities.
                            <br/>
                            <br/>
                            Take a look <a href="" tabIndex={-1}><strong>here</strong></a> (unfinished).


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