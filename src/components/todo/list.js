import React,{useContext,useState} from "react";
import { Button, Card, Elevation } from '@blueprintjs/core';
import ReactPaginate from "react-paginate";
import {SettingsContext} from "../../context/settingsContext"
import './list.css'
function List(props) {
const settings = useContext(SettingsContext)
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = settings.numOfItems;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = props.list
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((item) => {
      return (
        
        <div key={item.id} style={{width:"650px" ,margin:"15px"} }>
           <Card interactive={true} elevation={Elevation.TWO}>
          <p>{item.text}</p>
          <p>
            <small>Assigned to: {item.assignee}</small>
          </p>
          <p>
            <small>Difficulty: {item.difficulty}</small>
          </p>
         
          <Button onClick={() => props.toggleComplete(item.id)}>
          Complete: {item.complete.toString()}</Button>
          </Card>
        </div>
      );
    });
    const pageCount = Math.ceil(props.list.length / usersPerPage);
    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };
  return (
    <>
  
    
        {displayUsers}
        <ReactPaginate
        
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </>
  );
}

export default List;