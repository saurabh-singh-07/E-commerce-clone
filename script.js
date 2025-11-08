const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});
const cards = document.querySelectorAll(".card");
cards.forEach((card)=>{
    observer.observe(card);
})

// script for list cantainer in maincontant and navbar
function togglelists(listgroup, listcontrolbtn, activeclass = 'hidden'){
    const target = document.querySelector(listgroup);
    const controlbtn = document.querySelector(listcontrolbtn);
    controlbtn.addEventListener('click', ()=>{
        target.classList.toggle(activeclass);
    })
}

togglelists('.listSellingCantainer', '.listsallingbtn');
togglelists('.themesCantainer', '.themesbtn');
togglelists('.supportCantainer', '.supportbtn');


// script for side menu bar
function setUpToggle(openSelector, closeSelector, targetSelector, activeClass = 'active') {
    const openbtn = document.querySelector(openSelector);
    const closebtn = document.querySelector(closeSelector);
    const target = document.querySelector(targetSelector);

    if(openbtn && closebtn && target){
        openbtn.addEventListener('click', () => target.classList.toggle(activeClass));
        closebtn.addEventListener('click', ()=> target.classList.toggle(activeClass));
    }
}
setUpToggle('.ThemesFeaturesopenbtn','.ThemesFeaturesclosebtn','.ThemesCategoryFeaturesContainer');
setUpToggle('.openbtn','.closebtn','.Sidemenu')
setUpToggle('.supportFeaturesopenbtn','.supportFeaturesclosebtn','.supportFeaturesContainer')