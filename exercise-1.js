console.groupCollapsed('Exercise 1');
class Subject {

    //Remember that constructors take the "this" keyword as an argument automatically!
	constructor() {
		this.observers = [];
	}
    
	// Add methods here
    addObserver(observer) {
        this.observers.push(observer);
        console.log("Observer added!");
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
        console.log("Observer removed!");
    }

    //When notifyObservers is called on a Subject instance, each observer's update method should be invoked
    notifyObservers() {
        this.observers.forEach(observer => observer.update());
        console.log("Notified observers!");
    }
}

class Observer {
	update() {
		console.log('Observer updated!');
	}
}

//Instantiate the Subject and add multiple observers
const subject = new Subject();
const observer = new Observer();
const observer2 = new Observer();

subject.addObserver(observer);
subject.addObserver(observer2);
subject.removeObserver(observer);

//call notifyObservers and ensure each observer gets updated
subject.notifyObservers();

console.groupEnd();