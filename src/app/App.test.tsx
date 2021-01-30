import React from 'react'
import { render, screen } from '@testing-library/react'
import '../common/tools/node_modules/@testing-library/jest-dom'
import App from './App'

test('renders learn HOME', () => {
	render(<App />)
	const linkElement = screen.getByText(/HOME/i)
	expect(linkElement).toBeInTheDocument()
})
