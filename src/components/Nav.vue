<template>
  <div>
    <nav>
      <div>
        <h1>
          <a href="/">Food Ninja</a>
        </h1>
      </div>
      <ul>
        <li>
          <a href="#">
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>About</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
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
