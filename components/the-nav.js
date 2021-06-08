const TheNav = {
    data(){
        return{
            navul: [
                {
                    id:1,
                    htmlId:'nav-1',
                    ahref: '/',
                }
            ]
        }
    },
    template:
    `<nav class="navbar">
    <a href="./" class="nav-logo navbar-brand">
    <img class="got-logo" alt="game of thrones" src="./assets/got-log-200x88.png"/>
    <a/>
    <ul class="nav justify-content-end">
    <li v-for="nav in navul" :class="nav-item" :id="nav.htmlId">
    <a class="nav-link" href="nav.ahref">Characters</a>
    </li>
    </ul>
    </nav>`,
};