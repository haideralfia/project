import React, { useState } from 'react';
import axios from 'axios';

const Withdraw = () => {
	const [customerId, setCustomerId] = useState('');
	const [password, setPassword] = useState('');
	const [amount, setAmount] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.put(
				`http://localhost:8080/details/withdraw/${customerId}/${password}/${amount}`
			)
			.then((response) => setMessage(response.data))
			.catch((error) => setMessage('Transaction failed'));
	};

	return (
		<div className="container-fluid p-3 ml-4">
			<h2>Enter your credentials to Withdraw Money</h2>
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
					<label>Enter Money To Withdraw</label>
					<input
						type="text"
						className="form-control"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Withdraw
				</button>
			</form>
			{message && <div className="alert alert-info mt-3">{message}</div>}
		</div>
	);
};

export default Withdraw;
