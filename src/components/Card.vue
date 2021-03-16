<template>
  <div class="card">
    <img
      :src="imagePath"
      :alt="movie.label"
      class="w-full h-32 sm:h-48 object-cover"
    />
    <div class="m-4">
      <span class="font-bold">{{ movie.label }}</span>
      <span class="block text-gray-500 text-sm">{{ movie.date }}</span>
    </div>
    <div class="badge" v-if="movie.rating > 0">
      <!-- <svg
        class="h-4 inline-block"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="{2}"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg> -->
      <span> {{ movie.rating }}/10</span>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "Card",
  props: {
    movie: {
      type: Object,
      default: () => {
        return {
          label: "",
          date: "",
          image: "",
          rating: 0,
        };
      },
    },
  },
  setup(props) {
    const imagePath = computed(
      () => `https://image.tmdb.org/t/p/w500/${props.movie.image}`
    );

    return {
      imagePath,
    };
  },
};
</script>

<style lang="postcss" scoped>
.badge {
  @apply bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2 p-2;
}
,
.card {
  @apply bg-white overflow-hidden rounded shadow-md relative hover:shadow-xl;
}
</style>
