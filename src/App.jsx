// Creiamo il frontend del nostro mini e-commerce e le sue pagine principali!
// Useremo Fake Store API come backend fittizio per simulare i dati dei prodotti.
// https://fakestoreapi.com/

// Installiamo React Router DOM: npm i react-router-dom
// Creiamo almeno 3 pagine principali:
// Homepage (con un messaggio di benvenuto o immagine promozionale)
// Chi siamo
// Prodotti (pagina che mostrerà la lista dei prodotti prendendoli da https://fakestoreapi.com/products)
// Implementiamo una Navbar visibile in tutte le pagine per navigare tra di esse

// Bonus
// Centralizziamo la Navbar usando un componente Layout
// Gestiamo la classe active per i link attivi nella Navbar


//importo libreria react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//importo il Layout
import DefaultLayout from "./layout/DefaultLayout";
//importo le pagine
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Contacts from "./pages/Contacts";


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>


    </BrowserRouter>
  )
}

export default App
