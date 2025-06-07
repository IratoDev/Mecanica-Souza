import { ButtonComponet } from "../Ux/Button/ButtonComponet";
import { FaCheck } from "react-icons/fa";
import Style from "./Style.module.css"

type CartaoPrecoProps = {

tempo:string;
titulo:string;
preco:string;
option1:string;
option2:string;
option3:string;
option4:string;
option5:string;
option6:string;

}

export function CartaoPreco({tempo,titulo,preco, option1,option2, option3, option4, option5, option6}:CartaoPrecoProps){

return(

<div className="flex rounded-3xl border-2 border-gray-500 bg-colorButton2 px-4 py-4">
    <div className={Style.BoxInfo}>
        <span className="p-1 bg-red-600 text-white">{tempo}</span>
        <h3>{titulo}</h3>
        <h1>{preco}</h1>
    </div>

    <div className={Style.BoxServicos}>
        <ul>
            <li><FaCheck /> {option1}</li>
            <li><FaCheck /> {option2}</li>
            <li><FaCheck /> {option3}</li>
 
            <li><FaCheck /> {option4}</li>
            <li><FaCheck /> {option5}</li>
            <li><FaCheck /> {option6}</li>
        </ul>
        <ButtonComponet text="Order Now"/>
    </div>
</div>

)

}