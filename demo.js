#!/usr/bin/env node

var fs = require('fs')
var dirName = process.argv[2]

fs.exists("dirName", function(exists) {
    // console.log(exists ? "创建成功" : "创建失败");
    if (exists) {
        return '目录已存在';
    } else {
        fs.mkdirSync("./" + dirName)
        process.chdir("./" + dirName)
        fs.mkdirSync('css')
        fs.mkdirSync('js')

        fs.writeFileSync('./index.html','<!DOCTYPE html><head><meta charset="utf-8"/><link rel="stylesheet" href="css/style.css"><script src="js/main.js"></script><title>Hello</title></head><body><h1>Hi</h1></body>');
        fs.writeFileSync('css/style.css', 'h1{color: red;}')
        fs.writeFileSync('./js/main.js', 'var string = "Hello World";alert(string)')
        console.log( '创建成功' );
        process.exit(0)
    }
});

