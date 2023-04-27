const express = require('express');
const app = express();

const nfts = [
    {
        id: 1,
        name: "Earth",
        image: "https://cdn.discordapp.com/attachments/1092280971715416214/1101126345825730600/ldd_The_third_planet_from_the_sun_and_the_only_known_planet_to__1a6cea2c-1b95-4a77-bd31-7973c2be5b53.png",
        description: "The third planet from the sun and the only known planet to support life."
    },
    {
        id: 2,
        name: "Mars",
        image: "https://cdn.discordapp.com/attachments/1092280971715416214/1101126408517996555/ldd_The_fourth_planet_from_the_sun_and_also_known_as_the_Red_Pl_73ecf729-6b83-4a78-a229-355e480f26d0.png",
        description: "The fourth planet from the sun and also known as the 'Red Planet.'"
    }
];

app.get('/nfts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const nft = nfts.find(nft => nft.id === id);
    if (!nft) {
        res.status(404).send('NFT not found');
    } else {
        res.send({
            name: nft.name,
            image: nft.image,
            description: nft.description
        });
    }
});

app.listen(3000, () => {
    console.log('NFT metadata service listening on port 3000');
});
