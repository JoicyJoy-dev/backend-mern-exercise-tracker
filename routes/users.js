const router=require('express').Router();
let User=require('../models/user.model');


router.route('/').get((req,res)=>{
    User.find()
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res)=>{
    console.log(req.body.username)
   const username=req.body.username;
   const newUser=new User({username});

   newUser.save()
   .then(()=>{
       console.log(res)
       res.status(200).send({
           status:'success',
           users:res.users
       })
    })
   .catch(err=>res.status(500).json('Error: '+ err));

});

module.exports = router;