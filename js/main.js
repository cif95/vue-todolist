// Descrizione:
// Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// text, una stringa che indica il testo del todo
// done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
const app = new Vue({
	el:'#app',
	data: {
		string: '',
		todos: [
			{
				text : 'Plan a trip',
				done : false
			},
			{
				text : 'Buy theater tickets',
				done : true
			},
			{
				text : 'Learn german',
				done : false
			},			{
				text : 'Plan a meetup',
				done : false
			},
			{
				text : 'Buy cinema tickets',
				done : true
			},
			{
				text : 'Workout 3 times a week',
				done : false
			}
		]
	},
	methods: {
		/**
		 * function that adds a new todo obj to todos array
		 * @param {*} text new todo text
		 */
		addTodo(text){
			if (!text.trim() == ''){
				const newTodo = {
					text : text,
					done : false
				};
				this.todos.push(newTodo);
				this.string = '';
			} else {
				console.log('empty text, no more new todo!')
			}
		},
		/**
		 * function that removes a todo obj from todos array
		 * @param {*} todoIndex index of todo obj to remove
		 */
		removeTodo(todoIndex){
			if( todoIndex >=! this.todos.length ) this.todos.splice(todoIndex, 1);
			else console.log('not valid index');
		},
		// function that clears all todo list
		clearAll(){
			this.todos.splice(0);
		},
		// function that checks if todo list has at least 1 item and returns true
		isList(){
			if (this.todos.length > 0) return true;
		},
		/**
		 * function that toggles 'done' property of an object
		 * @param {*} obj object whose 'done' property will be toggled
		 */
		toggleDone(obj){
			obj.done = !obj.done;
		}
	}
});