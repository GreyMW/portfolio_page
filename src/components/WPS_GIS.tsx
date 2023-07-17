export default function WPS_GIS ({active}: {active: string}) {
    return (
        <div className={active === "Welcome" ? "welcome-container raise" : "welcome-container"}>
            <div>
                <h1 className={'welcome-text p-10'}>Welcome.</h1>
            </div>
            <div>
                <div className={"flex"}>
                    <div className={"text-ornament"}>
                        <div className={"text-ornament-inner"}></div>
                    </div>
                    <h1 className={'dev-text'}>After being a Crime Analyst for seven years, I reminisced and found
                        that what I enjoyed most about the job was the programming.
                        Now I'm pursuing that passion.
                        <br/><br/>
                        Take a look through some of my projects. If they spark your interest, we should talk.

                    </h1>
                </div>

                <h1 className={'dev-text signature'}><br/>Graeme Weiss</h1>

            </div>
        </div>
    )
}