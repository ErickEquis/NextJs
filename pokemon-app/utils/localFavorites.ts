
// Manejo de favoritos
// Graba en LocalStorage
const toggleFavorite = ( id: number ) => {

    // Transforma el objeto JSON en el LocalStorage
    let favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]' )

    // Si encuentra el 'id' en el arreglo 'favorites' 
    if (  favorites.includes(id) ) {
        // Lo elimina
        favorites = favorites.filter( pokeId => pokeId != id )
    } else {
        // Lo agrega
        favorites.push( id )
    }

    // Guarda el nuevo arreglo
    // 'stringify' convierte a un JSON/String
    localStorage.setItem('favorites', JSON.stringify( favorites ))
}

// Verificar si existe en LocalStorage
// Regresa booleano por '.includes'
const existInFavorite = ( id: number ): boolean => {
    
    // Obtiene el ebjeto del JSON en el LocalStorage
    const favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]' )

    return favorites.includes( id )
}

export default{
    toggleFavorite,
    existInFavorite
}
