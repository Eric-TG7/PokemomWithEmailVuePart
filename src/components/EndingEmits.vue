import axios from 'axios';
<template>
  <div>
    <H1> WOW you did it really good, getting more than 6 correct? Impressive! please write your email to receive your score  </H1>
    <input v-model="email" type="email" placeholder="Enter your email" />
    <button @click="postEmail">Send</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  props: ['counter'],

   data(){
    return{
       email: '',
    }
   },
   methods:{
    postEmail(){
       axios.post('http://localhost:8080/api/confirmation',{counter: this.counter, email: this.email})
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
    }
   }
}
</script>

<style>

</style>