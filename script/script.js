    var circle = document.getElementById('circle');

    // function to update circle position
    function updateCirclePosition(event) {
      var mouseX = event.clientX;
      var mouseY = event.clientY;

      // Calculate the circle's new position
      var newLeft = mouseX - circle.clientWidth / 2;
      var newTop = mouseY - circle.clientHeight / 2;

      // Ensure the circle stays within the bounds of the viewport

      // Set the circle position
      circle.style.left = newLeft + 'px';
      circle.style.top = newTop + 'px';
    }

    // call updateCirclePosition on mousemove
    document.addEventListener('mousemove', updateCirclePosition);