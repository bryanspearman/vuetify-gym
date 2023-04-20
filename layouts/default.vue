<template>
  <v-app>
    <v-slide-y-transition>
      <v-dialog v-model="drawer" eager max-width="400" transition="slide-y-transition" overlay-color="light-green darken-3" overlay-opacity=".6">
        <v-row class="fill-height" no-gutters> 
          <v-list class="grow mt-n2 pb-0">
            <v-list-item to="/" router class="nav-style" active-class="tab-active blue--text text--lighten-2" @click="drawer = false">             
              <v-list-item-content class="text-body-1 text-sm-h6">
                <v-row align="center">
                  <v-col>
                    <v-card tile flat color="transparent" max-width="32" max-height="32">
                      <stop-watch></stop-watch>
                    </v-card>
                  </v-col>
                  <v-col cols="10">
                    Home
                  </v-col>
                </v-row>               
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="/inspire" router class="nav-style" active-class="tab-active blue--text text--lighten-2" @click="drawer = false">             
              <v-list-item-content class="text-body-1 text-sm-h6">
                <v-row align="center">
                  <v-col>
                    <v-card tile flat color="transparent" max-width="32" max-height="32">
                      <stop-watch></stop-watch>
                    </v-card>
                  </v-col>
                  <v-col cols="10">
                    Mountain Products
                  </v-col>
                </v-row>               
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="/page1" router class="nav-style" active-class="tab-active blue--text text--lighten-2" @click="drawer = false">             
              <v-list-item-content class="text-body-1 text-sm-h6">
                <v-row align="center">
                  <v-col>
                    <v-card tile flat color="transparent" max-width="32" max-height="32">
                      <stop-watch></stop-watch>
                    </v-card>
                  </v-col>
                  <v-col cols="10">
                    Mountain Camping Products
                  </v-col>
                </v-row>               
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="/page2" router class="nav-style" active-class="tab-active blue--text text--lighten-2" @click="drawer = false">             
              <v-list-item-content class="text-body-1 text-sm-h6">
                <v-row align="center">
                  <v-col>
                    <v-card tile flat color="transparent" max-width="32" max-height="32">
                      <stop-watch></stop-watch>
                    </v-card>
                  </v-col>
                  <v-col cols="10">
                    Serious Outdoors Survival
                  </v-col>
                </v-row>               
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="/page3" router class="nav-style" active-class="tab-active blue--text text--lighten-2" @click="drawer = false">             
              <v-list-item-content class="text-body-1 text-sm-h6">
                <v-row align="center">
                  <v-col>
                    <v-card tile flat color="transparent" max-width="32" max-height="32">
                      <stop-watch></stop-watch>
                    </v-card>
                  </v-col>
                  <v-col cols="10">
                    Bear Repellant Equipment
                  </v-col>
                </v-row>               
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="page4" router class="nav-style" active-class="tab-active blue--text text--lighten-2" @click="drawer = false">             
              <v-list-item-content class="text-body-1 text-sm-h6">
                <v-row align="center">
                  <v-col>
                    <v-card tile flat color="transparent" max-width="32" max-height="32">
                      <stop-watch></stop-watch>
                    </v-card>
                  </v-col>
                  <v-col cols="10">
                    Cold Water Survial Gear
                  </v-col>
                </v-row>               
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="page5" router class="nav-style" active-class="tab-active blue--text text--lighten-2" @click="drawer = false">             
              <v-list-item-content class="text-body-1 text-sm-h6">
                <v-row align="center">
                  <v-col>
                    <v-card tile flat color="transparent" max-width="32" max-height="32">
                      <stop-watch></stop-watch>
                    </v-card>
                  </v-col>
                  <v-col cols="10">
                    Survival Camping Apparel
                  </v-col>
                </v-row>               
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="page6" router class="nav-style" active-class="tab-active blue--text text--lighten-2" @click="drawer = false">             
              <v-list-item-content class="text-body-1 text-sm-h6">
                <v-row align="center">
                  <v-col>
                    <v-card tile flat color="transparent" max-width="32" max-height="32">
                      <stop-watch></stop-watch>
                    </v-card>
                  </v-col>
                  <v-col cols="10">
                    Hiking Gear
                  </v-col>
                </v-row>               
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="page7" router class="nav-style" active-class="tab-active blue--text text--lighten-2" @click="drawer = false">             
              <v-list-item-content class="text-body-1 text-sm-h6">
                <v-row align="center">
                  <v-col>
                    <v-card tile flat color="transparent" max-width="32" max-height="32">
                      <stop-watch></stop-watch>
                    </v-card>
                  </v-col>
                  <v-col cols="10">
                    Automotive Camping Gear
                  </v-col>
                </v-row>               
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="page8" router class="nav-style" active-class="tab-active blue--text text--lighten-2" @click="drawer = false">             
              <v-list-item-content class="text-body-1 text-sm-h6">
                <v-row align="center">
                  <v-col>
                    <v-card tile flat color="transparent" max-width="32" max-height="32">
                      <stop-watch></stop-watch>
                    </v-card>
                  </v-col>
                  <v-col cols="10">
                    River Sport Gear
                  </v-col>
                </v-row>               
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="page9" router class="nav-style" active-class="tab-active blue--text text--lighten-2" @click="drawer = false">             
              <v-list-item-content class="text-body-1 text-sm-h6">
                <v-row align="center">
                  <v-col>
                    <v-card tile flat color="transparent" max-width="32" max-height="32">
                      <stop-watch></stop-watch>
                    </v-card>
                  </v-col>
                  <v-col cols="10">
                    Rock Climbing Gear
                  </v-col>
                </v-row>               
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-row>
      </v-dialog>
    </v-slide-y-transition>

    <v-row no-gutters>
      <!-- MAIN NAV -->
      <v-col md="3" xl="2" class="d-none d-md-flex" style="border-right: 1px solid #ccc;">        
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
            <v-list-item to="/inspire" router class="nav-style" active-class="tab-active blue--text text--lighten-2">             
              <v-list-item-content class="text-body-2 text-lg-body-1">
                <v-row align="center">
                  <v-col>
                    <v-card tile flat color="transparent" max-width="20" max-height="20">
                      <stop-watch></stop-watch>
                    </v-card>
                  </v-col>
                  <v-col cols="10">
                    Mountain Products
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
                    Mountain Camping Products
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
                    Serious Outdoors Survival
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
                    Bear Repellant Equipment
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
                    Cold Water Survial Gear
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
                    Survival Camping Apparel
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
                    Hiking Gear
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
                    Automotive Camping Gear
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
                    River Sport Gear
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
                    Rock Climbing Gear
                  </v-col>
                </v-row>               
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-row>
      </v-col>

      <!-- CONTENT -->
      <v-col cols="12" md="9" xl="10">
        <v-app-bar flat height="49" color="secondary">
          <v-app-bar-nav-icon class="d-flex d-md-none" @click="drawer = !drawer"></v-app-bar-nav-icon>
          <img src="~/assets/img/eoe-icon.png" height="20" width="30" />
          <span class="ml-1 font-weight-bold">EOE SysAdmin</span>         
        </v-app-bar>

        <v-main>
          <nuxt />
        </v-main>

        <v-footer app dark class="text-caption">          
          <v-spacer />
          &copy;Copyright {{ currentYear }} Outdoor Survival, Inc.
        </v-footer>
      </v-col>
    </v-row> 
  </v-app>
</template>

<script>
  import moment from 'moment';
  import VuetifyLogo from '@/components/VuetifyLogo';
  import StopWatch from '@/components/StopWatch';

  export default {
    components: { moment, VuetifyLogo, StopWatch },
    data () {
      return {
        drawer: false,              
        currentYear: moment().format('Y')      
      }
    }
  };
</script>
