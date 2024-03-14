// apikey 
let apikey='565b35fe898512a6140c57cee1618cf5'
// url "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"

// getting/accessing all the html elements 
const locationVal=document.getElementById('loc')
const GetBtn=document.getElementById('btn')
const TempVal=document.getElementById('temp')
const DisVal=document.getElementById('weather_dis')
const PlaceVal=document.getElementById('loc_dis')
GetBtn.onclick=function(){
    if(locationVal.value===''){
        alert('plzz enter a location')
    }else{
        loc=locationVal.value
        url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)

        const{name}=data
        const{feels_like}=data.main
        const{description}=data.weather[0]
        TempVal.innerText=Math.round(feels_like-273)
        PlaceVal.innerText=name
        DisVal.innerText=description

    }).catch(()=>{
        alert('Enter a valid data')
    })


    }
    
}