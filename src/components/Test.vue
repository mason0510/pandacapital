<script setup>
import {ref} from "vue";

const props = defineProps({
    isOpen: {
      type: Boolean,
      default: true
    },
  msg: {
    type: String,
    default: "hello beijing"
  },
  label: {
    type: Array,
    default: ()=>["one","two","three"]
  }
})

//定义常量
const count = ref(0)

</script>


<template>
  <h1>{{ msg }}</h1>
  <button type="button" @click="count++">count is {{ count }}</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
