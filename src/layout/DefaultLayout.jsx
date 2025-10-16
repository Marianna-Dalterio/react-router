//importo navbar
import Navbar from "../components/Navbar";
//importo Outlet
import { Outlet } from "react-router-dom";


//layout in cui definisco il contenitore fisso delle mie pagine, quindi header e footer, con main che react sostituisce al momento della richiesta 
export default function DefaultLayout() {
    return (
        <div>
            <Navbar />
            {/* con pt-3 il contenuto che viene dalle rotte è spinto verso il basso dato che la navbar è fissa  */}
            <main className="pt-5 layout-content">
                <Outlet />
            </main>


        </div>
    )
};