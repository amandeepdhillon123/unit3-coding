let arr= JSON.parse(localStorage.getItem("Prodcuts")) || [];


function Ram(n,c,i,p,g,s){
    this.Name=n;
    this.category=c;
    this.image=i;
    this.price=p;
    this.gender=g;
    this.sold=s;
}




function submitForm(e){
    e.preventDefault();
    // console.log("amandeep");

    let form=document.getElementById("form")
    let Name= form.name.value;
    let category= form.category.value;
    let image= form.image.value;
    let price= form.price.value;
    let gender= form.gender.value;
    let sell=form.sold.value;

    // console.log(name,category,image,price,gender,sold);

    let obj= new Ram(Name,category,image,price,gender,sell)
    // console.log(obj);

    arr.push(obj);
    console.log(arr);

    localStorage.setItem("Prodcuts",JSON.stringify(arr))

}