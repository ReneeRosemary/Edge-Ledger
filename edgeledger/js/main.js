
// Initialize and add the map
 function initMap() {
    
const loc= {lat:42.358990, lng:-71.058630};
     
const Map= new google.maps.Map(document.querySelector('.map')
,{
    zoom:14,
    center:loc
});

 const marker = new google.maps.Marker({position:loc, 
    map:map});
 }


// Sticky menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
      document.querySelector('#navbar').style.opacity = 0.9;
    } else {
      document.querySelector('#navbar').style.opacity = 1;
    }
  });

// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event){ 
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
    });

   