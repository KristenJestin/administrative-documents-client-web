// imports
import React from 'react'
import { Link } from 'react-router-dom'
import AppRoute from '../../navigation/app-routes'

// main
const Login = (): React.ReactElement => {
	return (
		<section className="hero is-primary is-fullheight">
			<div className="hero-body">
				<div className="container">
					<h1 className="title has-text-centered is-size-2">
						Login Form
					</h1>
					<div className="columns is-centered">
						<div className="column is-5-tablet is-4-desktop is-3-widescreen">
							<form action="" className="box">
								<div className="field">
									<label htmlFor="" className="label">
										Email
									</label>
									<div className="control has-icons-left">
										<input
											type="email"
											placeholder="e.g. bobsmith@gmail.com"
											className="input is-hovered"
										/>
										<span className="icon is-small is-left">
											<i className="fas fa-envelope"></i>
										</span>
									</div>
								</div>
								<div className="field">
									<label htmlFor="" className="label">
										Password
									</label>
									<div className="control has-icons-left">
										<input
											type="password"
											placeholder="*******"
											className="input is-hovered"
										/>
										<span className="icon is-small is-left">
											<i className="fas fa-lock"></i>
										</span>
									</div>
								</div>
								<div className="field">
									<input
										id="input-remember-me"
										className="is-checkradio"
										type="checkbox"
									/>
									<label htmlFor="input-remember-me">
										Remember me
									</label>
								</div>
								<div className="field">
									<Link
										to={AppRoute.HOME}
										className="button is-success">
										Login
									</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

// exports
export default Login
