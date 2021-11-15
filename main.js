/*new app*/

//richiamo un'array di 3 oggetti
const app = new Vue({
    el: '#app',
    data: {
        todos: [{
                text: 'Arrampicarsi sul K2',
                completed: false,
            },
            {
                text: 'Sparare ai fagiani',
                completed: true,
            },
            {
                text: 'Diventare presidente degli USA',
                completed: false,
            },
        ],
        newTodo: '',
    },
    methods: {

        //aggiunta di nuovi todo
        addTodo() {
            if (this.newtodo !== '') {


                this.todos.unshift({
                    text: this.newtodo,
                    completed: false,
                });
                //pulire il placeholder una volta aggiunta la todo
                this.newtodo = '';
            }
        },

        //rimozione todo completati
        removeTodo(indexTodo) {
            this.todos.splice(indexTodo, 1);
        },
    }
})