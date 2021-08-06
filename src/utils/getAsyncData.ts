//模拟ajax异步请求
const getAsyncData = data => {
    return new Promise(res => setTimeout(() => res(data), 1000))
}
export default getAsyncData