
//source of random quotes, len = 10
const info=[
    "Rick Astley was born in 1966.",
    "Hawaiian pizza was invented by a Greek immigrant in Canada.",
    "Arnold Reuben (yes of the sandwich fame) is also credited with the invention of the NY style cheesecake.",
    "The largest cheesecake created to date weighted 4,703 pounds!",
    "There exists cheesecake-flavored Kitkats.",
    "Bakers are rich because they make a lot of dough.",
    "There are more than 40 varieties of cheesecakes!",
    "There are people who make savory cheesecakes, the technical term for those people are \"sociopaths\"",
    "Check for doneness of cheesecakes like you would any other cake - by using the toothpick trick.",
    "What we typically think of as a cheesecake, is actually technically a custard pie."
];

//generate a random number within range of arr info, but different from given number
const gen=(num)=>{
    let curr=num;
    while (curr===num)
        curr=Math.floor(Math.random()*10);
  return curr;
};

//only shows on non-mobile devices
document.addEventListener("DOMContentLoaded",()=>{
    if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        //buttons
        const dismiss = document.getElementById("pop-dismiss");
        const stop = document.getElementById("pop-stop");

        //pop up card itself
        const pop = document.getElementById("pop-up");
        //pop up msg
        const popMsg = document.getElementById("pop-txt");

        //last msg ind
        let lastMsg = 0;

        //running state
        let running = true;
        let timeRef=null;

        //for making pop up appear
        const appear=()=>{
          timeRef = setTimeout(()=>{
              pop.classList.remove("fade");
              let currMsg=gen(lastMsg);
              popMsg.innerHTML = info[currMsg];
              lastMsg = currMsg;
              pop.classList.add("appear");

            if (running)
                fade();
          }, 3000);
        };

        //for making pop up disappear
        const fade=()=>{
            timeRef= setTimeout(()=>{
                pop.classList.remove("appear");
                pop.classList.add("fade");
                if (running)
                    appear();
            }, 5000);
        }

        appear();

        //remove curr pop up
        dismiss.addEventListener("click",()=>{
            pop.classList.remove("appear");
            pop.classList.add("fade");
        });

        //stop pop up entirely
        stop.addEventListener("click", ()=>{
            pop.classList.remove("appear");
            pop.classList.add("fade");
            running=false;
            clearTimeout(timeRef);
        });
    }
});