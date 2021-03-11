<template>
  <div>
    <img src="" alt="stew" />
    <div>
      <span>5 Bean Chili Stew</span>
      <span>Recipe by Mario</span>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
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
