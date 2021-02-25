const path = require('path')
const tinify = require("tinify");
tinify.key = "user key";

// 使用本地资源
const source = tinify.fromFile("123.png");
source.toFile("a.png");


// 检查剩余次数
let compressionsThisMonth = tinify.compressionCount;
console.log(compressionsThisMonth);

// // 使用网络资源
// const source = tinify.fromUrl("https://img0.bdstatic.com/static/searchdetail/img/logo-2X_0c4ef02.png");
// source.toFile("baidu.jpg");

