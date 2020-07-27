import React, { useContext } from "react";
import DataAreaContext from "./components/DataAreaContext";

const SearchName = () => {
    const context = useContext(DataAreaContext);

    return (
        <div>

            <div id="searchForm" className="row justify-content-center">

                <div className="form-inline input-group-sm mb-3">
                    <div className="input-group-prepend">

                    </div>
                    <input
                        id="myInput"
                        onChange={e => context.handleSearchChange(e)}
                        type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="Search" />
                </div>

            </div>
        </div>
    )
}

export default SearchName;