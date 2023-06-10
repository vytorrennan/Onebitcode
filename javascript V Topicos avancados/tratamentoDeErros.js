function erro() {
    throw new Error("error dude")
}

function notErro() {
    console.log("not an error");
}



try {
    erro()
} catch (error){
    console.log("an error acurred!");
    console.log(`Error message: ${error.message}`);
} finally {
    console.log("finished...");
}


try {
    notErro()
} catch (error){
    console.log("an error acurred!");
    console.log(`Error message: ${error.message}`);
} finally {
    console.log("finished...");
}

