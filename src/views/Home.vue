<template>
    <div class="md:col-span-2">

      <main class="px-16 py-6 h-full">
        <div class="text-primary flex justify-center md:justify-end">
          <a href="#" class="button border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-300">Log in</a>
          <a href="#" class="ml-2 button border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-300">Sign up</a>
        </div>

        <header>
          <h2 class="text-gray-800 text-2xl font-bold">Recipes</h2>
          <h3 class="tet-xl font-semibold">For Ninjas</h3>
          <div class="flex justify-center mt-3">
              <input type="text" placeholder="Search recipes" class="rounded-full h-12 border-gray-900 border w-1/2 p-5 outline-none focus-within:border-primary shadow-md">
          </div>
        </header>
        <LatestRecipes/>

        <div class="mt-4 mx-auto w-44">
          <div class="button bg-secondary-100 text-secondary-200 text-center hover:shadow-inner transform hover:scale-125 hover:opacity-8   0 transition ease-out duration-200">
            Load more
            </div>
        </div>
      </main>
    </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import LatestRecipes from '@/components/LatestRecipes.vue';

export default {
    name:'Home',
    components:{
        LatestRecipes,

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

<style lang="postcss" scoped>
   .button{
        @apply rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider;
   }
</style>
