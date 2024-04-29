function(instance, properties, context) {




  let watched = document.querySelector(`#${properties.watched_element}`);


  window.addEventListener('click', function(e){

    if (watched.contains(e.target)){

      // Clicked in box

    } else {

      // Clicked outside the box (useful to make the picked element vanish when it loses focus/blurs)

      if (window.justDisplayedFloater) {

        window.justDisplayedFloater = false;


      } else {

        instance.triggerEvent("loses_focus")


      }
    }
  });


}
