import React from "react";
import { useNavigate } from "react-router-dom";
import { destroyMenu } from "../store/actions/actionMenu";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2'

function RowMenu({menu, index}) {
    const navigate =  useNavigate()
    const dispatch = useDispatch()

    const handleDelete = async() => {
        try {
            dispatch(destroyMenu(menu.id))
            Swal.fire(
                'Success!',
                "Succes delete menu!",
                'success'
              )
        } catch (error) {
            console.log(error)
        }
    }

    const handleEdit = () => {
        navigate("/edit-menu/" + menu.id)
    }

    return (
        <tr>
        <th scope="row">{index + 1}</th>
        <td>{menu.name}</td>       
         <td>
            <img src={menu.imgUrl} style={{ width: '100px', height: "80px" }} className="rounded" alt="" />
        </td>
        <td>{menu.Category.name}</td>
        <td>{menu.price}</td>
        <td>{menu.Ingredients.map((e) => (
            <p key={e.id}>{e.name}</p>
        ))}</td>
        <td>{menu.User.name}</td>
        <td className="bi bi-trash3-fill text-danger cursor-pointer" onClick={handleDelete}>
            <a></a>
        </td>
        <td className="bi bi-pencil-square text-warning cursor-pointer"  onClick={handleEdit}>
            <a></a>
        </td>
    </tr>
    )
}

export default RowMenu