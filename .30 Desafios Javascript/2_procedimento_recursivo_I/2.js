const chunk = "chunk";
let information = "";

function createInformationBlocks(numChunks, information="") {
    information += "chunk";
    if (numChunks != 1) {
        information += "-";
        return createInformationBlocks(numChunks-1, information);
    } else {
        return information;
    }
}

console.log(createInformationBlocks(4));
console.log(createInformationBlocks(1));
console.log(createInformationBlocks(8));
console.log(createInformationBlocks(2));