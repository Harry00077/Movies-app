import React from "react";
import Table from "../../components/moviestable/Table"
import List from "../../components/genrelist/List";

function Home(){
    return(
        <div>
            <div className="Container my-3">
                <div className="row">
                    <div className="col-sm-3">
                        <List/>
                    </div>
        <div className="col-sm-3">
            <Table/>
        </div>
                </div>
            </div>
        </div>
    )
}
export default Home;