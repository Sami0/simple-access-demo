<template>

<div>

<div>

<h2>Rhythm first view </h2>
<br>
<br>
<br>

<a href="http://localhost:8080/?#/guestworkwave"><button class="btn btn-light">return to standard view </button></a>

<br>
<br>
<br>

</div>


 







    <b-row>
      <b-col>
<div class="d-flex justify-content-center">
      <div id="pointCenter">
       <!--- <table class="table table-striped">
          <thead>
            <tr>
            </tr>
          </thead>

          <tbody>-->
  <!--// /* red#ff0000,#007f00 green , yellow #d49c1c, blue #0000FF, grey#c0c0c0 */-->
            <div v-for="point in points.slice(0,80)" :key="point.id">
             <div v-if="point.type === '#007f00'" class="green"> </div>
             <div v-if="point.type === '#d49c1c'" class="yellow"> </div>
             <div v-if="point.type === '#c0c0c0'" class="grey"> </div>
             <div v-if="point.type === '#0000FF'" class="blueC"> </div>
             <div v-if="point.type === '#ff0000'" class="red"> </div>
                  
               <td class="pointBody"><b>{{ point.title }}</b> <br> {{ point.body }}</td>

              <td class="text-right">  <a href='#' @click="deletePoint(point.id)"><b>X</b></a></td>
            </div>
     
         <!-- </tbody>
        </table>-->

       </div>
</div>
      </b-col>
    </b-row>


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
  document.getElementById("Result").innerHTML = " Visual log error for " + neatHours +" hours ,  time value must be at least 2h to be processed in visual ";
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
.pointBody{
     background-color: #F5F5F5;
     width:600px;
     color:black;

}
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

#pointCenter{
   align: center;
}
</style>

