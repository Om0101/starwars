const { request, response } = require("express");
const axios = require('axios')

exports.getAllCharecters = async(request,response)=>{
    try {
        const pageNum=request.query.page || 1
        const res = await axios.get(`https://swapi.dev/api/people/?page=${pageNum}`)
        data=res.data
        return response.status(200).json({
            message:"Fetched Successfully",
            success:true,
            data:data
        })
       
    } catch (error) {
        return response.status(500).send({
            message:"Unable to fetch data , try after some time",
            error:true
        })
    }
}



