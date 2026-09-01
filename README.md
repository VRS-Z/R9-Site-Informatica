# R9 Informática

Site institucional da **R9 Informática**, assistência técnica especializada em computadores, notebooks e videogames, localizada em Boa Viagem - CE.

**Site publicado:** https://vrs-z.github.io/R9-Site-Informatica/

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-live-2ea44f?style=flat&logo=github)

---

## Sobre

A R9 Informática presta serviços de manutenção e reparo de computadores, notebooks e videogames, com reparos realizados à vista do cliente, técnicos certificados e garantia nos serviços executados. O site apresenta a empresa, seus diferenciais, o catálogo de serviços, depoimentos de clientes, localização e um canal direto de orçamento via WhatsApp.

## Seções do site

| Seção | Conteúdo |
| --- | --- |
| Hero | Apresentação da empresa e chamada para orçamento |
| Diferenciais | Reparos avançados, técnicos certificados e garantia |
| Transparência | Explicação do processo de reparo à vista do cliente |
| Serviços | Catálogo de seis serviços prestados |
| Números | Indicadores de clientes atendidos e serviços realizados |
| Localização | Endereço, horário de atendimento e mapa incorporado |
| Depoimentos | Avaliações de clientes em carrossel |
| Perguntas frequentes | Dúvidas comuns em formato de acordeão |
| Rodapé | Contato, endereço, horários e redes sociais |

## Tecnologias

Site estático, sem build ou dependências de instalação:

- HTML5 semântico
- CSS3 (variáveis nativas, Grid/Flexbox, responsivo, `prefers-reduced-motion`)
- JavaScript puro — sem frameworks ou bibliotecas de terceiros:
  - Carrossel de depoimentos com `scroll-snap` nativo
  - Acordeão de perguntas frequentes construído do zero (`aria-expanded`)
  - Menu mobile com painel deslizante
  - Animações de entrada via `IntersectionObserver`, com fallback de segurança
- Sprite de ícones SVG (`<symbol>` + `<use>`) — cada ícone é definido uma única vez e reaproveitado em todo o site
- [Google Fonts — Space Grotesk / Inter](https://fonts.google.com/) para tipografia

## Estrutura do projeto

```
R9-Site-Informatica/
├── js/
│   └── script.js
├── stylesheet/
│   ├── style.css
│   ├── favicon.svg
│   └── logo-social.png
├── index.html
└── README.md
```

## Como rodar localmente

Não há dependências nem build — basta clonar e abrir o arquivo no navegador:

```bash
git clone https://github.com/VRS-Z/R9-Site-Informatica.git
cd R9-Site-Informatica
```

Depois é só abrir o `index.html` diretamente no navegador, ou servir a pasta com qualquer servidor estático, por exemplo:

```bash
npx serve .
```

## Acessibilidade e robustez

- Navegação por teclado com foco visível e link de "pular para o conteúdo"
- HTML semântico, sem elementos interativos aninhados
- Suporte a `prefers-reduced-motion` para quem desativa animações no sistema
- Conteúdo não depende exclusivamente de JavaScript para ficar visível: as animações de entrada têm um mecanismo de segurança que garante a exibição do conteúdo mesmo em caso de falha ou atraso do script
- Testado sem rolagem horizontal indevida em telas de 320px a 2560px de largura (mobile, tablet, desktop e monitores ultrawide)
- Menu mobile validado em abertura real, sem cortes de conteúdo

## Contato

- Endereço: R. Maria da Conceição Alves de Melo, 194 - Padre Paulo, Boa Viagem - CE, 63870-000
- Telefone / WhatsApp: [(88) 99919-4391](https://wa.me/5588999194391)
- E-mail: [contato.lucastecnico@gmail.com](mailto:contato.lucastecnico@gmail.com)
- Instagram: [@r9.informatica](https://www.instagram.com/r9.informatica/)
- Horário de atendimento: Segunda a sexta, 8h às 17h · Sábado, 8h às 12h e 14h às 18h

---

<sub>&copy; R9 Informática. Todos os direitos reservados.</sub>
