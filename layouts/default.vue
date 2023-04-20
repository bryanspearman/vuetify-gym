<template>
  <v-app>
    <!-- NAVIGATION -->
    <v-navigation-drawer v-model="drawer" app fixed>    
      <v-row class="fill-height" no-gutters> 
        <v-list class="grow mt-n2" style="background: rgb(246 243 240 / 100%) !important;">
          <v-list-item to="/" router class="nav-style" active-class="tab-active blue--text text--lighten-2">             
            <v-list-item-content class="text-body-2 text-lg-body-1">
              <v-row align="center">
                <v-col>
                  <v-card tile flat color="transparent" max-width="20" max-height="20">
                    <stop-watch></stop-watch>
                  </v-card>
                </v-col>
                <v-col cols="10">
                  Home
                </v-col>
              </v-row>               
            </v-list-item-content>
          </v-list-item>            
          <v-list-item to="/page1" router class="nav-style" active-class="tab-active blue--text text--lighten-2">             
            <v-list-item-content class="text-body-2 text-lg-body-1">
              <v-row align="center">
                <v-col>
                  <v-card tile flat color="transparent" max-width="20" max-height="20">
                    <stop-watch></stop-watch>
                  </v-card>
                </v-col>
                <v-col cols="10">
                  High Altitude Camping
                </v-col>
              </v-row>               
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/page2" router class="nav-style" active-class="tab-active blue--text text--lighten-2">             
            <v-list-item-content class="text-body-2 text-lg-body-1">
              <v-row align="center">
                <v-col>
                  <v-card tile flat color="transparent" max-width="20" max-height="20">
                    <stop-watch></stop-watch>
                  </v-card>
                </v-col>
                <v-col cols="10">
                  Outdoor Survival
                </v-col>
              </v-row>               
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/page3" router class="nav-style" active-class="tab-active blue--text text--lighten-2">             
            <v-list-item-content class="text-body-2 text-lg-body-1">
              <v-row align="center">
                <v-col>
                  <v-card tile flat color="transparent" max-width="20" max-height="20">
                    <stop-watch></stop-watch>
                  </v-card>
                </v-col>
                <v-col cols="10">
                  Bear Repellant
                </v-col>
              </v-row>               
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="page4" router class="nav-style" active-class="tab-active blue--text text--lighten-2">             
            <v-list-item-content class="text-body-2 text-lg-body-1">
              <v-row align="center">
                <v-col>
                  <v-card tile flat color="transparent" max-width="20" max-height="20">
                    <stop-watch></stop-watch>
                  </v-card>
                </v-col>
                <v-col cols="10">
                  Cold Water Survial
                </v-col>
              </v-row>               
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="page5" router class="nav-style" active-class="tab-active blue--text text--lighten-2">             
            <v-list-item-content class="text-body-2 text-lg-body-1">
              <v-row align="center">
                <v-col>
                  <v-card tile flat color="transparent" max-width="20" max-height="20">
                    <stop-watch></stop-watch>
                  </v-card>
                </v-col>
                <v-col cols="10">
                  Low Altitude Camping
                </v-col>
              </v-row>               
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="page6" router class="nav-style" active-class="tab-active blue--text text--lighten-2">             
            <v-list-item-content class="text-body-2 text-lg-body-1">
              <v-row align="center">
                <v-col>
                  <v-card tile flat color="transparent" max-width="20" max-height="20">
                    <stop-watch></stop-watch>
                  </v-card>
                </v-col>
                <v-col cols="10">
                  Hiking
                </v-col>
              </v-row>               
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="page7" router class="nav-style" active-class="tab-active blue--text text--lighten-2">             
            <v-list-item-content class="text-body-2 text-lg-body-1">
              <v-row align="center">
                <v-col>
                  <v-card tile flat color="transparent" max-width="20" max-height="20">
                    <stop-watch></stop-watch>
                  </v-card>
                </v-col>
                <v-col cols="10">
                  Automotive Camping
                </v-col>
              </v-row>               
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="page8" router class="nav-style" active-class="tab-active blue--text text--lighten-2">             
            <v-list-item-content class="text-body-2 text-lg-body-1">
              <v-row align="center">
                <v-col>
                  <v-card tile flat color="transparent" max-width="20" max-height="20">
                    <stop-watch></stop-watch>
                  </v-card>
                </v-col>
                <v-col cols="10">
                  River Sport
                </v-col>
              </v-row>               
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="page9" router class="nav-style" active-class="tab-active blue--text text--lighten-2">             
            <v-list-item-content class="text-body-2 text-lg-body-1">
              <v-row align="center">
                <v-col>
                  <v-card tile flat color="transparent" max-width="20" max-height="20">
                    <stop-watch></stop-watch>
                  </v-card>
                </v-col>
                <v-col cols="10">
                  Rock Climbing
                </v-col>
              </v-row>               
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-row>
    </v-navigation-drawer>     

    <!-- CONTENT -->    
    <v-app-bar app height="50" color="secondary" elevate-on-scroll>
      <v-app-bar-nav-icon class="d-flex d-lg-none" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <img src="~/assets/img/eoe-icon.png" height="20" width="30" />
      <span class="ml-1 font-weight-bold">{{ companyName }}</span>         
    </v-app-bar>

    <v-main>
      <nuxt />
    </v-main>

    <v-footer app dark class="text-caption">          
      <v-spacer />
      &copy;Copyright {{ currentYear }} {{ companyName }}
    </v-footer>
      
  </v-app>
</template>

<script>
  import dayjs from 'dayjs';
  import VuetifyLogo from '@/components/VuetifyLogo';
  import StopWatch from '@/components/StopWatch';

  export default {
    components: { dayjs, VuetifyLogo, StopWatch },
    data () {
      return {
        drawer: true,              
        currentYear: dayjs().format('YYYY'),
        companyName: "Company Name, LLC"      
      }
    }
  };
</script>
