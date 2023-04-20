<template>
  <div>
    <hero backgroundImg="https://source.unsplash.com/random/1024x768/?river,kayaking" bgPosition="center" title="river sport"/>
    <v-row align="stretch" justify="center" no-gutters>
      <v-col class="pa-8 pa-xl-10 bg-eggshell-20">
        <h2 class="text-h6">Medium Heading For You</h2>
        <p class="text-body-1">This is the image used for this home page hero. Pretty sweet yea?</p>
        <img src="/images/header-img.jpg" height="200px" width="300px" class="rounded-lg mt-1" alt="">
      </v-col>
      <v-col class="pa-8 pa-xl-10 bg-eggshell-40">
        <h2 class="text-h6">Short Heading</h2>
        <p class="text-body-1">
          This paragraph is testing the stretch parameter by using more content than the last column so that we can see that each column's height will remain the same since align="stretch" is used on the parent element.
        </p>
      </v-col>
      <v-col cols="12" sm="8" xl="4" class="pa-8 pa-xl-10 bg-eggshell-60">
        <h2 class="text-h6">Long Heading - You Have The Space For It!</h2>
        <p class="text-body-1">
          This paragraph is intended for the mediumish column to show how the text looks.  You may be inclinded to ask questions about this column but don't worry, it's all taken care of.  Just sit back, relax, and watch the magic happen. :)
        </p>
        <my-btn text="more" icon="mdi-chevron-right" to="/page4" />
      </v-col>
      <v-col class="pa-8 pa-xl-10 bg-eggshell-80">
        <h2 class="text-h6">Short Heading</h2>
        <p class="text-body-1">
          Hello to the world in the content area of this column.
        </p>
      </v-col>
      <v-col cols="12" class="pa-8 pa-xl-10 bg-faint-blue">
        <h2 class="text-h6">The Big Column</h2>
        <p class="text-body-1">
          This column is always full width.
          <my-btn color="blue lighten-4" textColorClass="dark-blue-text" text="more" icon="mdi-chevron-right" to="/page4" />
        </p>
        <h3>Sub Heading</h3>
        <p class="text-body-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </v-col>
      <v-col class="pa-8 pa-xl-10 bg-eggshell-20">
        <h2 class="text-h6">Another Area</h2>
        <p class="text-body-1">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </v-col>          
    </v-row>
  </div>
</template>

<script>
  import Hero from '@/components/Hero';
  export default {
    components: { Hero },

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