console.groupCollapsed('Exercise 4');

class Subject {
	constructor() {
		this.observers = [];
	}

	addObserver(observer) {
        this.observers.push(observer);
        console.log('Observer added');
	}

	removeObserver(observer) {
		this.observers = this.observers.filter(obs => obs !== observer);
        console.log('Observer removed');
	}

	notifyObservers(data) {
		this.observers.forEach(observer => observer.update());
        console.log('Observers updated');
	}

	async fetchAndNotify() {
		const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
        try {
            const data = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
            const res = await data.json();
            console.log('Async/Await:', res);
        
        //Handle potential errors using a try/catch block. If an error occurs, invoke the update method of observers with an appropriate error message.
        } catch (err) {
            console.log('error:', err);
        }
	}
}

class Observer {
	update(data) {
        // TODO: Handle the received data. If it's an error message, log it.
		// If it's the list of posts, destructure and log the title of the first post.
        console.log('Observer updated');
	}
}

// TODO: Instantiate the Subject, add observers, and call the fetchAndNotify method
const subject = new Subject();
const observer = new Observer();
const observer2 = new Observer();

subject.addObserver(observer);
subject.addObserver(observer2);
subject.removeObserver(observer);

//fetchAndNotify();

console.groupEnd();