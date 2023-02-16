<template>

<div>

<div>
<h2> {{points.length}}/ 10 Points in this Wave  :</h2>
<OneWaveAllpoints />
</div>


<div id="LogCapacity" v-if="points.length < 10">

      <b-col lg="6">
        <b-card :title="(model.id ? 'Edit Point ID#' + model.id : 'New Point')">
          <form @submit="savePoint()">

   <!--<b-form-group label="type">
              <input type="radio" v-model="model.type">
              	<label  class="stuck" for="one">red = most complex</label>
            </b-form-group>
              #c0c0c0; // grey 
   #ff0000; // red
  #d49c1c; // yellow 
 #007f00;// green 
 #0000FF; // blue
            -->


     <b-form-group label="type :" v-slot="{ ariaDescribedby }">
   
   <b-button   variant="danger">
       <b-form-radio v-model="model.type"
                    :aria-describedby="ariaDescribedby"   
                      name="Wavetype"
                      class="red-c"
                    value="#ff0000">most complex</b-form-radio>
   </b-button>

 <b-button   variant="warning">
<b-form-radio v-model="model.type" :aria-describedby="ariaDescribedby" name="Wavetype" class="yellow-c" value="#d49c1c">okay</b-form-radio>
</b-button>

 <b-button   variant="success">
<b-form-radio v-model="model.type" :aria-describedby="ariaDescribedby" name="Wavetype" class="green-c" value="#007f00">in flow</b-form-radio>
</b-button>


 <b-button   variant="primary">
<b-form-radio v-model="model.type" :aria-describedby="ariaDescribedby" name="Wavetype" class="blue" value="#0000FF">easiest/ delegable</b-form-radio>
</b-button>

<b-button   variant="secondary">
<b-form-radio v-model="model.type" :aria-describedby="ariaDescribedby" name="Wavetype" value="#c0c0c0">no highlight</b-form-radio>
</b-button>


</b-form-group>

 
           <div> Select Work Rhythm: </div>


            <b-form-group label="Label">
              <b-form-input type="text" v-model="model.title"></b-form-input>
            </b-form-group>

      
            <b-form-group label="details">
              <b-form-textarea rows="4" v-model="model.body"></b-form-textarea>
            </b-form-group>
            <div>





 <div class="container-fluid mt-4">
   
   <div id="TimeBox">

   <p>Option 1-  Manual Time entry</p>

<input id="testingTimeBox" v-model="model.ManualTime" type="integer"><h2>{{model.ManualTime}}</h2><p>hours for this point  </p> 

      <br>
<p>___________________________________________________________________</p>
    <p>option 2- Calculate differnce </p>
    
      <label for="startTime">Start :</label>
      <input class="STimeStyle" type="datetime-local" id="startTime"  v-model="model.startTime" >
    <br>
       <label for="endTime">End : </label>
      <input class="endTimeStyle" type="datetime-local" id="EndTime" v-model ="model.EndTime">
   
      <button @click="CalcTime()"> set <i class="fas fa-check"></i></button>

      <br>

<p> new testing </p>

      <div  id="timeValue">{{timeValue}}</div>
      <div id="Result"> Time Value  :</div>


     <!--- <div v-model="model.timeValueT" >{{}} </div>-->
      <br>
      <br>
      </div>
  </div>
  

                <!---  <button @click="CalcPoint()"> actiavte calc point <i class="fas fa-check"></i></button>-->
        <br>
<br>

   
              <b-btn type="submit" variant="success">Save log</b-btn>
            </div>
          </form>
        </b-card>
      </b-col>



</div >


    <b-alert :show="loading" variant="info">data logs are Loading...</b-alert>
      <div v-if="points.length == 10 ">
   <alert > <p  class="dangerALert"> you've reached maxmium capacity </p></alert> 
 <div id="logStatus">LogStatus :free access web workwave Visual are set to contain 10 log points, upgrade for more capacity </div>
</div>
    <div v-if="points.length > 10 ">
   <alert > <p  class="dangerALert"> you've reached maxmium capacity </p></alert> 
 <div id="logStatus">LogStatus :free access web workwave Visual are set to contain 10 log points, upgrade for more capacity   </div>
</div>

<div  v-if="points.length < 1  ">
<div id="logStatus"> LogStatus: no logs are recorded or found yet </div>
</div>

