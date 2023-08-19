const exp = require('express');

const router = exp.Router();

//database connection
require('../db/conn');

//userSchema (model) creation
const User = require('../model/userSchema');

router.get('/',(req,res)=>{
    res.send('get home');
});


router.get('/login',(req,res)=>{
    res.send("login");
});

router.post('/login',(req,res)=>{
    const {email, password} = req.body;
    if(!email || !password){
        return res.json({error:"Enter the req fields"});
    }
    User.findOne({email:email})
        .then((item)=>{  
            if(item.password===password){
                console.log("Valid Login");
                return res.json({message:"Valid Login"});
            }
            else{
                console.log("Invalid Password,Enter again");
                return res.json({error:"Invalid Password,Enter again"});
            }
        })
        .catch((err)=>{
            console.log(err)
            return res.json({error:"Invalid mailID"});
        });
});

router.get('/signup',(req,res)=>{
    res.send("signup");
});

router.post('/signup',(req,res)=>{
    const {name, email, password } = req.body;
    if(!name || !email){
        return res.json({message:"plz fill all details"});
    }
    
    User.findOne({email:email})
        .then((userExist)=>{
            if(userExist){
                console.log("User already exists");
                //window.alert('User already exists');
                return res.json({message:"User already exists"});
            }
        const user = new User({email,name,password});
        user.save()
            .then(()=>{
                console.log("Happy gaming")
                //window.alert("Happy gaming");
            })
            .catch((err)=>{console.log(err)});
        })
        .catch((err)=>{
            console.log(err);
        })
});

router.get('/jigsaw',(req,res)=>{
    res.send("jigsaw");
});

router.get('/matchingpairs',(req,res)=>{
    res.send("matchingpairs");
});

router.get('/cross',(req,res)=>{
    res.send("cross");
});


module.exports=router;