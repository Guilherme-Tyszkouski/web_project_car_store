# G.W.P.J MOTORS - Coleção Premium

![Status do Projeto](https://img.shields.io/badge/Status-Conclu%C3%ADdo-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Uma plataforma moderna de exibição de veículos de luxo, desenvolvida como projeto académico. O foco do projeto foi a criação de uma interface intuitiva, totalmente responsiva e com funcionalidades dinâmicas de visualização de produtos.

# Demonstração da Responsividade
O projeto foi meticulosamente ajustado para funcionar em todos os dispositivos:
- **Desktop:** Layout em grid com 3 colunas.
- **Tablet:** Adaptação dinâmica para 2 colunas.
- **Mobile (iPhone/Android):** Layout vertical centralizado, fontes otimizadas e navegação simplificada para ecrãs pequenos.

# Funcionalidades Principais
- **Galeria Dinâmica:** Exibição de carros através de cartões gerados via JavaScript utilizando a tag `<template>`.
- **Sistema de Modal:** Visualização ampliada das imagens dos veículos com navegação entre fotos (Próximo/Anterior).
- **Design Responsivo:** Blindagem de layout para ecrãs ultra-pequenos (abaixo de 300px) garantindo que o conteúdo nunca quebre.
- **Interface Dark Mode:** Estética premium em tons de preto e cinza para destacar os veículos.

# Tecnologias Utilizadas
- **HTML5:** Estrutura semântica com uso de templates.
- **CSS3:** Organização por módulos (BEM CSS), Flexbox e CSS Grid.
- **JavaScript (Vanilla):** Lógica para manipulação de DOM e controlo do modal.

# Estrutura do Projeto
O projeto foi organizado de forma modular para facilitar a manutenção:
```text
├── images/          # Assets, ícones e fotos dos veículos
├── pages/
│   └── index.css    # Arquivo central de importação de estilos
├── scripts/
│   └── index.js     # Lógica de renderização e modal
├── vendor/          # Bibliotecas externas (Normalize.css, etc)
└── index.html       # Estrutura principal
