    // Typing Animation
    var typed = new Typed(".typing",{
        strings:["Web Developer","Student","Freelancer","Web Designer","Web Developer"],
        typeSpeed:600,
        BackSpeed:400,
        loop:true
    })

    // Aside Control
    const nav = document.querySelector('.nav'),
        navList = document.querySelectorAll('li'),
        allSection = document.querySelectorAll(".section"),
        totalSection = allSection.length;
        totalNavlist = navList.length;
        for(let i=0;i<totalNavlist;i++)
        {

            const a = navList[i].querySelector('a');
            a.addEventListener("click", function(){
                for (let j = 0; j <totalNavlist; j++) {
                    navList[j].querySelector('a').classList.remove("active");
                }
                this.classList.add("active");   
            })
        }

        // Side Toggler
        const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
        
        navTogglerBtn.addEventListener("click",()=>{
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for(i=0;i<totalSection;i++)
            {
                allSection[i].classList.toggle("open");
            }
        })