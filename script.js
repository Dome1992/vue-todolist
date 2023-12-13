const { createApp } = Vue;

createApp({
    data() {
        return {
            newTask: "",
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                },
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Partita  18:30',
                    done: true
                },
                {
                    text: 'Fare la doccia',
                    done: true
                }
            ]
        };
    },
    methods: {
        addTask() {
            if (this.newTask !== "") {
                this.todos.push({text: this.newTask});
                this.newTask = ""; // Pulisce l'input dopo l'aggiunta della task
            }
        },
        removeTask(index) {
            this.todos.splice(index, 1);
        },
    },
}).mount('#app');




