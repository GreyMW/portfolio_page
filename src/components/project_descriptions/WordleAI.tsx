import "../../styles/WPS_GIS.css";
import "../../styles/project_info.css";
import FontAwesomeReactIcon from "../svg/FontAwesomeReactIcon.tsx";
import GitHubIcon from "../svg/GitHubIcon.tsx";
import NetlifyIcon from "../svg/NetlifyIcon.tsx";
import IconLink from "../svg/IconLink.tsx";
import JavascriptIcon from "../svg/JavascriptIcon.tsx";
import PythonIcon from "../svg/PythonIcon.tsx";
import TensorFlowIcon from "../svg/TensorFlowIcon.tsx";
import RustIcon from "../svg/RustIcon.tsx";
import TauriIcon from "../svg/TauriIcon.tsx";

export default function WordleAI ({active}: {active: string}) {
    return (
        <div className={active === "Wordle AI" ? "left-pane-content" : "left-pane-content lower"}>
            <div>
                <h1 className={'gis-title-text'}>Wordle AI</h1>
            </div>
            <div>
                <div className={"flex"}>
                    <div className={"text-ornament"}>
                        <div className={"text-ornament-inner"}></div>
                    </div>
                    <div>
                        <h1 className={'dev-text'}>
                            I'm an AI hobbyist. I decided to apply it to the popular word game "Wordle" to
                            see how it performs against a data oriented approach to solving it.
                            <br/>
                            <br/>
                            Built using a genetic algorithm with models saved at powers of ten generations for comparison.
                            <br/>
                            <br/>
                            Take a <a href={""} tabIndex={-1}><strong>look</strong></a> (work in progress).
                            <br/>
                            <br/>
                            Or <a href={""} tabIndex={-1}><strong>here</strong></a> (unfinished) if you prefer a standalone version made with Tauri and Rust.
                        </h1>

                        <h1 className={'dev-text'}>
                            <br/>
                            Technologies: <IconLink link={"https://react.dev/"} svg={<FontAwesomeReactIcon/>} hoverText={"React"}/>
                            , <IconLink link={"https://www.python.org/"} svg={<PythonIcon/>} hoverText={"Python"}/>
                            , <IconLink link={"https://www.tensorflow.org/"} svg={<TensorFlowIcon/>} hoverText={"TensorFlow"}/>
                            , <IconLink link={"https://www.javascript.com/"} svg={<JavascriptIcon/>} hoverText={"JavaScript"}/>
                            , <IconLink link={"https://www.rust-lang.org/"} svg={<RustIcon/>} hoverText={"Rust"}/>
                            , <IconLink link={"https://tauri.app/"} svg={<TauriIcon/>} hoverText={"Tauri"}/>
                            , <IconLink link={"https://github.com/GreyMW/wordle_clone"} svg={<GitHubIcon/>} hoverText={"GitHub"}/>
                            , <IconLink link={"https://www.netlify.com/"} svg={<NetlifyIcon/>} hoverText={"Netlify"}/>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}