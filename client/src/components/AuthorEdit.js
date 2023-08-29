import React, { useEffect, useState } from "react";
import axios from "axios";
import {useParams, Link, useNavigate} from "react-router-dom";

const AuthorEdit = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");
    const { id } = useParams();
    let navigate = useNavigate();
    const [errors, setErrors] = useState([]);


    useEffect(() => {
        // Fetch author data when the component mounts
        axios.get('http://localhost:8000/product/' + id)
            .then(res => {
                setTitle(res.data.author.title);
                setPrice(res.data.author.price);
                setDescription(res.data.author.description);
                console.log(res)
            })
            .catch(error => {
                console.error("Error fetching author data:", error);
            });
    }, [id]);

    const updateAuthor = e => {
        e.preventDefault();
        // Update author name
        axios.patch('http://localhost:8000/product/edit/' + id, {
            title,price,description
        }
        )
            .then(res => {
            console.log("Author updated:", res);
                navigate ("/authors");
            })
            .catch(err => {
                console.log(err.response.data.errors);
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);

            });

    }

    return (
        <div>
            <h1>Favorite Product</h1>
            <Link to="/authors">Home</Link> {/* Using Link component */}
            <h5>Update an Product</h5>

            <form onSubmit={updateAuthor}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}

                <p>
                    <label>Title</label><br/>
                    <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                </p>
                <p>
                    <label>Price</label><br/>
                    <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
                </p>
                <p>
                    <label>Description</label><br/>
                    <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
                </p>
                <input type="submit" value="Update"/>
            </form>
        </div>
    );
};

export default AuthorEdit;
