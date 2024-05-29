import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCategory, fetchCategorySuccess } from "../store/actions/actionCategory";
import Swal from 'sweetalert2'


function AddCategory() {
    const [categoryName, setCategoryName] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const dataCategory = { name: categoryName }
            const res = await dispatch(addCategory(dataCategory))
            if (res && res.ok) {
                Swal.fire(
                    'Success!',
                    "Succes add new category!",
                    'success'
                  )
                navigate("/category")
                dispatch(fetchCategorySuccess())
            } else {
                const error = await res.json()
                Swal.fire(
                    'Ups!',
                    error.message,
                    'error'
                  )
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section id="section-add-category">
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h2 className="mb-5 display-4"> Add New Category</h2>
                    <div className="form-outline mb-4">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder="enter new category . . . " value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-warning btn-block mb-4">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    )
}

export default AddCategory