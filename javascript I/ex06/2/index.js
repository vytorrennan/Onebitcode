word = window.prompt("Enter a word to check if it's a palindrome: ");

for (let i=0;i<word.length;i++) {
    if (!(word[i] == word[(word.length - 1) - i])) {
        window.alert(word + " - " + word.split("").reverse().join(""));
        break;
    }
}