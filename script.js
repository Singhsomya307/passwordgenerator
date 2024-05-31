
function shuffle(string) {
    let array = string.split('');
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join('');
}

function generatePassword() {
    let length = document.getElementById('length').value;
    let passwordDisplay = document.getElementById('password');

    if (length < 4) {
        passwordDisplay.textContent = "Password length should be at least 4 characters.";
        return;
    }

    const uppercaseLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    const lowercaseLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    const digit = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    const specialCharacters = "!@#$%^&*()_+[]{}|;:,.<>?";
    const specialCharacter = specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));

    let remainingLength = length - 4;
    let allCharacters = uppercaseLetter + lowercaseLetter + digit + specialCharacter;
    const possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' + specialCharacters;

    for (let i = 0; i < remainingLength; i++) {
        allCharacters += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
    }

    let password = shuffle(allCharacters);
    passwordDisplay.textContent = "Generated password: " + password;
}
