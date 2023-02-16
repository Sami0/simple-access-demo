
<template>
<div id="pageDesign">

<div> {{ SumWaves}}</div>
<button class="btn btn-light" @click=" CountTotal()"> <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg> <br> Show total hours </button>
<p> Total hours of this Workwave :</p>
<button class="btn btn-light"> <div id="timeSumofALLpoints"> </div></button>
<button class="btn btn-light"><a  href="http://localhost:8080/?#/GuestResults"><div id="Sumofcircles"> </div></a> </button>
</div>

</template>


<script>
import Vue from 'vue'
import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:8081/',
  json: true
})

Vue.prototype.$http = client ;

import api from '@/api'

export default {
  data () {
    return {
        SumWaves: '',
       // points:[]
    }
    },
     methods: {
    async refreshPoints () {
      this.points = await api.getPoints()
     },
      async CountTotal(){
          this.points = await api.getPoints();
        console.log("count total clicked !");
        let SourceCount = this.points;
        console.log("source count value is : !");
             console.log(this.points);

             var manualCount = SourceCount.map(point => point.ManualTime).reduce((acc, amount) => acc + amount + 0 ) ;
        var resultCount = SourceCount.map(point => point.Difference).reduce((acc, amount) => acc + amount) + manualCount  ;




console.log(resultCount);




let countCircles = Math.round(resultCount / 2) ;
console.log("count total ops ends!");
if (resultCount > 2 && resultCount < 80 ) {
document.getElementById("timeSumofALLpoints").innerHTML = resultCount + '  hours ' 
  
  document.getElementById("Sumofcircles").innerHTML =   countCircles + '   circles in Visual  ';
}
else if (resultCount  == 80.0 || resultCount  > 80.0 ){
  document.getElementById("timeSumofALLpoints").innerHTML =  " log error for " + resultCount +" hours ,  time value must not exceed 80h in single wave to be processed in Minimlist Visual  , see guide [] for more info ";
  document.getElementById("Sumofcircles").innerHTML =  ' log error  circles in Visual ';
}
  
     }
    },
    mounted(){
    this.CountTotal(resultCount).value = SumWaves;
     //this.model.timeValueT =  timeValue;
   
  },
}
</script>
<style>
#pageDesign{
     width:1300px;
     background-color:#242424;
     color:#149414;
     margin :20px;
     padding:30px;
}
</style>
