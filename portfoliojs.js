// Script of About Section of tabs
var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');
let tablink,tabcontent;
function opentab(tabname)
{
    for(tablink of tablinks)
    {   
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents)
    {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add("active-tab");    
}

// Script for storing form data on google sheet

let url = 'https://script.google.com/macros/s/AKfycbzxXHIJjn7sEW7ZoNjGI-sb77eaivNxC68TuzJGXGHgvZJprWd_iuiqHWyxsIa3-Vky/exec'
// let form = document.getElementById('form');
let form = document.querySelector('#form');
form.addEventListener("submit",(e)=>{
    let dform = new FormData(form);
    fetch(url,{
        method:"POST",
        body:dform
    }).then((res)=> res.text()).then((finalRes)=>console.log(finalRes))
    e.preventDefault();
})
