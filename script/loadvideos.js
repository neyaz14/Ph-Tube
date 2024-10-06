const loadvideos = () =>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res=> res.json())
    .then(data => displayVideos(data.videos))
    .catch(error => console.log(error))
}

loadvideos();




// for video details 
const loadDetails =async (vdoid)=>{
    const url = `https://openapi.programming-hero.com/api/phero-tube/video/${vdoid}`;
    const res = await fetch(url);
    const data = await res.json();
    displayDetailsVideos(data.video)
}

const displayDetailsVideos = (video)=>{
    console.log(video);
}










const displayVideos = (videos)=>{
    const videoContainer = document.getElementById('videos');
    videoContainer.innerHTML ="";
    if(videos.length==0){
        videoContainer.innerHTML =`  
        <div class="w-auto mx-auto py-10">
            <img src="asstes/Icon.png">
            <p class="font-bold text-xl"> No Content to Show </p>  
        </div>  
        `;
        return;
    }
    videos.forEach((item) => {
        // console.log(item);
        // create a buttton for each new element
        const card = document.createElement('div');
        card.classList= " card card-compact bg-base-100 border ";
        card.innerHTML= `
            <figure class="h-[200px]">
                <img class="h-full w-full object-cover"
                src= ${item.thumbnail} />
            </figure>
            <div class="px-0 py-2 flex items-center gap-2 ">
                
                <div>
                    <img class="w-10 h-10 rounded-full object-cover" src=${item.authors[0].profile_picture}>

                </div>
                <div>
                    <h2 class="text-xl font-bold">${item.title}</h2>
                    
                    <div class="flex items-center gap-1">
                        <p class="font-medium">${item.authors[0].profile_name}</p>

                        ${item.authors[0].verified === true ? "<img class='h-5 w-5' src='https://img.icons8.com/?size=48&id=p7tjogBolKN8&format=png'>" :"" }

                       
                    </div>

                    <p class="font-medium text-xs">${item.others.views}</p>
                    
                    <p>
                    <button  onclick="loadDetails('${item.video_id}')" class="btn btn-error btn-xs text-white">
                        Details
                    </button>
                    </p>
                    
                </div>
            
                
                
                
            </div>
        `
        videoContainer.appendChild(card);
    });
}



/*
authors: {profile_picture: 'https://i.ibb.co/YZN9rQZ/tina.jpg', profile_name: 'Tina Fey', verified: false}
[{…}]

category_id: "1003"

description:"Comedian Kevin Hart brings his unique brand of humor to life in 'Laugh at My Pain.' With 1.1K views, this show offers a hilarious and candid look into Kevin's personal stories, struggles, and triumphs. It's a laugh-out-loud experience filled with sharp wit, clever insights, and a relatable charm that keeps audiences coming back for more."

others: {views: '1.1K', posted_date: '13885'}

thumbnail: "https://i.ibb.co/NTncwqH/luahg-at-pain.jpg"

title: "Laugh at My Pain"
video_id:"aaac"

**/