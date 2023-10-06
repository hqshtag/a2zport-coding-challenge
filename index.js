// Count vowels in a word
function countVowels(word) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    return [...word.toLowerCase()].filter(char => vowels.has(char)).length;
}

// Function to find the longest word with the most vowels 
function findLongestWordWithMostVowels(sentence) {
    // Ignore any character in the sentence that is not an English letter or a space
    const words = sentence.match(/[a-zA-Z]+/g) || [];

    let longestWord = '';
    let maxVowelCount = 0;

    for (const word of words) {
        const vowelCount = countVowels(word);
        // Compare the length of the current word with the longest word found so far, and if they are the same, compare the vowel count
        if (word.length > longestWord.length || (word.length === longestWord.length && vowelCount > maxVowelCount)) {
            longestWord = word;
            maxVowelCount = vowelCount;
        }
    }

    return longestWord;
}

const input = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";

const longestWord = findLongestWordWithMostVowels(input);
console.log(longestWord)