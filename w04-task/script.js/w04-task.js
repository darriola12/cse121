/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let  myProfile = {
    name: "Diego Arriola",
    photo: "images/foto1.jpeg",
    favoriteFood: [
        "pizza",
        "rice",
        "pasta",
        "soda",
        "rice and milk"
    ],
    hobbies: 
    [
        "watch anime",
        "Play basketball",
        "Sleep"
    ],
    placesLived: []

};
myProfile.placesLived.push(
    
    {place: "Guatemaña", lengt: "5 years"},
    {place: "Costa Rica", lengt: "16 yeats"},
    
);

document.querySelector("#name").textContent = myProfile.name;
document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", `${myProfile.name}`);

myProfile.favoriteFood.forEach((foodd) => 
{
    let Newli = document.createElement("li");
    Newli.textContent = foodd
    document.querySelector("#favorite-foods").appendChild(Newli);  
})

myProfile.hobbies.forEach((hobbies) => 
{

    let newli2 = document.createElement("li");
    newli2.textContent = hobbies;
    document.querySelector("#hobbies").appendChild(newli2);
});

myProfile.placesLived.forEach((places) => 
{
    let new1 = document.createElement("dt");
    new1.textContent = places.place;

    let new2 = document.createElement("dd");
    new2.textContent = places.lengt;

    document.querySelector("#places-lived").appendChild(new1);
    document.querySelector("#places-lived").appendChild(new2);

})










 





















/* Populate Profile Object with placesLive objects */




/* DOM Manipulation - Output */

/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


