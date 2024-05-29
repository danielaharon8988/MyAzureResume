window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = 'https://getresumecounterapp1.azurewebsites.net/api/GetResumeCounter?code=fcG2vyF0dzwR15Gk_w0UHs6Q-YoF7tHSNywdW_rdheKvAzFu-gdU_A%3D%3D';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count =  response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}