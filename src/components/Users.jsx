import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { deleteUser, fetchUsers, fetchUserPosts } from "../store/actions"
import AddUser from "./AddUser"

export default function Users() {
    const users = useSelector(data => data.users)
    const posts = useSelector(data => data.activeUserPosts)
    
    const dispatch = useDispatch()
    const [selectedUserId, setSelectedUserId] = useState(null);

    useEffect(() => {
        if (users.length === 0) {
            dispatch(fetchUsers());
        }
    }, [dispatch, users.length]);

    const handleDelete = (id) => {
        dispatch(deleteUser(id))
    }

    const handleDetail = (id) => {
        if (selectedUserId === id) {
            setSelectedUserId(null);
        } else {
            setSelectedUserId(id);
            dispatch(fetchUserPosts(id));
        }
    }

    return (
        <div>
            <AddUser />
            {
                users.map((user, index) => {
                    return (
                        <div key={index}>
                            <h1>{user.name}</h1>
                            <p>{user.email}</p>
                            
                            <button onClick={() => handleDelete(user.id)}>Supprimer</button>
                            
                            <Link to={`/update/${user.id}`}>
                                <button>Update</button>
                            </Link>
                            
                            <button onClick={() => handleDetail(user.id)}>
                                {selectedUserId === user.id ? "Fermer" : "Details"}
                            </button>

                            {selectedUserId === user.id && (
                                <div>
                                    <h3>Posts de {user.name} :</h3>
                                    {posts.length === 0 ? (
                                        <p>Chargement...</p>
                                    ) : (
                                        <ul>
                                            {posts.map((post) => (
                                                <li key={post.id}>
                                                    <strong>{post.title}</strong>
                                                    <p>{post.body}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )}
                        </div>
                    )
                })
            }
        </div>
    )
}