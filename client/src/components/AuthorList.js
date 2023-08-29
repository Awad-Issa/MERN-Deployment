import "./style.css"
import React, {useEffect, useState} from "react";
import axios from "axios";
import AuthorEdit from "./AuthorEdit";
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";


const AuthorList = (props) => {


    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    let navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/products')
            .then(res => {
                setProducts(res.data.Products);
                setLoaded(true);
            })

            .catch(err => console.error("tototototooto"));

    }, [products]);


    const deletePerson = (personId) => {
            axios.delete('http://localhost:8000/product/delete/' + personId)
            .then(res => {
                console.log("works!!")
            })
            .catch(err => console.error(err));
    }


    return (
        <div>
            <hr/>
            <br/>
            <table>
                <tr>
                    <th>Product</th>
                    <th>Actions available</th>
                </tr>
                {products.map(author => (
                    <tr key={author.id}>
                        <td>{author.title}</td>
                        <td>
                            <Button variant="contained"  onClick={(e)=>navigate("/authors/edit/"+author._id)}>Edit</Button>
                            <Button  variant="contained" color="error"  onClick={(e)=>  deletePerson(author._id)}>Delete</Button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
};
export default AuthorList;