export default function Input({toAndfrom,selector,value=0}){

    return(
        <>
            <span>
                <p>{toAndfrom}</p>
                <p>Currency Type</p>
            </span>
            <span>
                <input type="number" value={value} required readOnly/>
                <select>
                    {
                        selector.map((name)=>(
                            <option key={name} value={name}>{name}</option>
                        ))
                    }
                </select>
            </span>
        </>
        
    
    )
}