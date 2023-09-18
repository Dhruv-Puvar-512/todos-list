import React from "react";
import { useState } from "react";
export default function AddTodo(props) {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const submit = (e) => {
		e.preventDefault();
		if (!title || !desc || title === " " || desc === " ") {
			alert("Title or Description Cannot be Blank");
		}
		props.addTodo(title, desc);
		setTitle("");
		setDesc("");
	};
	return (
		<>
			<div className="container m-5">
				<h3 className="text-center">Add Todo</h3>
				<form onSubmit={submit}>
					<div className="container mx-5">
						<div className="mb-3">
							<label htmlFor="Title" className="form-label">
								Title
							</label>
							<input
								type="text"
								className="form-control"
								id="title"
								placeholder="Title"
								value={title}
								onChange={(e) => {
									setTitle(e.target.value);
								}}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="Description" className="form-label">
								Description
							</label>
							<textarea
								className="form-control"
								id="desc"
								value={desc}
								onChange={(e) => {
									setDesc(e.target.value);
								}}
								rows="3"
								placeholder="Description"
							></textarea>
						</div>
						<button type="submit" className="btn btn-success">
							Add
						</button>
					</div>
				</form>
			</div>
		</>
	);
}
