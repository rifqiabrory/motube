class MovieItem extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set item(item){
        this._item = item;
        this.render();
    }

    set onDetailEvent(event){
        this._event = event;
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
            /* Float four columns side by side */
            .column {
            float: left;
            width: 280px;
            padding: 0 10px;
            margin-top: 10px;
            overflow: hidden;
            }

            /* Style the counter cards */
            .card {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            /* this adds the "card" effect */
            text-align: center;
            background-color: #f1f1f1;
            }

            .card .header img {
            height: 150px;
            width: 100%;
            }

            .card .header .title {
            margin: 8px 0;
            text-align: left;
            padding: 0 10px;
            }

            .card .content p {
            text-align: justify;
            padding: 0 10px;
            overflow: hidden;
            max-height: 130px;
            word-wrap: break-word;
            }

            .card .footer {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 15px 10px;
            }

            .card .footer a {
            text-decoration: none;
            border-radius: 3px;
            background-color: #cacaca;
            padding: 5px;
            width: 100px;
            }

            .card .footer a:hover {
            font-weight: bold;
            background-color: #d6d6d6;
            }

            .card .footer p {
            font-size: small;
            color: #929292;
            margin: auto 0;
            }

            @media only screen and (max-width: 600px) {
                .column {
                  width: 100%;
                  display: block;
                  margin-top: 10px;
                  margin-bottom: 5px;
                }
              }
        </style>
        <div class="column">
            <div class="card">
                <div class="header">
                        <img src="${this._item.Poster}" alt="image"/>
                        <div class="title">
                            <h2>${this._item.Title}</h2>    
                        </div>
                </div>
                <div class="content">
                    <p>
                    ${this._item.Plot}
                    </p>
                </div>
                <div class="footer">
                    <a href="#" id="detail">More</a>
                    <p>${this._item.Released}</p>
                </div>
            </div>
        </div>`;

        this.shadowDOM.querySelector("#detail").addEventListener("click", this._event);
    }
}

customElements.define("movie-item", MovieItem);