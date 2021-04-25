#!/usr/bin/env node
const lib = require("imooc-test-lib-wawaki");
const argv = require('process').argv;
let command = argv[2];
if(argv.length > 3){
    const options = argv.slice(3);
    let [option, params] = options;
    option = option.replace('--', '');// remove the '--' of option
    if(command){
        if(lib[command]){
            lib[command]({ option, params });// invoke the method 
        }else{
            console.log("invalid command!");
        }
    }else{
        console.log("please enter the command~")
    }
}else if(command.startsWith('--') || command.startsWith('-')){ // global command, like --version
    const globalCommand = command.replace(/--|-/g, '');
    if(globalCommand=='version'||globalCommand=='V'){ // when enter imooc-test --version or imooc-test -V, console log the version
        console.log("1.0.4"); // later we can dynamic reading the version number
    }
}
