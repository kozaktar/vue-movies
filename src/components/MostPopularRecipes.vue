<template>
  <h4>Most Popular</h4>

  <div>
    <Card />
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import Card from "@/components/Card.vue";

export default {
  name: "MostPopularRecipes",
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
