class DevStub extends HTMLElement {
    static css =`
        :host {
            width: fit-content;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            user-select: none;
        }

        @font-face {
            font-family: 'Fira Code';
            src: url(/public/assets/fonts/FiraCode-Bold.ttf) format('truetype');
            font-weight: 700;
        }

        @font-face {
            font-family: 'Fira Code';
            src: url(/public/assets/fonts/FiraCode-SemiBold.ttf) format('truetype');
            font-weight: 600;
        }

        @font-face {
            font-family: 'Fira Code';
            src: url(/public/assets/fonts/FiraCode-Medium.ttf) format('truetype');
            font-weight: 500;
        }

        @font-face {
            font-family: 'Fira Code';
            src: url(/public/assets/fonts/FiraCode-Regular.ttf) format('truetype');
            font-weight: 400;
        }

        @font-face {
            font-family: 'Fira Code';
            src: url(/public/assets/fonts/FiraCode-Light.ttf) format('truetype');
            font-weight: 300;
        }

        *,
        *::before,
        *::after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        .dev {
            font-family: sans-serif;
            text-transform: uppercase;
            background: #fc5;
            text-align: center;
            padding: 1rem 1rem 0 1rem;
            border: 1px solid #000;
        }

        .dev p:nth-child(1) {
            background: #000;
            color: #fff;
            padding: .2rem 0;
            font-size: 2.7rem;
            letter-spacing: .9rem;
            text-indent: .9rem;
        }

        .dev p:nth-child(2) {
            font-size: 1.55rem;
            font-weight: bold;
            letter-spacing: .3rem;
            text-indent: .1rem;
        }

        .dev p:nth-child(3) {
            font-size: 1.18rem;
            letter-spacing: .2rem;
        }

        .dev p:nth-child(4) {
            padding: .3rem 0 .5rem;
            font-size: .6rem;
            text-transform: initial;
        }

        .dev p:nth-child(4) strong {
            font-family: 'Fira Code', monospace;
        }

        .dev p:nth-child(4) span {
            color: #f55;
        }

        .text {
            font-family: 'Fira Code';
            padding: 1.2rem;
            color: #000a;
            font-weight: 100;
        }

        .text span {
            display: inline-block;
            transform: rotate(90deg);
            font-weight: 700;
        }

        .border {
            padding: .8rem;
            background: linear-gradient(-45deg,
                    rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 5%,
                    rgba(255, 203, 0, 1) 5%, rgba(255, 203, 0, 1) 10%,
                    rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 15%,
                    rgba(255, 203, 0, 1) 15%, rgba(255, 203, 0, 1) 20%,
                    rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 25%,
                    rgba(255, 203, 0, 1) 25%, rgba(255, 203, 0, 1) 30%,
                    rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 1) 35%,
                    rgba(255, 203, 0, 1) 35%, rgba(255, 203, 0, 1) 40%,
                    rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 1) 45%,
                    rgba(255, 203, 0, 1) 45%, rgba(255, 203, 0, 1) 50%,
                    rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 55%,
                    rgba(255, 203, 0, 1) 55%, rgba(255, 203, 0, 1) 60%,
                    rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 1) 65%,
                    rgba(255, 203, 0, 1) 65%, rgba(255, 203, 0, 1) 70%,
                    rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 1) 75%,
                    rgba(255, 203, 0, 1) 75%, rgba(255, 203, 0, 1) 80%,
                    rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 1) 85%,
                    rgba(255, 203, 0, 1) 85%, rgba(255, 203, 0, 1) 90%,
                    rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 1) 95%,
                    rgba(255, 203, 0, 1) 95%, rgba(255, 203, 0, 1)100%,
                    rgba(0, 0, 0, 1) 100%);
            transform: rotate(-5deg);
            border: 1px solid #000;
        }
    `;

    constructor() {
        super();
        this.attachShadow({mode: "open"});
        const style = document.createElement("style"),
            border = document.createElement("div"),
            dev = document.createElement("div"),
            strng = document.createElement("strong"),
            spn = document.createElement("span");

        const text = ['caution','this website is', 'under construction'];

        style.innerHTML = DevStub.css;
        border.classList.add("border");
        dev.classList.add("dev");

        text.forEach(item => {
            const p = document.createElement("p");
            p.textContent = item;
            dev.append(p);
        });

        const p2 = document.createElement("p");
        p2.innerHTML = "Designed by: <strong><span>&lt;/</span>nazare<span>S&gt;</span></strong>";
        dev.append(p2);

        strng.innerHTML = "<span>"

        const p3 = document.createElement("p");

        p3.classList.add("text");

        p3.innerHTML = "coming soon <span>;)</span>"

        border.append(dev);

        this.shadowRoot.append(style, border, p3);
    }
}

customElements.define("dev-stub", DevStub);