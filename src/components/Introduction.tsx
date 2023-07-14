import "../styles/Introduction.css";

export default function Introduction() {
    return (
        <div className={'full-screen-container'}>
            <div className={"ornament-container"}>
                <img src="src/assets/corner_ornament_complex2.svg" alt="" className={"ornament-top-left"}/>
                <img src="src/assets/corner_ornament_complex2.svg" alt="" className={"ornament-bottom-right"}/>

                <div className={"info-container"}>
                    <div className={'welcome-container'}>
                        <div>
                            <h1 className={'welcome-text p-10'}>Welcome.</h1>
                        </div>
                        <div>
                            <h1 className={'dev-text p-18'}>After being a Crime Analyst for seven years, I reminisced and found
                                that what I enjoyed most about the job was the programming.
                                Now I'm pursuing that passion.
                                <br/><br/>
                                Take a look through some of my projects. If they spark your interest, we should talk.

                            </h1>
                            <h1 className={'dev-text signature'}><br/>Graeme Weiss</h1>

                        </div>
                    </div>
                    <div className={"small_ornament_container"}>
                        <img src="src/assets/corner_ornament_complex2.svg" alt="" className={"ornament-top-left ornament-small"}/>
                        <div className={"info-container-small"}>
                            <div className={'projects-container'}>
                                <h1 className={'projects-text'}>Projects</h1>
                                <ul className={"bullets-inside"}>
                                    <br/>
                                    <li>GIS</li>
                                    <br/>
                                    <li>Item</li>
                                    <br/>
                                    <li>Item</li>
                                    <br/>
                                    <li>Item</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}