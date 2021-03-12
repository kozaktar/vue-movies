<template>
  <div class="md:col-span-1 md:flex md:justify-end">
    <nav class="text-right">
      <div class="flex justify-between items-center">
        <h1
          class="font-bold uppercase p-4 text-2xl text-gray-600 hover:text-gray-800"
        >
          <a href="/">Food Ninja</a>
        </h1>
        <div class="px-4 cursor-pointer md:hidden" @click="toggleMenu">
            <img src="../assets/menu.svg" alt="" class="w-6">
        </div>
      </div>
      <ul :class="['text-sm mt-3 md:block', {'hidden': hidden}]">
        <li class="py-1">
          <a href="#" class="flex justify-start flex-row-reverse border-r-4 border-primary">
            <img
              src="../assets/home.svg"
              alt="home icon"
              class="w-5 inline-block mx-1"
            />
            <span>Home</span>
          </a>
        </li>
        <li class="py-1">
          <a href="#" class="flex justify-start flex-row-reverse border-r-4 border-transparent">
            <img
              src="../assets/about.svg"
              alt="home icon"
              class="w-5 inline-block mx-1"
            />
            <span>About</span>
          </a>
        </li>
        <li class="py-1">
          <a href="#" class="flex justify-start flex-row-reverse border-r-4 border-transparent">
            <img
              src="../assets/contact.svg"
              alt="home icon"
              class="w-5 inline-block mx-1"
            />
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  name: "Vue",

  setup() {
    const state = reactive({
      hidden: false,
    });

    const toggleMenu=()=>state.hidden=!state.hidden;

    return {
      ...toRefs(state),
      toggleMenu
    };
  },
};
</script>

<style lang="scss" scoped></style>
