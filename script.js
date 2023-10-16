//your code here
const evaluatedText = document.getElementById('evaluatedText');
        const letterCount = document.getElementById('letterCount');

        // Add an input event listener to the text input field
        evaluatedText.addEventListener('input', updateLetterCount);

        function updateLetterCount() {
            const text = evaluatedText.value;
            const count = text.length;
            letterCount.textContent = count;
        }