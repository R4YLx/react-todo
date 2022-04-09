import './App.css'
import { useState } from 'react'

function App() {
	return (
		<div className='App'>
			<div className='wrapper'>
				<h1>Todos</h1>
				<div className='todos-container'>
					<ul className='todos-list'></ul>
				</div>

				<form className='form'>
					<input type='text' placeholder='Get productive' />
					<button>Add task</button>
				</form>
			</div>
		</div>
	)
}

export default App
