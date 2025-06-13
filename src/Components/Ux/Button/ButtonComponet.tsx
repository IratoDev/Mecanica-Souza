

type TextButton = {

text:string;
style?: React.CSSProperties;
onClick: () => void;
}

export function ButtonComponet({text,style, onClick}:TextButton){

return(

<button className={`
bg-colorButton1
text-colorButton3 
px-4 
py-2
font-Titulo
text-SubTituloSize
rounded-full
whitespace-nowrap
font-extrabold
`}
style={style}
onClick={onClick}
>
{text}
</button>

)

}