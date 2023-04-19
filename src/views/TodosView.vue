<template>
  <div class="todos-container">
    <div class="grid-wrapper">
      <div class="zaui-grid header">
        <div></div>
        <div>Id</div>
        <div>What needs doing</div>
        <div>Due Date</div>
      </div>
    </div>
    <div class="grid-wrapper" v-for="item in todos" :key="item.id">
      <div @click="handleTodoClicked(item.id)" class="zaui-grid add-padding pointer">
        <input type="checkbox" :checked="item.completed" />
        <div>{{ item.id }}</div>
        <div>{{ item.todo }}</div>
        <div>{{ item.dueDate }}</div>
      </div>
    </div>
    <div class="grid-wrapper">
      <div class="one-column">
        <router-link class="zaui-button" :to="{ name: 'AddToDo' }">Add a To Do</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import data from '@/data/todos.js'
import { mapState } from 'vuex'
export default {
  name: 'ToDosView',
  computed: {
    ...mapState({
      todos: (state) => state.todos
    })
  },
  mounted() {},
  methods: {
    handleTodoClicked(id) {
      const foundItem = this.todos.find((item) => item.id === id)
      // Equals whatever boolean the completed property currently isnt
      foundItem.completed = !foundItem.completed
    }
  }
}
</script>

<style lang="scss" scoped>
.grid-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}
.zaui-grid {
  display: grid;
  grid-template-columns: 75px 100px 500px 300px;
}
.add-padding {
  padding: 8px;
}
.header {
  font-size: 24px;
  border-bottom: solid 1px;
  margin-bottom: 12px;
}
input[type='checkbox'] {
  height: 16px;
  margin: 0;
  cursor: pointer;
}
.one-column {
  margin-top: 20px;
}
</style>