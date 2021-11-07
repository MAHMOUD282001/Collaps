

let collaps = document.querySelectorAll(".collaps li");

let text = document.querySelectorAll("div");

var coll = Array.from(collaps)
var texts = Array.from(text)

console.log(text);

collaps.forEach(element => {
    element.addEventListener('click',function(){ 
        // old active link and old active div remove Classes;
        collaps.forEach((e)=>{
        e.classList.remove('active');
        texts[coll.indexOf(e)].classList.remove('act');
        })
        // Toggle Link 
        element.classList.toggle('active');
        
        //toggle Act Same order link
        texts[coll.indexOf(element)].classList.toggle('act');
        
        
        
        // removeActive();
        // // console.log(element.getAttribute("id"));
        // // text.forEach(ele=>{
        // //     ele.classList.toggle("act");
        // // })
            
        // removeAct();
        
        
        // element.classList.toggle("active");
        
        // document.getElementsByClassName(element.getAttribute("id"))[0].classList.toggle("act");
        
});

})





function removeActive(){
    collaps.forEach((ele)=>{
        ele.classList.remove("active");
    })
}

function removeAct(){
    text.forEach((el)=>{
        el.classList.remove("act");
    })
}


