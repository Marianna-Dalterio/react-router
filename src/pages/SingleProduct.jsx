import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SingleProduct() {
    const { id } = useParams()
    const [products, setProducts] = useState([]);

    function fetchData() {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => setProducts(res.data))
            .catch((error) => console.log("Errore nel recupero dati:", error));
    }
    useEffect(fetchData, []);

    return (
        <h1>This is the product detail page</h1>
    )
}