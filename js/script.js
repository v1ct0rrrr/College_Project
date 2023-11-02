$(function(){
    /* ====================  SEARCH SYSTEM  ==================== */ 

    var currentValue = 0
    var isDrag = false
    var precoMaximo = 90000
    var preco_atual = 0

    $('.pointerbar').mousedown(function(){
        isDrag = true
    })

    $(document).mouseup(function(){
        isDrag = false
        enableTextSelection()
    })

    $('.pricebar').mousemove(function(e){
        if(isDrag){
            disableTextSelection()
            var elBase = $(this)
            var mouseX = e.pageX - elBase.offset().left
            if(mouseX < 0)
                mouseX = 0
            if(mouseX > elBase.width())
                mouseX = elBase.width()


            $('.pointerbar').css('left',(mouseX-13)+'px')
            currentValue = (mouseX / elBase.width()) * 100
            $('.pricebar-fill').css('width',currentValue+'%')

            preco_atual = (currentValue/100) * precoMaximo
            preco_atual = formatarPreco(preco_atual)
            $('.search_price').html('R$'+preco_atual)
        }
    })

    function formatarPreco(preco_atual){
        preco_atual = preco_atual.toFixed(2)
        preco_arr = preco_atual.split('.')

        var novo_preco = formatarTotal(preco_arr)

        return novo_preco
    }

    function formatarTotal(preco_arr){
        if(preco_arr[0] < 1000) {
            return preco_arr[0]+','+preco_arr[1]
        }else if(preco_arr[0] < 10000) {
            return preco_arr[0][0]+'.'+preco_arr[0].substr(1,preco_arr[0].length)+','+preco_arr[1]
        }else {
            return preco_arr[0][0]+preco_arr[0][1]+'.'+preco_arr[0].substr(2,preco_arr[0].length)+','+preco_arr[1]
        }
    }



    function disableTextSelection(){
        $("body").css("-webkit-user-select","none");
        $("body").css("-moz-user-select","none");
        $("body").css("-ms-user-select","none");
        $("body").css("-o-user-select","none");
        $("body").css("user-select","none");
    }

    function enableTextSelection(){
        $("body").css("-webkit-user-select","auto");
        $("body").css("-moz-user-select","auto");
        $("body").css("-ms-user-select","auto");
        $("body").css("-o-user-select","auto");
        $("body").css("user-select","auto");
    }


    /* ====================  SLIDER  ==================== */ 

    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000
    });


})


/* ============================================================ */





/* ==================== CONTACT VALIDATION ==================== */


const form = document.querySelector("#form")
const input = document.querySelector("input[name='inputN']")
const msg = document.querySelector(".messageTy")
const campos = document.querySelectorAll(".required")
const spans = document.querySelectorAll(".span-required")
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/

let isValid = false

const validateInput = ()=> {
    isValid = true
    if(!input.value){
        input.nextElementSibling.classList.remove('span-required')
        isValid = false
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    validateInput()
    nameValidate()
    emailValidate()
    telValidate()
    

    if(isValid){
        form.remove()
        msg.classList.remove('hidden')
    }
})


function setErr(index){
    campos[index].style.border = '2px solid #e63636'
    spans[index].style.display = 'block'
}


function rmErr(index){
    campos[index].style.border = ''
    spans[index].style.display = 'none'
}


function nameValidate(){
    if(campos[0].value.length < 3){
        setErr(0)
    }else{
        rmErr(0)
    }
}


function emailValidate(){
    if(!emailRegex.test(campos[1].value)){
        setErr(1)
    }else{
        rmErr(1)
    }
}


function telValidate(){
    if(campos[2].value.length != 11){
        setErr(2)
    }else{
        rmErr(2)
    }
}


/* ============================================================ */