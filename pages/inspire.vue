<template>
  <div>
    <hero backgroundImg="https://source.unsplash.com/random/?campfire" bgPosition="center" title="mountain products"/>    
    <div class="text-center">
      <img
        src="/images/v.png"
        alt="Vuetify.js"
        class="mt-15"
        height="40px"
      >
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </div>  
  </div>
</template>

<script>
  import Hero from '@/components/Hero';

  export default {
    components: { Hero }
  }
</script>
