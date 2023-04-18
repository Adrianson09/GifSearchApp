import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifApp = () => {

  const [categories, setCategories] = useState([ 'Dragon Ball' ]);

  const onAddCategory = (newCategory) => {
  
    if( categories.includes(newCategory)) return;
    
    setCategories([newCategory,...categories ])

  }

  return (
    <>
        
        <h1>Gif App</h1>
        
        <AddCategory 
            onNewCategory={ event => onAddCategory(event)}
        />
     
      
          {
            categories.map((category) => (
              <GifGrid
                key={category}
                category={category}
              />
             ))
          }  
   
    </>
  )
}
