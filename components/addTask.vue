<script setup>
const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
});

const form = reactive({
  name: "",
});
const error = ref(null);
const save = () => {
  if (!form.name) {
    error.value = "Name is required";
    return;
  }

  props.todo.addTask(form.name);
  form.name = "";
};
</script>

<template>
  <form
    class="p-5 rounded flex items-center gap-3"
    @submit.prevent="save"
  > 
    <input
      type="text"
      placeholder="test"
      v-model="form.name"
      @input="error = null"
      class="p-2 rounded border"
      :class="error ? 'border-red-500' : ''"
    />
    <Button type="submit">Add</Button>
</form>
</template>
