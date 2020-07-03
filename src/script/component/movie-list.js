import './movie-item.js'; 

class MovieList extends HTMLElement {

    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set items(items){
        this._items = items;
        this.render();
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = "";
        if(this._items){
            this._items.forEach(item => {
                const itemEl = document.createElement("movie-item");
                itemEl.item = item;
                itemEl.onDetailEvent = () => {
                    var modal = document.getElementById("modal");
                    modal.style.display = "block";
                    modal.innerHTML = `
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2>${item.Title}</h2>
                        </div>
                        <div class="modal-body">
                            <p>${item.Plot}</p>
                            <div>
                                <ul>
                                    <li>Duration : ${item.Runtime}</li>
                                    <li>Genre : ${item.Genre}</li>
                                    <li>Language : ${item.Language}</li>
                                    <li>Released : ${item.Released}</li>
                                    <li>Director : ${item.Director}</li>
                                    <li>Writer : ${item.Writer}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <h3>Rate  : ${item.imdbRating}</h3>
                            <h3>Votes : ${item.imdbVotes}</h3>
                        </div>
                    </div>`;

                    window.onclick = function(event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                };
                this.shadowDOM.appendChild(itemEl);
            });
        } else {
            this.renderError("Not Found");
        }
    }

    renderError(message){
        this.shadowDOM.innerHTML = `<h2 id="notFound" style="text-align:center;text-transform: capitalize;color: red;">${message} </h2>`;
    }
}

customElements.define("movie-list", MovieList);