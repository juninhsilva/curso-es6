//observer pattern
class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(f) {
        setTimeout(() => {
            console.log('subscribing');
            this.observers.push(f)
        }, 3000);
    }

    unsubscribe(f) {
        setTimeout(() => {
            console.log('unsubscribing');
            this.observers = this.observers.filter(subscriber => subscriber !== f)
        }, 3000);
    }

    notify(data) {
        this.observers.forEach(observer => observer(data));
    }
}

const o = new Observable();
const logData = data => console.log('Subscriber 1: ', data);
const logData1 = data => console.log('Subscriber 2: ', data);
const logData2 = data => console.log('Subscriber 3: ', data);

o.subscribe(logData);
o.subscribe(logData1);
o.subscribe(logData2);

o.notify('entered');

o.unsubscribe(logData);

o.notify('entered');


