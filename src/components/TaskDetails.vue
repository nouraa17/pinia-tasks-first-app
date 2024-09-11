<template>
  <div class="task">
    <h3>{{task.title}}</h3>
    <div class="icons">
      <i @click="taskStore.deleteTask(task.id)" class="material-icons">delete</i>
      <i @click="taskStore.toggleFav(task.id)" class="material-icons" :class="{active: task.isFav}">favorite</i>
    </div>
  </div>
</template>

<script>
import {useTaskStore} from "@/stores/TaskStore.js";

export default {
  name: "TaskDetails",
  props: ['task'],
  setup(){
    const taskStore = useTaskStore()
    return {
      taskStore
    }
  }
}
</script>

<style scoped>

</style>