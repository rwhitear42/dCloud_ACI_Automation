# Place this code is the pre-request-script tab within Postman.

function foo() {
    return (new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("done!");   // passing argument is optional, can just use resolve()
        }, 500)   // specify the delay time in ms here..
    }))
}

async function waitForMe() {
    await foo().then((val) => {
        console.log(val);  // not required, you can just do an await without then
    })
}

waitForMe();
