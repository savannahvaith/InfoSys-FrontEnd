async function test(){
    return Promise.resolve("Hey there");
}
//! wait untill we get a response;
//! await keyword - pauses the execution untill the completion of the promise.
//! await  ONLY WORKS INSIDE AN ASYNC FUNCTION!!

test().then((msg)=>{
    console.log(msg);
})

async function test2(){
    let myPromise = new Promise((res,rej)=>{
        //set some timeout - watch it hang
        setTimeout(()=>{
            res("Done!!");
        },3000)
    })

    let result = await myPromise;
    console.log(result);
}

test2();


async function async1(){
    let myPromise = new Promise((res,rej)=>{
        //set some timeout - watch it hang
        setTimeout(()=>{
            console.log("async 1");
            res();
        },1000)
    })
}
async function async2(){
    let myPromise = new Promise((res,rej)=>{
        //set some timeout - watch it hang
        setTimeout(()=>{
            console.log("async 2");
            res();
        },4000)
    })
}
async function async3(){
    let myPromise = new Promise((res,rej)=>{
        //set some timeout - watch it hang
        setTimeout(()=>{
            console.log("async 3");
            res();
        },3000)
    })
}

async function callAsync(){
    await async3(); // this is waiting for a response in the Background
    await async2();
    await async1();
    console.log(" 4th lineeeWe done!!!!");
}

callAsync().then(()=>{
    console.log("this is the end lineeeee- doneeeeee");
})