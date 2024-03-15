class StickyHeader extends HTMLElement {
    constructor() {
        super();

        this.header = document.querySelector("[data-sticky-header]");
        this.headerBounds = {};
        this.currentScrollTop = 0;
        this.preventReveal = false;
        this.onScrollHandler = this.onScroll.bind(this);
        this.hideHeaderOnScrollUp = () => (this.preventReveal = true);
        this.state = "initial";
    }

    static get observedAttributes() {
        return ["state"];
    }

    get state() {
        return this.getAttribute("data-state");
    }

    set state(value) {
        this.setAttribute("data-state", value);
        this.header.setAttribute("data-state", value);
    }

    connectedCallback() {
        this.setHeaderHeight();


        window
            .matchMedia("(max-width: 1024px)")
            .addEventListener("change", this.setHeaderHeight.bind(this));
        this.addEventListener("preventHeaderReveal", this.hideHeaderOnScrollUp);
        window.addEventListener("scroll", this.onScrollHandler, false);

        this.createObserver();
    }

    disconnectedCallback() {
        this.removeEventListener("preventHeaderReveal", this.hideHeaderOnScrollUp);
        window.removeEventListener("scroll", this.onScrollHandler);
    }

    setHeaderHeight() {
        document.documentElement.style.setProperty(
            "--header-height",
            `${this.header.offsetHeight}px`
        );
    }

    createObserver() {
        let observer = new IntersectionObserver((entries, observer) => {
            this.headerBounds = entries[0].intersectionRect;
            observer.disconnect();
        });

        observer.observe(this.header);
    }

    onScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (
            scrollTop > this.currentScrollTop &&
            scrollTop > this.headerBounds.bottom
        ) {
            this.header.classList.add("scrolled-past-header");
            if (this.preventHide) return;
            requestAnimationFrame(this.hide.bind(this));
        } else if (
            scrollTop < this.currentScrollTop &&
            scrollTop > this.headerBounds.bottom
        ) {
            this.header.classList.add("scrolled-past-header");
            if (!this.preventReveal) {
                requestAnimationFrame(this.reveal.bind(this));
            } else {
                window.clearTimeout(this.isScrolling);

                this.isScrolling = setTimeout(() => {
                    this.preventReveal = false;
                }, 66);

                requestAnimationFrame(this.hide.bind(this));
            }
        } else if (scrollTop <= this.headerBounds.top) {
            this.header.classList.remove("scrolled-past-header");
            requestAnimationFrame(this.reset.bind(this));
        }

        this.currentScrollTop = scrollTop;
    }

    hide() {
        this.state = "hide";
    }

    reveal() {
        this.state = "reveal";
    }

    reset() {
        this.state = "initial";
    }
}

if (!customElements.get("sticky-header")) {
    customElements.define("sticky-header", StickyHeader);
}