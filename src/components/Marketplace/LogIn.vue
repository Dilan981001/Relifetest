<template>
    <div class="column items-center justify-center q-mt-lg">
      <h2>Log In</h2>
  
      <div class="q-pa-md bg-red q-mt-lg" style="max-width: 400px">
        <q-form @submit="onSubmitLogin" class="q-gutter-md">
          <q-input
            filled
            dense
            class="bg-white"
            v-model="email"
            label=" Enter Your Email "
          />
          <q-input
            filled
            dense
            class="bg-white"
            v-model="password"
            label=" Enter Your password "
          />
  
          <div>
            <q-btn
              class="bg-white"
              text-color="black"
              label="Submit"
              type="submit"
              color="primary"
            />
          </div>
          <p><router-link to="/signup" >Sign Up</router-link></p>
        </q-form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: "LogIn",
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
   async  onSubmitLogin(){
                let result = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`);
                console.log(result);
                if(result.status==200 && result.data.length>0){
        localStorage.setItem("user-info",JSON.stringify(result.data[0]))
      }

      this.$router.push({name:"home"})
        }
    },
  //   mounted(){
  //     let user = localStorage.getItem("user-info");
  //     if(user){
  //       this.$router.push({name:"home"})
  //     }
  // }
  
  };
  </script>
  