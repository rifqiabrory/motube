class AppFooter extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
        .link p{
            font-weight: normal;
            font-size: small;
            color: lightslategrey;
            margin: 4px 0px;
        }
        .link p a{
            text-decoration: none;
            font-weight: bold;
        }
        .link a:hover{
            color: black;
        }
        .about p{
            margin: 4px 0px;
            font-size: small;
            color: grey;
        }
        </style>
        <div class="link">
            <p><a href="#">2020 &copy; MoTube.com</a></p>
        </div>
        <div class="about">
            <p>Dicoding submition</p>
        </div>`;
    }
}

customElements.define("app-footer", AppFooter);