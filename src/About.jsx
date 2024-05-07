export default function About(props){
    return(
        <div className="info-block" style={{ width: '40%', margin: '10px', padding: '20px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}