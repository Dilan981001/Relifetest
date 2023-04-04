<template>
  <div class="column items-center justify-center q-mt-lg">
    <h2>Sign Up</h2>

    <div class="q-pa-md bg-red q-mt-lg" style="max-width: 400px">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-input
          filled
          dense
          class="bg-white"
          v-model="name"
          label=" Enter Your name "
        />
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
        <p><router-link to='/login'>LogIn</router-link></p>
      </q-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "app",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async onSubmit() {
      let result = await axios.post("http://localhost:3000/user", {
        name: this.name,
        email: this.email,
        password: this.password,
      });

      if(result.status==201){
        localStorage.setItem("user-info",JSON.stringify(result))
      }
      this.name='';
      this.email='';
      this.password='';
      this.$router.push({name:"login"})
    },
  },
  // mounted(){
  //     let user = localStorage.getItem("user-info");
  //     if(user){
  //       this.$router.push({name:"home"})
  //     }
  // }
};
</script>
