<!-- Este é o formulátio principal para a geração de APIs -->

<template>

  <v-form  >
    <v-container>
      <v-row>
        <v-col cols="12" md="2">
          <v-select :items="apiMethods" :rules="rules"  v-model="apifunc" label="API Method" outlined ></v-select>
        </v-col>
        <v-col cols="12" md="2">
          <v-select :items="sqlFunctions" :rules="rules" v-model="sqlfunc" label="SQL Function" outlined ></v-select>
        </v-col>

        <v-col cols="12" md="4" >
          <v-text-field v-model="columns"  :value="{columns}" :rules="rules"  label="Columns" required outlined ></v-text-field>
        </v-col>

        <v-col cols="12" md="3" >
          <v-text-field v-model="table" :rules="rules" :counter="70" label="Table name"  required outlined  ></v-text-field>
        </v-col>

        <v-col cols="12" md="1" >
            
           <v-btn block  color="primary" @click="generate" dark>Run</v-btn>
        </v-col>

      </v-row>

      <v-row>
        <v-col cols="12" md="12"  >
            <v-textarea height="300" outlined name="input-7-4" label="Generated Code" v-model="result" >
            </v-textarea>
        </v-col>
      </v-row>
    </v-container>


      <v-bottom-sheet v-model="snackbar">
      <v-sheet
        class="text-center blue-grey darken-4 white--text"
        height="200px"
      >
        <v-btn
          class="mt-6"
          text
          color="red"
          outlined
          @click="snackbar = !snackbar"
        >
          OK!
        </v-btn>
        <div class="py-3">
          {{snackText}}
        </div>
      </v-sheet>
    </v-bottom-sheet>


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
        result:"",
        snackbar: false,
        snackText:"",
        rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
      
    }),
    methods:{
      /* Function executed to generate the php code */
        generate: function(){
            
            /* We initialize the varialble with the php command */
            let string = '<?php \n';
            let els = [];
            /* In this line the generator wwill include the php command to include the connection file */
            string += 'include("includes/bdh.inc.php"); \n';

            /* Validating the fields */
            if(this.table == "" || this.table == null){
                this.snackText = "Preencha todos os campos para continuar"
                this.snackbar = true
                return 
            }

            if(this.apifunc != null || this.apifunc != "")

            this.columns.split(' ').forEach(element => {
                if(element=="" || element == null) return
                string += "$" + element + "=" + "$_"+this.apifunc+"['" + element + "'];\n"
                console.log(element)
            })


            /* if user switch select statement */

            if(this.sqlfunc.trim().toString() == this.sqlFunctions[0]){

             string="<?php\ninclude(\"includes/bdh.inc.php\"); \n"

            var dd = "";

            if(this.columns=="" || this.columns==" "){
                string += "$sql = \"SELECT * from " + this.table + "\";\n";
            }else{
              
               /*  $("#where").val().split(' ').forEach(element => {
                    dd += element +" = " + "'$"+element+"' ";
                }); */

                string += "$sql = \"SELECT * from " + this.table + " WHERE "+dd+"\";\n";
            }

          
            string+="$query = mysqli_query($conn,$sql); \n";
            string+="$json='['; \n";
            string+="while($row =  mysqli_fetch_assoc($query)){ \n $json .= \"{\".";
            let h = this.columns;

            h.split(' ').forEach(element => {
                if(element!=" " || element!="")
                string +='\\"\\"'+element+'\\":\\"". $row[\''+element+'\'] . "\\",".';
            });
            string+=" \"},\""

            string+=";\n} \n"

            string+= "\n$json = rtrim( $json ,',') .\"]\"; \n"
            
            string+="\necho  str_ireplace(',,}','}', $json);"

           this.result = string.replace(',}','}');

           // return c.replace(',}','}');
            return;



            }






            if(this.sqlfunc.trim().toString() == this.sqlFunctions[1]){

            if(this.columns == "" || this.columns == null){

              this.snackText = "Informe as colunas"
                this.snackbar = true
            }
            else{
             
              
               this.columns.split(' ').forEach(element => {
                 els.push('\'$'+element+'\'');
                                
              });

              string += "\n$sql = \"" + this.sqlfunc + " INTO " +this.table  +" ("+ this.columns.split(' ').join(',') +  ") VALUES ("+ els.join(', ') +")\";"
            }

            string += "\n\nif(mysqli_query($conn,$sql)){\necho'Sucesso!';\n}else{\necho'Erro';\n}"
            this.result = string;

            return
            }
            

           // this.result = (this.apifunc+" "+this.sqlfunc+" "+this.columns +" "+ this.table)
           

        }
    }
}



</script>