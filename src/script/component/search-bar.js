class SearchBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
  
    get value() {
        return this.querySelector("#searchElement").value;
    }
    
    render() {
        this.innerHTML = `
        <div class="card search">
            <div class="card-body">
                <div class="input-group">
                    <input class="form-control" placeholder="Looking for dishes?" id="searchElement" type="search">
                    <div class="input-group-append">
                        <button class="btn btn-warning" id="searchButtonElement" type="submit">Find</button>
                    </div>
                </div>
            </div>
        </div>
        `;
        
        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);