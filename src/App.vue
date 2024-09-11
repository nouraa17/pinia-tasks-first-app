<template>
  <main>
    <!-- heading -->
    <header>
      <div class="center" style="display: flex;">
        <img src="./assets/Pinialogo.svg.png" alt="pinia logo">
        <h1>Pinia Tasks</h1>
      </div>
<!--      <h1>{{ taskStore.name }}</h1>-->

      <!-- new task form -->
      <div class="new-task-form">
        <TaskForm/>
      </div>
    </header>

    <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Favourite tasks</button>
    </nav>

    <div class="loading" v-if="loading">
      Loading Tasks...
    </div>

    <!-- tasks list -->
    <div class="task-list" v-if="filter==='all'">
      <p>All tasks</p>
      <p style="color: #628d00;">You have {{totalCount}} tasks left to do</p>
      <div v-for="task in tasks">
<!--        <p>{{task.title}}</p>-->
        <TaskDetails :task="task"/>
      </div>

    </div>
    <div class="task-list" v-if="filter==='favs'">
      <p>Favorite tasks</p>
      <p style="color: #ff005d;">You have {{favCount}} favs left to do</p>
      <div v-for="task in favs">
        <TaskDetails :task="task"/>
      </div>
    </div>

    <button class="reset-button" @click="taskStore.$reset">Reset State</button>
  </main>
</template>

<script>
import TaskDetails from "@/components/TaskDetails.vue";
import TaskForm from "@/components/TaskForm.vue";
import {useTaskStore} from "@/stores/TaskStore";
import {ref} from "vue";
import {storeToRefs} from "pinia";

export default {
  components :{
    TaskDetails,
    TaskForm,
  },
  setup(){
    const taskStore = useTaskStore()
    const filter = ref('all')
    const { tasks, loading, favs, favCount,totalCount } = storeToRefs(taskStore)

    // fetch tasks

    taskStore.getTasks()

    return {
      taskStore,
      filter,
      ///////////////////
      tasks, loading, favs, favCount,totalCount
    }
  }
}
</script>

<style>

</style>