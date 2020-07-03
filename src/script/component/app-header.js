class AppHeader extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set onClickEvent(event){
        this._onClickEvent = event;
        this.render();
    }

    get value(){
        return this.shadowDOM.querySelector("#search").value;
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
        .logo{
            padding: 15px 0px;
        }
        .logo h2{
            margin: 0;
        }
        .logo b{
            color: #fffefe;
            padding: 5px;
            background-color: #000;
            border-radius: 5px;
            margin-left: 5px;
        }
        .search{
            padding: 15px 0px;
            display: inline-flex;
            width: 40%;
        }
        input{
            font-family: sans-serif;
            font-size: 13px;
            color: #666;
            margin-right: 15px;
        }
        .form-control{
            border: 1px solid #bbb8b8;
            display: block;
            width: 100%;
            height: 30px;
            padding: 0 14px;
            border-radius: 3px;
        }
        button{
            padding: 0 15px;
            background-color: #828282;
            color: white;
            border: none;
            cursor: pointer;
            font-weight: bold;
        }
        
        button:hover{
            background-color: #4485e6;
        }
        @media only screen and (max-width: 600px) {
            .search{
                width: 70%;
            }
            .form-control{
                width: 50%;
            }
        }
        </style>
        <div class="logo">
            <h2>Mo<b>Tube</b></h2>
        </div>
        <div class="search">
            <input class="form-control" type="text" id="search" placeholder="Find movie name..">
            <button id="btnSearch" type="submit">Search</button>
        </div>`;

        this.shadowDOM.querySelector("#btnSearch").addEventListener("click", this._onClickEvent);
    }
}

customElements.define("app-header", AppHeader);