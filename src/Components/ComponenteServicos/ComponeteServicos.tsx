import type { ReactNode } from "react";
import Style from "./Style.module.css"

type componetTypes = {
   
texto:string;
titulo:string;
icone:ReactNode;
    
}

export function ComponeteServico({icone,texto,titulo}:componetTypes){

return(

<div className={Style.ElementoServico}>
    <div className={Style.BoxIcone}>{icone}</div>
    <div className={Style.BoxText}>
        <h3>{titulo}</h3>
        <p>{texto}</p>
    </div>
</div>

)

}