<template>
  <child-comp v-model="homeAddress" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ChildComp from "./Child.vue";

export default defineComponent({
  name: "ParentComp",
  components: {
    ChildComp,
  },
  data: () => ({
    homeAddress: { address1: "123 Main st" },
  }),
});
</script>
