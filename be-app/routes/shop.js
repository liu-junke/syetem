const express = require('express')
const router = express.Router()
const { shop } = require('../db/index')

var multer = require('multer');

var path = require('path')
    // 关于图片的磁盘处理
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/upload'))
    },
    filename: function(req, file, cb) {
        // console.log("兵哥: file", file)
        cb(null, file.fieldname + '-' + Date.now())
    }
})

var upload = multer({ storage: storage })

router.route('/')
    .post(upload.any(), async(req, res, next) => {
        //1. 接收前端发来的数据     req.body 
        // console.log("兵哥: req.body", req.body)
        console.log('req.body', req.body)
            //2. 进行数据库操作
        const result = await shop.add(req.body)
            // console.log('result',result)
            //3. 将数据库操作结果返回给前端 

        res.render('shop', {
            data: JSON.stringify({
                info: result.info,
                status: result.status,
                result: result.result
            })
        })
    })
    .delete(async(req, res, next) => {
        //1. 接收前端发来的数据     req.body 
        const { _id } = req.query
        console.log(_id)
            //2. 进行数据库操作
        const result = await shop.del(_id)
            //3. 将数据库操作结果返回给前端 
        res.render('shop', {
            data: JSON.stringify({
                info: result.info,
                status: result.status,
                result: result.result
            })
        })
    })
    .put(upload.any(), async(req, res, next) => {
        console.log('req.query', req.query)
        const result = await shop.change(req.query)
        res.render('shop', {
            data: JSON.stringify({
                info: result.info,
                status: result.status,
                result: result.result
            })
        })
    })
    .get(async(req, res, next) => {
        const result = await shop.query()
            // console.log('result', result)
        res.render('shop', {
            data: JSON.stringify({
                info: result.info,
                status: result.status,
                result: result.result
            })
        });
    })


module.exports = router