function solve(speed, area) {
    let motorwayLimit = 130
    let interstateLimit = 90
    let cityLimit = 50
    let residentialLimit = 20

    if (area === "motorway") {
        checkInLimit(motorwayLimit)
    } else if (area === "interstate") {
        checkInLimit(interstateLimit)
    } else if (area === "city") {
        checkInLimit(cityLimit)
    } else if (area === "residential") {
        checkInLimit(residentialLimit)
    }

    function inLimit(allowedSpeed) {
        if (speed <= allowedSpeed) {
            return `Driving ${speed} km/h in a ${allowedSpeed} zone`;
        }
        return "";
    }

    function speedingSeverity(allowedSpeed) {
        let status;
        let difference;
        if (speed <= allowedSpeed + 20) {
            status = "speeding";
        } else if (speed <= allowedSpeed + 40) {
            status = "excessive speeding"
        } else {
            status = "reckless driving"
        }
        difference = speed - allowedSpeed;
        return [status, difference];
    }

    function checkInLimit(limit) {
        let statusMsg = inLimit(limit);
        if (statusMsg) {
            console.log(statusMsg)
        } else {
            let statusAndDiff = speedingSeverity(limit);
            let status = statusAndDiff[0];
            let difference = statusAndDiff[1];
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
        }
    }
}

solve(40, 'city')
solve(21, 'residential')
solve(120, 'interstate')
solve(200, 'motorway')