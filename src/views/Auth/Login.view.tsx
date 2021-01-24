// imports
import React, { useState } from 'react'
import { AxiosError } from 'axios'
import { useAlert } from 'react-alert'
import { useHistory } from 'react-router-dom'

import { ErrorResponse } from '../../models/response.model'
import { authenticate } from '../../services/auth.service'
import { useAuth } from '../../contexts/auth.context'
import AppRoute from '../../navigations/app-routes'

// main
const Login = (): React.ReactElement => {
	// hooks
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const alert = useAlert()
	const { setUser } = useAuth()
	const history = useHistory()

	// actions
	const clickLogin = async () => {
		try {
			const response = await authenticate({
				username,
				password,
			})
			setUser(response.data.result)
			alert.success(`Vous êtes maintenant connecté!`)
			history.push(AppRoute.HOME)
		} catch (error) {
			const { response }: AxiosError<ErrorResponse> = error
			alert.error(
				`Les informations de connexion ne sont pas valides (${response?.data?.title}).`
			)
		}
	}

	return (
		<section className="hero is-primary is-fullheight">
			<div className="hero-body">
				<div className="container">
					<h1 className="title has-text-centered is-size-2">
						Login Form
					</h1>
					<div className="columns is-centered">
						<div className="column is-5-tablet is-4-desktop is-3-widescreen">
							<div className="box">
								<div className="field">
									<label htmlFor="" className="label">
										Email
									</label>
									<div className="control has-icons-left">
										<input
											placeholder="e.g. bobsmith@gmail.com"
											className="input is-hovered"
											value={username}
											onChange={(e) =>
												setUsername(e.target.value)
											}
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
											value={password}
											onChange={(e) =>
												setPassword(e.target.value)
											}
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
									<button
										className="button is-success"
										onClick={clickLogin}>
										Login
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

// exports
export default Login
