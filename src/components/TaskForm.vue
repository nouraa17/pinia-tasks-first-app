<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="I need to..." v-model="newTask">
    <button type="submit">Add</button>
  </form>
</template>

<script>
import {useTaskStore} from "@/stores/TaskStore.js";
import {ref} from "vue";

export default {
  name: "TaskForm",
  setup(){
    const taskStore = useTaskStore()
    const newTask = ref('')
    const handleSubmit = () => {
      if (newTask.value.length > 0){
        taskStore.addTask({
          id : Math.floor(Math.random() * 1000),
          title : newTask.value,
          isFav : false,
        })
        newTask.value = ''
      }
    }
    return {
      handleSubmit,
      newTask,
    }
  },
}
</script>

<style scoped>

</style>