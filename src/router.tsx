import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./Components/Navegacao/NavBar";
import { Home } from "./Page/Home";


export default function AppRouter(){

return(

<BrowserRouter>

<NavBar/>

<Routes>

<Route path="/" element={<Home/>} />

</Routes>

</BrowserRouter>

)
}