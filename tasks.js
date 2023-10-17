
                                                                                     ///////TASK1/////

let a=12
let b=8
console.log(a*b)

let c=10
let d=2
x=c/d
console.log(x)

let num1=20
let num2=17
console.log(num1+num2)

let Name="Ilkin"
let Surname="Allahverdiyev"
let Birthday="26/08/2005"
info=Name+" "+Surname+" "+Birthday
console.log(info)


console.log(17%12)


let cityName="Baku"
console.log(cityName)
cityName="Gence"
console.log(cityName)

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

                                                                                           //////TASk2//////
  
// let a = 1, b = 1;
// let c = ++a;
// let d = b++;

// console.log(c); // ?------> 2
// console.log(d); // ?------> 1
// console.log(b); // ?------> 1

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

                                                                                            //////TASK3//////
  
// let a = 2;
// let x = 1 + (a *= 2);
// console.log(x); // ?----->5


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                                               
                                                                                             //////TASk4//////
  
// console.log('test1', test); // ?-----> error (because test is undefined.)
// {
//     let test = "something"
//     console.log('test2', test); // ?------>test2, something
// }
// console.log('test3', test);  // ?------> error (because test is undefined.)

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
                                                                                               
                                                                                              //////TASK5//////
  
// let name = "Ulfat"----->string
// let surname = Zakirli----->error( cunki  dirnaq yoxdur :))
// let year = 2000----->number
// year = "2000"----->string
// let city;----->just variable it don't has value
// let qualification = null------->object
// let obj = { name: 'ulfat' }----->console.log(typeof(obj.name))---->string
// let arr = ['a', 'b', 'c']----->object

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

                                                                                                /////TASK6////// 

const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]



// 1.Sort "arr1" ascending

console.log(arr1.sort((a, b) => a - b))


// 2.Sort "arr1" descending

console.log(arr1.sort((a, b) => b - a))



// 3.Find min number from 'arr1'

var min = Math.min(...arr1);
console.log(min)


// 4.Find max number from 'arr1'

var max = Math.max(...arr1);
console.log(max)



// 5.Sum all the numbers in 'arr1'

arr1sum = 0
for (let i = 0; i < arr1.length; i++) {
arr1sum += arr1[i]}
console.log(arr1sum)


// 6.Add two numbers (10,88) to end of arr1 (push methods)

arr1.push(10,88)
console.log(arr1)


// 7.Remove first two numbers from arr1

arr1.pop()
arr1.pop()
console.log(arr1)


// 8.Add three numbers (0,9,11) in front of arr1(unshift)

arr1.unshift(0,9,11)
console.log(arr1)


// 9.Remove four numbers in front of arr1(shift)

arr1.shift()
arr1.shift()
arr1.shift()
arr1.shift()
console.log(arr1)

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

                                                                                                    //////TASK7////

const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", "Fuad", "Anar"]


// 1.Console values from "Rufet" to "Fuad"
for( i=0;i<arr2.length;i++){
 if(arr2[i]=="Rufet"){
        arr2[i]="Fuad"}}
console.log(arr2)




// 2.Add Rovshen between Gulshen and Nermin
arr2.splice(5,0,"Rovshen")
console.log(arr2)




// 3.Revers "arr2"
const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", "Fuad", "Anar"].reverse()
console.log(arr2)




// 4.Sort "arr2" ascending
console.log(arr2.sort())





// 5.Console each name with for loop
for(i=0;i<arr2.length;i++){
    console.log(arr2[i])}





// 6.Console only names which is Anar
for(i=0;i<arr2.length;i++){
    if(arr2[i]==="Anar"){
        console.log(arr2[i])  }}




// 7.Console all names where name is Anar change it to "Perviz"
for(i=0;i<arr2.length;i++){
    if(arr2[i]==="Anar"){
        arr2[i]="Perviz" }}
console.log(arr2)





// 8.Console second to last value of arr2
console.log(arr2.at(-2))



// 9.Console length of arr2
console.log(arr2.length)

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

                                                                                              /////TASK8/////

const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]

// 1.Show only numbers
const result=arr3.filter((item) => typeof item==="number")
console.log(result)




// 2.Show only true values
arr3.map((item) => {
    if(item){
       console.log(item) 
    }
})



// 3.Show only false values
arr3.map((item) => {
    if(!item){
       console.log(item) 
    }
})





// 4.Show only strings
const res=arr3.filter((item) =>typeof item==="string")
console.log(res)





// 1.Console numbers form 0 to 100 (with for loop)
for(i=0;i<101;i++){
    console.log(i)
}



// 2.Console numbers from 2 to 20 (only even numbers)
for(i=2;i<21;i+=2){
    console.log(i)
}



// 3.Console numbers from 1 to 10 (only odd numbers)
for(i=1;i<10;i+=2){
    console.log(i)
}

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

                                                                                          //////TASK9/////
  
const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]

// 1.Console all values of arr4 -
// if value is number add it 10, if value is string add to it value + is string,if is value falsy value add to it value+ is falsly value(with return word)

// Example: [10,'true',false]
// Result: [20, "true is string", "false is falsy value"]





// 1.Console all values of arr4 -
// if value is number add it 10, if value is string add to it value + is string,if is value falsy value add to it value+ is falsly value(with return word)

console.log(arr4)
result=[];

for(i=0;i<arr4.length;i++){
    const value=arr4[i]

    if(typeof value==="number"){
        result.push(value + 10)

    }else if(typeof value==="string"){
      result.push(value+" "+"is string value")
    }
    else if( !value){
    result.push(value+' '+"is falsy value")
  }}
console.log(result)  


{{{{{{{{{[{{{{{{ANOTHER WAY  but isn't same last }}}}}}}}}}}}}}}}}}}}}}}}}}}}
                                   |
                                   V   
  
 
                      for(i=0;i<arr4.length;i++){
                              if(typeof arr4[i]==="number"){
                                 console.log(arr4[i]+10)
                              }else if(typeof arr4[i]==="string"){
                                console.log(arr4[i]+" "+"is string value")
                             }
                              else if( !arr4[i]){
                               console.log(arr4[i]+' '+"is falsy value")
                              }}





                

  
// 2.Sum all numbers of arr4
let arr4sum=0
  for(i=0;i<arr4.length;i++){
      if(typeof arr4[i]==="number"){
   arr4sum+=arr4[i]} }
console.log(arr4sum)



// 3.Count only the values that are true
arr4.map((item)=>{
    if(item){
        console.log(item)
    }})




// 4.Count only the values that are string
arr4.map((item)=>{
   if(typeof item==="string"){
            console.log(item) }})


// 5.Count only the values that are false
arr4.map((item)=>{
 if(! item){
    console.log(item) }})


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

                                                                                              /////TASK10//////
  
// 1.Create a object add your name, surname, age and city.
const obj = {
    name: "Ilkin",
    surname: "Allahverdiyev",
    Age: 18,
    City: "Baku"
}
console.log(obj)



// 2.Then change name to "Jhon"
if(obj.name==="Ilkin"){
    obj.name="Jhon"
}
console.log(obj)






-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const obj = {
    email: 'ulfat@gmail.com',
    info: {
        gender: 'Male',
        loc: {
            city: "Baku",
            street: 'Nizami 22',
            education: {
                "uni name": "ADNSU",
            }
        }
    }
}

// 3.Console gender
console.log(obj.info.gender)


// 4.Console city
console.log(obj.info.loc.city)


// 5.Console uni name
console.log(obj.info.loc.education)
