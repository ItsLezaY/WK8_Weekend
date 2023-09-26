import MyClass from './MyClass';
import Character from './Character';

// Initialize a party to store characters
const party: Character[] = [];

document.addEventListener("DOMContentLoaded", () => {
    const loginform: HTMLElement | null = document.getElementById('loginForm');

    if (loginform) {
        loginform.addEventListener("submit", (event) => {
            event.preventDefault();

            const user: HTMLInputElement | null = document.querySelector("#userInput");
            const password: HTMLInputElement | null = document.querySelector("#passwordInput");

            console.log(user?.value, password?.value);

            const raceValue = "Human";
            const jobValue = "Warrior";
            const genderValue = "Male";
            const hairColorValue = "#FF5733"; // Placeholder for hair color value
            const eyeColorValue = "#3366FF"; // Placeholder for eye color value

            const myUser: MyClass = new MyClass(user?.value, password?.value, raceValue, jobValue, genderValue, hairColorValue, eyeColorValue);

            console.log(myUser);

            const userInfo: HTMLDivElement | null = document.querySelector('#user-info');
            console.log(userInfo);

            if (userInfo) {
                userInfo.innerHTML = `<h1>Hello New User: ${myUser.user}<h1>`;
            }

            // Redirect to main.html after successful login
            window.location.href = 'main.html';
        });
    }

    const createCharacterForm: HTMLFormElement | null = document.getElementById('createCharacterForm') as HTMLFormElement;

    if (createCharacterForm) {
        createCharacterForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const characterName: HTMLInputElement | null = document.querySelector("#characterName");
            const race: HTMLSelectElement | null = document.querySelector("#race");
            const job: HTMLSelectElement | null = document.querySelector("#job");
            const genderMale: HTMLInputElement | null = document.querySelector("#male");
            const genderFemale: HTMLInputElement | null = document.querySelector("#female");
            const hairColor: HTMLInputElement | null = document.querySelector("#hairColor");
            const eyeColor: HTMLInputElement | null = document.querySelector("#eyeColor");

            if (characterName && race && job && genderMale && genderFemale && hairColor && eyeColor) {
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

                // Update party section
                const partySection: HTMLElement | null = document.getElementById('partySection');

                if (partySection) {
                    partySection.innerHTML = '';

                    party.forEach((character, index) => {
                        const characterDiv = document.createElement('div');
                        characterDiv.classList.add('character');
                        characterDiv.innerHTML = `<h3>${character.name}</h3>`;
                        characterDiv.addEventListener('click', () => selectCharacter(index));
                        partySection.appendChild(characterDiv);
                    });
                }
            }
        });
    }

    // Function to handle character selection
    function selectCharacter(index: number) {
        const selectedCharacter = party[index];

        const selectedCharacterInfo: HTMLElement | null = document.getElementById('selectedCharacterInfo');

        if (selectedCharacterInfo) {
            selectedCharacterInfo.innerHTML = `
                <h2>Selected Character</h2>
                <p>Name: ${selectedCharacter.name}</p>
                <p>Race: ${selectedCharacter.race}</p>
                <p>Job: ${selectedCharacter.job}</p>
                <p>Gender: ${selectedCharacter.gender}</p>
                <p>Hair Color: ${selectedCharacter.hairColor}</p>
                <p>Eye Color: ${selectedCharacter.eyeColor}</p>
            `;
        }
    }

    const spellSelect: HTMLSelectElement | null = document.getElementById('spellSelect') as HTMLSelectElement;

    if (spellSelect) {
        spellSelect.addEventListener('change', () => {
            const selectedSpell = spellSelect.value;
            const selectedCharacter = party.find(character => character.selected);

            if (selectedCharacter && selectedSpell) {
                selectedCharacter.spells.push(selectedSpell);
                console.log(`Spell "${selectedSpell}" added to ${selectedCharacter.name}'s inventory.`);
            }
        });
    }

    const weaponSelect: HTMLSelectElement | null = document.getElementById('weaponSelect') as HTMLSelectElement;

    if (weaponSelect) {
        weaponSelect.addEventListener('change', () => {
            const selectedWeapon = weaponSelect.value;
            const selectedCharacter = party.find(character => character.selected);

            if (selectedCharacter && selectedWeapon) {
                selectedCharacter.weapons.push(selectedWeapon);
                console.log(`Weapon "${selectedWeapon}" added to ${selectedCharacter.name}'s inventory.`);
            }
        });
    }
});

