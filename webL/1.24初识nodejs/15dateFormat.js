//1.定义格式化时间的方法

function dateFormat(dtStr) {
    const dt = new Date(dtStr)

    const y = dt.getFullYear()
    const m = dt.padZero(getMonth() + 1)
    const d = dt.padZero(getDate())


    const hh = dt.padZero(getHours())
    const mm = dt.padZero(getMinutes())
    const ss = dt.padZero(getSeconds())


    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

function padZero(n) {
    return n > 9 ? n : '0' + n
}

module.export = {
    dateFormat
}