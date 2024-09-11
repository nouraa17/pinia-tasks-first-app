import { defineStore } from 'pinia'

export const useTaskStore= defineStore('taskStore',{                  //unique name , object
    state: () => ({
        tasks : [
            // {
            //     id : 1,
            //     title: 'Study Laravel',
            //     isFav:true,
            // },
            // {
            //     id : 2,
            //     title: 'Study Vue',
            //     isFav:false,
            // }
        ],
        // name: 'Nourr',
        loading : false,
    }),

    getters:{
        favs(){
            return this.tasks.filter(task => task.isFav)
        },
        favCount(){
            return this.tasks.reduce((previousValue,currentValue) => {
                return currentValue.isFav ? previousValue + 1 : previousValue;

            },0)
        },
        totalCount: (state) => {
            return state.tasks.length
        }
    },

    actions: {
        async getTasks (){
            this.loading = true

            const response = await fetch('http://localhost:3000/tasks')
            const data = await response.json()
            this.tasks = data

            this.loading = false
        },
        async addTask(task){
            this.tasks.push(task)

            const response = await fetch('http://localhost:3000/tasks',
                {
                    method: 'POST',
                    body: JSON.stringify(task),
                    headers: {
                        'Content-type' : 'application/json'
                    }
                })
            if(response.error){
                console.log(response.error)
            }
        },
        async deleteTask(id){
            this.tasks = this.tasks.filter(task => {
                return task.id !== id
            })

            const response = await fetch('http://localhost:3000/tasks/' + id,
                {
                    method: 'DELETE',
                })
            if(response.error){
                console.log(response.error)
            }
        },
        async toggleFav(id){
            const task = this.tasks.find(t => t.id === id)
            task.isFav = !task.isFav

            const response = await fetch('http://localhost:3000/tasks/' + id,
                {
                    method: 'PATCH',
                    body: JSON.stringify({isFav: task.isFav}),
                    headers: {
                        'Content-type' : 'application/json'
                    }
                })
            if(response.error){
                console.log(response.error)
            }
        },
    }
})