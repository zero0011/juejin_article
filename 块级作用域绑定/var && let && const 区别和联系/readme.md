# 块级作用域绑定
    **导引**

1. 提升机制
2. 块级声明
    2.1 块级声明用于声明在指定块的作用域之外无法访问的变量 , 
        块级作用域存在于 :
            函数内部
            块中{}
        让js 更灵活和普适
    2.2 let 声明
        用 let 代替 var 来声明变量 , 就可以把变量的作用域限制在当前代码块中 ,
        (稍后我们将在"临时死区"一节中讨论几处细微的差别) , 由于变量不会提升 , 因此开发者通常将let 声明语句放在封闭代码顶部 
        以便下面的代码都可以访问
        实例:

