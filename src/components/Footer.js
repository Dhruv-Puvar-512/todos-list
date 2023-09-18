import React from "react";

export default function Footer() {
	// let footerStyle = {
	// 	position: " relative",
	// 	top: " 15vh",
	// 	width: " 100%",
	// };
	return (
		<>
			<footer
				// style={footerStyle}
				className="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"
			>
				<p className="col-md-4 mb-0 text-muted">© 2023 Todo-Company, Inc</p>

				<ul className="nav col-md-4 justify-content-end">
					<li className="nav-item">
						<a href="/" className="nav-link px-2 text-muted">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a href="/" className="nav-link px-2 text-muted">
							About
						</a>
					</li>
				</ul>
			</footer>
		</>
	);
}
