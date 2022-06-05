(function includeHTML() {
  const pageContent = Array.from(document.getElementsByTagName('*'));
  pageContent.filter(ele => !!ele.getAttribute('include-html'))
    .forEach(filteredEle => {
      const file = filteredEle.getAttribute('include-html');
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
          if (this.status === 200) {
            filteredEle.innerHTML = this.responseText;
          }
          if (this.status === 404) {
            filteredEle.innerHTML = 'File not found';
          }
        }
      }
      filteredEle.removeAttribute('include-html');
      includeHTML();
      if (file) {
        xhttp.open('GET', file, true);
        xhttp.send();
      }
      return;
    }
  )
})()