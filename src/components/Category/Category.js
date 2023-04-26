import React from "react";

const categories = (props) => {

    return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <th>Category name</th>
                        </thead>
                        <tbody>
                        {props.categories.map(
                            (category) => {
                                return (
                                    <tr>
                                        <td>{category}</td>
                                    </tr>
                                )
                            }
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default categories