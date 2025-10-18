import { useState, useEffect } from "react";
import axios from "axios";
// API  https://fakestoreapi.com/
import SingleProduct from "./SingleProduct";
import { Link } from "react-router-dom";


export default function Products() {
    const [products, setProducts] = useState([]);

    function fetchData() {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => setProducts(res.data))
            .catch((error) => console.log("Errore nel recupero dati:", error));
    }

    useEffect(fetchData, []);



    return (
        <div className="container text-center">
            <h1>I nostri prodotti</h1>
            <div className="container">
                <div className="row g-4">

                    {products.map((item) =>

                        <div key={item.id} className="col-12 col-md-6 col-lg-4 ">
                            <div className="card h-100">
                                <Link to={`/products/${item.id}`}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="card-img-top p-3"
                                        style={{ height: "300px", objectFit: "contain" }}
                                    />
                                </Link>


                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text fw-bold">€{item.price}</p>
                                    <p className="card-text text-muted">{item.category}</p>
                                    <button className="btn btn-primary mt-auto">Buy</button>
                                </div>

                            </div>


                        </div>



                    )}


                </div>
            </div>



        </div>

    )
};