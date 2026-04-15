function solve(input) {
    let spell = input.shift();

    let whileFlag = true;

    while (whileFlag) {
        const currentCommand = input.shift();

        // handle End
        if (currentCommand === 'End') {
            console.log(`The concealed spell is: ${spell}`)
            whileFlag = false;
            continue
        }
        else if (currentCommand === 'RemoveEven') {
            const evenSpell = spell.split('').filter((x, i) => i % 2 === 0);
            spell = evenSpell.join('');
            console.log(spell);
            continue;
        }

        const commandArr = currentCommand.split('!');
        const command = commandArr[0];

        if (command === 'TakePart') {
            const fromIndex = Number(commandArr[1]);
            const toIndex = Number(commandArr[2]);

            let substringSpell = spell.substring(fromIndex, toIndex)
            spell = substringSpell

            console.log(spell);
        }
        else if (command === 'Reverse') {
            const substring = commandArr[1];

            if (!spell.includes(substring)) {
                console.log('Error');
                continue;
            }

            const reversedSubstring = substring.split('').reverse().join(''); // reverse the substring
            spell = spell
                .replace(substring, '') // remove the substring
                .concat(reversedSubstring); // put the substring at the end of the spell
            console.log(spell); // print the substring
        }
    };
};

solve(["asAsl2adkda2mdaczsa",
    "RemoveEven",
    "TakePart!1!9",
    "Reverse!maz",
    "End"]);

solve(["hZwemtroiui5tfone1haGnanbvcaploL2u2a2n2i2m",
    "TakePart!31!42",
    "RemoveEven",
    "Reverse!anim",
    "Reverse!sad",
    "End"]
);