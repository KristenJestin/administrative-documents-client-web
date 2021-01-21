import React from 'react'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from '../components/alert-template.component'
import Navigator from '../navigation/navigator'

const App = (): React.ReactElement => (
	<AlertProvider
		template={AlertTemplate}
		position={positions.TOP_RIGHT}
		transition={transitions.FADE}
		timeout={7500}>
		<Navigator />
	</AlertProvider>
)

export default App
