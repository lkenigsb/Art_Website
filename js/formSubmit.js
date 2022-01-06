window.onload = function() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("We have received your information. Please await further contact");
      return false;
   };
};