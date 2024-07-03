import { useState } from 'react';

export const AddCategory = ({ onNewCategory } ) => {
    console.log("onNEWCATEGORY",onNewCategory)
    const [inputValue, setInputValue] = useState('On Punch');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);// what i write in input
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        
       if (inputValue.trim().length  <= 1) return// nothing written in text box , dont do anything
       
       // setCategories(categories => [...categories, inputValue]);ç
       onNewCategory (inputValue.trim());
       setInputValue('')// clean the input
    };

    return (
        <form onSubmit={handleSubmit} aria-label="form">
            <input 
                type="text" 
                placeholder="Add new category"
                value={inputValue} 
                onChange={handleInputChange}
            />
     </form>
    );
};

