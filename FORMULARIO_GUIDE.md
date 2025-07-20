# Guia do Formulário de Contato

Este guia explica como configurar e usar o sistema de formulário de contato com envio por email e WhatsApp.

## 🚀 Funcionalidades

- ✅ Formulário com campos: Nome, Email, Telefone, Assunto e Mensagem
- ✅ Formatação automática de telefone (11) 99999-9999
- ✅ Envio por Email (SMTP)
- ✅ Envio por WhatsApp
- ✅ Proteção com Google reCAPTCHA
- ✅ Integração com Google Tag Manager
- ✅ Página de configurações administrativas
- ✅ Validação de campos
- ✅ Notificações toast
- ✅ Interface responsiva

## 📋 Configuração

### 1. Acessar Página de Configurações

Acesse: `http://localhost:3000/admin/configuracoes`

### 2. Configurar SMTP

1. **Servidor SMTP**: Ex: `smtp.gmail.com`
2. **Porta**: Ex: `587` (ou `465` para SSL)
3. **Usuário**: Seu email
4. **Senha**: Sua senha ou senha de app
5. **Email de Envio**: Email que aparecerá como remetente
6. **Nome de Envio**: Nome que aparecerá como remetente
7. **SSL/TLS**: Marque se usar porta 465

#### Exemplo Gmail:

- Servidor: `smtp.gmail.com`
- Porta: `587`
- Usuário: `seu@gmail.com`
- Senha: `senha-de-app` (não a senha normal)
- SSL/TLS: Desmarcado

### 3. Configurar reCAPTCHA (Opcional)

1. Acesse: https://www.google.com/recaptcha/admin
2. Clique em "+" para adicionar site
3. Escolha reCAPTCHA v2 "I'm not a robot"
4. Adicione seus domínios
5. Copie as chaves geradas
6. Ative o reCAPTCHA nas configurações
7. Cole as chaves (Site Key e Secret Key)

### 4. Configurar Google Tag Manager (Opcional)

1. Acesse: https://tagmanager.google.com/
2. Crie uma conta ou selecione existente
3. Crie um container
4. Copie o Container ID (GTM-XXXXXXX)
5. Ative o GTM nas configurações
6. Cole o Container ID

### 5. Configurar WhatsApp (Opcional)

1. Ative o envio por WhatsApp
2. Digite o número com código do país e DDD (ex: 5511999999999)
3. Personalize a mensagem padrão

## 🔧 Uso do Formulário

### Campos Obrigatórios

- **Nome**: Nome completo do usuário
- **Email**: Email válido para contato
- **Mensagem**: Conteúdo da mensagem

### Campos Opcionais

- **Telefone**: Formatação automática (11) 99999-9999
- **Assunto**: Título da mensagem

### Métodos de Envio

#### Email

- Envia para o email configurado no SMTP
- Formato HTML com todos os dados do formulário
- Assunto personalizado

#### WhatsApp

- Abre o WhatsApp Web/App com mensagem pré-formatada
- Inclui todos os dados do formulário
- Mensagem personalizável nas configurações

## 📁 Estrutura de Arquivos

```
src/
├── app/
│   ├── admin/
│   │   └── configuracoes/
│   │       └── page.tsx          # Página de configurações
│   ├── api/
│   │   ├── configuracoes/
│   │   │   └── route.ts          # API de configurações
│   │   ├── contato/
│   │   │   └── route.ts          # API do formulário
│   │   └── testar-email/
│   │       └── route.ts          # API de teste de email
│   └── contato/
│       └── page.tsx              # Página do formulário
├── components/
│   ├── ui/                       # Componentes UI
│   ├── GoogleTagManager.tsx      # Componente GTM
│   └── ReCaptcha.tsx            # Componente reCAPTCHA
└── config.json                   # Arquivo de configuração
```

## 🛠️ APIs

### GET /api/configuracoes

Retorna as configurações atuais

### POST /api/configuracoes

Salva as configurações

### POST /api/contato

Processa o formulário de contato

**Parâmetros:**

```json
{
  "nome": "string",
  "email": "string",
  "telefone": "string (opcional)",
  "assunto": "string (opcional)",
  "mensagem": "string",
  "sendMethod": "email" | "whatsapp",
  "recaptchaToken": "string (se reCAPTCHA ativo)"
}
```

### POST /api/testar-email

Testa as configurações SMTP

**Parâmetros:**

```json
{
  "to": "email@exemplo.com",
  "subject": "Assunto do teste",
  "message": "Mensagem de teste"
}
```

## 🔒 Segurança

- Validação de campos obrigatórios
- Validação de formato de email
- Proteção reCAPTCHA contra bots
- Sanitização de dados
- Rate limiting (implementar se necessário)

## 🎨 Personalização

### Estilos

Os estilos estão em `src/app/contato/contato.css`

### Mensagens

Personalize as mensagens de erro e sucesso no código

### Layout

O formulário usa Tailwind CSS e pode ser facilmente customizado

## 🚨 Troubleshooting

### Email não envia

1. Verifique as configurações SMTP
2. Use o botão "Testar Email"
3. Verifique logs do servidor
4. Para Gmail, use senha de app

### reCAPTCHA não funciona

1. Verifique se as chaves estão corretas
2. Confirme se o domínio está autorizado
3. Verifique se o JavaScript está habilitado

### WhatsApp não abre

1. Verifique se o número está no formato correto
2. Confirme se o WhatsApp está configurado
3. Teste o link manualmente

## 📞 Suporte

Para dúvidas ou problemas:

1. Verifique os logs do console
2. Teste as APIs individualmente
3. Confirme as configurações
4. Verifique a conectividade de rede
