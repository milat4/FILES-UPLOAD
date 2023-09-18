const cloudinary = require('cloudinary').v2

//cloudinary
const cloudconfig = cloudinary.config({
    cloud_name:'dcbloaccc',
    api_key:'987889524937588',
    api_secret:'KTb1jQ7yAIUoBc5WqkwcfqjQzzc'
})

const uploadImage ='./img/food.jpg'
const uploadFile = async()=>{
    try{
        const res = await cloudinary.uploader.upload(uploadImage)
        console.log(res);
    }catch(err){
        console.log(err);
    }
}

uploadFile()