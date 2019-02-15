class DOMNodeCollection {
  constructor(array) {
    this.array = array;
  }

  html(str) {
    if (str) {
      this.array.forEach (el => {
        el.innerHTML = str;
      });
    } else {
      return this.array[0].innerHTML;
    }
  }

  empty() {
    this.array.forEach(el => {
      el.innerHTML = '';
    })
  }

  append(arg) {
    if (typeof arg === "string") {
      this.array.forEach(el => {
        el.innerHTML += arg;
      })
    } else if (arg instanceof NodeList) {
      // debugger
      this.array.forEach(el => {
        arg.forEach(node => {
          el.innerHTML += node.outerHTML;
        });
      });
    } else {
      this.array.forEach(el => {
        //Why does HTML comment go here? "<p>Test</p>"
        el.innerHTML += arg.outerHTML;
      })
    }
  }

  attr(name, value = null) {
    if (value === null) {
      return this.array[0].attributes[name];
    } else {
      this.array.forEach(el => {
        el.attributes[name] = value;
      })
    }
  }

  addClass(newClass) {
    // this.attr("class", newClass);
    this.array.forEach(el => {
      el.classList.remove(newClass);
      el.classList.add(newClass);
    })
  }

  removeClass(classy) {
    this.array.forEach(el => {
      el.classList.remove(classy);
    })
  }

  children() {
 
    let childs = [];
    this.array.forEach(el => {
      el.children;
    })
  }
}
module.exports = DOMNodeCollection;