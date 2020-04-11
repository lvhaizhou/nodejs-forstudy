// 请求拦截，在每个请求头上加入JWT认证信息
axios.interceptors.request.use(
  config=>{
    const token = window.localStorage.getItem('token')
    if(token){
      config.headers.common['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  err=>{
    return Promise.reject(err)
  }
)

const inputs = document.getElementsByTagName('input')
const login = document.getElementById('login')
const logout = document.getElementById('logout')
const getToken = document.getElementById('get-token')

login.addEventListener('click', async ()=>{
  console.log(inputs[0].value);
  const res = await axios.post('/login', {
    username: inputs[0].value,
    password: inputs[1].value
  })
  window.localStorage.setItem('token', res.data.token)
}, false)

logout.addEventListener('click', ()=>{
  window.localStorage.removeItem('token')
}, false)

getToken.addEventListener('click', async ()=>{
  const res = await axios.get('/getToken')
  console.info(res.data.token)
}, false)