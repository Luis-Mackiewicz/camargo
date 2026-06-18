# Camargo Advocacia

Site institucional do escritório **Camargo Advocacia**, localizado em Janiópolis - PR. Apresenta as áreas de atuação, informações sobre o escritório, vídeos educativos e formulário de contato.

## Tecnologias

- **Next.js 16** — Static Export (geração de HTML estático)
- **React 19**
- **TypeScript** — Strict mode
- **Tailwind CSS v4** — com `tw-animate-css` e componentes shadcn/ui
- **Zod** + **react-hook-form** — Validação de formulário
- **Web3Forms** — Envio de formulários para email
- **Vitest** — Testes unitários

## Estrutura

```
├── app/            # Páginas (Home, Sobre, Serviços, Agendar, Vídeos)
├── components/     # Componentes reutilizáveis (Header, Footer, Modal, shadcn)
├── constants/      # Dados das áreas de atuação
├── lib/            # Utilitários (cn)
├── public/         # Imagens, ícones, sitemap
│   ├── background/ # Backgrounds das páginas (WebP otimizado)
│   └── service-icons/  # Ícones das áreas do direito
└── __tests__/      # Testes unitários
```

## Páginas

| Rota | Descrição |
|---|---|
| `/` | Home com logo e CTA para agendamento |
| `/sobre` | Sobre o escritório e o advogado |
| `/servicos` | Áreas de atuação com modal de detalhes |
| `/agendar` | Formulário de contato com mapa |
| `/videos` | Seção de vídeos (em breve) |

## Como rodar

```bash
# Desenvolvimento (com hot reload)
npm run dev

# Build de produção
npm run build

# Servir build estática
npx serve web/
```

## Testes

```bash
npm test
```

## Deploy

O build gera arquivos estáticos na pasta `web/`. Basta fazer deploy dela em qualquer hospedagem estática:

```bash
npm run build
# Enviar a pasta web/ para Vercel, Netlify, GitHub Pages, etc.
```

## Contato

- **Email:** contato@camargoadvocacia.com.br
- **WhatsApp:** [Clique aqui](https://wa.me/554499912505)
- **Instagram:** [@camargoadvocacia1](https://www.instagram.com/camargoadvocacia1/?hl=pt-br)
