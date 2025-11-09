# ⚡ Configuração Rápida - Google Ads Conversion Tracking

## ✅ Status: Tudo já está implementado no código!

Você recebeu o label de conversão do Google Ads. Agora só precisa configurar a variável de ambiente.

---

## 🎯 Informações Recebidas do Google Ads

- **Google Tag ID**: `G-JC5R2MJY1Y` ✅ (já configurado)
- **Google Ads Conversion ID**: `AW-17637950542` ✅ (já configurado)
- **Conversion Label**: `C2XSCOeZiLUbEM6It9pB` ⚠️ (precisa configurar)

---

## 📝 O que você precisa fazer AGORA

### **Passo 1: Criar arquivo `.env.local`**

Na raiz do projeto (`dtfrapido/`), crie um arquivo chamado `.env.local` com o seguinte conteúdo:

```env
# Google Tag (já configurado no código)
NEXT_PUBLIC_GOOGLE_TAG_ID=G-JC5R2MJY1Y

# Google Ads Conversion ID (já configurado no código)
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-17637950542

# Label de conversão (OBRIGATÓRIO - você recebeu este label)
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_FORM=C2XSCOeZiLUbEM6It9pB

# Label para WhatsApp (opcional - deixe vazio se não tiver)
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_WHATSAPP=
```

### **Passo 2: Reiniciar o servidor de desenvolvimento**

Se o servidor estiver rodando, pare e inicie novamente:

```bash
# Parar o servidor (Ctrl + C)
# Depois iniciar novamente:
npm run dev
```

### **Passo 3: Testar**

1. Acesse o site: http://localhost:3000
2. Abra o **Console do Desenvolvedor** (F12)
3. Preencha e envie o formulário de contato
4. No console, você deve ver:
   ```
   ✅ Google Ads Conversion tracked: {send_to: "AW-17637950542/C2XSCOeZiLUbEM6It9pB", ...}
   ```

---

## ✅ O que já está funcionando

### **1. Tag Global do Google** ✅
A tag global já está instalada em todas as páginas:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-JC5R2MJY1Y"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-JC5R2MJY1Y');
  gtag('config', 'AW-17637950542');
</script>
```

### **2. Snippet de Evento de Conversão** ✅
O snippet de evento já está implementado no formulário de contato:
```javascript
gtag('event', 'conversion', {
  'send_to': 'AW-17637950542/C2XSCOeZiLUbEM6It9pB'
});
```

Este código é executado automaticamente quando:
- ✅ O usuário envia o formulário de contato com sucesso
- ✅ O valor da conversão é calculado automaticamente (quantidade × R$ 60,00)
- ✅ Um Transaction ID único é gerado para cada envio

---

## 🚀 Deploy na Vercel

Se você estiver usando Vercel, também precisa adicionar as variáveis de ambiente lá:

1. Acesse: https://vercel.com/dashboard
2. Selecione seu projeto
3. Vá em **Settings** > **Environment Variables**
4. Adicione as mesmas variáveis do `.env.local`:
   - `NEXT_PUBLIC_GOOGLE_TAG_ID` = `G-JC5R2MJY1Y`
   - `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID` = `AW-17637950542`
   - `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_FORM` = `C2XSCOeZiLUbEM6It9pB`
5. Faça um novo deploy

---

## 🧪 Como Verificar se Está Funcionando

### **Teste 1: Console do Navegador**
1. Abra o site
2. Abra o Console (F12)
3. Envie o formulário
4. Procure por: `✅ Google Ads Conversion tracked`

### **Teste 2: Google Tag Assistant**
1. Instale a extensão: [Google Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
2. Ative a extensão
3. Navegue pelo site e envie o formulário
4. Você verá os eventos de conversão sendo disparados

### **Teste 3: Google Ads (após 24h)**
1. Acesse: https://ads.google.com
2. Vá em **Ferramentas e Configurações** > **Medição** > **Conversões**
3. Clique na ação de conversão "Contato"
4. Você verá as conversões sendo registradas (pode levar até 24h)

---

## 📊 O que será rastreado

### **Formulário de Contato**
- **Quando**: Usuário envia o formulário com sucesso
- **Valor**: Calculado automaticamente (quantidade em metros × R$ 60,00)
- **Transaction ID**: Gerado automaticamente (único para cada envio)
- **Evento enviado**: `gtag('event', 'conversion', {'send_to': 'AW-17637950542/C2XSCOeZiLUbEM6It9pB'})`

### **Botão WhatsApp**
- **Quando**: Usuário clica no botão WhatsApp
- **Valor**: Não enviado (pode ser configurado no Google Ads)
- **Evento enviado**: Usa o mesmo label do formulário (ou pode ter um específico)

---

## ❓ Dúvidas Frequentes

### **P: Preciso adicionar o código HTML manualmente?**
**R:** Não! Tudo já está implementado no código. Você só precisa configurar a variável de ambiente.

### **P: Onde o snippet de evento está instalado?**
**R:** No arquivo `src/components/ContactForm.tsx`, na função `onSubmit`, após o envio bem-sucedido do formulário.

### **P: Preciso criar uma página de "Obrigado"?**
**R:** Não! O evento é disparado via JavaScript quando o formulário é enviado com sucesso, não precisa de uma página separada.

### **P: Como sei se está funcionando?**
**R:** 
1. Verifique o console do navegador após enviar o formulário
2. Use o Google Tag Assistant
3. Verifique no Google Ads após 24h

---

## 📚 Arquivos Modificados

- ✅ `src/components/Analytics.tsx` - Tag global instalada
- ✅ `src/lib/analytics.ts` - Funções de tracking implementadas
- ✅ `src/components/ContactForm.tsx` - Evento de conversão integrado
- ✅ `src/components/WhatsAppButton.tsx` - Evento de conversão integrado

---

**Última atualização**: Janeiro 2025
**Status**: ✅ Pronto para usar - só configurar a variável de ambiente!

