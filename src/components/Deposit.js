// import React, { useState } from 'react';
// import axios from 'axios';

// const Deposit = () => {
// 	const [customerId, setCustomerId] = useState('');
// 	const [password, setPassword] = useState('');
// 	const [amount, setAmount] = useState('');
// 	const [message, setMessage] = useState('');

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		console.log(customerId, password, amount);
// 		axios
// 			.put(
// 				`http://localhost:8080/details/deposit/${customerId}/${password}/${amount}`
// 			)
// 			.then((response) => setMessage(response.data))
// 			.catch((error) => setMessage('Transaction failed'));
// 	};

// 	return (
// 		<div className="container">
// 			<h2>Enter your credentials to Deposit Money</h2>
// 			<form onSubmit={handleSubmit}>
// 				<div className="form-group">
// 					<label>Customer Id</label>
// 					<input
// 						type="text"
// 						className="form-control"
// 						value={customerId}
// 						onChange={(e) => setCustomerId(e.target.value)}
// 					/>
// 				</div>
// 				<div className="form-group">
// 					<label>Customer Password</label>
// 					<input
// 						type="password"
// 						className="form-control"
// 						value={password}
// 						onChange={(e) => setPassword(e.target.value)}
// 					/>
// 				</div>
// 				<div className="form-group">
// 					<label>Enter Money To Deposit</label>
// 					<input
// 						type="text"
// 						className="form-control"
// 						value={amount}
// 						onChange={(e) => setAmount(e.target.value)}
// 					/>
// 				</div>
// 				<button type="submit" className="btn btn-primary">
// 					Deposit
// 				</button>
// 			</form>
// 			{message && <p>{message}</p>}
// 		</div>
// 	);
// };

// export default Deposit;

import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Deposit = () => {
	const [customerId, setCustomerId] = useState('');
	const [password, setPassword] = useState('');
	const [amount, setAmount] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(customerId, password, amount);
		axios
			.put(
				`http://localhost:8080/details/deposit/${customerId}/${password}/${amount}`
			)
			.then((response) => setMessage(response.data))
			.catch((error) => setMessage('Transaction failed'));
	};

	return (
		<div className="container-fluid">
			<div className="row">
				<main
					role="main"
					className="col-md-9 ml-sm-auto col-lg-10 px-4"
				>
					<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
						<h1 className="h2">
							Enter your credentials to Deposit Money
						</h1>
					</div>

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
							<label>Enter Money To Deposit</label>
							<input
								type="text"
								className="form-control"
								value={amount}
								onChange={(e) => setAmount(e.target.value)}
							/>
						</div>
						<button type="submit" className="btn btn-primary">
							Deposit
						</button>
					</form>
					{message && (
						<div className="alert alert-info mt-3">{message}</div>
					)}
				</main>
			</div>
		</div>
	);
};

export default Deposit;
