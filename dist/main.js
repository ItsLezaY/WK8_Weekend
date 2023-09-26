document.addEventListener("DOMContentLoaded", () => {
    const createCharacterForm = document.getElementById("createCharacterForm");

    if (createCharacterForm) {
        createCharacterForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const characterName = document.getElementById("characterName");
            const race = document.getElementById("race");
            const job = document.getElementById("job");
            const genderMale = document.getElementById("male");
            const genderFemale = document.getElementById("female");
            const hairColor = document.getElementById("hairColor");
            const eyeColor = document.getElementById("eyeColor");
            const selectedHairColor = document.getElementById("selectedHairColor");
            const selectedEyeColor = document.getElementById("selectedEyeColor");

            if (characterName && race && job && genderMale && genderFemale && hairColor && eyeColor && selectedHairColor && selectedEyeColor) {
                const selectedGender = genderMale.checked ? genderMale.value : genderFemale.value;

                const character = new Character(
                    characterName.value,
                    race.value,
                    job.value,
                    selectedGender,
                    hairColor.value,
                    eyeColor.value
                );

                party.push(character);

                alert(`Character ${characterName.value} created and added to party!`);

                // Clear form inputs
                createCharacterForm.reset();

                // Clear selected colors display
                selectedHairColor.innerHTML = "";
                selectedEyeColor.innerHTML = "";
            }
        });

        const hairColorInput = document.getElementById("hairColor");
        const selectedHairColor = document.getElementById("selectedHairColor");

        const eyeColorInput = document.getElementById("eyeColor");
        const selectedEyeColor = document.getElementById("selectedEyeColor");

        if (hairColorInput && selectedHairColor && eyeColorInput && selectedEyeColor) {
            hairColorInput.addEventListener("input", () => {
                selectedHairColor.style.backgroundColor = hairColorInput.value;
                selectedHairColor.innerText = `Selected Hair Color: ${hairColorInput.value}`;
            });

            eyeColorInput.addEventListener("input", () => {
                selectedEyeColor.style.backgroundColor = eyeColorInput.value;
                selectedEyeColor.innerText = `Selected Eye Color: ${eyeColorInput.value}`;
            });
        }
    }
});


