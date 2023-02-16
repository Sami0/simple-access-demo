<template>
<div id="pageDesign">
<div id="ButtonsPanel">



<div>

<p class="solidBorder"><svg width="50" height="50" id="screen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V352H64V64H512z"/></svg> Display:</p>
<div id="countR"></div>
<div id="silver">:</div>
<div id="silver">:</div>

<p class="solidBorder">
<svg width="50" height="50" id="screen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M64 256V160H224v96H64zm0 64H224v96H64V320zm224 96V320H448v96H288zM448 256H288V160H448v96zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
 Data :
  </p>
<h3 id="PercentCount"></h3>
<h3 id="sumofWave"></h3>





</div>
<div class="solidBorder">
 <svg width="50" height="50" id="screen"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"/></svg>
controller :
<div id="unoWaveController">
<br>
<!-- a line is important for file downalod correctly -->
<a id="downloadAnchorElem" style="display:none" href="http://localhost:8080/#/upgrade">
<button id="downloadFile" >
<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 232V334.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31V232c0-13.3 10.7-24 24-24s24 10.7 24 24z"/></svg>
 download TRYscript.json file</button></a>
<br>



<div id="PowerOnButtons">
 <p> 
<br>
<br>
<br>

   
    <button @click="GreyCirclesCount()" class="btn btn-secondary"> + Grey points</button>
    <button @click="RedCirclesCount()" class="btn btn-danger"> + Red points</button>
    <button @click="YellowCirclesCount()"  class="btn btn-warning"> + Yellow points</button>
    <button @click="GreenCirclesCount()" class="btn btn-success"> + Green points</button>
    <button @click="BlueCirclesCount()" class="btn btn-primary"> + Blue points</button>
    <h3>=</h3>
    <button @click="NewLoopFunction()" class="btn btn-secondary">
    <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"/></svg>
     Generate </button>
</div><!--power on button panel-->


 </div><!--unowaveController-->   



</div>



<p class="solidBorder">

 Log :</p>
<div id="DataPanel">
<div id="TestResults"></div>
<div id="TestResultsRed"></div>
<div id="TestResultsGrey"></div>
<div id="TestResultsYellow"></div>
<div id="TestResultsGreen"></div>
<div id="TestResultsBlue"></div>
</div>




<br>
<br>
<br>
 <button class="btn btn-light" > 
 <a style="color:#149414;" href="https://blog.tryscript.io/blog/28-aug-status-update"> for more info see TRYscript engine guide </a> </button>

</div>
</div>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import api from '@/api'
const client = axios.create({
  baseURL: 'http://localhost:8081/points',
  json: true
})
Vue.prototype.$http = client ;


var storageObj =
 [{"type":"#c0c0c0","NUMCircles":35},
{"type":"#d49c1c", "NUMCircles":1},
{"type":"#d49c1c", "NUMCircles":1},
{"type":"#ff0000", "NUMCircles":1},
{"type":"#0000ff", "NUMCircles":1},
{"type":"#007f00", "NUMCircles":4}];




//import FULLJsondata from './TestData.json'
//C:\Users\sam\Downloads\TRYscript.json

import FULLJsondata from 'C:/Users/sam/Downloads/TRYscript.json'

var GreyTotal = 0; 
var RedTotal= 0;
var GreenTotal = 0;
var BlueTotal = 0;
var GreyTotal = 0;
var YellowTotal = 0;
const ALLpointsTOTAL = GreyTotal + RedTotal + YellowTotal + GreenTotal + BlueTotal ;
var WorkWdata = FULLJsondata ;

var NumsLoop = "<h4 id='silver'> : </h4>";
// all the  circles 
var objectGrey = "<div id='greyCircle'> </div>"
var objectRed = "<div id='redCircle'> </div>"
var objectYellow = "<div id='yellowCircle'> </div>"
var objectGreen = "<div id='greenCircle'> </div>"
var objectBlue = "<div id='blueCircle'> </div>"


