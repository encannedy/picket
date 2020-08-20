import React from "react";

const styles = {
    background: 'white',
    color: 'navy',
    borderBottom: 'solid red',
    textAlign: 'center',
    padding: 30
}

function Jumbotron() {
    return (
        <div className="jumbotron" style={styles}>
        <h1>Employee Directory</h1>
        <p>Click 'sort' to sort by first name or search using the input field.
        </p>
      </div>       
    )
}

export default Jumbotron;