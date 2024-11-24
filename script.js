// pet photo and a description
const pets = [
    {
        photo: 'images/bill.jpeg',
        name: 'Bill',
        description: 'Bill continues to excel in his role as the household Chief Nap Specialist. His ability to sleep through almost any situation, regardless of noise.'
    },
    {
        photo: 'images/lucy.JPG',
        name: 'Lucy',
        description: 'Lucy is a loving and devoted dog who consistently brings joy and warmth to her family. She excels in her role as a companion, always eager to offer affection and comfort. Her gentle nature makes her well-loved by everyone she meets, and she has an innate ability to brighten any room with her presence.'
    },
    {
        photo: 'images/henry.jpeg',
        name: 'Henry',
        description: 'Henry is a loyal and energetic dog who excels at making everyone feel loved with his enthusiastic greetings and playful nature. While he’s full of energy and always ready for an adventure, he would benefit from a bit more consistency in his training to refine his manners and focus.'
    },
    {
        photo: 'images/moon.jpeg',
        name: 'Moon',
        description: 'Moon is a calm and independent cat who brings a unique sense of tranquility to the household. With her graceful demeanor and sleek, elegant presence, she has a way of making any space feel serene.'
    },
    {
        photo: 'images/mew.JPG',
        name: 'Mew',
        description: 'Mew is a proud and independent cat who enjoys doing things on his own terms. Though he can be a bit grumpy and prefers his personal space, he has moments of surprising affection when he feels like it, making those rare interactions all the more special.'
    },
    {
        photo: 'images/marty.jpg',
        name: 'Marty',
        description: 'Marty is a charming and playful cat with a big personality wrapped in a small package. He excels in creating a warm and welcoming atmosphere, often seeking attention with his gentle purring and inquisitive nature.'
    },
    {
        photo: 'images/boots.JPG',
        name: 'Boots',
        description: 'Boots is a sweet and shy cat who prefers a calm and quiet environment, often keeping to herself but always watching the action from a safe distance. While she may be a bit reserved, her gentle nature and soft purring are a reminder of her quiet affection.'
    },
    {
        photo: 'images/bina.jpg',
        name: 'Bina',
        description: 'Bina is a big-hearted cat with a round belly and a love for the finer things in life—especially snacks and naps. While Bina excels in the art of relaxation, she does have some room for improvement in the area of physical activity.'
    }
];

// pre-selected colors for the background
const backgroundColors = ['#8fd4be', '#fbb7c2', '#bdddd8', '#75b9a2', '#8A2BE2', '#d17397', '#79f66a'];

// references to the image, description, and button elements
const petPhoto = document.getElementById('pet-photo');
const petName = document.getElementById('pet-name');
const petDescription = document.getElementById('pet-description');
const changePhotoBtn = document.getElementById('change-photo-btn');

// function that randomizes pet profile
function changePet() {
    // random index
    const randomIndex = Math.floor(Math.random() * pets.length);
    
    // get pet's detail
    const selectedPet = pets[randomIndex];
    
    // display pet photo and description
    petPhoto.src = selectedPet.photo;
    //petName.textContent = selectedPet.name;

    petName.innerHTML = `<strong>${selectedPet.name}</strong>`;
    petDescription.textContent = selectedPet.description;

     // descript font size
     petDescription.style.fontSize = "14px";  // Adjust as needed
    

    // change bg color
    document.body.style.backgroundColor = getRandomColor();

      // trigger confetti
    confetti({
        particleCount: 100,
        spread: 60,
        origin: { x: 0.5, y: 0.5 },
        colors: ['#FF6347', '#FFD700', '#32CD32', '#00BFFF'],
  });

}

// function to pick a random color from the pre-selected colors
function getRandomColor() {
    const randomColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
    return randomColor;
}
// reacts to button click
changePhotoBtn.addEventListener('click', changePet);
