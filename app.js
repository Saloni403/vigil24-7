let navlist = document.querySelector('.nav-list');
let btn = document.querySelector(".M-Burger");

btn.addEventListener('click',function(){
    navlist.style.top = '0';
   
})

document.addEventListener('click', function (e) {
    if (!navlist.contains(e.target) && !btn.contains(e.target)) {
        navlist.style.top = '-22rem';
     
    }
});

    document.addEventListener("DOMContentLoaded", function () {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target); // Run animation only once
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
        });

        document.querySelectorAll('.abc, .start-ser').forEach(el => {
            observer.observe(el);
        });
    });







  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add staggered delay
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 200); // 200ms delay between items
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.clint-start .clint-main').forEach(el => {
    observer.observe(el);
  });

