// // // setTimeout(() => {
// // //     console.log('1')
// // //     setTimeout(()=>{
// // //         console.log('2')
// // //         setTimeout(() => {
// // //             console.log('3')
// // //         },1000);
// // //     },1000)
// // // },1000)

// // // console.log('start')
// // // setTimeout(() => {
// // //     const product = {
// // //         name:"Phone",
// // //         price:4000
// // //     }
// // //     console.log(product,'1')
// // //     setTimeout(() => {
// // //         product.isModified=true
// // //         console.log(product,'2')
// // //         setTimeout(() => {
// // //         product.status="ordered"
// // //         console.log(product,'3')
// // //         },2000)
// // //     },2000)
// // // },2000)


// // // const resolveData=(product)=>{
// // //     setTimeout(() => {
// // //         product.isModified=true
// // //         console.log(product,"2");
// // //     },2000)
// // // }

// // // req.then((product)=>{
// // // const req2=new Promise((resolve,reject)=>{
// // // setTimeout(() => {
// // //     product.isModified=true
// // //     console.log(product,'2')
// // //     resolve()
// // // },2000)
// // // })


// // // req2.then(() =>{
// // //     setTimeout(() => {
// // //       product.status='ordered'
// // //       console.log(product,'3')  
// // //     },2000)
// // // })
// // // })

// // const req = new Promise((resolve,reject)=>{
// //     console.log('start')
// //     setTimeout(() => {
// //      const product = {
// //         name:"Phone",
// //         price:4000
// //      }
// //      console.log(product,'1')   
// //      resolve(product)
// //     },2000)
// // })

// // req.then((product)=>{
// //     return new Promise((resolve,reject)=>{
// //         setTimeout(() => {
// //             product.isModified=true
// //             console.log(product,'2')
// //             resolve()
// //             // reject()
// //         })
// // })
// // .finally(()=>{
// //     console.warn('finnaly')
// // })
// // .then(
// //     setTimeout(()=>{
// //         product.status="ordered"
// //         console.log(product,'3')
// //     },2000)
// // )
// // })


// // const request = ()=>{
// //     const req = new XMLHttpRequest()
// //         req.open('GET','https://jsonplaceholder.typicode.com/todos/1')
// //         req.setRequestHeader("Content-Type","application/json")
// //         req.send()
// //         req.addEventListener("load",()=>{
// //             console.log(JSON.parse(req.response))
// //         })
// // }
// // request()

// // fetch('https//jsonplaceholder.typicode.com/todos/112312312312')
// //     .then(response=>response.json())
// //     .then(json=>console.log(json))
// //     .catch(()=>console.error('error'))
// //     .finally(()=>console.warn('finally'))

// const delay = (ms)=>{
// return new Promise((resolve)=>{
//     setTimeout(() => {
//       resolve()  
//     },ms)
// })
// }


// const url='https//jsonplaceholder.typicode.com/todos/1'

// // const fetchData=()=>{
// // console.log('start')
// // return delay(1000)
// // .then(()=>fetch(url))
// // .then((response=>response.json()))
// // }
// // fetchData()
// // .then((data)=>console.log(data))
// // .catch(()=>console.error('error'))
// // .finally(()=>console.warn('finally'))

// const fetchData=async()=>{
// try{
//     console.log('start')
//     await delay(2000)
//     const resp = await fetch (url)
//     console.log(resp)
//     const data= await resp.json()
//     console.log(data)
// }catch{
//     console.error('error')
// }finally{
//     console.warn('finally')
// }

// }
// fetchData()

