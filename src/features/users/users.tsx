import { useNavigate } from "react-router-dom"
import { AddUser } from "../../utils/add-user"
import { useDeleteUserMutation, useGetUsersQuery } from "./users.api"

export const Users = () => {
    const { data, isLoading } = useGetUsersQuery(null)
    const [deleteUser] = useDeleteUserMutation()
    const navigate = useNavigate()

    const handleDelete = async (id: string) => {
        deleteUser(id)
    }

    const handleEdit = (id: string) => {
        navigate(`/edit/${id}`)
    };
    return <>
        <AddUser />
        <h3>Users</h3>
        {isLoading && <p>Loading...</p>}
        {
            data && data.map(user =>
                <div key={user.id}>
                    <p>{user.name} with {user.salary} AMD salary
                        <button onClick={() => handleDelete(user.id)}>delete</button>
                        <button onClick={() => handleEdit(user.id)}>edit</button>
                    </p>
                </div>
            )
        }
    </>
}