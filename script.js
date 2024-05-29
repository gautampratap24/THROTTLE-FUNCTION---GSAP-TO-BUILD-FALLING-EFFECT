const throttleFunction = (func, delay) => {    
    let prev = 0;
    return (...args) => {        
        let now = new Date().getTime();

        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}

document.querySelector("#center").addEventListener(
    "mousemove",throttleFunction((dets) => 
        {   
            var div = document.createElement("div");
            div.classList.add('imagediv');
            div.style.left = dets.clientX + 'px';
            div.style.top = dets.clientY + 'px';


            document.body.appendChild(div);

            gsap.to(div,{
                y: "0",
                ease: Power1,
                duration: 0.6
            });

            gsap.to(div,{
                y: "100%",
                ease: Power2,
                delay: .6
            });

            setTimeout(function(){
                div.remove();                
            }, 1000)

        }, 400)
);

