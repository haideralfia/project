// import React, { useState } from 'react';
// import axios from 'axios';

// const DisplayAll = () => {
// 	const [adminId, setAdminId] = useState('');
// 	const [adminPassword, setAdminPassword] = useState('');
// 	const [customers, setCustomers] = useState([]);

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		axios
// 			.get(
// 				`http://localhost:8080/details/getAlldetails/${adminId}/${adminPassword}`
// 			)
// 			.then((response) => setCustomers(response.data))
// 			.catch((error) => setCustomers([]));
// 	};

// 	return (
// 		<div className="container">
// 			<h2>Admin: Enter your credentials to view all customers</h2>
// 			<form onSubmit={handleSubmit}>
// 				<div className="form-group">
// 					<label>Admin Id</label>
// 					<input
// 						type="text"
// 						className="form-control"
// 						value={adminId}
// 						onChange={(e) => setAdminId(e.target.value)}
// 					/>
// 				</div>
// 				<div className="form-group">
// 					<label>Admin Password</label>
// 					<input
// 						type="password"
// 						className="form-control"
// 						value={adminPassword}
// 						onChange={(e) => setAdminPassword(e.target.value)}
// 					/>
// 				</div>
// 				<button type="submit" className="btn btn-primary">
// 					View All Customers
// 				</button>
// 			</form>
// 			{customers.length > 0 && (
// 				<div>
// 					<h3>All Customers</h3>
// 					<ul>
// 						{customers.map((customer, index) => (
// 							<li key={index}>
// 								ID: {customer.id}, Name: {customer.name},
// 								Balance: {customer.balance}
// 							</li>
// 						))}
// 					</ul>
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// export default DisplayAll;

import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const DisplayAll = () => {
	const [adminId, setAdminId] = useState('');
	const [adminPassword, setAdminPassword] = useState('');
	const [customers, setCustomers] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.get(
				`http://localhost:8080/details/getAlldetails/${adminId}/${adminPassword}`
			)
			.then((response) =>
				setCustomers((response) => {
					console.log(response.data);
				})
			)
			.catch((error) => {
				setCustomers([]);
				console.log(error);
			});
	};

	return (
		<div className="container-fluid">
			<div className="row">
				<main
					role="main"
					className="col-md-9 ml-sm-auto col-lg-10 px-4"
				>
					<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
						<h1 className="h2">Display All Customer Details</h1>
						<button className="btn btn-primary">Submit</button>
					</div>

					<h2>Admin: Enter your credentials to view all customers</h2>
					<form onSubmit={handleSubmit}>
						<div className="form-group">
							<label>Admin Id</label>
							<input
								type="text"
								className="form-control"
								value={adminId}
								onChange={(e) => setAdminId(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Admin Password</label>
							<input
								type="password"
								className="form-control"
								value={adminPassword}
								onChange={(e) =>
									setAdminPassword(e.target.value)
								}
							/>
						</div>
						<button type="submit" className="btn btn-primary">
							View All Customers
						</button>
					</form>

					{customers.length > 0 && (
						<div className="mt-4">
							<h3>Details of All Customers:</h3>
							<div className="list-group">
								{customers.map((customer, index) => (
									<div
										key={index}
										className="list-group-item list-group-item-action"
									>
										<p>
											<strong>ID:</strong> {customer.id}
										</p>
										<p>
											<strong>Name:</strong>{' '}
											{customer.name}
										</p>
										<p>
											<strong>Balance:</strong>{' '}
											{customer.balance}
										</p>
									</div>
								))}
							</div>
						</div>
					)}
				</main>
			</div>
		</div>
	);
};

export default DisplayAll;
