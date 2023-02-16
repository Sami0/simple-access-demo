<template>

<div>

<div>

<h2> Rhythm board :</h2>
<p> step out of the clock and focus on Pure Rhythm</p>
<p> this is space to further customize the 5 main patterns </p>
<p>and to focus on qualitative work patterns</p>
<button class="btn btn-secondary"><a style="color:white;" href="http://localhost:8080/"> <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M360 224L272 224v-56c0-9.531-5.656-18.16-14.38-22C248.9 142.2 238.7 143.9 231.7 150.4l-96 88.75C130.8 243.7 128 250.1 128 256.8c.3125 7.781 2.875 13.25 7.844 17.75l96 87.25c7.031 6.406 17.19 8.031 25.88 4.188s14.28-12.44 14.28-21.94l-.002-56L360 288C373.3 288 384 277.3 384 264v-16C384 234.8 373.3 224 360 224zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"/></svg> return to main page</a> </button>

<br>
<br>

{{placholderTest}}
</div>


      <b-col lg="6">
        <b-card :title="(model.id ? 'Edit Point ID#' + model.id : 'New Point')">
          <form @submit="saveRHY()">

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
           <div> Select Rhythm: </div>

     <b-form-group label="type :" v-slot="{ ariaDescribedby }">
   
   <b-button   variant="danger">
       <b-form-radio v-model="model.type"
                    :aria-describedby="ariaDescribedby"   
                      name="RHYtype"
                      class="red-c"
                    value="#ff0000">red</b-form-radio>
   </b-button>

 <b-button   variant="warning">
<b-form-radio v-model="model.type" :aria-describedby="ariaDescribedby" name="RHYtype" class="yellow-c" value="#d49c1c">yellow </b-form-radio>
</b-button>

 <b-button   variant="success">
<b-form-radio v-model="model.type" :aria-describedby="ariaDescribedby" name="RHYtype" class="green-c" value="#007f00">green </b-form-radio>
</b-button>


 <b-button   variant="primary">
<b-form-radio v-model="model.type" :aria-describedby="ariaDescribedby" name="RHYtype" class="blue" value="#0000FF">blue </b-form-radio>
</b-button>

<b-button   variant="secondary">
<b-form-radio v-model="model.type" :aria-describedby="ariaDescribedby" name="RHYtype" value="#c0c0c0">grey</b-form-radio>
</b-button>


</b-form-group>

 


      
            <b-form-group label="details">
              <b-form-textarea rows="4" v-model="model.body"></b-form-textarea>
            </b-form-group>
            <div>





 <div class="container-fluid mt-4">
   
   <div id="TimeBox">
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


  <div  v-for="rhythm in Rhythms" :key="rhythm.id">
  <p><b>{{rhythm.title }}</b> </p>
  </div>
            <div v-for="rhythm in Rhythms.slice(0,30)" :key="rhythm.id">
             <div v-if="rhythm.type === '#007f00'" class="green"> </div>
             <div v-if="rhythm.type === '#d49c1c'" class="yellow"> </div>
             <div v-if="rhythm.type === '#c0c0c0'" class="grey"> </div>
             <div v-if="rhythm.type === '#0000FF'" class="blueC"> </div>
             <div v-if="rhythm.type === '#ff0000'" class="red"> </div>
                  
               <td class="pointBody"><b>{{rhythm.title }}</b> <br> {{ rhythm.body }}</td>

              <td class="text-right">  <a href='#' @click="deleteRhY(rhythm.id)"><b>X</b></a></td>
            </div>
     
         <!-- </tbody>
        </table>-->

       </div>
</div>
      </b-col>
    </b-row>
<div id="logStatus">: {{Rhythms.length}} /50 </div>
<p>* guest Maxmium capacity is 50 points to reset </p>
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
      loading: false,
     Rhythms: [],
      model: {},
      placholderTest:'',
   
     // storedTimeValue :decimal
    }
  },
  async created () {
     this.refreshRhY()

  },
  
  methods: {

///////////////start of time Calc function //////////////////////


// removed async will block functionality from procssing well 

  ///////////////end of time Calc function //////////////////////

    async refreshRhY () {
      this.loading = true
      this.Rhythms = await api.getRhY()
      console.log(  this.Rhythms[1].body );
      this.loading = false
 
    },
   async saveRHY() {
      if (this.model.id ) {
         console.log("this.model.id in savepoint clicked" );
          await api.updateRHY(this.model.id, this.model)
      } 
      else {
        await api.createRhY(this.model)
           await this.model.id.save()
      }
      this.model = {} // reset form
      await this.refreshRhY ()
      
    },

    async deleteRhY (id) {
      console.log("delete this.id  was clicked");
         console.log("delete"  + id  +" was clicked");
         console.log("this.model.id " + this.model.id )
      if (confirm('Are you sure you want to delete this point?, ***ALERT : this action cannot be reversed***')) {
        // if we are editing a post we deleted, remove it from the form
        if (this.model.id === id) {
          this.model = {}

        }
        // removed placment } from here 
        await api.deleteRhY(id)
        await this.refreshRhY()
           console.log("delete"  + id  +"should be deleted  by now");
        }
        else {
           console.log("delete"  + id  +"was blocked by something else ");
        }
      },
    },

mounted(){
//return placholderTest ;
  },

  }
   


</script>

<style>
.pointBody{
     background-color: #c0c0c0;
     width:600px;

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

