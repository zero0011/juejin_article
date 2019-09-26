function getValue () {
    if(0) {
        let value = 'blue' ;
        return value
    } else {
        //变量value 在此处不存在
        console.log(value)
        return null ;
    }
    //变量value 在此处不存在
}
//执行流离开if块  , value 立刻被销毁 
// 如果condition 的值 false , 就永远不会声明并初始化

getValue()
