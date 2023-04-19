import { createStore } from 'vuex'

const useStore = createStore({
    state: {
        todos: [
            {
                id: 1,
                todo: 'Create VueJs Tutorial',
                completed: true,
                dueDate: '2030-05-01'
            },
            {
                id: 2,
                todo: 'Do some Code Reviews',
                completed: false,
                dueDate: '2023-06-01'
            },
            {
                id: 3,
                todo: 'Read all your emails',
                completed: false,
                dueDate: '2023-08-01'
            },
            {
                id: 4,
                todo: 'Do 16 Human Resources reviews for your entire team',
                completed: false,
                dueDate: '2023-07-01'
            }
        ]
    },
    mutations: {
        ADDTODO(state, payload) {
            state.todos.push(payload)
        }
    },
    actions: {
        addToDo({ commit, state }, payload) {
            // Sort the items by id in descending order
            const sorted = state.todos.sort((a, b) => b.id - a.id)
            const newId = sorted[0].id + 1
            // set the id here on the payload    
            payload.id = newId
            return new Promise((resolve) => {
                setTimeout(() => {
                    commit('ADDTODO', payload)
                    resolve(true)
                }, 3000)
            })
        }
    },
    getters: {}
})
export default useStore
