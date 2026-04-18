function solve(input = []) {
    const nMembers = Number(input.shift());

    let members = {};

    for (let i = 0; i < nMembers; i++) {
        const memberStats = input.shift().split(' ');
        const name = memberStats[0];
        const role = memberStats[1];
        const skills = memberStats[2].split(',');

        members[name] = { role, skills }
    };

    while (true) {
        // handle if input is empty
        if (!input) break;

        // handle if End is received
        const cmd = input.shift()
        if (cmd === 'End') break;

        const commands = cmd.split(' / ');

        const action = commands[0];
        const memberName = commands[1];

        if (action === 'Perform') {
            const requiredRole = commands[2];
            const requiredSkill = commands[3];

            if (members[memberName].role === requiredRole
                && members[memberName].skills.includes(requiredSkill)) {
                console.log(`${memberName} has successfully performed the skill: ${requiredSkill}!`);
            }
            else {
                console.log(`${memberName} cannot perform the skill: ${requiredSkill}.`);
            };
        }
        else if (action === 'Reassign') {
            const newRole = commands[2];
            members[memberName].role = newRole;
            console.log(`${memberName} has been reassigned to: ${newRole}`);
        }
        else if (action === 'Learn Skill') {
            const newSkill = commands[2];

            if (members[memberName].skills.includes(newSkill)) {
                console.log(`${memberName} already knows the skill: ${newSkill}.`);
            }
            else {
                members[memberName].skills.push(newSkill);
                console.log(`${memberName} has learned a new skill: ${newSkill}.`);
            };
        };
    };

    for (const memberName in members) {
        const memberRole = members[memberName].role;        
        const sortedSkillsStr = members[memberName].skills.sort((a, b) => a.localeCompare(b)).join(', ');
        console.log(`Guild Member: ${memberName}, Role: ${memberRole}, Skills: ${sortedSkillsStr}`);
    };
};





solve([
    "3",
    "Arthur warrior swordsmanship,shield",
    "Merlin mage fireball,teleport",
    "Gwen healer healing,alchemy",
    "Perform / Arthur / warrior / swordsmanship",
    "Perform / Merlin / warrior / fireball",
    "Learn Skill / Gwen / purification",
    "Perform / Gwen / healer / purification",
    "Reassign / Merlin / healer",
    "Perform / Merlin / healer / teleport",
    "End"
]
);

solve([
    "4",
    "Lancelot knight jousting,swordplay",
    "Morgana sorceress dark_magic,illusion",
    "Robin archer archery,stealth",
    "Galahad paladin healing,swordplay",
    "Perform / Robin / archer / archery",
    "Perform / Morgana / knight / illusion",
    "Learn Skill / Lancelot / swordplay",
    "Learn Skill / Robin / tracking",
    "Learn Skill / Robin / tracking",
    "Reassign / Galahad / warrior",
    "Perform / Galahad / warrior / healing",
    "Reassign / Galahad / healer",
    "Perform / Galahad / healer / healing",
    "End"
]
);