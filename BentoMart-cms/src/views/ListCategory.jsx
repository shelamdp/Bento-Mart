import React, { useEffect, useState } from "react";
import RowCategory from "../components/RowCategory";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategorySuccess, setLoadingAll } from "../store/actions/actionCategory";

function ListCategory() {
    const dispatch = useDispatch()

    const categories = useSelector((state) => {
        return state.category.category
    })

    const isLoading = useSelector((state) => {
        return state.category.isLoadingAll
    })

    useEffect(() => {
        if (isLoading) {
            handleFetchCategories()
        }
    }, [isLoading])

    const handleFetchCategories = async () => {
        try {
            dispatch(fetchCategorySuccess())
        } catch (error) {
            console.log(error);
        }
    }

    if (isLoading) {
        return <p className="text-center">Loading...</p>
    } else {
        return (
            <section id="list-category" className="container">
                <h2 className="mb-5 display-4">Categories</h2>
                <Link className="text-dark text-decoration-none" to="/add-category"> <button className="btn btn-warning mb-5">+ Add Category</button></Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category, i) => (
                            <RowCategory key={i} category={category} index={i} />
                        ))}
                    </tbody>
                </table>
            </section>
        );
    }
}

export default ListCategory;
