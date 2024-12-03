<script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
    <script>
        AOS.init();
    </script>
<!-- Add this to your existing script section -->
<script>
    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Handle browser back button
    window.onpopstate = function(event) {
        if (document.referrer.includes(window.location.hostname)) {
            history.go(-1);
        }
    };
   
</script>
    <script>
        function openIframeWithContent(link, imageSrc, textContent) {
            document.getElementById("iframeImage").src = imageSrc;
            document.getElementById("iframeText").innerText = textContent;
            document.getElementById("iframeModal").style.display = "flex";
            document.getElementById("iframeModal").setAttribute("data-link", link);
        }

        function closeIframe() {
            document.getElementById("iframeModal").style.display = "none";
        }

        function elaborateIframe() {
            const link = document.getElementById("iframeModal").getAttribute("data-link");
            window.open(link, "_blank");
        }

        function zoomIn() {
            let iframeImage = document.getElementById("iframeImage");
            iframeImage.style.transform = "scale(1.2)";
            iframeImage.style.transition = "transform 0.3s ease-in-out";
        }

        function zoomOut() {
            let iframeImage = document.getElementById("iframeImage");
            iframeImage.style.transform = "scale(1)";
            iframeImage.style.transition = "transform 0.3s ease-in-out";
        }
    </script>
<script>
        // Back to Top button functionality
        const backToTopButton = document.createElement('a');
        backToTopButton.classList.add('back-to-top');
        backToTopButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
        document.body.appendChild(backToTopButton);

        window.onscroll = function() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        };

        backToTopButton.onclick = function() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        };
    </script>
<script>
    // JavaScript to handle card position swapping on hover in My Expertise section
       const card1 = document.getElementById('card1');
    const card2 = document.getElementById('card2');
    const card3 = document.getElementById('card3');

    // Function to rotate the cards
    function rotateCards() {
        // Swap class positions in a circular fashion
        if (card1.classList.contains('left')) {
            card1.classList.replace('left', 'center');
            card2.classList.replace('center', 'right');
            card3.classList.replace('right', 'left');
        } else if (card1.classList.contains('center')) {
            card1.classList.replace('center', 'right');
            card2.classList.replace('right', 'left');
            card3.classList.replace('left', 'center');
        } else if (card1.classList.contains('right')) {
            card1.classList.replace('right', 'left');
            card2.classList.replace('left', 'center');
            card3.classList.replace('center', 'right');
        }
    }

    // Add hover event listeners to each card
    card1.addEventListener('mouseenter', rotateCards);
    card2.addEventListener('mouseenter', rotateCards);
    card3.addEventListener('mouseenter', rotateCards);
</script>
     <script>
          //Opensource Project
  function openLightbox(text, link, imageSrc) {
    document.getElementById('lightbox-text').innerText = text;
    document.getElementById('lightbox-link').href = link;
    document.getElementById('lightbox-image').src = imageSrc;
    document.getElementById('lightbox').style.display = 'flex';
  }

  function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
  }
</script>
