function solve(input = []) {
    const MAX_BULLETS = 6
    const MAX_HP = 100

    const numberOfChars = Number(input.shift())

    let characters = {}

    for (let index = 0; index < numberOfChars; index++) {
        let currentCharRaw = (input.shift()).split(' ')

        const name = currentCharRaw[0]
        const hp = Number(currentCharRaw[1])
        const bullets = Number(currentCharRaw[2])

        characters[name] = { hp, bullets }
    }

    for (const command of input) {
        if (command === "Ride Off Into Sunset") {
            for (const [charName, charInfo] of Object.entries(characters)) {
                const result = `${charName}
  HP: ${charInfo.hp}
  Bullets: ${charInfo.bullets}`
                console.log(result)
            }
        }

        const commandInfo = command.split(' - ');

        const keyword = commandInfo[0]
        const charName = commandInfo[1]

        if (keyword === 'FireShot') {
            const target = commandInfo[2]

            if (characters[charName].bullets > 0) {
                characters[charName].bullets -= 1
                console.log(`${charName} has successfully hit ${target} and now has ${characters[charName].bullets} bullets!`)
            } else {
                console.log(`${charName} doesn't have enough bullets to shoot at ${target}!`)
            }

        } else if (keyword === 'TakeHit') {
            const damage = Number(commandInfo[2]);
            const attacker = commandInfo[3];

            characters[charName].hp -= damage

            if (characters[charName].hp > 0) {
                console.log(`${charName} took a hit for ${damage} HP from ${attacker} and now has ${characters[charName].hp} HP!`)
            } else {
                delete characters[charName];
                console.log(`${charName} was gunned down by ${attacker}!`)
            }

        } else if (keyword === 'Reload') {
            if (characters[charName].bullets < MAX_BULLETS) {
                const bulletsToReload = MAX_BULLETS - characters[charName].bullets
                characters[charName].bullets = 6

                console.log(`${charName} reloaded ${bulletsToReload} bullets!`)
            } else {
                console.log(`${charName}'s pistol is fully loaded!`)
            }

        } else if (keyword === 'PatchUp') {
            let amountToHeal = Number(commandInfo[2])
            const currentHp = characters[charName].hp
            if (characters[charName].hp < MAX_HP) {
                characters[charName].hp += amountToHeal

                if (characters[charName].hp > MAX_HP){
                    amountToHeal = MAX_HP - currentHp
                    characters[charName].hp = MAX_HP;
                }
                console.log(`${charName} patched up and recovered ${amountToHeal} HP!`);
            } else if (characters[charName].hp === MAX_HP) {
                console.log(`${charName} is in full health!`)
            }
        }
    }
}

solve(["2",
    "Gus 100 0",
    "Walt 100 6",
    "FireShot - Gus - Bandit",
    "TakeHit - Gus - 100 - Bandit",
    "Reload - Walt",
    "Ride Off Into Sunset"]
);
solve(["2",
    "Jesse 100 4",
    "Walt 100 5",
    "FireShot - Jesse - Bandit",
    "TakeHit - Walt - 30 - Bandit",
    "PatchUp - Walt - 20",
    "Reload - Jesse",
    "Ride Off Into Sunset"]

);
solve(["2",
    "Gus 100 4",
    "Walt 100 5",
    "FireShot - Gus - Bandit",
    "TakeHit - Walt - 100 - Bandit",
    "Reload - Gus",
    "Ride Off Into Sunset"]
);