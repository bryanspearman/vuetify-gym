<template>
  <div>
    <v-btn :color="color" depressed rounded class="px-6" :to="to">{{ text }}</v-btn>
  </div>
</template>

<script>
  export default {
    props: {
      color: {
        type: String,
        required: false,
        default: "secondary"
      },
      text: {
        type: String,
        required: true,
        default: "button"
      },
      to: {
        type: String,
        required: false,
        default: "/"
      }
    }
  };
</script>