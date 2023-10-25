import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: "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" // This is also the default, can be omitted
});


dotenv.config();

const router = express.Router();

router.route('/').get(async (req,res)=>{
    {
        res.status(200).json({message : "You are on dalle"});
    }
})

router.route('/').post(async (req,res)=>{
    try{
        const { prompt } = req.body 

        console.log(prompt)

        const response = await openai.images.generate({
            prompt,
            n:1,
            size: '1024x1024',
            response_format:'b64_json'
        })

        const image = response.data.data[0].b64_json;

        console.log(image.data)

        res.status(200).json({photo : image});
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Something went wrong"})
    }
})

export default router;