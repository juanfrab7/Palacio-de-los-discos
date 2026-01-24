// Le aviso a BotonMultiuso que está recibiendo una prop poniendo entre parentesis (props)

const BotonMultiuso = (props)=> {

    console.log(props, "props")
    
    return(
        <button style={{backgroundColor:props.color, padding:"20 px 40 px", cursor:"pointer"}}
        
        onClick={props.onClickFunction}
        >{props.texto}</button>
        
    )

}

export default BotonMultiuso