<template>
  <div>
    <v-app-bar app
     
      dense
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Luk3D</v-toolbar-title>
      <v-spacer width="10"></v-spacer>
        
       
        <router-link class="btn" to="/"> <v-btn>API generator</v-btn> </router-link>
        
        <router-link class="btn" to="/cssgenerator"> <v-btn>Css generator</v-btn></router-link>
        <router-link class="btn" to="/doc"> <v-btn>Documentation</v-btn></router-link>
      

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>


<script>
export default {
  name: "cabeca"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn{

  text-decoration: none;
  
}

</style>
