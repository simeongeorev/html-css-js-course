function solve(input = []) {
    const numberOfAusts = Number(input.shift());
    let austronauts = {};

    for (let i = 0; i < numberOfAusts; i++) {
        const astronautRaw = input.shift().split(' ');
        const name = astronautRaw[0];
        const section = astronautRaw[1];
        const skills = astronautRaw[2].split(',');

        austronauts[name] = {
            section,
            skills
        };
    };

    while (true) {
        const cmd = input.shift()

        if (cmd === "End") {
            break
        }

        const cmdRaw = cmd.split(' / ');
        const command = cmdRaw[0];
        const austName = cmdRaw[1];

        if (command === 'Perform') {
            const requiredSection = cmdRaw[2];
            const requiredSkill = cmdRaw[3];

            if (austronauts[austName].section === requiredSection && austronauts[austName].skills.includes(requiredSkill)) {
                console.log(`${austName} has successfully performed the skill: ${requiredSkill}!`);
            }
            else {
                console.log(`${austName} cannot perform the skill: ${requiredSkill}.`);
            };
        }
        else if (command === 'Transfer') {
            const newSection = cmdRaw[2]

            austronauts[austName].section = newSection;
            console.log(`${austName} has been transferred to: ${newSection}`);
        }
        else if (command === 'Learn Skill') {
            const newSkill = cmdRaw[2]
            if (austronauts[austName].skills.includes(newSkill)){
                console.log(`${austName} already knows the skill: ${newSkill}.`);
            }
            else {
                austronauts[austName].skills.push(newSkill)
                console.log(`${austName} has learned a new skill: ${newSkill}.`);
            };
        };
    };
    
    for (const astronaut in austronauts) {
        const sortedSkillsStr = austronauts[astronaut].skills.sort((a, b) => a.localeCompare(b)).join(', ');
        console.log(`Astronaut: ${astronaut}, Section: ${austronauts[astronaut].section}, Skills: ${sortedSkillsStr}`)
    };
};

solve([
    "2",
    "Alice command_module piloting,communications",
    "Bob engineering_bay repair,maintenance",
    "Perform / Alice / command_module / piloting",
    "Perform / Bob / command_module / repair",
    "Learn Skill / Alice / navigation",
    "Perform / Alice / command_module / navigation",
    "Transfer / Bob / command_module",
    "Perform / Bob / command_module / maintenance",
    "End"
]);

solve([
    "3",
    "Tom engineering_bay construction,maintenance",
    "Sara research_lab analysis,sampling",
    "Chris command_module piloting,communications",
    "Perform / Tom / engineering_bay / construction",
    "Learn Skill / Sara / robotics",
    "Perform / Sara / research_lab / robotics",
    "Transfer / Chris / research_lab",
    "Perform / Chris / research_lab / piloting",
    "Learn Skill / Tom / diagnostics",
    "Perform / Tom / engineering_bay / diagnostics",
    "End"
]);