const jwt=require('jsonwebtoken');

module.exports=(req,res,next)=>{
    if (req.headers && req.headers.authorization) {
         const authorization =headers.authorization,
          decoded;

          try {
            decoded = jwt.verify(authorization, 'secreat');
        } catch (e) {
            return res.status(401).send('unauthorized');
        }
         const userid=decode.id
    }

}



// exports.me = function(req,res){
//     if (req.headers && req.headers.authorization) {
//         var authorization = headers.authorization,
//             decoded;
//         try {
//             decoded = jwt.verify(authorization, secret.secretToken);
//         } catch (e) {
//             return res.status(401).send('unauthorized');
//         }
//         var userId = decoded.id;
//         // Fetch the user by id 
//         User.findOne({_id: userId}).then(function(user){
//             // Do something with the user
//             return res.send(200);
//         });
//     }
//     return res.send(500);
// }