import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SingleProduct() {
    // 1. Recupero l'ID
    const { id } = useParams()
    // Inizializzo lo stato del prodotto a 'null'
    const [product, setProduct] = useState(null);

    function fetchData() {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => setProduct(res.data))
            .catch((error) => console.log("Errore nel recupero dati:", error));
    }

    //2: Aggiungo [id] come dipendenza. L'effetto si riesegue se l'ID cambia.
    useEffect(fetchData, [id]);

    return (
        <div>
            <h1>{`Scopri di più su:${product.title} `}</h1>
        </div>

    )
}