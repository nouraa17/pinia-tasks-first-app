import { defineStore } from 'pinia'

export const useTaskStore= defineStore('taskStore',{                  //unique name , object
    state: () => ({
        tasks : [
            {
                id : 1,
                title: 'Study Laravel',
                isFav:true,
            },
            {
                id : 2,
                title: 'Study Vue',
                isFav:false,
            }
        ],
        // name: 'Nourr',
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
        addTask(task){
            this.tasks.push(task)
        },
        deleteTask(id){
            this.tasks = this.tasks.filter(task => {
                return task.id !== id
            })
        },
        toggleFav(id){
            const task = this.tasks.find(t => t.id === id)
            task.isFav = !task.isFav
        },
    }
})