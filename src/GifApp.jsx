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
        
        <h1>Gif Search App</h1>
        <p>¡Bienvenido a nuestra aplicación de búsqueda de GIFs! Aquí encontrarás una amplia selección de GIFs divertidos y emocionantes para compartir con tus amigos y familiares en cualquier momento y en cualquier lugar. Desde reacciones hilarantes hasta momentos épicos, nuestra biblioteca de GIFs tiene algo para todos. ¡Empieza a explorar ahora y encuentra el GIF perfecto para expresar cómo te sientes!</p>
        
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
