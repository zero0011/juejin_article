var funcs  = []

//立即调用函数表达式 , 以强制生成计数器变量的副本

for(var i = 0 ; i < 10 ; i ++) {
    funcs.push( function(value){
        return function() {
            console.log(value) ;
        }
    }(i) )
}


funcs.forEach(function(func){
    // console.log(func)
    func()
})

