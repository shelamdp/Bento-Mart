import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editCategory, fetchCategoryById, fetchCategorySuccess } from "../store/actions/actionCategory";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2'

function EditCategory() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [categoryName, setCategoryName] = useState("")
  const navigate = useNavigate()

  const data = useSelector((state) => {
    return state.category.detail
  })

  const isLoading = useSelector((state) => {
    return state.category.loadingDetail
  })

  useEffect(() => {
    handleFetchCategory()
  }, [isLoading])

  useEffect(() => {
    if (!isLoading && data) {
      setCategoryName(data.name)
    }
  }, [isLoading, data])

  const handleFetchCategory = async () => {
    try {
      dispatch(fetchCategoryById(id))
    } catch (error) {
      console.log(error)
    }
  }


  const handleEdit = async (e) => {
    e.preventDefault()
    try {
      const updatedCategory = { name: categoryName }
      await dispatch(editCategory(id, updatedCategory))
      Swal.fire(
        'Success!',
        "Succes edit category!",
        'success'
      )
        navigate("/category")
  } catch (error) {
    console.log(error)
  }
}

if (isLoading) {
  return <p>Loading...</p>
} else {
  return (
    <section id="section-add-category">
      <div className="container">
        <form onSubmit={handleEdit}>
          <h2 className="mb-5 display-4"> Edit Category</h2>
          <div className="form-outline mb-4">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" placeholder="enter new category . . . " value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-warning btn-block mb-4">
            Update
          </button>
        </form>
      </div>
    </section>
  )
}

}

export default EditCategory