import React, { useEffect, useState } from "react";
import RowMenu from "../components/RowMenu";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenuSucces } from "../store/actions/actionMenu";

function ListMenu() {
    const dispatch = useDispatch()

    const menus = useSelector((state) => {
        return state.menu.menu
    })

    const isLoading = useSelector((state) => {
        return state.menu.loadingAllMenu
    })

    useEffect(() => {
        handleFetchMenu();
    }, [isLoading]);

    const handleFetchMenu = async () => {
        try {
            dispatch(fetchMenuSucces())
        } catch (error) {
            console.log(error)
        }
    }

    if (isLoading) {
        return <p className="text-center">Loading...</p>
    } else {
        return (
            <section id="list-menu" className="container">
                <h2 className="mb-5 display-4">Menus</h2>
                <Link className="text-dark text-decoration-none" to="/add-menu"> <button className="btn btn-warning mb-5">+ Add Menu</button></Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" >#</th>
                            <th scope="col" >Name</th>
                            <th scope="col" >Image</th>
                            <th scope="col" >Category</th>
                            <th scope="col" >Price</th>
                            <th scope="col" >Ingredients</th>
                            <th scope="col" >Created By</th>
                            <th scope="col" ></th>
                            <th scope="col" ></th>
                        </tr>
                    </thead>
                    <tbody>
                        {menus.map((menu, i) => (
                            <RowMenu key={i} menu={menu} index={i} />
                        ))}
                    </tbody>
                </table>
            </section>
        )
    }

}

export default ListMenu