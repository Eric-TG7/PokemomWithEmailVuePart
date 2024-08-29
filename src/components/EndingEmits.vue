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
       axios.post('https://app.circleci.com/pipelines/circleci/3b5ce087-c4a4-43c3-839e-87feecf8ebc9/556393e3-a25e-4ee8-aadc-9a2bd0090dfc/2/workflows/7fc264b4-b1f6-44b4-b9b8-68317b235ff1/jobs/3',{counter: this.counter, email: this.email})
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
    }
   }
}
</script>

<style>

</style>