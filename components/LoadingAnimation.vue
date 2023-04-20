<template>
  <v-card v-if="loading" class="loading-page" max-width="100" max-height="100">
    <stop-watch/><br/>
    Loading...
  </v-card>
</template>

<script>
import StopWatch from '@/components/StopWatch';
  export default {
    components: { StopWatch },
    data() {
      return {
        loading: false
      }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      }
    },
  };
</script>

<style scoped>
  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding-top: 200px;
    font-size: 30px;
    font-family: sans-serif;
  }
</style>