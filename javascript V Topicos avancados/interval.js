let seconds = 0;

const intervalId = setInterval(() => {
    seconds += 3;
    console.log(`${seconds} seconds has passed`);
    if (seconds > 10) {
        clearInterval(intervalId);
        console.log("Time's up!");
    }
}, 1000 * 3)