   function reverseVowels(s) {
    let arr = s.split("")
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        if (!vowels.has(arr[left])) left++
        if (!vowels.has(arr[right])) right--
        if (vowels.has(arr[left]) && vowels.has(arr[right])) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++
            right--
        }
    }
    return arr.join("");
};

hello = "hello"
console.log(reverseVowels(hello)); //holle