<div v-if="points.length < 10  && points.length > 1 ">
<div id="logStatus"> LogStatus :there is space for more logs, workwave Visual are set to contain 10 log points </div>
</div>








    <b-row>
      <b-col>
        <table class="table table-striped">
          <thead>
            <tr>
            <th>[Type]</th>
              <th>[Title]</th>
              <th>[Details]</th>
               <th>[ManualTime ]</th>
              <th>[Time in hours ]</th>
              <th>[# Circles]</th>
           
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
  <!--// /* red#ff0000,#007f00 green , yellow #d49c1c, blue #0000FF, grey#c0c0c0 */-->
            <tr v-for="point in points.slice(0,10)" :key="point.id">
             <div v-if="point.type === '#007f00'" class="green"> </div>
                  <div v-if="point.type === '#d49c1c'" class="yellow"> </div>
                     <div v-if="point.type === '#c0c0c0'" class="grey"> </div>
                     <div v-if="point.type === '#0000FF'" class="blueC"> </div>
                <div v-if="point.type === '#ff0000'" class="red"> </div>
                  
               <td>{{ point.title }}</td>
               <td>{{ point.body }}</td>
              <td>{{ point.ManualTime }}</td>
               <td>{{ point.Difference }}</td>
               <td>{{ point.NUMCircles }}</td>
             
   

              <td class="text-right">  <a href='#' @click="deletePoint(point.id)"> Delete</a></td>
            </tr>
     
          </tbody>
        </table>
      </b-col>
    </b-row>

<div id="logStatus">guest account LogStatus : {{points.length}} /10 </div>
<button class="btn btn-light"><a style="color:black;" href="http://localhost:8080/"> <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  ><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M360 224L272 224v-56c0-9.531-5.656-18.16-14.38-22C248.9 142.2 238.7 143.9 231.7 150.4l-96 88.75C130.8 243.7 128 250.1 128 256.8c.3125 7.781 2.875 13.25 7.844 17.75l96 87.25c7.031 6.406 17.19 8.031 25.88 4.188s14.28-12.44 14.28-21.94l-.002-56L360 288C373.3 288 384 277.3 384 264v-16C384 234.8 373.3 224 360 224zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"/></svg> return to main page </a> </button>

<a style="color:yellow;" href="http://localhost:8080/#/simple"><button><svg  width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/></svg> simple Wave- exit time</button></a>
<br>
<br>


  </div>
</template>

<script>



import Vue from 'vue'
import axios from 'axios'
import OneWaveAllpoints from './SumAllpointsOneWave.vue'

const client = axios.create({
  baseURL: 'http://localhost:8081/',
  json: true
})

Vue.prototype.$http = client ;

import api from '@/api'
const timesetter = Date.now();


export default {
  components: {
    OneWaveAllpoints
  },
  data () {
    return {
    startTime: timesetter,
     EndTime: timesetter,
       timeValue : ''  ,
      loading: false,
      points: [],
      model: {},
      CapturedTimeValue : 0.00
     // storedTimeValue :decimal
    }
  },
  async created () {
     this.refreshPoints()

  },
  
  methods: {

///////////////start of time Calc function //////////////////////


// removed async will block functionality from procssing well 
 async CalcTime(){
    console.log("time button clicked");
        let startT = startTime.value;
        let endT = EndTime.value;

//let TotalDifferenceSet = timeValue;

  // calc start value         
 var myoneEpoch = Date.parse(startT)/1000.0;
       console.log(startT);

       console.log( "value of startT " + startT)
        console.log(Date.parse(startT));
         console.log(Date.parse(startT)/1000.0);
          console.log("value of myoneEpoch is " + myoneEpoch )

// calc end time value 
 console.log(endT);
    console.log( "value of endT " + endT)
      var myTwoEpoch = Date.parse(endT)/1000.0;
    
  console.log("value of mytwoEpoch is " + myTwoEpoch )

    // Calc difference between two values 
      let diffEpoch = (myTwoEpoch-myoneEpoch );
  let diffEpochHours = (diffEpoch/3600)
    let diffMinutes = ((diffEpoch/60)-diffEpochHours)
    let neatminutes = (Math.round(diffMinutes))
    let neatHours = parseFloat(diffEpochHours).toFixed(1);
      console.log(diffEpochHours +" hours ");
      console.log(neatHours +" hours ");
    let CapturedTimeValue =   neatHours;
if (neatHours == 2.0 || neatHours > 2.0 &&  neatHours < 80.0  ){
  document.getElementById("Result").innerHTML =  neatHours +" hours <br>" + "log sent" ;
}
else if (neatHours == 80.0 || neatHours > 80.0 ){
  document.getElementById("Result").innerHTML =  " Visual log error for " + neatHours +" hours ,  time value must not exceed 80h to be processed in Minimlist visual , see guide [] for more info ";
}
else {
  document.getElementById("Result").innerHTML = " n/a ";
}
return neatHours ;
return neatHours , CapturedTimeValue ;

  },
  ///////////////end of time Calc function //////////////////////

    async refreshPoints () {
      this.loading = true
      this.points = await api.getPoints()
      this.loading = false
      //this.points = await api.CalcPoint()
    
     //this.model.timeValueT = this.CalcTime(CapturedTimeValue).value;
    
    // what will happen if bellow is compented out ?
    
   // this.model.timeValueT =  TimeValue;

/// sucess 
/// reject becuase ?
// [object object ] went way 

//  this.model.timeValueT =   CapturedTimeValue ;

  /// nothing happens ?!

    console.log("tesing");
   console.log("tesing" + CapturedTimeValue );
    console.log(" can I see this message ?" + this.model.timeValueT);

      let TotalWaveLimit = this.points.length;
    if (TotalWaveLimit < 10){
      console.log(TotalWaveLimit + " is number of logs stored")
      console.log("workwave is less than 10 points")
      //console.log(this.points.length);
     
    }  else if (TotalWaveLimit => 40 ){
        alert("40/40 you've a completed a workwave !,start a new work wave entry to save your new logs [link here]");
        console.log(TotalWaveLimit + " is number of logs stored");
      }
      else{
       console.log("workwave is more than 10 points")
       console.log(TotalWaveLimit + " is number of logs stored");
    }
    },
    //async populatePostToEdit (point) {
    //    this.model = Object.assign({}, point
     // )
 //   },
  //  removing "async" will cause function to collapse 
   async savePoint() {
      if (this.model.id ) {
         console.log("this.model.id in savepoint clicked" );
            await api.updatePoint(this.model.id, this.model)
      } 
      else {
        await api.createPoint(this.model)
           await this.model.id.save()
      }
      this.model = {} // reset form
      await this.refreshPoints()
      
    },
async CalcPoint(){  
},

    async deletePoint (id) {
      console.log("delete this.id  was clicked");
         console.log("delete"  + id  +" was clicked");
         console.log("this.model.id " + this.model.id )
      if (confirm('Are you sure you want to delete this point?, ***ALERT : this action cannot be reversed***')) {
        // if we are editing a post we deleted, remove it from the form
        if (this.model.id === id) {
          this.model = {}

        }
        // removed placment } from here 
        await api.deletePoint(id)
        await this.refreshPoints()
           console.log("delete"  + id  +"should be deleted  by now");
        }
        else {
           console.log("delete"  + id  +"was blocked by something else ");
        }
      },
    },

mounted(){
    this.CalcTime(neatHours).value =  timeValue;
     this.model.timeValueT =  timeValue;
 
  },
 // computed : {

 // }

  }
   


</script>

<style>
/* red#ff0000,#007f00 green , yellow #d49c1c, blue #0000FF, grey#c0c0c0 */
.red {
  background-color: #ff0000;
  width:100px;
    height:100px;
    border-radius: 50%;
    padding:30px;
}
.green{
    background-color:#007f00 ;
width:100px;
    height:100px;
    border-radius: 50%;
    padding:30px;
 }

.yellow{
    background-color:#d49c1c;
  width:100px;
    height:100px;
    border-radius: 50%;
    padding:30px;
}
.blueC{
 background-color:#0000FF;
  width:100px;
    height:100px;
    border-radius: 50%;
    padding:30px;
}
.grey{
 background-color:#c0c0c0;
  width:100px;
    height:100px;
    border-radius: 50%;
    padding:30px;
}
.bbutton{
  padding:20px;

}
.easy {
   color: #0000FF;
 font-size: 20px;
}
.stuck{
    color:red;
    font-size: 20px;
}
.flow{ color:#007f00;
    font-size: 20px;}
.okay{color:#d49c1c;
    font-size: 20px;}
.blank{color:grey;
    font-size: 20px;}

.dangerALert{
   background-color:#000000;
  color:red;
    margin:20px;
  font-size:15px;
}
#logStatus{
  background-color:#F1EEE9;
  color:red;
    margin:20px;
  font-size:15px;
}

#greylabel {color:#c0c0c0;}
#redlabel{color: #ff0000;}
#yellowlabel{color:#d49c1c;}
#greenlabel{color:#007f00 ;}
#bluelabel{color:#0000FF;}

.STimeStyle{
  margin:30px;
  font-size:20px;
  background: white;
  color:#303030;
}
.endTimeStyle{
  margin:30px;
  font-size:20px;
  background: #303030;
  color:white;
}


#estart{color:#3D61AF}
#eend{color:#F1A700}
</style>

