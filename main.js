document.getElementById('github-button').addEventListener('click', function() {
    window.open('https://github.com/KitiphopSophakhayang');
});

document.getElementById('resume-button').addEventListener('click', function() {
    window.open('https://www.canva.com/design/DAGLHcD3up0/145f75xGiQGhdDLxhEhFWg/view?utm_content=DAGLHcD3up0&utm_campaign=designshare&utm_medium=link&utm_source=editor');
});


/*------------------------------------*/


document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const popup_Internship = document.getElementById('popup_Internship');
    const popup_ui = document.getElementById('popup_ui');

    const openPopupBtn = document.getElementById('open-popup-btn');
    const openPopupuiBtn = document.getElementById('open-popup-ui-btn');
    const openPopupuInternship = document.getElementById('open-popup-Internship');

    const closeBtn = document.getElementById('close-btn');
    const closeBtnui = document.getElementById('close-btn-ui');
    const closeInternship = document.getElementById('close-btn-Internship');
    

    openPopupBtn.addEventListener('click', function() {
        popup.style.display = 'flex'; 
    });
    openPopupuiBtn.addEventListener('click', function() {
        popup_ui.style.display = 'flex'; 
    });
    openPopupuInternship.addEventListener('click', function() {
        popup_Internship.style.display = 'flex';
    });


    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none'; // ซ่อน popup
    });
    closeBtnui.addEventListener('click', function() {
        popup_ui.style.display = 'none'; // ซ่อน popup_ui
    });
    closeInternship.addEventListener('click', function() {
        popup_Internship.style.display = 'none'; // ซ่อน popup_ui
    });


    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none'; // ซ่อน popup เมื่อคลิกนอก popup
        }
        if (event.target === popup_ui) {
            popup_ui.style.display = 'none'; // ซ่อน popup_ui เมื่อคลิกนอก popup_ui
        }
        if (event.target === popup_Internship) {
            popup_Internship.style.display = 'none'; // ซ่อน popup_ui เมื่อคลิกนอก popup_ui
        }
    });

    resumeBtn.addEventListener('click', function() {
        window.open('https://www.figma.com/design/SGuigGMnrodEDV0mmtbioG/Untitled?node-id=0-1&m=dev&t=qUUJuitYmxh4EggW-1', '_blank'); // เปิดหน้า Resume ในหน้าต่างใหม่
    });

    
    document.getElementById('github-fronten1').addEventListener('click', function() {
        window.open('https://github.com/KitiphopSophakhayang/project.git');
    });

    document.getElementById('github-fronten2').addEventListener('click', function() {
        window.open('https://github.com/KitiphopSophakhayang/fontend-user.git');
    });
    document.getElementById('github-backend').addEventListener('click', function() {
        window.open('https://github.com/KitiphopSophakhayang/Backnd_Spring_Boot.git');
    });
    
});




let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px"

function toggleMenu() {
    if(menuList.style.maxHeight =="0px")
    {
        menuList.style.maxHeight ="300px";
    }
    else{
        menuList.style.maxHeight ="0px";
    }
}