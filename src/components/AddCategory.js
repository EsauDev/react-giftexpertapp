import React, { useState } from 'react';
import {PropTypes} from 'prop-types';

export const AddCategory = ( { setCategories } ) => {

    //const [inputValue, setInputValue] = useState(); //undefined
    const [inputValue, setInputValue] = useState(''); //String vacio

    const handleInputchange = (e) => {
        setInputValue( e.target.value );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 2){
            setCategories( cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit = { handleSubmit }>
            <h2>Add Category</h2>
            <input 
                type="text"
                value = { inputValue }
                onChange = { handleInputchange }
            />
        </form>                    
    )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func
}


