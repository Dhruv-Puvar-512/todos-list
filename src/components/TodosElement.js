import React from "react";

export default function TodosElement({ todo, onDelete }) {
	return (
		<>
			<div className="container m-3">
				<h4>{todo.title}</h4>
				<p>{todo.desc}</p>
				<button className="btn btn-danger" onClick={() => onDelete(todo)}>
					Delete
				</button>
				<hr />
			</div>
		</>
	);
}
