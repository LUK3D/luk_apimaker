<template>

<!-- App.vue -->
    <v-app>
    <v-navigation-drawer app v-if="abrir" class="d-flex pa-2">
       <h1 class="grey--text lighten-3">nabanda</h1>

        <router-link class="btn" to="/kubiku" >
        <v-icon left>mdi-pencil</v-icon>
        <v-btn  color="primary" class="text-sm-left" block  text>Conversas</v-btn>
        </router-link>
        <router-link class="btn" to="/kubiku" >
        <v-icon left>mdi-pencil</v-icon>
        <v-btn  color="primary" class="text-sm-left" block text>Conversas</v-btn>
        </router-link>
        <router-link class="btn"  to="/kubiku" >
        <v-icon left>mdi-pencil</v-icon>
        <v-btn  color="primary" class="text-sm-left" block text>Conversas</v-btn>
        </router-link>
        <router-link class="btn" to="/kubiku" >
        <v-icon left>mdi-pencil</v-icon>
        <v-btn  color="primary" class="text-sm-left" block text>Conversas</v-btn>
        </router-link>

    </v-navigation-drawer>

    <v-app-bar app class="white elevation-0 ">

        <v-avatar
      color="orange"
      size="62"
    >
      <span class="white--text headline">62</span>
    </v-avatar>
       
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main class="blue-grey lighten-5 container">
        <h1>test Sizes your content based upon application components Sizes your content based upon application components Sizes your content based upon application components</h1>
        <!-- Provides the application the proper gutter -->
        <v-container fluid >
           

        <!-- If using vue-router -->
        <router-view ></router-view>
        </v-container>
    </v-main>

    <v-footer app>
        <p>todos os direitos reservados a luk3d</p>
        <!-- -->
    </v-footer>
    </v-app>

</template>

<script>
export default {
    name:"app",
    data(){

        return{
        abrir: true,
        }
       
          
        
    },
    methods:{
        mudar:function(){
            this.abrir = !this.abrir;
        }
    }

};
</script>

<style lang="scss" scoped>
   /*  h1{
        margin: 10px;
    } */

    .container{
        padding: 10px !important;
    }
    .btn{
        text-decoration: none;
    }
</style>
