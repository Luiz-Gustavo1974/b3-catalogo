# B3 Móveis - Catálogo Digital

Catálogo digital de móveis corporativos da B3 desenvolvido com Next.js 14.

## 📋 Sobre o Projeto

Aplicação web moderna para exibir o catálogo completo de móveis corporativos da B3, organizado por famílias de produtos. O sistema permite busca global, filtros por categoria, navegação intuitiva e integração direta com WhatsApp para consultas.

## 🚀 Tecnologias

- **Next.js 14.2.18** - Framework React com App Router
- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para maior segurança
- **CSS-in-JS (styled-jsx)** - Estilização sem bibliotecas externas

## 📦 Estrutura do Projeto

```
b3-catalogo/
├── app/                    # Pages e layouts (App Router)
│   ├── catalogo/          # Página de busca global
│   ├── produtos/[familia] # Página de produtos por família
│   ├── produto/[id]/      # Página de detalhes do produto
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
├── components/            # Componentes reutilizáveis
│   ├── Header.tsx         # Cabeçalho
│   ├── Footer.tsx         # Rodapé
│   └── ProductCard.tsx    # Card de produto
├── lib/                   # Utilitários e dados
│   ├── types.ts           # Tipos TypeScript
│   └── data.ts            # Dados dos produtos (mock)
└── public/                # Arquivos estáticos
```

## 🎯 Funcionalidades

### Páginas Implementadas

1. **Página Inicial (`/`)**
   - Exibe as 8 famílias de produtos
   - Navegação rápida para cada família

2. **Catálogo com Busca (`/catalogo`)**
   - Busca global em tempo real
   - Pesquisa por nome, categoria ou família
   - Grid responsivo de produtos

3. **Produtos por Família (`/produtos/[familia]`)**
   - Listagem de produtos filtrados por família
   - Filtro por categoria
   - Paginação (6 produtos por página)
   - Breadcrumb de navegação

4. **Detalhes do Produto (`/produto/[id]`)**
   - Galeria de imagens com miniaturas
   - Descrição completa do produto
   - Botões de contato via WhatsApp
   - Navegação breadcrumb completa

### Famílias de Produtos

- 🪑 **Assentos** - Cadeiras executivas, operacionais, poltronas
- 🪟 **Mesas** - Mesas executivas, reunião, colaborativas
- 💼 **Estações** - Estações de trabalho lineares e modulares
- 🗄️ **Armários** - Armários altos, baixos, gaveteiros, estantes
- 🔌 **Acessórios** - Suportes, organizadores, apoios, luminárias
- 🚪 **Divisórias** - Divisórias piso-teto, painéis, biombos
- 🔇 **Elementos Acústicos** - Painéis, absorvedores, telas acústicas
- 📞 **Cabines** - Cabines telefônicas, reunião, pods de trabalho

## 🛠️ Como Executar

### Pré-requisitos

- Node.js 20.x ou superior
- npm 10.x ou superior

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Luiz-Gustavo1974/b3-catalogo.git

# Entre no diretório
cd b3-catalogo

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Build de Produção

```bash
# Crie o build de produção
npm run build

# Inicie o servidor de produção
npm start
```

### Lint

```bash
# Execute o linter
npm run lint
```

## 📱 Design Responsivo

A aplicação é totalmente responsiva e funciona em:
- 📱 Dispositivos móveis (375px+)
- 💻 Tablets (768px+)
- 🖥️ Desktops (1200px+)

## 🎨 Características de Design

- Interface limpa e moderna
- Paleta de cores profissional (azul #1976d2)
- Animações suaves de transição
- Cards com efeito hover
- Tipografia clara e legível
- Sem dependências de bibliotecas UI externas

## 📞 Integração WhatsApp

Cada produto possui dois botões de contato:
1. **Consultar via WhatsApp** - Envia mensagem com informações do produto
2. **Enviar esta foto** - Envia mensagem incluindo a foto selecionada

*Nota: O número de WhatsApp configurado é 5511999999999 (exemplo). Atualize conforme necessário.*

## 🔍 SEO

- Metadata configurado para todas as páginas
- Títulos e descrições otimizados
- Estrutura semântica HTML5
- URLs amigáveis

## 📝 Dados

Atualmente o projeto utiliza dados mock (28 produtos) definidos em `lib/data.ts`. Para conectar a uma API real:

1. Crie uma API route em `app/api/`
2. Substitua as funções de `lib/data.ts`
3. Utilize fetch/SWR para carregar os dados

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## 📄 Licença

Este projeto é privado e pertence à B3 Móveis.

## 👤 Autor

Desenvolvido para B3 Móveis - Móveis corporativos de qualidade para o seu negócio
