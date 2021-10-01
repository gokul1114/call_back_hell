
let div = document.getElementById("content")
div.innerHTML = 10
count = 10;
setTimeout(()=>{
    count = count-1
    div.innerHTML = count
    setTimeout(()=>{
        count = count-1
        div.innerHTML = count
        setTimeout(()=>{
            count = count-1
            div.innerHTML = count
            setTimeout(()=>{
                count = count-1
                div.innerHTML = count
                setTimeout(()=>{
                    count = count-1
                    div.innerHTML = count
                    setTimeout(()=>{
                        count = count-1
                        div.innerHTML = count
                        setTimeout(()=>{
                            count = count-1
                            div.innerHTML = count
                            setTimeout(()=>{
                                count = count-1
                                div.innerHTML = count
                                setTimeout(()=>{
                                    count = count-1
                                    div.innerHTML = count
                                    setTimeout(()=>{
                                        count = count-1
                                        div.innerHTML = "Happy Independence Day"
                                        
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)
