import React from "react";
import {Link} from "react-router-dom";

const AppWrapper: React.FC = ()=>{
    return <div>
        <p>Hello, App!</p>
        <Link to={"/auth"}>go to auth!</Link>
    </div>
}

export default AppWrapper;