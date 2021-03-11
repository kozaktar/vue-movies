<template>
    <div>

      <main>
        <div>
          <a href="#">Log in</a>
          <a href="#">Sign up</a>
        </div>

        <header>
          <h2>Recipes</h2>
          <h3>For Ninjas</h3>
        </header>
        <LatestRecipes/>
        <MostPopularRecipes/>

        <div>
          <div>Load more</div>
        </div>
      </main>
    </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import LatestRecipes from '@/components/LatestRecipes.vue';
import MostPopularRecipes from '@/components/MostPopularRecipes.vue';

export default {
    name:'Home',
    components:{
        LatestRecipes,
        MostPopularRecipes

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
