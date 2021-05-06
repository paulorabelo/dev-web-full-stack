const $elementExample_st = document.querySelector('.elementExample_st')

const $elementExample_last = document.querySelector('.elementExample_last')

$elementExample_st.addEventListener('click', function(event){
    this.classList.toggle('elementExample_isActive')
    $elementExample_last.classList.add('elementExample_isActive')
})

$elementExample_last.addEventListener('click', function(event){
    this.classList.toggle('elementExample_isActive')
    $elementExample_st.classList.add('elementExample_isActive')
})