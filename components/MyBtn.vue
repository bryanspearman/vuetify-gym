<template>
  <div>
    <v-btn 
      :color="color" 
      depressed 
      rounded 
      :class="`px-6 my-2 ${textColorClass}`" 
      :to="to"
    >
      {{ text }} <v-icon v-if="icon" small right>{{ icon }}</v-icon>
    </v-btn>
  </div>
</template>

<script>
  export default {
    props: {
      color: {
        type: String,
        required: false,
        default: "accent"
      },
      text: {
        type: String,
        required: true,
        default: "button"
      },
      textColorClass: {
        type: String,
        required: false,
        default: "dark-brown-text"
      },
      icon: {
        type: String,
        required: false,
        default: ""
      },
      to: {
        type: String,
        required: false,
        default: "/"
      }
    }
  };
</script>