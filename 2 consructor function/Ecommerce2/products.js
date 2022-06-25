
let array= JSON.parse(localStorage.getItem("Prodcuts")) || [];
var total= array.reduce(function(sum,elem,index,arr){
    return sum+Number(elem.price)
},0)
var length=array.length;
console.log(length);
console.log(total);
// document.querySelector("p").innerText="total is Rs =" +total; 
document.querySelector("p").innerText=` you have  ${length} items in cart and  total is Rs ${total}`; 



array.map(function(elem,index){





    let div=document.createElement("div")

    if(elem.sell === true){

        var sold = document.createElement("p");
        sold.innerText="Sold: Available"

        //  *button
        var soldbutton = document.createElement("button");
        soldbutton.innerText="sold";
        soldbutton.style.backgroundColor="green";

        // addEventListener to button
        soldbutton.addEventListener("click",function() {

            // 1st if statement
        if(soldbutton.style.backgroundColor=="green"){
             soldbutton.style.backgroundColor="red"
             sold.innerText="Sold: Not Available";
             elem.sell=false; 

        }
            //  1st else statement
        else {
        soldbutton.style.backgroundColor="green"
        sold.innerText="Sold: Available";
        elem.sell=true;
       }
    
    

    })
    
    }

    // 2 else statement
    else{
        var sold = document.createElement("p");
        sold.innerText="Sold: Not Available";

    //    creating button
        var soldbutton = document.createElement("button");
       soldbutton.innerText="sold";
       soldbutton.style.backgroundColor="red";

    //   addEventListener to the button
    soldbutton.addEventListener("click",function(){

        // 2nd if statement
       if(soldbutton.style.backgroundColor=="green"){
             soldbutton.style.backgroundColor="red"
             sold.innerText="Sold:Not Available" 
             elem.sell=false;  
       }
        // 2nd else statement
       else{
        soldbutton.style.backgroundColor="green"
        sold.innerText="Sold: Available";
        elem.check=true;
       }
    

    })
    }

          

    let name=document.createElement("p")
    name.innerText=`Name : ${elem.Name}`;

    let category=document.createElement("p")
    category.innerText=`Category : ${elem.category}`;

    let img=document.createElement("img");
    img.src= ` ${elem.image}`;

    let gender=document.createElement("p")
    gender.innerText=`gender : ${elem.gender}`;
    let price=document.createElement("p")
    price.innerText=`price : ${elem.price}`;

   
  
   




    var sold =document.createElement("p")
        sold.innerText="sold:"+elem.sell;



    let btn=document.createElement("button")
    btn.innerText="remove product"

    btn.addEventListener("click",function(){
        removeItem(elem,index)
    });

    div.append(img,name,category,gender,price,sold,btn,soldbutton);
    document.querySelector("#container").append(div)


})
function removeItem(elem,index){
array.splice(index,1)
localStorage.setItem("Prodcuts",JSON.stringify(array))
window.location.reload();

}