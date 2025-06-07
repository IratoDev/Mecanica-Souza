

type TextButton = {

text:string;
style?: React.CSSProperties;
}

export function ButtonComponet({text,style}:TextButton){

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
>
{text}
</button>

)

}