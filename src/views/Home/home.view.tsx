import React from 'react'
import { useAlert } from 'react-alert'

const Home = (): React.ReactElement => {
	const alert = useAlert()
	alert.success('Test toast message')
	return <div>HOME</div>
}

export default Home
