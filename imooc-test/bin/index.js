#!/usr/bin/env node
const lib = require("imooc-test-lib");
const argv = require('process').argv;
const command = argv[2];
if(lib[command]){
    lib[command]();// invoke the method 
}