
const btnShowHobbie= document.getElementById("btn-show__hobbie")
const btnShowText= document.getElementById("btn-show__text")
const containerHobbie2= document.getElementById("container-hobbie2")
const labelText= document.getElementById("label-write__text")
const inputText= document.getElementById("input-text")

btnShowHobbie.addEventListener('click',(e)=>{
   e.preventDefault()
   containerHobbie2.style.display="block"
})

btnShowText.addEventListener('click',(e)=>{
   e.preventDefault()
   const data={text:inputText.value}
   
   insert(data).then(res=>{console.log(res)})
  
   labelText.textContent=inputText.value
   inputText.value=""

})



const insert = async(data) => {
   const insertData= await fetch ('http://localhost:3000/data', {
     method: "POST",
     body: JSON.stringify(data),
     headers: {"Content-type": "application/json"},
   })
   const resp= await insertData.json()
   return resp  
};