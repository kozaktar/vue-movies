<template>
  <div>
    <h4 class="font-bold mt-12 pb-2 border-b border-gray-200">
      Latest Movies
    </h4>

    <div class="mt-8 grid lg:grid-cols-3 gap-10">
      <!-- cards go here -->
      <Card v-for="(movie, i) in Movies" :key="i" :movie="movie" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import Card from "@/components/Card.vue";

export default {
  name: "LatestMovies",
  components: {
    Card,
  },

  setup() {
    const store = useStore();
    const state = reactive({});

    const Movies = computed(() => store.getters["Movies/getMovies"]);
    const page = computed(()=>store.getters["Movies/getPage"])

    onMounted(store.dispatch("Movies/fetchMovies",page.value))

    return {
      ...toRefs(state),
      Movies,
    };
  },
};
</script>

<style lang="scss" scoped></style>
