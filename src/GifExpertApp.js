import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
    //const categories = ['One punch','Samurai X','Dragon Ball'];

    const [categories, setCategories] = useState(["Dragon Ball"]);

    //const handleAdd = () =>{
    //setCategories(categories.push('Berserk')); asi no, por que cambia el estado del arreglo por un string
    //setCategories( [...categories, 'Berserk'] ); //Con spread se clona el arreglo anterior y se añade el siguiente valor
    //setCategories( cats => [...cats, 'Berserk']);
    //}

    return (
        <>
        
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))}
            </ol>
        </>
    );
};
export default GifExpertApp;
