<template>
  <v-form v-model="valid" >
    <v-container>
      <v-row>

        <v-col cols="12" md="2">
          <v-select :items="apiMethods"  v-model="apifunc" label="API Method" outlined ></v-select>
        </v-col>
        <v-col cols="12" md="2">
          <v-select :items="sqlFunctions" v-model="sqlfunc" label="SQL Function" outlined ></v-select>
        </v-col>

        <v-col cols="12" md="4" >
          <v-text-field v-model="columns" :value="{columns}" :rules="emailRules"  label="Columns" required outlined ></v-text-field>
        </v-col>

        <v-col cols="12" md="3" >
          <v-text-field v-model="table" :rules="nameRules" :counter="70" label="Table name"  required outlined  ></v-text-field>
        </v-col>

        <v-col cols="12" md="1" >
            
           <v-btn block  color="primary" @click="generate" dark>Run</v-btn>
        </v-col>

      </v-row>

      <v-row>



        <!-- <v-col cols="12" md="12"  class="d-flex justify-center" v-show="true==false">
            <v-progress-circular :size="70" :width="7" color="purple" indeterminate ></v-progress-circular>
        </v-col>
         -->
        <v-col cols="12" md="12"  >
            <v-textarea height="300" outlined name="input-7-4" label="Generated Code" v-model="result" >
            </v-textarea>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
 

    name:"formulario",
    data: () => ({
      sqlFunctions: ['SELECT', 'INSERT', 'UPDATE', 'DELETE'],
      apiMethods: ['GET', 'POST', 'PUT', 'CREATE'],
      columns:"",
      table:"",
      sqlfunc:"",
      apifunc:"",
      result:""
      
    }),
    methods:{
        generate: function(){

            let string = '<?php \n';
            string += 'include("includes/bdh.inc.php"); \n';

            if(this.apifunc != null || this.apifunc == "")

            this.columns.split(' ').forEach(element => {
                if(element=="" || element == null) return
                string += "$" + element + "=" + "$_"+this.apifunc+"['" + element + "'];\n"
                console.log(element)
            })


            if(this.sqlfunc.trim().toString() == this.sqlFunctions[0]){


            if(this.columns == "" || this.columns == null)
            string += "\n" + this.sqlfunc + " * FROM " + this.table
            else
            string += "\n" + this.sqlfunc + " " + this.columns.split(' ').join(',') + " FROM " + this.table


            }

           // this.result = (this.apifunc+" "+this.sqlfunc+" "+this.columns +" "+ this.table)
            this.result = string;

        }
    }
}



</script>