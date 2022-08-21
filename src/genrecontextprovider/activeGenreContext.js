import React from "react";

const CreateActiveGenreStateContext = React.createContext(undefined);
const CreateActiveGenreDispatchContext = React.createContext(undefined);

function ActiveGenreContextProvider({children}) {
    const [activeGenre , setActiveGenre] = React.useState({
        name:"All Movies",
        _id:"0166",
    })


    const handleGenreChange = (activeGenre) =>{
    setActiveGenre(activeGenre);
    }

    return(

        <CreateActiveGenreStateContext.Provider value={{activeGenre}}>
            <CreateActiveGenreDispatchContext.Provider value = {{handleGenreChange}}>
                {children}
            </CreateActiveGenreDispatchContext.Provider>
        </CreateActiveGenreStateContext.Provider>
    )
}

const useActiveGenreStateContext = () =>{
    const context = React.useContext(CreateActiveGenreStateContext);

    if( context === undefined){
        throw Error("You Must Wrapp the app in the GenreContextProvider")
    }
    return context;
}


const useActiveGenreDispatchContext = () =>{
    const context = React.useContext(CreateActiveGenreDispatchContext);

    if( context === undefined){
        throw Error("You Must Wrapp the app in the GenreContextProvider")
    }
    return context;
}

const useGenreContext = () => {
    return [ useActiveGenreStateContext(), useActiveGenreDispatchContext()]
}

export { ActiveGenreContextProvider, useGenreContext }


















