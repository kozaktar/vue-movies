<template>
  <div>
    <h4>Latest Recipes</h4>

    <div>
      <!-- cards go here -->
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
