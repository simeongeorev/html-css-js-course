function solve(inputHeroes = []) {
    let heroes = []

    inputHeroes.forEach(hero => {
        const heroDetails = hero.split(" / ")
        const heroName = heroDetails[0]
        const heroLevel = heroDetails[1]
        const heroItems = heroDetails[2]

        heroes.push({
            Hero: heroName,
            level: Number(heroLevel),
            Items: heroItems.split(", ")
        })
    })

    heroes
        .sort((h1, h2) => h1.level - h2.level)
        .forEach(hero => {
            console.log(`Hero: ${hero.Hero}`);
            console.log(`level => ${hero.level}`);
            console.log(`items => ${hero.Items.join(", ")}`);
        });
}

solve([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'
]
)