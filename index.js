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

function showSidebar() {
    
    let sidebarIcon = document.querySelector('.icon-side-bar');
    let sidebar = document.querySelector('.sidebar');
    sidebarIcon.addEventListener('click', function() {
        sidebar.style.display ='flex';
    })

}

function hideSidebar() {
    let cancelButtonIcon = document.querySelector('.icon-cancel-button');
    let sidebar = document.querySelector('.sidebar');
    
    
    cancelButtonIcon.addEventListener('click', function() {
        sidebar.style.display = 'none';
    })

}
showSidebar();
hideSidebar();

function handleProjectContainer() {
    let projectContainer = document.querySelectorAll('.project-container');
    let numOfProjectContainer = projectContainer.length;
    
    for(let i = 0; i < numOfProjectContainer; i++){
        projectContainer[i].addEventListener('mouseover', function() {
             projectContainer[i].style.transform = 'scale(1.07)'; // Increase the size without affecting layout
             projectContainer[i].style.transition = 'transform 0.3s ease';
            
            
        });

        //Reset the width when the mouse leaves
        projectContainer[i].addEventListener('mouseout', function() {
             projectContainer[i].style.transform = 'scale(1)';
    });
    }
    
}

handleProjectContainer();

function footerHandler() {
    let currentYear = new Date().getFullYear();
    document.querySelector('footer').textContent = `© ${currentYear} All rights reserved` ;
}

footerHandler();





