<template>
  <div class="add">
    <div class="section">
      <router-link class="zaui-button" :to="{ name: 'ToDosView' }">
        &lt;&lt; Back To List</router-link
      >
    </div>
    <div class="section">
      <label for="todo">Add a to do here</label>
      <input
        v-model.trim="newToDo"
        class="zaui-input"
        type="text"
        name="todo"
        placeholder="Enter Your To Do Item Here"
      />
      <span v-if="isErrorMessageVisible" class="error-message">{{ errorMessage }}</span>
    </div>
    <div class="section">
      <label for="dueDate">Set the due date</label><br />
      <date-picker
        name="dueDate"
        format="YYYY-MM-DD"
        value-type="YYYY-MM-DD"
        defaultValue="2023-07-01"
        :value="dueDate"
        @change="handleDateChanged"
      />
    </div>
    <div class="section">
      <button
        :disabled="!isFormValid || isButtonDisabled"
        :class="{ disabled: !isFormValid || isButtonDisabled }"
        @click="handleAddToDoClicked"
        class="zaui-button pointer"
      >
        Add To Do
      </button>
      <div class="success-message" v-if="isSuccessMessageVisible">{{ successMessage }}</div>
    </div>
  </div>
</template>
<script>
import DatePicker from 'vue-datepicker-next'
import 'vue-datepicker-next/index.css'
export default {
  name: 'AddToDoView',
  components: { DatePicker },
  data() {
    return {
      newToDo: '',
      dueDate: '',
      errorMessage: '',
      isErrorMessageVisible: false,
      successMessage: '',
      isSuccessMessageVisible: false,
      isButtonDisabled: false
    }
  },
  props: {
    minimumNumberOfCharcters: {
      type: Number,
      default: 10
    }
  },
  computed: {
    isFormValid() {
      return this.newToDo.length > this.minimumNumberOfCharcters && this.dueDate
    }
  },
  methods: {
    async handleAddToDoClicked() {
      // Disable the button so that it can't be double clicked
      this.isButtonDisabled = true
      // Don't allow invalidate forms to be submitted
      if (this.validateForm) {
        this.errorMessage = ''
        this.isErrorMessageVisible = false
        const result = await this.$store.dispatch('addToDo', {
          todo: this.newToDo,
          dueDate: this.dueDate,
          isCompleted: false
        })
        if (result) {
          // Hide the success messsage after 3 seconds
          setTimeout(() => {
            this.isSuccessMessageVisible = false
          }, 3000)
          this.successMessage = 'Successfully Added Your To Do'
          this.isSuccessMessageVisible = true
          this.isButtonDisabled = false
          this.newToDo = ''
        }
      }
    },
    handleDateChanged(event) {
      this.dueDate = event
    },
    validateForm() {
      let result = true
      if (this.newToDo.length < this.minimumNumberOfCharcters) {
        this.errorMessage = 'You need to add more characters to your to do'
        this.isErrorMessageVisible = true
        result = false
      }
      if (!this.dueDate) {
        this.errorMessage += 'Please select a due date'
        this.isErrorMessageVisible = true
        result = false
      }
      return result
    }
  }
}
</script>
<style lang="scss" scoped>
.add {
  max-width: 600px;
  margin: 0 auto;
}
.section {
  margin-top: 16px;
  width: 100%;
}
.zaui-input {
  width: 100%;
  height: 36px;
  font-size: 20px;
  padding: 4px 12px;
  color: #999;
  margin-top: 12px;
  &:focus-visible {
    outline: none;
  }
}
.zaui-button {
  width: 400px;
  padding: 8px;
  background-color: #ebbaef;
  border-radius: 4px;
  border: solid 1px transparent;
  font-family: inherit;
}
a {
  text-decoration: none;
  &:visited {
    color: black;
  }
}
.error-message {
  color: red;
  margin-top: 4px;
  font-size: 12px;
}
.success-message {
  margin-top: 8px;
  font-size: 12px;
}
.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>