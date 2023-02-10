const url = 'json/members.json';
const card = document.getElementById('card')

async function getMembers() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json(); 
            displayResults(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error)
    }
}

function displayResults(data) {
    data.forEach(element => {
        let companyName = document.createElement('h2').innerText = element.companyName;
        let companyAdress = document.createElement('h3').innerText = element.companyAdress;
        let companyPhoneNumber = document.createElement('h4').innerHTML = element.companyPhoneNumber;
        let companyWebsiteURL = document.createElement('h4').innerText = element.companyWebsiteURL;
        let companyImage = document.createElement('img');companyImage.src = element.image;
        companyImage.alt =  "Picture of the " + element.companyName
        let membershipLevel = document.createElement('h4').innerText = element.membershipLevel;
        let companyPresidentName = document.createElement('h4').innerText = element.companyPresidentName;
        let br = document.createElement('br')
        let br2 = document.createElement('br')
        let br3 = document.createElement('br')
        let br4 = document.createElement('br')
        let br5 = document.createElement('br')

        card.append(companyImage, companyName, br,companyAdress,br2, companyPhoneNumber,br3, companyWebsiteURL,br4, companyPresidentName,br5, membershipLevel)
    });
}
getMembers()