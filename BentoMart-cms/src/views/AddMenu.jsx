import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCategory, fetchCategorySuccess } from "../store/actions/actionCategory";
import { useDispatch, useSelector } from "react-redux";
import { addMenu } from "../store/actions/actionMenu";
import Swal from 'sweetalert2'


function AddMenu() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [imgUrl, setImgUrl] = useState("");
    const [ingredient, setIngredient] = useState(null);
    const [ingredient1, setIngredient1] = useState(null);
    const [ingredient2, setIngredient2] = useState(null);
    const [categoryId, setCategoryId] = useState(0);

    const categories = useSelector((state) => {
        return state.category.category
    })

    useEffect(() => {
        handleFetchCategory();
    }, []);

    const handleFetchCategory = async () => {
        try {
            dispatch(fetchCategorySuccess())
        } catch (error) {
            console.log(error);
        }
    };

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const menuData = { name, description, price, imgUrl, categoryId, ingredients: [ingredient, ingredient1, ingredient2] }
            const res = await dispatch(addMenu(menuData))
            if (res && res.ok) {
                Swal.fire(
                    'Success!',
                    "Succes add new menu!",
                    'success'
                )
                navigate("/menu")
            } else {
                if (res && res.status === 400) {
                    const error = await res.json()
                    Swal.fire(
                        'Ups!', 
                        error.message, 
                        'error'
                    )
                } else {
                    Swal.fire(
                        'Ups!', 
                        'Error adding menu. Please try again, all input must be filled!', 
                        'error'
                    )
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section id="section-add-menu">
            <div className="container">
                <form onSubmit={handleAdd}>
                    <h2 className="mb-5 display-4">Add New Menu</h2>
                    <div className="form-outline mb-4">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="enter new menu . . . "
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="enter the description . . ."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label">Price</label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="enter the price . . ."
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label">Image Url</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="enter the image url . . ."
                            value={imgUrl}
                            onChange={(e) => setImgUrl(e.target.value)}
                        />
                    </div>

                    <div className="form-outline mb-4">
                        <label>Category</label>
                        <select
                            className="form-control"
                            value={categoryId}
                            onChange={(e) => setCategoryId(e.target.value)}
                        >
                            <option value="" hidden>
                                click me to choose the category . . .
                            </option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label">Ingredients</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="enter the ingredient . . ."
                            value={ingredient}
                            onChange={(e) => setIngredient(e.target.value)}
                        />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label">Ingredients</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="enter the ingredient . . ."
                            value={ingredient1}
                            onChange={(e) => setIngredient1(e.target.value)}
                        />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label">Ingredients</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="enter the ingredient . . ."
                            value={ingredient2}
                            onChange={(e) => setIngredient2(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-warning btn-block mb-4">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}

export default AddMenu;