export default {

  data () {
    return {
    }
  },
  async created () {


  },
  
  methods: {

 async downloadingFile() {
       this.loading = true
this.points = await api.getPoints()
      this.loading = false
     var StorageBOX = JSON.stringify(this.points)
      console.log(this.points) ;
      console.log("this is test 10:56 A " + StorageBOX);

  console.log("download button activated");
var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(StorageBOX);
var dlAnchorElem = document.getElementById('downloadAnchorElem');
dlAnchorElem.setAttribute("href",     dataStr     );
dlAnchorElem.setAttribute("download", "TRYscript.json");
dlAnchorElem.click();
// vars to connect to server
         
},

    
async YellowCirclesCount() {
    
 console.log("button clicked");
let yellowR = WorkWdata.filter(it => it.type.includes('#d49c1c'));
console.log("yellowR array  values :");
console.log(yellowR);


console.log(yellowR[0].NUMCircles);

const endresult = Object.values(yellowR.reduce((value, object) => {
  if (value[object.type]) {
    console.log("value[object.type]",value[object.type] );
    // this line allow us to calculate total number of circles based on the value from original log
    value[object.type].NUMCircles+= object.NUMCircles; 
    value[object.type].count++;
} else {
    value[object.type] = { ...object , count : 0 };
  }
  return value;
}, {}));

const valueY = endresult[0].NUMCircles;
console.log("end result is" + valueY );

console.log("the total number of Yellow Circles is "+ valueY);
document.getElementById("TestResults").innerHTML=  valueY + "  yellow circles in workwave";

return YellowTotal = (valueY);

 },
 // yellow = done ////////////////////////////////////////////////////////////////////////////////////


 // red ////////////////////////////////////////////////////////////////////////////////////
async RedCirclesCount() {


console.log("button clicked");

let RedR = WorkWdata.filter(it => it.type.includes('#ff0000'));
console.log("redCircles values ");
console.log(RedR );
console.log(RedR [0].NUMCircles);

const endresult = Object.values(RedR.reduce((value, object) => {
if (value[object.type]) {
    value[object.type].NUMCircles+= object.NUMCircles; 
value[object.type].count++;


} else {
value[object.type] = { ...object , count : 1
};
}
return value;
}, {}));


const valueRed = endresult[0].NUMCircles;

console.log("the total number of red Circles is "+ valueRed);
document.getElementById("TestResultsRed").innerHTML =  valueRed + "  red circles in workwave";

return RedTotal = (valueRed);

},
// red ////////////////////////////////////////////////////////////////////////////////////


// grey ////////////////////////////////////////////////////////////////////////////////////
// NUMCircles adjusted !:)
async GreyCirclesCount() {


console.log("button clicked");

let GreyR = WorkWdata.filter(it => it.type.includes('#c0c0c0'));
console.log("redCircles values ");
console.log(GreyR );
console.log(GreyR[0].NUMCircles);

const endresult = Object.values(GreyR.reduce((value, object) => {
if (value[object.type]) {
    value[object.type].NUMCircles+= object.NUMCircles; 
value[object.type].count++;

} else {
value[object.type] = { ...object , count : 1
};
}
return value;
}, {}));


const valueGrey = endresult[0].NUMCircles;


console.log("the total number of grey Circles is "+ valueGrey);
document.getElementById("TestResultsGrey").innerHTML=  valueGrey + "  grey circles in workwave";

return GreyTotal = (valueGrey);

},
// grey ////////////////////////////////////////////////////////////////////////////////////


// green ////////////////////////////////////////////////////////////////////////////////////
async GreenCirclesCount() {


console.log("button clicked");

let GreenR = WorkWdata.filter(it => it.type.includes('#007f00'));
console.log("redCircles values ");
console.log(GreenR );
console.log(GreenR[0].NUMCircles);

const endresult = Object.values(GreenR.reduce((value, object) => {
if (value[object.type]) {
value[object.type].NUMCircles += object.NUMCircles; 
value[object.type].count++;

} else {
value[object.type] = { ...object , count : 1
};
}
return value;
}, {}));


const valueGreen = endresult[0].NUMCircles;


console.log("the total number of green Circles is "+ valueGreen);
document.getElementById("TestResultsGreen").innerHTML=  valueGreen + "  green circles in workwave ";

return GreenTotal = (valueGreen);

},
// green ////////////////////////////////////////////////////////////////////////////////////

// blue ////////////////////////////////////////////////////////////////////////////////////
async BlueCirclesCount() {


console.log("button clicked");

let BlueR = WorkWdata.filter(it => it.type.includes('#0000FF'));
console.log("blueCircles values ");
console.log(BlueR );
console.log(BlueR[0].NUMCircles);

const endresult = Object.values(BlueR.reduce((value, object) => {
if (value[object.type]) {
value[object.type].NUMCircles += object.NUMCircles; 
value[object.type].count++;

} else {
value[object.type] = { ...object , count : 1
};
}
return value;
}, {}));


const valueBlue = endresult[0].NUMCircles;


console.log("the total number of blue Circles is "+ valueBlue);
document.getElementById("TestResultsBlue").innerHTML=  valueBlue + " blue circles in workwave";

return BlueTotal = (valueBlue);

},

// blue ////////////////////////////////////////////////////////////////////////////////////



async  NewLoopFunction() {
function precise(x) {
return x.toPrecision(2);
}

const ALLpointsTOTAL = GreyTotal + RedTotal + YellowTotal + GreenTotal + BlueTotal ;
// the grey function //
var i=0;
for(var i=0; i <= GreyTotal ; i++){
      //   NumsLoop += i + "<br>";
      
      NumsLoop += '<li id="none">' +  "" +  objectGrey  + '</li>'  + i ;
    }


   // the red function //   
for(i=0; i <= RedTotal ; i++){
      //   NumsLoop += i + "<br>";
      
      NumsLoop +=   '<li id="none">' +  "" +  objectRed  + '</li>' + i ;
    }

   // the yellow function //   
   for(i=0; i <= YellowTotal ; i++){
      //   NumsLoop += i + "<br>";
      
      NumsLoop +=   '  <li id="none">' +  "" +  objectYellow  + '</li> '+ i ;
    }

 // the green function //   
 for(i=0; i <= GreenTotal ; i++){
      //   NumsLoop += i + "<br>";
      
      NumsLoop +=   '<li id="none">' +  "" +  objectGreen  + '</li>' + i ;
    }


// the Blue function //       
for(i=0; i <= BlueTotal ; i++){
      //   NumsLoop += i + "<br>";
      
      NumsLoop   +=  '<li id="none">' +  "" +  objectBlue  + '</li>' + i ;
    }

    document.getElementById("countR").innerHTML =  NumsLoop ;

    document.getElementById("PercentCount").innerHTML= 
    
   
       
"<div id='DataPanel'> <p class='redfont'>"+   precise((RedTotal)/(ALLpointsTOTAL)) + "% is red</p> "

 + "<p>" + precise((GreyTotal)/(ALLpointsTOTAL)) + " % is grey </p>"
    
 + "<p>" +precise((YellowTotal)/(ALLpointsTOTAL)) + "% is yellow </p> "

 + "<p>" +precise((GreenTotal)/(ALLpointsTOTAL)) + "% is green </p>"

 + "<p>" +precise((BlueTotal)/(ALLpointsTOTAL)) + "% is blue </p> </div>"

    ;

    
    document.getElementById("sumofWave").innerHTML=  "<div id='DataPanel'><p>sum of wave is</p> " + ALLpointsTOTAL + "<p> circles ,</p>" + ALLpointsTOTAL* 2 + " hours ";
}

},
mounted(){
   // this.YellowirclesCount(YellowTotal).value =  YellowTotal;
    // this.model.valueY =  valueY;
 
  }

  }
 



