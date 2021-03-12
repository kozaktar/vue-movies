<template>
  <div>
    <h4 class="font-bold mt-12 pb-2 border-b border-gray-200">
      Latest Recipes
    </h4>

    <div class="mt-8 grid lg:grid-cols-3 gap-10">
      <!-- cards go here -->
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import Card from "@/components/Card.vue";

export default {
  name: "LatestRecipes",
  components: {
    Card,
  },

  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped></style>
