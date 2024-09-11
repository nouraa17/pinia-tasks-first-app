<template>
  <main>
    <!-- heading -->
    <header>
      <img src="./assets/Pinialogo.svg.png" alt="pinia logo">
      <h1>Pinia Tasks</h1>
<!--      <h1>{{ taskStore.name }}</h1>-->
    </header>

    <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Favourite tasks</button>
    </nav>

    <!-- tasks list -->
    <div class="task-list" v-if="filter==='all'">
      <p>All tasks</p>
      <p style="color: #628d00;">You have {{taskStore.totalCount}} tasks left to do</p>
      <div v-for="task in taskStore.tasks">
<!--        <p>{{task.title}}</p>-->
        <TaskDetails :task="task"/>
      </div>

    </div>
    <div class="task-list" v-if="filter==='favs'">
      <p>Favorite tasks</p>
      <p style="color: #ff0099;">You have {{taskStore.favCount}} favs left to do</p>
      <div v-for="task in taskStore.favs">
        <TaskDetails :task="task"/>
      </div>
    </div>

  </main>
</template>

<script>
import TaskDetails from "@/components/TaskDetails.vue";
import {useTaskStore} from "@/stores/TaskStore";
import {ref} from "vue";

export default {
  components :{
    TaskDetails,
  },
  setup(){
    const taskStore = useTaskStore()
    const filter = ref('all')
    return {
      taskStore,
      filter
    }
  }
}
</script>

<style>

</style>