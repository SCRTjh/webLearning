export default {
    install(Vue) {
        //定义全局混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200
                }
            },
        })
    }
}