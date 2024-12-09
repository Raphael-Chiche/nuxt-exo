<script setup>
const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
  todo: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="border rounded flex justify-between gap-2 p-4 w-1/2">
    <div class="flex gap-2 items-center">
      <input type="checkbox" v-model="props.task.done"/>
      <p>{{ props.task.name }}</p>
    </div>
    <span class="text-" @click="todo.removeTask(props.task.id)">Delete</span>
  </div>
</template>
