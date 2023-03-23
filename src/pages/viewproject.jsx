const Viewproject = ({elem, setView})=>{
    return(
        <>
            <div className="viewProject">
                <button className="close" onClick={()=>setView(<></>)}>X</button>
                <div className="row around">
                    <img src={elem.img} alt="project img" />
                    <div className="column">
                        <h4>{elem.name}</h4>
                        <p>{elem.p}</p>
                        <div className="row">
                            { elem.link && <a target={"_blank"} rel="noreferrer" href={elem.link} className="link">view project</a> }
                            { elem.viewlink && <a target={"_blank"} rel="noreferrer" href={elem.viewlink} className="link">source code</a> }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Viewproject;