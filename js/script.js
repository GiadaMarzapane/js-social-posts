const posts = [
    {
        "id": 1,
        "content": "New York City - The Statue of Liberty",
        "media": "https://images.unsplash.com/photo-1457885208630-7f09c8b8ba2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2023-01-04"
    },
    {
        "id": 2,
        "content": "New York City - Skyline",
        "media": "https://images.unsplash.com/photo-1432611185496-76ccd1dc5efe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2022-09-03"
    },
    {
        "id": 3,
        "content": "New York City - 5th Avenue",
        "media": "https://images.unsplash.com/photo-1584887077991-819d6566f705?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2022-05-15"
    },
    {
        "id": 4,
        "content": "New York City - Manhattan",
        "media": "https://images.unsplash.com/photo-1635818407564-71d109055a77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2022-04-03"
    },
    {
        "id": 5,
        "content": "New York City - Times Square",
        "media": "https://images.unsplash.com/photo-1570739208759-286307290931?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=610&q=80",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2022-03-05"
    }

];
console.log(posts);

for (let index = 0; index < posts.length; index++) {
    const myPostList = document.querySelector('.posts-list');

    const newPost = `<div class="post">
                <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            <img class="profile-pic" src="${posts[index].author.image}" alt="Phil Mangione">                    
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${posts[index].author.name}</div>
                            <div class="post-meta__time">${posts[index].created}</div>
                        </div>                    
                    </div>
                </div>
                <div class="post__text">${posts[index].content}</div>
                <div class="post__image">
                    <img src="${posts[index].media}" alt="">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <div class="like-button  js-like-button" data-postid="${posts[index].id}">
                                <i class="fa-regular fa-heart"></i>
                                <i class="fa-solid fa-heart hidden"></i>                                
                                <span class="like-button__label">Like!</span>
                            </div>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-${posts[index].id}" class="js-likes-counter">${posts[index].likes}</b> persone
                        </div>
                    </div> 
                </div>            
            </div>`;
    myPostList.innerHTML += newPost;

};

const myLikeButton = document.querySelectorAll('.like-button');
console.log(myLikeButton);

const costantePerId = posts.map((myElement) => {
    const serieDiId = myElement.id;
    return serieDiId
});

let costantePerLikes = posts.map((myElement) => {
    const serieDiLikes = myElement.likes;
    return serieDiLikes
});
console.log(costantePerLikes);

for (let index = 0; index < costantePerId.length; index++) {
    
    myLikeButton[index].addEventListener('click',
       
    function () {
        console.log('click like su post n° ' + posts[index].id);
        const notLiked = document.querySelectorAll('i.fa-regular');
        const liked = document.querySelectorAll('i.fa-solid');
        const likedText = document.querySelectorAll('.like-button__label');
        notLiked[index].classList.add('hidden');
        liked[index].classList.remove('hidden');
        likedText[index].innerHTML = 'You liked this post';
        
    }
    );
};