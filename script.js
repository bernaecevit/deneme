// let eposta = document.getElementById('eposta')
let epostalar = document.querySelectorAll('.eposta')
// let label = document.querySelectorAll('.yerlestir')



epostalar.forEach(eposta =>{
    eposta.addEventListener('focus',function(){
        let label = this.parentElement.children[1]
        label.style.top = '0px'
        label.style.left = '15px'
        label.style.fontSize = '13px'
    })
    eposta.addEventListener('blur',function(){
        let label = this.parentElement.children[1]
        if(eposta.value == ''){
            eposta.style.border='1px solid red'
            label.style.top = '15px'
            label.style.left = '30px'
            label.style.fontSize = '16px'
        }else{
            eposta.style.border='1px solid green'
        }
})  
})
const select = document.querySelector('.boyutlandır2')

let x = window.matchMedia('(max-width: 600px)')

window.addEventListener('resize',yoket)

function yoket(){
    if (x.matches){
      
            select.selectedIndex= -1
            select.style.width = '50px'
   
    }else{
        select.selectedIndex= 0
        select.style.width = '100%'
    }
}





// aynı kodu iki kere çalıştırdıgımız için daha kompakt bir çözüm bulalım kodlarımız spagetti olmasın.
// let eposta1 = document.getElementById('eposta1')
// let label1 = document.querySelector('.yerlestir1')

// eposta1.addEventListener('focus',function(){
//     label1.style.top = '0px'
//     label1.style.left = '15px'
//     label1.style.fontSize = '13px'
// })

// eposta1.addEventListener('blur',function(){
//     if(eposta1.value == ''){
//         label1.style.top = '15px'
//         label1.style.left = '30px'
//         label1.style.fontSize = '16px'
//     }
    
// })

// window.addEventListener('scroll',()=>{
//     if(window.scrollY != 0){
//         document.body.innerHTML=''
//     }
// })

const kapsayıcı = document.querySelectorAll('.kapsayıcı')
const alttaki = document.querySelectorAll('.alttaki')
const plus = document.querySelectorAll('.fa-plus')
kapsayıcı.forEach(i =>{
    i.addEventListener('click',function(){

        if(this.children[1].classList.contains('active')){
            
        }else{
            alttaki.forEach(alt =>{
                alt.classList.remove('active')
            })
            plus.forEach(i =>{
                i.classList.remove('fa-x')
                i.classList.add('fa-plus')
            })
        }
    
     
        this.children[1].classList.toggle('active')
        this.children[0].children[1].classList.toggle('fa-plus')
        this.children[0].children[1].classList.toggle('fa-x')
        

    })
})