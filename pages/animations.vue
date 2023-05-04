<template>
  <div class="text-center">    
    <four-o-four-lamp class="mt-10" style="width: 300px;"/>
    <h2 class="mb-16 pb-16 mt-6">Error 404 - Page Not Found</h2>

    <construction-dog style="width: 300px;"/>
    <h2 class="mb-16 pb-16 mt-6 orange--text text--darken-2">UNDER CONSTRUCION</h2>

    <error-other style="width: 300px;"/>
    <h2 class="mb-16 pb-16 mt-6">Generic Error</h2>

    <p>
      Page Loading Indicator <v-icon>mdi-chevron-down</v-icon>
    </p>
    <v-card tile flat height="2000" width="100%" style="background: radial-gradient(circle at center, white, rgba(0,0,0,.2))">
      <v-row align="center" justify="center" class="fill-height">        
          <div class="pr-5">
            <stop-watch/>
          </div>          
          <div class="font-weight-thin text-body-1">
            Loading...
          </div>        
      </v-row>           
    </v-card>
  </div>  
</template>

<script>
  import FourOFourLamp from '@/components/FourOFourLamp';
  import ConstructionDog from '@/components/ConstructionDog';
  import ErrorOther from '@/components/ErrorOther';
  import LoadingAnimation from '@/components/LoadingAnimation';
  import StopWatch from '@/components/StopWatch';

  export default {
    layout: 'blankLayout',
    components: { 
      FourOFourLamp, 
      ConstructionDog, 
      ErrorOther, 
      LoadingAnimation,
      StopWatch
    }
  };
</script>