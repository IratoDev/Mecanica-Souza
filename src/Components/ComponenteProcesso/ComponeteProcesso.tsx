import type { ReactNode } from "react"
import Style from "./Style.module.css"

type ComponetTypes ={

icone:ReactNode;
titulo:string;
texto:string;

}

export function ComponeteProcesso({icone,titulo,texto}:ComponetTypes){

return(

<div className={Style.ComponenteProcesso}>

    <div className={Style.BoxIcone}>
        {icone}
    </div>

    <div className={Style.BoxTexto}>
        <h3>{titulo}</h3>
        <p>{texto}</p>
    </div>
    
</div>

)

}