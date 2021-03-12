<template>
<div class="bg-gray-100 grid md:grid-cols-3">
  <Nav/>
  <router-view/>
</div>
</template>

<script>
import Nav from '@/components/Nav';

export default {
  name:'App',

  components:{
    Nav
  },

  setup() {
    
  },
}
</script>

<style>
</style>
