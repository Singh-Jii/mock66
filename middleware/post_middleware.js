const check_role=(my_post)=>{

    return(request,response,next)=>{

        if(my_post.includes(request.body.post)){

           return next();

        }
        
        else{

            return response.status(403).send('gapping');

        }

    }
   
}

module.exports={check_role};