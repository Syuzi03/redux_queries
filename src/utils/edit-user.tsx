import { useNavigate, useParams } from "react-router-dom";
import { useEditUserMutation, useGetUsersQuery } from "../features/users/users.api";
import { useState } from "react";
import type { InputUser } from "../features/users/types";

export const EditUser = () => {
    const { id } = useParams()
    const { data } = useGetUsersQuery(null)
    const [editUser] = useEditUserMutation()
    const navigate = useNavigate()
    
    const userToEdit = data?.find((user) => user.id === id)
    const [user, setUser] = useState<InputUser>(userToEdit || { name: "", salary: 0 })


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        editUser(user)
            .then(() => {
                navigate('/')
            })
    }
    return <>
        <h3>Edit User</h3>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="please enter a name"
                value={user.name}
                onChange={event => setUser({ ...user, name: event.target.value })}
            />
            <input
                type="number"
                step={20000}
                placeholder="please enter a salary"
                value={user.salary}
                onChange={event => setUser({ ...user, salary: +event.target.value })}
            />
            <button>update</button>
        </form>
    </>
}