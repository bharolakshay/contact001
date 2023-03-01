const express = require('express')
const port = 8000
const app = express()
const path = require('path')
const ejs = require('ejs')
const db = require('./config/mongoose')
const Contact = require('./model/contact')

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views','views')

var contactList = [
    {
        name: "Rio",
        phone: "1111111111"
    },
    {
        name: "Tony Stark",
        phone: "1234567890"
    },
    {
        name: "Richard",
        phone: "12131321321" 
    }
]

app.get('/', (req,res)=> {
    Contact.find({})
    .then((result)=>{
        res.render('project',{
                    title:"akshay",
                    list: result
                })
    })

})

app.get('/delete/:id', (req,res)=> {

    let id = req.params.id
    Contact.findByIdAndRemove(id)
    .catch(err =>alert(err))
    return res.redirect('back');

})


app.post('/create',(req,res)=> {
    Contact.create({
        name:req.body.name,
        phone:req.body.phone
    }),function(err,result){
        if(err){
            return console.log(err);
        }
            console.log(result);
            return res.redirect("/project")
        }
})

app.listen(port,() =>{  
    console.log(`'app listening on port @',port:8000`)
})