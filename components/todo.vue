<script setup>
const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-col gap-5 items-center">
    <AddTask :todo="todo" />
    <Task
      v-for="task in props.todo.items"
      :key="task.id"
      :todo="todo"
      :task="task"
    />
  </div>
</template>
