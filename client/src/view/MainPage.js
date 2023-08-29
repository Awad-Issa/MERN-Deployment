

import React from "react";
import AuthorList from "../components/AuthorList";
import AuthorForm from "../components/AuthorForm";
import AuthorEdit from "../components/AuthorEdit";
const MainPage = () =>{

    return(
        <>
            <AuthorForm/>
            <AuthorList/>
        </>

    );
};

export default MainPage;