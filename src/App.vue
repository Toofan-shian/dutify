<template>
  <v-app>
    <navbar/>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import navbar from '@/components/toolbar.vue'

export default {
  name: 'App',
  components: {
    navbar
  },

  data: () => ({

  }),
};
</script>

<style>

</style>