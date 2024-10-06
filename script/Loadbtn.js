// show catagories within button 
// create load-catagories()
// create display-Catagories()

const loadCategories = () =>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res=> res.json())
    .then(data => displayCategories(data.categories))
    .catch(error => console.log(error))
}


const removeActiveClass=()=>{
    const classname = document.getElementsByClassName('category-btn');
    // ei class name theke ekta arry-like ase jar protita elements ke normally for calay access korte hobe
    // classname.classList.remove('active');
    for(const btn of classname){
        btn.classList.remove('active');
    }


}


const loadCategoryVideo = (id) =>{
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res)  => res.json())

    .then((data) => {
        // remove all active class 
        removeActiveClass();
        // only oi id er class e active add koro
        const activeBtn = document.getElementById(`btn-${id}`);
        activeBtn.classList.add("active");
        // console.log(activeBtn);
        displayVideos(data.category)
    })
    .catch(error => console.log(error))
}

const displayCategories = (catagories) =>{
    const catagoriesContainer = document.getElementById('btn-catagories');
    catagories.forEach((item) => {
        // console.log(item);
        // create a buttton for each new element
        const div = document.createElement('div');
        div.innerHTML= `
        <button id="btn-${item.category_id}"     onclick="loadCategoryVideo(${item.category_id
        })" class="btn hover:btn-error  category-btn">${item.category}</button>
        `
       
        catagoriesContainer.append(div);
    });
}


loadCategories();