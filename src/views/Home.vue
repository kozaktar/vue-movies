<template>
  <div class="md:col-span-2">
    <main class="px-16 py-6 h-full">
      <div class="text-primary flex justify-center md:justify-end">
        <a
          href="#"
          class="button border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-300"
          >Log in</a
        >
        <a
          href="#"
          class="ml-2 button border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-300"
          >Sign up</a
        >
      </div>

      <header>
        <h2 class="text-gray-800 text-2xl font-bold">Movies</h2>
        <h3 class="tet-xl font-semibold">For Ninjas</h3>
        <div class="flex justify-center mt-3">
          <input
            type="text"
            placeholder="Search Movies"
            class="rounded-full h-12 border-gray-900 border w-1/2 p-5 outline-none focus-within:border-primary shadow-md"
          />
        </div>
      </header>
      <LatestMovies />

      <div class="mt-4 mx-auto w-44">
        <div
          @click="loadMore"
          class="button bg-secondary-100 text-secondary-200 text-center hover:shadow-inner transform hover:scale-125 hover:opacity-8   0 transition ease-out duration-200"
        >
          Load more
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from "vue";
import LatestMovies from "@/components/LatestMovies.vue";
import { useStore } from "vuex";

export default {
  name: "Home",
  components: {
    LatestMovies,
  },

  setup() {
    const state = reactive({});

    const store = useStore();

    const page = computed(() => store.getters["Movies/getPage"]);

    const loadMore = () => store.dispatch("Movies/fetchMovies", page.value);

    return {
      ...toRefs(state),
      loadMore,
    };
  },
};
</script>

<style lang="postcss" scoped>
.button {
  @apply rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider;
}
</style>
