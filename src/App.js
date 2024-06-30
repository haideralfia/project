import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import Details from './components/Details';
import Update from './components/Update';
import AddCustomer from './components/AddCustomer';
import DisplayAll from './components/DisplayAll';
import Delete from './components/Delete';
import Home from './components/Home';

function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<div className="container-fluid">
					<div className="row">
						<nav className="col-md-2 d-none d-md-block bg-light sidebar">
							<div className="sidebar-sticky">
								<h4 className="my-4 text-center">
									All Services
								</h4>
								<ul className="nav flex-column">
									<li className="nav-item">
										<a className="nav-link" href="/">
											<i className="fas fa-home"></i> Home
										</a>
									</li>
									<li className="nav-item">
										<a
											className="nav-link active"
											href="/details"
										>
											<i className="fas fa-list"></i>{' '}
											Details
										</a>
									</li>
									<li className="nav-item">
										<a
											className="nav-link"
											href="/addcustomer"
										>
											<i className="fas fa-user-plus"></i>{' '}
											Add Customer
										</a>
									</li>
									<li className="nav-item">
										<a
											className="nav-link active"
											href="/deposit"
										>
											<i className="fas fa-money-check-alt"></i>{' '}
											Deposit
										</a>
									</li>
									<li className="nav-item">
										<a
											className="nav-link"
											href="/withdraw"
										>
											<i className="fas fa-money-bill-alt"></i>{' '}
											Withdraw
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="/update">
											<i className="fas fa-sync-alt"></i>{' '}
											Update
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="/delete">
											<i className="fas fa-trash-alt"></i>{' '}
											Delete
										</a>
									</li>
									<li className="nav-item">
										<a
											className="nav-link"
											href="/displayall"
										>
											<i className="fas fa-trash-alt"></i>{' '}
											Display All
										</a>
									</li>
								</ul>
							</div>
						</nav>
						<main role="main" className="col-md-10 ml-sm-auto px-4">
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/deposit" element={<Deposit />} />
								<Route
									path="/withdraw"
									element={<Withdraw />}
								/>
								<Route path="/details" element={<Details />} />
								<Route path="/update" element={<Update />} />
								<Route
									path="/addcustomer"
									element={<AddCustomer />}
								/>
								<Route
									path="/displayall"
									element={<DisplayAll />}
								/>
								<Route path="/delete" element={<Delete />} />
							</Routes>
						</main>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;
