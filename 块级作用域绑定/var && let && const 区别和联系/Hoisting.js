//提升机制
function getValue() {
    if(0) {
        var value = 'blue' ;
        return value ;
    } else {
        console.log(value) ;
        return null ; 
    }
    
}

getValue() ;


function getValue() {
    var value ;

    if(0) {
        value = 'blue' ;
        return value ; 
    } else {
        console.log(value)
        return null ;
    }
}

//变量 value 的声明被提升至函数顶部 , 而初始化操作依旧留在原地执行  ,
//这就意味着  else 子句中也可以访问到该变量 , 而且由于此时变量尚未初始化 , 所有其值为 undefined 