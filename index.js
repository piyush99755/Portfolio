function handleNavBar() {
    let navItems = document.querySelectorAll('.nav-item'); // Get the nav items once
    let numOfNavItems = navItems.length;
    let contactButton = document.querySelector('.button');

    for (let i = 0; i < numOfNavItems; i++) {
        // Add event mouse over for each item 
       navItems[i].addEventListener('mouseover', function() {
       navItems[i].style.fontSize = '20px'; });
       
       
        // Add event mouse out for each item 
       navItems[i].addEventListener('mouseout', function() {
        navItems[i].style.fontSize = '16px'; });

        navItems[i].addEventListener('click', function() {
            let audio = new Audio('/sounds/click_sound.mp3');
            audio.play();
        });

    }

    contactButton.addEventListener('mouseover', function() {
    contactButton.style.fontSize = '20px'; });

    contactButton.addEventListener('mouseout', function() {
    contactButton.style.fontSize = '16px'; });

    contactButton.addEventListener('click', function() {
        let audio = new Audio('/sounds/click_sound.mp3');
        audio.play();
    });

}

handleNavBar();

function handleSocialMediaIcons() {

    let socialMediaIcons = document.querySelectorAll('.social-media img');
    let numOfIcons = socialMediaIcons.length;

    for (let i = 0; i < numOfIcons; i++) {
        // Add event mouse over for each item 
       socialMediaIcons[i].addEventListener('mouseover', function() {
       socialMediaIcons[i].style.width = '50px'; });
       
       
        // Add event mouse out for each item 
        socialMediaIcons[i].addEventListener('mouseout', function() {
        socialMediaIcons[i].style.width = '37px'; });

        socialMediaIcons[i].addEventListener('click', function() {
            let audio = new Audio('/sounds/click_sound.mp3');
            audio.play();
        });

    }

}

handleSocialMediaIcons();




