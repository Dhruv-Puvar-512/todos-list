import React from "react";
import TodosElement from "./TodosElement";

export default function Todos(props) {
	let myStyle = {
		minHeight: "20vh",
	};
	return (
		<>
			<div className="container my-5" style={myStyle}>
				<h3 className="text-center">Todos List</h3>
				{props.todos.length === 0
					? "No Todos to display"
					: props.todos.map((todo) => {
							return (
								<TodosElement
									todo={todo}
									key={todo.sno}
									onDelete={props.onDelete}
								/>
							);
					  })}
			</div>
		</>
	);
}
