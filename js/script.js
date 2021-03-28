const cats = [
    {
        name: "Blob",
        age: 10
    },
    
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];
// Question 1
const cat = { complain: "Meow!"};

//Question 2
const heading = document.querySelector("h3");

heading.innerHTML = "Updated Heading";

//Question 3
heading.style.fontSize = "2em";

//Question 4
heading.className = "subheading";

//Question 5
var paragraphs = document.querySelectorAll("p");

for(i=0; i <paragraphs.length; i++){
    paragraphs[i].style.color = "red";
}

//Question 6
var resultContainer = document.querySelector(".results");
resultContainer.innerHTML = "<p>New paragraph</p>";
resultContainer.style.backgroundColor = "yellow";

//Question 7
function Listerino(list){

    for(var i = 0; i < list.length; i++){
        var listItemName = list[i].name;
        console.log(listItemName);
    }
}
Listerino(cats);

//Question 8
function CreateCats(cats){

    let listItems = "";

    for(var i = 0; i < cats.length; i++){

        var catName = cats[i].name;
        var catAge = cats[i].age;

        if(catAge == null){
            catAge = "Age unknown";
        }

        listItems = listItems + "<h5>" + catName + "</h5>" + "<p>" + catAge + "</p>";
    }

    const finalHtml = "<div>" + listItems + "</div>";

    return finalHtml;
}
const newHtml = CreateCats(cats);

const container = document.querySelector(".cat-container");

container.innerHTML = newHtml;