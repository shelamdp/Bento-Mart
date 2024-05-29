import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2'
import { destroyCategory} from "../store/actions/actionCategory";



function RowCategory({ category, index }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleDelete = async () => {
        try {
           dispatch(destroyCategory(category.id))
           Swal.fire(
            'Success!',
            "Succes delete category!",
            'success'
          )
        } catch (error) {
            console.log(error)
        }
    }

    const handleEdit = () => {
        navigate("/edit-category/" + category.id)
        
    }

    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{category.name}</td>
            <td className="bi bi-trash3-fill text-danger cursor-pointer" onClick={handleDelete}>
                <a ></a>
            </td>
            <td className="bi bi-pencil-square text-warning cursor-pointer" onClick={handleEdit}>
                <a ></a>
            </td>
        </tr>
    )
}

export default RowCategory