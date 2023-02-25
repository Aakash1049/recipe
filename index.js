const express=require("express")
const app=express()
const mongoose=require("mongoose")
const bodyParser= require("body-parser")
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://Aakash1049:Aaku1049@cluster0.thuloxc.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("connected to database")
})
const user=require("./routes/user")
app.use(user)

const recieps=require("./routes/recieps")
app.use(recieps)
if (process.env.NODE_ENV === 'production') {
    //*Set static folder up in production
    app.use(express.static('client/build'));

    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
  }

app.listen(5000,()=>{
    console.log("server running")
})




