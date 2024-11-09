const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});



    document.addEventListener("DOMContentLoaded", function () {
        const imageContainer = document.querySelector(".main_img--container");
    
        const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        imageContainer.classList.add("visible"); 
                    }
                });
            },
            { threshold: 0.1 } 
        );
    
        observer.observe(imageContainer);
    
        const images = document.querySelectorAll(".scroll-image");
        images.forEach(image => {
            image.addEventListener("click", function () {
                window.location.href = "photos.html"; 
            });
        });
    });
    



let writers = [
    {
        name: 'Остап Вишня',
        bio: 'Письменник, сатирик, гуморист, перекладач.',
        photo: 'images/Vyshnia.jpg',
        link: 'residents/Vyshnia.html' // Updated path to the individual page
    },
    {
        name: 'Андрій Малишко',
        bio: 'Поет, перекладач, літературний критик.',
        photo: 'images/Malyshko.jpg',
        link: 'residents/Malyshko.html' // Updated path to the individual page
    },
    {
        name: 'Павло Тичина',
        bio: 'Поет, перекладач, публіцист, політик, громадський і державний діяч.',
        photo: 'images/Tychyna.jpg',
        link: 'residents/Tychyna.html' // Updated path to the individual page
    },
    {
        name: 'Микола Бажан',
        bio: 'Поет, перекладач, культуролог, енциклопедист, філософ, громадський діяч.',
        photo: 'images/Bazhan.jpg',
        link: 'residents/Bazhan.html' // Updated path to the individual page
    }
];

// Function to create HTML structure for a writer card with AOS animation
function createWriterCard(writer) {
    return `
        <div class="writer-card" style="background-image: url('${writer.photo}');" data-aos="fade-up">
            <div class="writer-info">
                <h3>${writer.name}</h3>
                <p>${writer.bio}</p>
            </div>
        </div>
    `;
}


function loadWriters() {
    const writersGrid = document.getElementById('writers-grid');
    writers.forEach((writer, index) => {
        setTimeout(() => {
            const cardHtml = createWriterCard(writer);
            writersGrid.innerHTML += cardHtml;
            AOS.refresh();
        }, index * 800); 
    });

    writersGrid.addEventListener('click', (event) => {
        const card = event.target.closest('.writer-card');
        if (card) {
            const index = Array.from(writersGrid.children).indexOf(card);
            if (index >= 0) {
                window.location.href = writers[index].link; 
            }
        }
    });
}

// Load writers when the page loads
window.onload = () => {
    loadWriters();
    AOS.init({
        duration: 1000, // Animation duration
        easing: 'ease-out-back', // Adds a little bounce on entrance
        once: true, // Run once when visible
    });
};
