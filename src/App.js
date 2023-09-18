import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
// import { Router, Route, Routes } from "react-router";
// import Contact from "./components/Contact";
// import About from "./components/About";

import { useEffect, useState } from "react";
function App() {
	let initTodo;
	if (localStorage.getItem("todos") === null) {
		initTodo = [];
	} else {
		initTodo = JSON.parse(localStorage.getItem("todos"));
	}

	const addTodo = (title, desc) => {
		let sno;
		if (todos.length === 0) {
			sno = 0;
		} else {
			sno = todos[todos.length - 1].sno + 1;
		}
		const newTodo = {
			sno: sno,
			title: title,
			desc: desc,
		};
		setTodos([...todos, newTodo]);
		// console.log(newTodo);
		localStorage.setItem("todos", JSON.stringify(todos));
	};

	const onDelete = (todo) => {
		// console.log("I am on delete of ", todo);
		// let index = todos.indexOf(todo);
		// todo.splice(index, 1); Deleting this in react doesn't work
		setTodos(
			todos.filter((e) => {
				return e !== todo;
			})
		);
		localStorage.setItem("todos", JSON.stringify(todos));
	};

	// const [todos, setTodos] = useState([initTodo]);
	const [todos, setTodos] = useState(initTodo);
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	return (
		<>
			<Navbar title="My-todos" />
			<AddTodo addTodo={addTodo} />
			<Todos todos={todos} onDelete={onDelete} />
			<Footer />
		</>
	);
}

export default App;
