import "./style.css"
import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
const AuthorForm = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");


        let navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const onSubmitHandler = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/product/new', {
            title,price,description
        })
            .then(res => {
                console.log(res);
                if (res.data && res.data.author && res.data.author.title) {
                    console.log(res.data.author.title); // Access the author's name from the response

                } else {
                    console.log("Author name not found in response.");
                }
                // Do something with the response if needed
                    navigate("/")
                setDescription("");
                setPrice("");
                setTitle("")
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



    return(
        <div>
            <h1>Product Manager</h1>
            <h5>Add a new Product</h5>

            <form onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <p className={"errors"} key={index}>{err}</p>)}

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
                <Button type="submit" variant="contained">Submit</Button>



            </form>

        </div>


    );
};
export default AuthorForm;