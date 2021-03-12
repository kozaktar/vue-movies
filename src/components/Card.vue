<template>
  <div class="card">
    <img
      src="@/assets/logo.png"
      alt="stew"
      class="w-full h-32 sm:h-48 object-cover"
    />
    <div class="m-4">
      <span class="font-bold">5 Bean Chili Stew</span>
      <span class="block text-gray-500 text-sm">Recipe by Mario</span>
    </div>
    <div class="badge">
      <svg class="h-4 inline-block"
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
      </svg>
      <span>
        25 mins
      </span>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

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

<style lang="postcss" scoped>
.badge {
  @apply bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2 p-2;
}
,
.card {
  @apply bg-white overflow-hidden rounded shadow-md relative hover:shadow-xl;
}
</style>
