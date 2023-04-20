<template>
  <div>
    <hero backgroundImg="https://source.unsplash.com/random/?mountains" bgPosition="center" title="serious outdoor survival"/>   
    <v-row>
      <v-col class="pa-16">
        <h1>Page 2</h1>
      </v-col>
    </v-row>   
  </div>
</template>

<script>
  import Hero from '@/components/Hero';
  import StopWatch from '@/components/StopWatch'
  export default {
    components: { Hero, StopWatch },

    data() {
      return {

      }
    },

    computed: {},

    watch: {},

    created() {},

    mounted() {},

    methods: {},
  };
</script>