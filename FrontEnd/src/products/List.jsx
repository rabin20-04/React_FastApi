import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import ProductsCard from "../components/products/Card";
import { getProducts } from "../api/product";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const List = () => {
    const [loading, setLoading] = useState(true);
    const [productList, setProductList] = useState([]); // Initial value is []
    const [error, setError] = useState(null); // Add error state

    useEffect(() => {
        getProducts()
            .then((response) => {
                setProductList(response.data || []); // Fallback to [] if data is undefined
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setError("Failed to load products. Please try again.");
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex font-bold justify-center items-center h-screen w-screen">
                <i className="fa-solid fa-spinner fa-spin-pulse text-blue-500 text-6xl"></i>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen w-screen text-red-500">
                {error}
            </div>
        );
    }

    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <Title label="New Arrivals" />
                <div className="py-4">
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {productList.length > 0 ? (
                            productList.map((product) => (
                                
                                <ProductsCard key={product.id} {...product} />
                            ))
                        ) : (
                            <p>No products available.</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default List;