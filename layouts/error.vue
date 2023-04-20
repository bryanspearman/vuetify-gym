<template>
  <v-app class="pa-sm-6 pa-md-10" style="background: radial-gradient(circle at center, white, #000);">    
    <v-row justify="center" align="center"> 
      <v-alert type="error" :prominent="$vuetify.breakpoint.smAndUp" elevation="4" border="left" class="text-body-1">
        <span class="font-weight-bold" v-if="error.statusCode">Status:</span> "{{ error.statusCode }}"<br />
        <span class="font-weight-bold" v-if="error.message">Error:</span> "{{ error.message }}"
      </v-alert>      
    </v-row>
  </v-app>
</template>

<script>
export default {
  layout: "errorLayout",
  props: {
    error: {
      type: Object,
      default: null,
    },
  }
};
</script>
