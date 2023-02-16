const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const finale = require('finale-rest')
var DataTypes = require('sequelize/lib/data-types');
var path = require('path');
var fs = require('fs');

let app = express()
app.use(cors())
app.use(bodyParser.json())



//perform worst with lines above 
//app.use(function (req, res) {
//  res.set('Cache-control', 'private')
//})

app.get('/',(req, res) => {
  console.log('LOGGED')
  // attempt two 
  res.set('Cache-control', 'max-age=0, must-revalidate')
  res.send('get was accessed !')

 

})


//let database = new Sequelize({
// For ease of this tutorial, we are going to use SQLite to limit dependencies
let database =  new Sequelize({
    dialect: 'sqlite',
    storage: './SaveWorkWaveForGuest.sqlite'
  })
  
  // Define our Post model
  // id, createdAt, and updatedAt are added by sequelize automatically
  let point = database.define('points', {
    title: Sequelize.STRING,
    body: Sequelize.TEXT,
    type :{ type: DataTypes.STRING, allowNull: false,},
    startTime:Sequelize.NUMBER,
    EndTime:Sequelize.NUMBER,
    // these three are most important values 
    ManualTime:Sequelize.INTEGER,
    Difference: {
      type: DataTypes.VIRTUAL,
      allowNull: true,
      validate: {
        len: [2,80] 
                  },
      get() {
        return   ((+new Date(this.EndTime) - +new Date(this.startTime))/3600000) ; 
   
      },
      set(value) {
        throw new Error('Do not try to set the `Difference` value!');
      },
  
    },
    NUMCircles: {
      type: DataTypes.VIRTUAL,
      get() {
        if (  (  this.ManualTime !== null) ) {
          {  return   this.ManualTime/2 ; }
        }
  
        else if (  ( ((+new Date(this.EndTime) - +new Date(this.startTime)))/3600000 ) > 80.0 ) {
          {  return   " error visual log , time value > 80 hours" ; }
        }
        else if ( (  ( ((+new Date(this.EndTime) - +new Date(this.startTime)))/3600000 ) > 2.0) ){
          return   ((+new Date(this.EndTime) - +new Date(this.startTime))/7200000) ; 
        }
        else if ( (  ( ((+new Date(this.EndTime) - +new Date(this.startTime)))/3600000 ) == 2.0) ){
          return   ((+new Date(this.EndTime) - +new Date(this.startTime))/7200000) ; 
        }
        else {  return   " error visual log , time value is less than 2 hours" ; }
      
      },
      set(value) {
        throw new Error('Do not try to set the `Difference` value!');
      }
    }
  })

  let Rhythm = database.define('Rhythms', {
    title: Sequelize.STRING,
    body: Sequelize.TEXT,
    type :Sequelize.STRING,
  })
  


// Initialize finale
finale.initialize({
    app: app,
    sequelize: database
  })
  
  // Create the dynamic REST resource for our Point model
  let PointResource = finale.resource({
    model: point,
    endpoints: ['/points' , '/points/:id']
  })


  let RhythmResource = finale.resource({
    model: Rhythm,
    endpoints: ['/Rhythms' , '/Rhythms/:id',]
  })
  
  // Resets the database and launches the express app on :8081

 // .sync({ force: true })
 database.sync().then(() => {
    app.listen( 8081, () => {
      console.log('listening to port localhost:8081')
      console.log( "server for guest acccess is running ");
    })
  })