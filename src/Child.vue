<template>
  <div>
    Enter street address
    <input v-model="value.address1" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChildComp",
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
});
</script>
