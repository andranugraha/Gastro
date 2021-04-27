class AppBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <nav class="navbar">
            <div class="container">
                <div class="navbar-brand title">Gastro.</div>
            </div>
        </nav>`;

        this.querySelector(".nav-link").addEventListener("click", this._clickEvent);
    }
 }
  
 customElements.define("app-bar", AppBar);