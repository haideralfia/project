import React, { useState } from 'react';
import axios from 'axios';

const AddCustomer = () => {
	const [customerId, setCustomerId] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [balance, setBalance] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const newCustomer = {
			id: customerId,
			passcode: password,
			name: name,
			balance: balance,
		};
		axios
			.post('http://localhost:8080/details/adddetails', newCustomer)
			.then((response) => setMessage(response.data))
			.catch((error) => setMessage('Creation failed'));
	};

	return (
		<div className="container-fluid p-3 ml-4">
			<h2>Add a new customer</h2>
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
				<div className="form-group">
					<label>Name</label>
					<input
						type="text"
						className="form-control"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label>Initial Balance</label>
					<input
						type="text"
						className="form-control"
						value={balance}
						onChange={(e) => setBalance(e.target.value)}
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Add Customer
				</button>
			</form>
			{message && <div className="alert alert-info mt-3">{message}</div>}
		</div>
	);
};

export default AddCustomer;
