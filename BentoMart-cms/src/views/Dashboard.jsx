import React, { useState, useEffect } from "react";
import { fetchMenu, fetchMenuSucces } from "../store/actions/actionMenu";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory, fetchCategorySuccess } from "../store/actions/actionCategory";
import { loadingAllMenu } from "../store/actions/actionMenu";

function Dashboard() {
    const dispatch = useDispatch()

    const menus = useSelector((state) => {
        return state.menu.menu
    })

    const isLoadingMenu = useSelector((state) => {
        return state.menu.loadingAllMenu
    })

    const isLoadingCategory = useSelector((state) => {
        return state.category.isLoadingAll
    })

    const categories = useSelector((state) => {
        return state.category.category
    })

    useEffect(() => {
        if (isLoadingMenu) {
            handleFetchMenu()
        }
         
    }, [isLoadingMenu]);

    useEffect(() => {
        if(isLoadingCategory) {
            handleFetchCategory()
        }
    }, [isLoadingCategory]);

    const handleFetchMenu = async () => {
        try {
            dispatch(fetchMenuSucces())
        } catch (error) {
            console.log("Error fetching menus:", error);
        }
    };

    const handleFetchCategory = async () => {
        try {
            dispatch(fetchCategorySuccess())
        } catch (error) {
            console.log(error)
        }
    }

    if (isLoadingCategory || isLoadingMenu) {
        return <p className="text-center">Loading...</p>
    } else {
        return (
            <div>
                <section id="dashboard" className="container mb-5">
                    <h2 className="mb-5 display-4">Dashboard</h2>
                    <div className="card mb-5" style={{ width: '15rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">Total Menu</h5>
                            <p className="card-text">Total: {menus.length}</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: '15rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">Total Categories</h5>
                            <p className="card-text">Total: {categories.length}</p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }


}

export default Dashboard;
