import React, { useState } from 'react';
import axios from 'axios';

const Details = () => {
	const [customerId, setCustomerId] = useState('');
	const [password, setPassword] = useState('');
	const [details, setDetails] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.get(
				`http://localhost:8080/details/getdetail/${customerId}/${password}`
			)
			.then((response) => setDetails(response.data))
			.catch((error) => setDetails('Invalid credentials'));
	};

	return (
		<div className="container-fluid p-3 ml-4">
			<h2>Enter your credentials to view your details</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Customer Id</label>
					<input
						type="text"
						className="form-control"
						value={customerId}
						onChange={(e) => setCustomerId(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label>Customer Password</label>
					<input
						type="password"
						className="form-control"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					View Details
				</button>
			</form>
			{details && (
				<div>
					<h3>Customer Details</h3>
					<p>ID: {details.id}</p>
					<p>Name: {details.name}</p>
					<p>Balance: {details.balance}</p>
				</div>
			)}
		</div>
	);
};

export default Details;
