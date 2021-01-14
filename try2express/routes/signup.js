var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/',function(req,res,next){
  const nav =[{link:'/',name:'Login'},{link:'/signup',name:'Signup'}];
  const title ="Library";

  res.render('signup',{nav ,title,style:'style.css'});
})

module.exports = router;
