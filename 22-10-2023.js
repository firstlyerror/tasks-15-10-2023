let fullName = 'Ilkin Allahverdiyev Azad'

//1 Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)
console.log(fullName.split(""))


---------------------------------------------------------------------------------------------------------------------
//2 FullName'də soyadinizi adinizin onune keciren alqoritm yazin
const arr=fullName.split(" ")
const arr1=[];
if(arr){
    const  Fullname=arr[1] +" "+ arr[0] + " " +arr[2]
    arr1.push(Fullname)
  console.log(arr1)}


---------------------------------------------------------------------------------------------------------------------
//3 Alinan yeni arrayi stringe cevirin(join)
console.log(arr1.join())


---------------------------------------------------------------------------------------------------------------------
let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

// 4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
const reqem=5;
console.log((arr.filter((item) => item===5)).length)


---------------------------------------------------------------------------------------------------------------------
//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin
let sum=0; 
for(i=0;i<arr.length;i++){
   
    sum =sum + arr[i]
   }console.log(sum)



---------------------------------------------------------------------------------------------------------------------
//6) arrayda tekrar olunan reqemleri artan sira ile duzun
console.log(arr.sort((a,b) => a-b))


---------------------------------------------------------------------------------------------------------------------
//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)

console.log(Math.max(...arr))
console.log((arr.filter((item) => item===7)).length)


---------------------------------------------------------------------------------------------------------------------
//8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)
let ad="Ilkin"
console.log(arr.includes(ad.split('').length))



---------------------------------------------------------------------------------------------------------------------
//9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
console.log(arr.filter((item)=> item%3==2).slice(0,1))
console.log(arr.findIndex((item)=> item===5))



---------------------------------------------------------------------------------------------------------------------
//10) arraydaki en boyuk reqemin ilk indexini tapin
let enboyureqem=Math.max(...arr)
console.log(arr.indexOf(enboyureqem))



---------------------------------------------------------------------------------------------------------------------
// 11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
let arr4=[];
for(i=0;i<arr.length;i++){
    if(arr[i]==4){
        arr4.push(i)
        console.log(arr4) }}



---------------------------------------------------------------------------------------------------------------------
//12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
console.log(arr.indexOf(5))
console.log(arr.lastIndexOf(5))



---------------------------------------------------------------------------------------------------------------------
//13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
let arr2=[];
for(i=0;i<arr.length;i++){
    if(arr[i]>2){
        arr2.push(arr[i])
        
    }
}console.log(arr2)

console.log(arr.length-arr2.length)



---------------------------------------------------------------------------------------------------------------------
//14) 7 reqeminin indexleri cemini tapin.

let arr7=[];
let sum=0;

for(i=0;i<arr.length;i++){
    if(arr[i]==7){
        arr7.push(i)}
}
console.log(arr7)

for(i=0;i<arr7.length;i++){
    if(arr7[i]){
        sum+=arr7[i] }
}
console.log(sum)



---------------------------------------------------------------------------------------------------------------------
let arr2 = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
]

// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin

function task16(anyarr){ 
let arr3=[];
anyarr.map((item)=> {
     if(item.name.slice(0,1)=="t"){
   arr3.push(item.name)
    return arr3
    }})
   console.log(arr3) }
 task16(arr2)



---------------------------------------------------------------------------------------------------------------------
// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin

function task17(anyarr){ 
    let arr4=[];
    anyarr.map((item)=> {
         if(item.name.slice(0,1)=="t" && item.name.slice(name.length-1)=="t"){
       arr4.push(item.name)
        return arr4
        }})
       console.log(arr4.length) }

    task17(arr2)



---------------------------------------------------------------------------------------------------------------------
// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin

function task18(anyarr){ 
    let cem=0;
    let arr5=[];
    anyarr.map((item)=> {
         if(item.name.slice(0,1)=="t" && item.name.slice(name.length-1)=="t"){
       arr5.push(item.key)
      

       cem+=item.key
   
      console.log(cem)}}}
 task18(arr2)

             
---------------------------------------------------------------------------------------------------------------------             
// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
function task19(anyarr){  

    anyarr.map((item) => {
    
        if(item.name.slice(item.name.length-1)=="e"){
            item.name="SuperDev"
        }
        console.log(item.name)
    
    })
    
    task19(arr2)

    

---------------------------------------------------------------------------------------------------------------------
// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin

//arasdirmalar eliyerek elemisem elave kecmediyimiz (for...of) ile yazdim.map isletmeden nece item vere bilerem ?(for...of)

function task20(arr) {
    let max = 0;
    let key = null;

    for (const item of arr) {
        if (item.name.length > max) {
            max = item.name.length;
            key = item.key;
        }
    }

    return key;
}


 task20(arr2);

    


 ---------------------------------------------------------------------------------------------------------------------
// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin


function task21(anyarr){


      let arr20=[];
     
    for(const item of arr2){
    
        arr20.push(item.name.length)
} 

max=Math.max(...arr20)


    for(const item of arr2 ){

        if(item.name.length==max){

            console.log(anyarr.indexOf(item)*anyarr.indexOf(item))
           
        }


    }
}
   task21(arr2)


    
---------------------------------------------------------------------------------------------------------------------
// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
function task22(anyarr){
let arr22=[];
anyarr.map((item) => {

    if(item.name.length==4){
        arr22.push(item.name)
    }
})
console.log(arr22)}
task22(arr2)

    

---------------------------------------------------------------------------------------------------------------------
// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin

function task23(anyarr){  
let arr23=[];
anyarr.map(item => {
  
        arr23.push(item.key)
  }

)
max=Math.max(...arr23)


  for(const item of anyarr){

    if( item.key==max){
        console.log(item.name)

    }
  
}
}
task23(arr2)


    
---------------------------------------------------------------------------------------------------------------------
// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.



function task24(anyarr){


let arr24=[];
for(let i=0;i<anyarr.length;i++){

    if(anyarr[i].name.toLowerCase().split('l').length - 1 === 2){
        
        arr24.push(anyarr.indexOf(arr2[i]))
        }
    }
console.log(arr24)}
task24(arr2)


    
---------------------------------------------------------------------------------------------------------------------
// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.
function task25(anyarr){  
    let arr25=[];
for (let i=0;i<anyarr.length;i++){

  if(anyarr[i].name.toLowerCase().split("t").length-1 === 2){
    arr25.push(anyarr[i].key)
  }
 


} 
console.log(anyarr)
console.log(arr25)}
task25(arr2)
             }})
    }

    
