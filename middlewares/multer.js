import multer from 'multer';
import path from 'path'

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,'../public'));
        
    },
    filename:function(req,file,cb){
        const name = Date.now()+'-'+file.originalname;
        console.log('file uploaded')
        cb(null,name);
    }
    
})

export const uploadFile = multer({storage:storage});