//importo navbar
import Navbar from "../components/Navbar";
//importo Outlet
import { Outlet } from "react-router-dom";


//layout in cui definisco il contenitore fisso delle mie pagine, quindi header e footer, con main che react sostituisce al momento della richiesta 
export default function DefaultLayout() {
    return (
        <div>
            <Navbar />
            <Outlet />

        </div>
    )
};