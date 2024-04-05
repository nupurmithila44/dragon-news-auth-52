import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LiftSide = () => {

    const [categories, setCategories]=useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className="space-y-11">
           <h2 className="text-2xl">all categories</h2>
           {
            categories.map(categorie=> <Link 
                className="block ml-5 text-xl font-semibold"
                to={`/category/${categorie.id}`}
                 key={categorie.id}
                 >{categorie.name}</Link>)
           }
        </div>
    );
};

export default LiftSide;