</script>

<style>
#TurquoiseIcon{
fill:#59B6AF;
}

#greyIcon{fill:#c0c0c0;


}
 * { margin: 0px;  }
 p {font-size: 20px;}
.redfont{color:#e3342f}
.y{color:#d49c1c;}
.green{color:#007f00}
.b{color:#0000FF}
.grey{color:#c0c0c0}

#countR{
    /*  background-color:black;*/
      width:1200px;
      color:black;
      background-color:white;
}

#silver{
  color:black;
  background-color:#c0c0c0;
}
#yellowCircle{
    background-color:#d49c1c;
    width:10px;
    height:10px;
    border-radius: 50%;
    padding:30px;
 
}
#redCircle{
    background-color:#e3342f;
    width:20px;
    height:20px;
    border-radius: 50%;
    padding:30px;}
#greenCircle{
    background-color:#007f00 ;
    width:10px;
    height:10px;
    border-radius: 50%;
    padding:30px;
}
#blueCircle{
    background-color:#0000FF;
    width:10px;
    height:10px;
    border-radius: 50%;
    padding:30px;
}
#greyCircle{
    background-color: #c0c0c0;
    width:10px;
    height:10px;
    border-radius: 50%;
    padding:30px;
}
#none{
    display: inline-block;
    margin: 0;
}
#ButtonsPanel{
    margin:40px;
    
}
#DataPanel{
   
    margin:10px;
   width:1200px;
  color:#149414;
}
#pageDesign{
     width:1350px;
     background-color:#242424;
     color:#149414;
}
#unoWaveController{
  /*background-color:white;*/
  padding:20;
  margin:10;
}
#screen{
  fill:white;
}
.solidBorder{
  border-style: solid;
  padding:10px;
  margin:20px;
}

#PowerOnButtons{
  margin:50px;
  padding:20px;
}
#PercentCount{
color:black;
}
#sumofWave{
color:black;
}


</style>