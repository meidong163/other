
/* JavaScript content from scripts/config.js in folder common */
﻿;(function(_window){
    // var weifei="caibi";
    var config={
        xiage:"niubi",
        root:"",
        base_url:"",
        html_path:"",
        template_path:"",
        js_path:"",
        css_path:"",
        /*ajax远程请求地址*/
        remote_url:"",
        timestmpt:"",
        img_path:"",
        css:{
            index:"index.css",
            login:"login.css"
        }
    };



    config["init"]=function(_option){

        var option={
            root:"./",
            remoteHost:"./"
        };

        for(var key in _option){
            option[key]=_option[key];
        }


         this.base_url=option.root+"rest";
         this.html_path=option.root+"views/";
         this.js_path=option.root+"scripts/";
         this.css_path=option.root+"assets/css/";
         this.img_path=option.root+"assets/img/";
         this.remote_url=option.remoteHost+"";
         this.template_path=option.root+"uib/template/";
    };

    _window["$config"]=config;
    // _window["$weifei"]=weifei;

})(window);



