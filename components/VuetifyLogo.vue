<template>
  <img    
    alt="Vuetify Logo"
    src="/images/vuetify-logo.svg"
    :height="h"
    :width="w"
  >
</template>

<script>
  export default { props: ["h", "w"] };
</script>
