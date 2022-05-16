/*let colorchange = {
    light: {
        bg: "white",
        fg: "black"
    },
    dark: {
        bg: "black",
        fg: "white"
    }
};
let light = document.querySelector("#light");
let dark = document.querySelector("#dark");
let back = document.querySelector("#back");
light.addEventListener("click",()=>{
    back.style.backgroundColor=`${colorchange.light.bg};`
    back.style.color=`${colorchange.light.fg};`
})
dark.addEventListener("click",()=>{
    back.style.backgroundColor=`${colorchange.dark.bg};`
    back.style.color=`${colorchange.dark.fg};`
})
*/
let toggle = {
    light : {
        bg:'white',
        fg :'black'
    },
    dark : {
        fg:'white',
        bg :'black'
    },
}

let light = document.querySelector('#light')
let dark = document.querySelector('#dark')
let back = document.querySelector('#back')

light.addEventListener('click',()=>{
    back.style.backgroundColor = `${toggle.light.bg}`;
    back.style.color = `${toggle.light.fg}` 
})

dark.addEventListener('click',()=>{
    back.style.backgroundColor = `${toggle.dark.bg}`;
    back.style.color = `${toggle.dark.fg}`;
})
