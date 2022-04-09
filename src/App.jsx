import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
	const [todos, setTodos] = useState([
		{ title: 'Eat', completed: true },
		{ title: 'Sleep', completed: false },
		{ title: 'Learn', completed: true },
		{ title: 'Retreat', completed: false },
	])

	const [incompleteTodos, setIncompleteTodos] = useState([])
	const [completedTodos, setCompletedTodos] = useState([])

	const [hideCompleted, setHideCompleted] = useState(true)
	const [showMsg, setShowMsg] = useState('')

	const [newTodoTitle, setNewTodoTitle] = useState('')

	const toggleTodo = todo => {
		todo.completed = !todo.completed
		setTodos([...todos])
	}

	const toggleCompleted = () => {
		setHideCompleted(!hideCompleted)
	}

	const deleteTodo = clickedTodo => {
		setTodos(todos.filter(todo => todo !== clickedTodo))
	}

	const handleFormSubmit = e => {
		e.preventDefault()

		const newTodo = { title: newTodoTitle, completed: false }

		if (newTodo.title === '') {
			setShowMsg('Please enter at least 3 characters')
		} else {
			setTodos([...todos, newTodo])

			setNewTodoTitle('')
			setShowMsg('')
		}
	}

	useEffect(() => {
		setIncompleteTodos(todos.filter(todo => !todo.completed))
		setCompletedTodos(todos.filter(todo => todo.completed))
	}, [todos])

	useEffect(() => {
		document.title = `Todos (${incompleteTodos.length})`
	}, [incompleteTodos])

	return (
		<div className='App'>
			<div className='wrapper'>
				<h1>Todos</h1>
				<p onClick={toggleCompleted}>
					{hideCompleted ? 'Hide completed' : 'Show completed'}
				</p>

				<div className='todos-container'>
					<ul className='todos-list'>
						{todos.map((todo, index) => (
							<li className={todo.completed ? 'done' : ''} key={index}>
								<input
									type='checkbox'
									checked={todo.completed}
									onChange={() => toggleTodo(todo)}
								/>

								<span className='todo-title'>{todo.title}</span>

								<span className='trashcan' onClick={() => deleteTodo(todo)}>
									🗑
								</span>
							</li>
						))}
					</ul>
				</div>

				<form className='form' onSubmit={handleFormSubmit}>
					<input
						type='text'
						placeholder='Get productive'
						onChange={e => setNewTodoTitle(e.target.value)}
						value={newTodoTitle}
					/>
					<button>Add task</button>
				</form>
				<p className='msg'>{showMsg}</p>
			</div>
		</div>
	)
}

export default App
