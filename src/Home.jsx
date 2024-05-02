import video from "../assets/Untitled Video (3).mp4"

export default function Home(){
    
    return(
        <div className="background-video">
            <header>
        <button className="test">Test</button>

            </header>
        <video autoPlay muted loop id="video-bg">
            <source src={video} type="video/mp4" />
        </video>
        <div className="content">
            {/* Your content here */}
        </div>
    </div>
    )
}