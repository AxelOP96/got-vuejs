//se puede nombrar a un componenete como the si solo se usa una vez
const TheFooter = {
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
    `<div class="container footer">
    <nav class="nav justify-content-center">
    <a class="nav-link" target="_blank" href="https://linkedin.com/" <i class="fab fa-linkedin-in"></i> </a>
    <a class="nav-link" target="_blank" href="https://twitter.com/axelleguero/" <i class="fab fa-twitter"></i> </a>
    <a class="nav-link" target="_blank" href="https://github.com/axelop96/" <i class="fab fa-github"></i> </a>
    </li>
    </ul>
    </nav>
    <p class="text-center font-red" <b> Axel Leguero</b></p>
    </div>`,
};
