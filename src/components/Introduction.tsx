import "../styles/Introduction.css";

export default function Introduction() {
    return (
        <div className={'full-screen-container'}>
            <div className={'full-screen-container-inner'}>
                <div className={'welcome-container'}>
                    <div>
                        <h1 className={'name-text p-10'}>Welcome.</h1>
                    </div>
                    <div>
                        <h1 className={'dev-text p-18'}>After being a Crime Analyst for seven years, I reminisced and found
                            that what I enjoyed most about the job was the programming.
                            Now I'm pursuing that passion full time.<br/>Take a look through some of my projects. If they spark your interest, we should talk.</h1>
                    </div>
                </div>
                <div className={'projects-container'}>

                </div>

            </div>
        </div>
    )
}