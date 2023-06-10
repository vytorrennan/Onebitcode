console.log("program started");

const timeOutId = setTimeout(() => {
    console.log("3 seconds from the program started");
}, 1000 * 3)


clearTimeout(timeOutId);