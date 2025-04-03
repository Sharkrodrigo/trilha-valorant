const fases = [
    {
        titulo: "🟢 Fase 1: Recruta - Aprendendo o Terreno (Fundamentos da Web)",
        descricao: "Esta fase ensina os fundamentos essenciais da web. Você aprenderá HTML, CSS e Tailwind para criar páginas bem estruturadas e estilosas.",
        valorantTitulo: "🎯 Valorant Equivalente: Aprender a se movimentar pelo mapa e entender as regras do jogo.",
        valorantDescricao: "HTML é como conhecer os mapas do Valorant. Você precisa entender as rotas, os bombsites e onde posicionar a spike antes de entrar em combate. No desenvolvimento web, o HTML define a estrutura da página, como se fosse o mapa onde o site acontece!",
        curso: "https://www.udemy.com/course/modulo-i-intro-html/?couponCode=ST15MT20425G3"
    },
    {
        titulo: "🎨 CSS - Personalizando seu Estilo",
        descricao: "Agora que você tem a estrutura, é hora de estilizar a interface com CSS, garantindo que sua aplicação fique bonita e responsiva.",
        valorantTitulo: "🎯 Valorant Equivalente: Customizar sua mira e skins para ter um jogo mais fluido e estiloso.",
        valorantDescricao: "CSS é como personalizar sua mira e skins. No começo, você joga com a mira padrão, mas conforme evolui, percebe que uma mira personalizada melhora sua precisão. No CSS, acontece o mesmo: você aprende a deixar a interface do site mais bonita, responsiva e estilosa.",
        curso: null
    },
    {
        titulo: "🛠️ Tailwind CSS - Estilizando com Eficiência",
        descricao: "O Tailwind CSS permite que você estilize rapidamente sem precisar escrever CSS puro, tornando seu fluxo de trabalho mais ágil e eficiente.",
        valorantTitulo: "🎯 Valorant Equivalente: Usar macros e atalhos para otimizar seu jogo.",
        valorantDescricao: "Tailwind é como configurar atalhos no Valorant. Você poderia fazer tudo manualmente, mas com macros e atalhos, o jogo fica muito mais rápido. Tailwind permite estilizar sem precisar escrever tanto CSS manualmente, acelerando o desenvolvimento.",
        curso: null
    },
    {
        titulo: "🧠 UX Design - Criando Experiências de Qualidade",
        descricao: "UX Design ajuda você a construir interfaces que fazem sentido para os usuários, garantindo uma experiência fluida e intuitiva.",
        valorantTitulo: "🎯 Valorant Equivalente: Comunicação de time e leitura de jogo.",
        valorantDescricao: "UX Design é como ter uma boa call no jogo. Se seu time não se comunica bem, as jogadas falham. No UX, se o design do site não for intuitivo, os usuários ficam perdidos. Esse curso te ensina a criar interfaces que os usuários entendem facilmente.",
        curso: "https://www.udemy.com/course/ux-design/"
    },
    {
        titulo: "🟡 Fase 2: Agente Treinado - Melhorando sua Mira (JavaScript & Git)",
        descricao: "Agora que você domina os fundamentos, é hora de aprender JavaScript e controle de versão com Git e GitHub.",
        valorantTitulo: "🎯 Valorant Equivalente: Melhorar a mira e aprender a atirar corretamente.",
        valorantDescricao: "JavaScript é como treinar flick shots e recoil control. No começo, parece difícil, mas depois que você aprende a controlar o spray da Vandal, fica muito mais fácil acertar os tiros. JS é a linguagem que dá vida aos sites, permitindo interatividade e dinamismo.",
        curso: "https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/?couponCode=ST15MT20425G3"
    },
    {
        titulo: "🔗 Git e GitHub - Versionamento e Trabalho em Equipe",
        descricao: "Aprenda a utilizar Git e GitHub para trabalhar com versionamento de código e colaboração eficiente em projetos.",
        valorantTitulo: "🎯 Valorant Equivalente: Comunicação com o time e táticas de ataque.",
        valorantDescricao: "GitHub é como um time bem coordenado no Valorant. Se todo mundo joga junto, trocando informações e se posicionando bem, as chances de ganhar aumentam. No GitHub, você aprende a colaborar em código, organizar versões e trabalhar em equipe sem conflitos.",
        curso: "https://www.udemy.com/course/git-e-github-do-basico-ao-avancado-c-gist-e-github-pages/"
    },
    {
        titulo: "🟠 Fase 3: Especialização - Escolhendo Seu Agente (Frameworks de Front-End)",
        descricao: "Agora é hora de escolher sua especialização! Você pode optar por um framework mais ágil como Next.js ou um mais estruturado como Angular.",
        valorantTitulo: "🎯 Valorant Equivalente: Escolher seu agente principal.",
        valorantDescricao: "Assim como no Valorant, onde cada agente tem habilidades diferentes, os frameworks possuem suas próprias vantagens. Você precisa escolher aquele que se encaixa melhor no seu estilo de jogo (desenvolvimento).",
        curso: null
    },
    {
        titulo: "🔵 Next.js = Jett (Rápida, flexível e agressiva 💨)",
        descricao: "Next.js é um framework poderoso que permite criar sites e aplicações web extremamente rápidos, otimizados e com excelente SEO.",
        valorantTitulo: "🎯 Valorant Equivalente: Jogar de Jett e dominar as mecânicas de movimentação.",
        valorantDescricao: "Next.js é como jogar de Jett. Você se movimenta rápido, atacando e recuando com eficiência. Ele permite criar sites performáticos, rápidos e com ótimo SEO. Grandes empresas como Netflix e TikTok usam Next.js para criar plataformas ágeis.",
        curso: "https://www.udemy.com/course/nextjs-zero-ao-avancado/"
    },
    {
        titulo: "🔴 Angular = Brimstone (Estratégico, organizado e poderoso 💪)",
        descricao: "Angular é um framework robusto e ideal para grandes equipes que trabalham em projetos de longo prazo e precisam de uma estrutura bem definida.",
        valorantTitulo: "🎯 Valorant Equivalente: Jogar de Brimstone e controlar o mapa.",
        valorantDescricao: "Angular é como jogar de Brimstone. Ele é estratégico, planejado e trabalha em equipe. Aplicações feitas com Angular são poderosas e confiáveis, rodando sistemas empresariais e plataformas corporativas como as usadas pelo Google e Microsoft.",
        curso: "https://www.udemy.com/course/angular-curso-completo-do-iniciante-ao-avancado/?couponCode=ST15MT20425G3"
    }
];

let faseAtual = 0;

function atualizarFase() {
    const fase = fases[faseAtual];

    document.getElementById("fase-title").innerText = fase.titulo;
    document.getElementById("fase-desc").innerText = fase.descricao;
    document.getElementById("valorant-title").innerText = fase.valorantTitulo;
    document.getElementById("valorant-desc").innerText = fase.valorantDescricao;

    const linkCurso = document.getElementById("course-link");
    if (fase.curso) {
        linkCurso.href = fase.curso;
        linkCurso.style.display = "inline-block"; 
    } else {
        linkCurso.style.display = "none"; 
    }
}

document.getElementById("prevBtn").addEventListener("click", () => {
    if (faseAtual > 0) {
        faseAtual--;
        atualizarFase();
    }
});

document.getElementById("nextBtn").addEventListener("click", () => {
    if (faseAtual < fases.length - 1) {
        faseAtual++;
        atualizarFase();
    }
});

atualizarFase();
