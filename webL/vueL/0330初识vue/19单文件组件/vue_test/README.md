# vue_test



## ref属性
    1.被用来给元素或子组件注册引用信息(id的替代者)
    2.应用再html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象(vc)
    3.使用方式:
        打标识:<h1 ref="xxx"> ... </h1> 或 <School ref="xxx"> </School> 获取:this.$refs.xxx

## 总结TodoList案例
1.组件化编码流程
    1.拆分静态组件:组件要按照功能点拆分，命名不要与html元素冲突
    2.实现动态组件:考虑好数据的存放位置,数据是一个组件在用，还是些组件在用:
        1)一个组件在用:放在组件自身即可
        2)一些组件在用:放在他们共同的父组件上(状态提升)
    3.实现交互:从绑定事件开始
2.props适用于L
    1.父组件 ==>子组件 通信
    2.子组件 ==> 父组件 通信 (要求父先给子一个函数)
3.使用v-model时要切记:v-model绑定的值不能时props传过来的值，因为props时不可以修改的
4.props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做

## webStorage
    1.存储内容大小一般支持5MB左右（不同浏览器可能还不一样）
    2.浏览器通过Window.session和Window,localStorage属性来实现本地存储机制
    3.相关API：
        1.xxxStorage.setItem('key','value');
        该方法接收一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值
        2.xxxStorage.getItem('person');
        该方法接收一个名作为参数，返回键名对应的值
        3.xxxStorage.removeItem('key');
        该方法接收一个键名作为参数，并把该键名从存储中删除
        4.xxxStorage.clear()
        该方法会清空存储中的所有数据
    4.备注
        1.SessionStorage存储的内容会随着浏览器窗口的关闭而消失
        2.LocalStorage存储的内容需要手动清除才会消失
        3.xxxStrage.getItem(xxx)如果对应的value获取不到，那么返回值是null
        4.JSON.parse(null)的结果依然是null

##组件的自定义事件
    1.一种组件间通信的方式，适用于:子组件 ===> 父组件
    2.使用场景:A是父组件,B是子组件，B想给A传数据，那么就要给A中绑定自定义事件(事件的回调在A中)
    3.绑定自定义事件：
        1.第一种方式，在父组件中：<Demo @atguigu="test"/> 或 <Demo v-on:atguigu="test" />
        2.第二种方式,在父组件中：
        ```
        <Demo ref="demo"/>
        ...
        mounted(){
            this.$refs.xxx.$on('atguigu',this.test)
        }

        ```
    4.触发自定义事件:this.$emit('atguigu',数据)
    5.解绑自定义事件this.$off('atguigu')
    6.组件上也可以绑定原生DOM事件，需要使用native修饰符
    7.注意:通过this.$refs.xxx$on('atguigu',回调)绑定自定义时间时,回调要么配置在methods中，妖媚用箭头函数，否则this指向出问题


##全局事件总线(GlobalEventBus)
####1.一种组件间通信的方式，适用于任意组件间通信
####2.安装全局事件总线
```
    new  Vue({
        ...
        before(){
            Vue.prototype.$bus = this
        },
        ...```
    })
```

####3.使用事件总线
    1.接收数据:A组件想接收数据，则在A组件中给$bus绑定自定义事件.事件的回调留在A组件自身
    ```
        methods(){
            demo(data){...}
        }
        ...
        mounted(){
            this.$bus.$on('xxx',this.demo)
        }
    ```

    2.提供数据:this.$bus.$emit('xxx',数据)

4.最好在beforeDestroy钩子中，用$off去解绑当前组件所用到的事件

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
