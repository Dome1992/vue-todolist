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
                }
            ]
        };
    },
    methods: {
        addTask() {
            if (this.newTask !== "") {
                this.todos.push(this.newTask);
                this.newTask = ""; // Pulisce l'input dopo l'aggiunta della task
            }
        },
        removeTask(index) {
            this.todos.splice(index, 1);
        },
    },
}).mount('#app');




