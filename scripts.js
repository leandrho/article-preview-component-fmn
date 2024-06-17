const shareButton = document.querySelector("#check");
const shareBox = document.querySelector('.share__container');
const personInfo = document.querySelector('.person__info');
const personCard = document.querySelector('.card__person');

shareButton.addEventListener('change', (e)=>{
    if(document.body.clientWidth<745){
        personInfo.classList.toggle('hidden');
        shareBox.classList.toggle('hidden');

        if(shareButton.checked){
            personCard.classList.remove('bg--white');
            personCard.classList.add('bg--dark');
        }
        else{
            personCard.classList.remove('bg--dark');
            personCard.classList.add('bg--white');
        }
    }
    else{
        shareBox.classList.toggle('hidden');
        const rect = document.querySelector(".btn").getBoundingClientRect();
        shareBox.classList.toggle('showbox');
        shareBox.style.top = (rect.top - 90) + 'px';
        shareBox.style.left = (rect.left - 124)+'px';
    }
});