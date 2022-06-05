const express = require('express')
const app = express()
const PORT = 8000

class Driver {
    constructor(name,nationality,team,image,nickname = 'No nickname :(') {
        this.name = name;
        this.nationality = nationality;
        this.team = team;
        this.image = image;
        this.nickname = nickname;
    }
    
}

let driverList = []

const danielricciardo = new Driver('Daniel Ricciardo', 'Australlian','McLaren','https://www.formula1.com/content/fom-website/en/drivers/daniel-ricciardo/_jcr_content/image.img.1536.medium.jpg/1646818924510.jpg','Honey Badger')
driverList.push(danielricciardo)

const maxverstappen = new Driver('Max Verstappen', 'Netherlands','Red Bull Racing','https://www.formula1.com/content/fom-website/en/drivers/max-verstappen/_jcr_content/image.img.1536.medium.jpg/1646819045507.jpg','Mad Max')
driverList.push(maxverstappen)

const charlesleclerc = new Driver('Charles Leclerc', 'Monaco','Ferrari','https://www.formula1.com/content/fom-website/en/drivers/charles-leclerc/_jcr_content/image.img.1536.medium.jpg/1646818893219.jpg','Lord Perceval')
driverList.push(charlesleclerc)

const sergioperez = new Driver('Sergio Perez', 'Mexico','Red Bull Racing','https://www.formula1.com/content/fom-website/en/drivers/sergio-perez/_jcr_content/image.img.1536.medium.jpg/1646819228700.jpg','Checo')
driverList.push(sergioperez)

const georgerussell = new Driver('George Russell', 'England','Mercedes','https://www.formula1.com/content/fom-website/en/drivers/george-russell/_jcr_content/image.img.1536.medium.jpg/1646750994602.jpg','Mr Saturday')
driverList.push(georgerussell)

const carlossainz = new Driver('Carlos Sainz', 'Spain','Ferrari','https://www.formula1.com/content/fom-website/en/drivers/carlos-sainz/_jcr_content/image.img.1536.medium.jpg/1646818866749.jpg','Chilli')
driverList.push(carlossainz)

const lewishamilton = new Driver('Lewis Hamilton', 'England','Mercedes','https://www.formula1.com/content/fom-website/en/drivers/lewis-hamilton/_jcr_content/image.img.1536.medium.jpg/1647334259839.jpg','The GOAT')
driverList.push(lewishamilton)

const landonorris = new Driver('Lando Norris', 'England','McLaren','https://www.formula1.com/content/fom-website/en/drivers/lando-norris/_jcr_content/image.img.1536.medium.jpg/1646819013197.jpg','Last Lap Lando')
driverList.push(landonorris)

const valtteribottas = new Driver('Valtteri Bottas', 'Finland','Alfa Romeo','https://www.formula1.com/content/fom-website/en/drivers/valtteri-bottas/_jcr_content/image.img.1536.medium.jpg/1646819266274.jpg','Robottas')
driverList.push(valtteribottas)

const estebanocon = new Driver('Esteban Ocon', 'Normandy','Alpine','https://www.formula1.com/content/fom-website/en/drivers/esteban-ocon/_jcr_content/image.img.1536.medium.jpg/1647334188097.jpg','Estebun')
driverList.push(estebanocon)

const kevinmagnussen = new Driver('Kevin Magnussen', 'Denmark','HAAS','https://www.formula1.com/content/fom-website/en/drivers/kevin-magnussen/_jcr_content/image.img.1536.medium.jpg/1647447969295.jpg','K-Mag')
driverList.push(kevinmagnussen)

const yukitsunoda = new Driver('Yuki Tsunoda', 'Japan','AlphaTauri','https://www.formula1.com/content/fom-website/en/drivers/yuki-tsunoda/_jcr_content/image.img.1536.medium.jpg/1648134405786.jpg','Yuki The Rookie')
driverList.push(yukitsunoda)

const fernandoalonso = new Driver('Fernando Alonso', 'Spain','Alpine','https://www.formula1.com/content/fom-website/en/drivers/fernando-alonso/_jcr_content/image.img.1536.medium.jpg/1647334212592.jpg','Telfonso')
driverList.push(fernandoalonso)

const pierregasly = new Driver('Pierre Gasly', 'France','AlphaTauri','https://www.formula1.com/content/fom-website/en/drivers/pierre-gasly/_jcr_content/image.img.1536.medium.jpg/1646819179303.jpg','Mr. Monza')
driverList.push(pierregasly)

const sebastianvettel = new Driver('Sebastian Vettel','Germany','Aston Martin','https://www.formula1.com/content/fom-website/en/drivers/sebastian-vettel/_jcr_content/image.img.1536.medium.jpg/1646818813887.jpg','The Finger')
driverList.push(sebastianvettel)

const AlexanderAlbon = new Driver('Alexander Albon', 'England','Williams','https://www.formula1.com/content/fom-website/en/drivers/alexander-albon/_jcr_content/image.img.1536.medium.jpg/1646750995556.jpg','Albono')
driverList.push(AlexanderAlbon)

const lancestroll = new Driver('Lance Stroll', 'Canada','Aston Martin','https://www.formula1.com/content/fom-website/en/drivers/lance-stroll/_jcr_content/image.img.1536.medium.jpg/1648135171947.jpg','Lance Strolled')
driverList.push(lancestroll)

const zhouguanyu = new Driver('Zhou Guanyu', 'China','Alfa Romeo','https://www.formula1.com/content/fom-website/en/drivers/guanyu-zhou/_jcr_content/image.img.1536.medium.jpg/1646818979975.jpg','The Emperor')
driverList.push(zhouguanyu)

const mickschumacher = new Driver('Mick Schumacher', 'Germany','HAAS','https://www.formula1.com/content/fom-website/en/drivers/mick-schumacher/_jcr_content/image.img.1536.medium.jpg/1647334235171.jpg','Mick Betsch')
driverList.push(mickschumacher)

const nicholaslatifi = new Driver('Nicholas Latifi', 'Canada','Williams','https://www.formula1.com/content/fom-website/en/drivers/nicholas-latifi/_jcr_content/image.img.1536.medium.jpg/1646819118069.jpg','Mr. Montreal')
driverList.push(nicholaslatifi)

const unknowndriver = new Driver('Unknown Driver')

driverList.push(unknowndriver)

// creating an array so it can return all drivers



app.get('/', (request,response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request,response) => {
    // response.json(maxverstappen)

    const driverName = request.params.name.toLowerCase()
    
    if (driverList.find(driver => driver.name.toLowerCase() === driverName)) {
        response.json(driverList.filter(driver => driver.name.toLowerCase() === driverName))
    } else {
        response.json(driverList.filter(driver => driver.name === 'Unknown Driver'))
    }
    
})



app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on Port ${PORT}`)
})