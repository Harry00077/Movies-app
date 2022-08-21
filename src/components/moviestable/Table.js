import React from "react";
import moviesData from "../../fakeapi/Movie.json"
import { useGenreContext } from "../../genrecontextprovider/activeGenreContext"
import Paginate from "../../components/Paginate";

function Table() {
    const [data, setData] = React.useState(moviesData);
    const [order, setOrder ] = React.useState("asc");
    const [{ activeGenre }] = useGenreContext();
    const [noOfMoviesPerPage, setNoOfMoviesPerPage] = React.useState(3);
    const [presentPage, setpresentPage] = React.useState(1);

    const genreFilteredData = data.filter ((movies)=>{

        if(activeGenre._id === "0166"){
            return movies.genre._id !== activeGenre._id;
        }
        return movies.genre._id === activeGenre._id;
    })
    
    const handleDelete = (id) => {
        // console.log(id);
        const deleteMovies = data.filter((movies) => {
          return movies._id !== id;
        });
        setData(deleteMovies);
      };

      const handleSort = (columnPath) => {
        order === "asc" ? setOrder("dsc") : setOrder("asc");
    
        if (columnPath === "genre") {
          order === "asc"
            ? data.sort((a, b) => {
                return a.genre.name > b.genre.name ? 1 : -1;
              })
            : data.sort((a, b) => {
                return a.genre.name < b.genre.name ? 1 : -1;
              });
    
          setData(data);
          return;
        }
    
        if (order === "asc") {
          data.sort((a, b) => {
            return a[columnPath] > b[columnPath] ? 1 : -1;
          });
        } else {
          data.sort((a, b) => {
            return a[columnPath] < b[columnPath] ? 1 : -1;
          });
        }
        setData(data);
      };

      const startingIndex = presentPage * noOfMoviesPerPage - noOfMoviesPerPage;
      const endingIndex = startingIndex + noOfMoviesPerPage - 1;
      const noOfMovies = genreFilteredData.length;
      const handlePaginate = (pageNo)=>{
        setpresentPage(pageNo);
      }

      const movieToShow = genreFilteredData.filter((Movies, index) => {
        if (index >= startingIndex && index <= endingIndex) {
          return true;
        }
        return false;
      });
    
    return (  
    <>
    {genreFilteredData.length === 0 ? (
        <div>No Movies in the Table</div>
    ) : (
    <div>
        <div>Total Movies {genreFilteredData.length} in the table</div>
        <table className="table">
            <thead>
                <tr>
                    <th onClick={()=> handleSort("title")}>Title</th>
                    <th onClick={()=> handleSort("genre")}>genre</th>
                    <th onClick={()=> handleSort("inStock")}>Stock</th>
                    <th onClick={()=> handleSort("dailyRentalRate")}>Rate</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {movieToShow.map((movies, index)=>{
                    return(
                        <tr key={index}>
                            <td>{movies.title}</td>
                            <td>{movies.genre.name}</td>
                            <td>{movies.inStock}</td>
                            <td>{movies.dailyRentalRate}</td>
                            <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(movies._id)}
                      >
                        Delete
                      </button>
                    </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <Paginate
        handlePaginate={handlePaginate}
        noOfMoviesPerPage={noOfMoviesPerPage}
        noOfMovies={noOfMovies}
        presentPage={presentPage}
        />
    </div>
    )}
    </>
    )
}

export default Table;


