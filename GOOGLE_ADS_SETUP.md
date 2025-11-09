# 🎯 Guia de Configuração do Google Ads Conversion Tracking

Este guia explica como configurar e usar o tracking de conversões do Google Ads no site DTF Rápido.

---

## ✅ O que foi implementado

### 1. **Google Tag Global (G-JC5R2MJY1Y)** ✅ INSTALADA
- ✅ Tag global do Google instalada em todas as páginas
- ✅ Rastreia visitantes que clicaram nos anúncios do Google Ads
- ✅ Configurada no componente `Analytics.tsx`
- ✅ **Status**: Já está funcionando! Não precisa fazer nada.

### 2. **Google Ads Conversion Tracking (AW-17637950542)** ✅ CONFIGURADO
- ✅ ID de conversão configurado: `AW-17637950542`
- ✅ Label de conversão recebido: `C2XSCOeZiLUbEM6It9pB`
- ✅ **Status**: Pronto! Só precisa adicionar a variável de ambiente.

### 3. **Eventos de Conversão Implementados** ✅ PRONTOS
- ✅ **Formulário de Contato**: Rastreia quando o usuário envia o formulário
  - Snippet de evento já implementado: `gtag('event', 'conversion', {'send_to': 'AW-17637950542/C2XSCOeZiLUbEM6It9pB'})`
- ✅ **Botão WhatsApp**: Rastreia quando o usuário clica no botão WhatsApp
- ✅ **Valor da Conversão**: Calcula automaticamente o valor estimado (quantidade × R$ 60,00)
- ✅ **Transaction ID**: Gerado automaticamente para cada conversão

### 🎉 **RESUMO: TUDO JÁ ESTÁ IMPLEMENTADO!**
Você só precisa configurar a variável de ambiente com o label que recebeu.

---

## 📋 Passo a Passo para Configurar

### **Passo 1: Criar Ações de Conversão no Google Ads**

#### **Método 1: Através do Banner (Mais Rápido) ⚡**

1. Acesse sua conta do Google Ads: https://ads.google.com
2. **No topo da página**, você verá um banner com o texto:
   - **"Configurar o acompanhamento de conversões Ver"** ou
   - **"Finish setting up conversion tracking"**
3. Clique no botão **"Ver"** ou **"View"** neste banner
4. Você será direcionado diretamente para a página de Conversões

#### **Método 2: Através do Card de Recomendação (Alternativa) 📋**

1. Acesse sua conta do Google Ads: https://ads.google.com
2. Na **área principal da página** (Central de dados ou Dashboard), procure por um card que diz:
   - **"Finish setting up conversion tracking"** ou
   - **"Finalizar a configuração do acompanhamento de conversões"**
3. Clique no botão **"Ver"** ou **"View"** neste card

#### **Método 3: Navegação Manual (Passo a Passo Completo) 🗺️**

1. Acesse sua conta do Google Ads: https://ads.google.com
2. No **menu lateral esquerdo**, procure por:
   - **"Ferramentas"** ou **"Tools"** (ícone de chave inglesa 🔧)
3. Clique em **"Ferramentas"** para expandir o menu
4. Dentro de "Ferramentas", procure por:
   - **"Medição"** ou **"Measurement"** (pode estar dentro de um submenu)
   - OU procure diretamente por **"Conversões"** ou **"Conversions"**
5. Clique em **"Conversões"** ou **"Conversions"**
6. Na página de Conversões, clique no botão **"+ Nova ação de conversão"** ou **"+ New conversion action"**

#### **Método 4: Busca Rápida (Mais Direto) 🔍**

1. Acesse sua conta do Google Ads: https://ads.google.com
2. Na **barra de pesquisa no topo**, digite: **"conversões"** ou **"conversions"**
3. Selecione a opção **"Conversões"** ou **"Conversions"** nos resultados
4. Clique em **"+ Nova ação de conversão"** ou **"+ New conversion action"**

#### **URL Direta (Se os métodos acima não funcionarem) 🔗**

Você pode acessar diretamente:
- **Português**: https://ads.google.com/aw/conversions
- **Inglês**: https://ads.google.com/aw/conversions

Depois de acessar qualquer um dos métodos acima, você verá:
- Uma lista de conversões existentes (se houver)
- Um botão grande **"+ Nova ação de conversão"** ou **"+ New conversion action"** no topo

#### **Ação 1: Formulário de Contato**
- **Nome**: "Envio de Formulário de Contato"
- **Categoria**: "Lead"
- **Tipo**: "Site"
- **Valor**: 
  - Opção 1: "Usar valores diferentes para cada conversão" (recomendado)
  - Opção 2: "Usar o mesmo valor para cada conversão" (ex: R$ 100,00)
- **Método de contagem**: "Uma" (recomendado) ou "Todas"
- **Janela de atribuição**: 30 dias (padrão)
- Clique em **Criar e continuar**

#### **Ação 2: Clique no WhatsApp** (opcional, mas recomendado)
- **Nome**: "Clique no WhatsApp"
- **Categoria**: "Lead"
- **Tipo**: "Site"
- **Valor**: Pode ser menor que o formulário (ex: R$ 50,00)
- **Método de contagem**: "Uma"
- Clique em **Criar e continuar**

### **Passo 2: Obter os Labels de Conversão**

Após criar cada ação de conversão:

1. Na página de configuração da conversão, você verá um código como:
   ```javascript
   gtag('event', 'conversion', {
     'send_to': 'AW-17637950542/AbC-dEfG'
   });
   ```

2. **Copie o Label** (a parte após a barra `/`):
   - Exemplo: `AbC-dEfG` ou `XyZ-1234`
   - Este é o **CONVERSION LABEL**

### **Passo 3: Configurar Variáveis de Ambiente**

1. Crie um arquivo `.env.local` na raiz do projeto (se não existir)
2. Adicione as seguintes variáveis:

```env
# Google Tag (já configurado)
NEXT_PUBLIC_GOOGLE_TAG_ID=G-JC5R2MJY1Y

# Google Ads Conversion ID (já configurado)
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-17637950542

# Labels de conversão (OBRIGATÓRIO - você precisa obter no Google Ads)
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_FORM=AbC-dEfG
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_WHATSAPP=XyZ-1234

# Outras tags (opcionais)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=123456789012345
```

**⚠️ IMPORTANTE**: Substitua `AbC-dEfG` e `XyZ-1234` pelos labels reais que você obteve no Google Ads!

### **Passo 4: Configurar no Vercel (se estiver usando)**

Se você estiver fazendo deploy na Vercel:

1. Acesse o painel do Vercel
2. Vá em **Settings** > **Environment Variables**
3. Adicione todas as variáveis do `.env.local`
4. Faça um novo deploy

---

## 🧪 Como Testar

### **Teste 1: Verificar se a Tag está Carregando**

1. Abra o site no navegador
2. Abra o **Console do Desenvolvedor** (F12)
3. Vá na aba **Network** e filtre por "gtag"
4. Você deve ver requisições para `googletagmanager.com/gtag/js?id=G-JC5R2MJY1Y`

### **Teste 2: Verificar Conversões**

1. Use o **Google Tag Assistant** (extensão do Chrome):
   - Instale: https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk
   - Clique no ícone e ative
   - Navegue pelo site e teste o formulário
   - Você deve ver eventos de conversão sendo disparados

2. **Teste Manual no Console**:
   ```javascript
   // No console do navegador, execute:
   gtag('event', 'conversion', {
     'send_to': 'AW-17637950542/SEU_LABEL_AQUI'
   });
   ```

### **Teste 3: Verificar no Google Ads**

1. No Google Ads, vá em **Ferramentas e Configurações** > **Medição** > **Conversões**
2. Clique na ação de conversão criada
3. Você verá as conversões sendo registradas (pode levar algumas horas para aparecer)

---

## 📊 O que está sendo rastreado

### **Formulário de Contato**
- **Quando**: Quando o usuário envia o formulário com sucesso
- **Valor**: Calculado automaticamente (quantidade em metros × R$ 60,00)
- **Transaction ID**: Gerado automaticamente (único para cada envio)
- **Eventos enviados**:
  - Google Analytics: `contact_form_submit`
  - Meta Pixel: `Lead`
  - Google Ads: `conversion` com valor e transaction_id

### **Botão WhatsApp**
- **Quando**: Quando o usuário clica no botão WhatsApp flutuante
- **Valor**: Não enviado (pode ser configurado no Google Ads)
- **Eventos enviados**:
  - Google Analytics: `whatsapp_click`
  - Meta Pixel: `Lead`
  - Google Ads: `conversion` (se label configurado)

---

## 🔧 Arquivos Modificados

1. **`src/components/Analytics.tsx`**
   - Adicionada Google Tag (G-JC5R2MJY1Y)
   - Adicionado Google Ads Conversion ID (AW-17637950542)
   - Usando Next.js Script component para melhor performance

2. **`src/lib/analytics.ts`**
   - Função `trackGoogleAdsConversion()` para rastrear conversões
   - Função `trackContactForm()` atualizada para incluir Google Ads
   - Nova função `trackWhatsAppClick()` para rastrear cliques no WhatsApp

3. **`src/components/ContactForm.tsx`**
   - Integrado tracking de conversão ao enviar formulário
   - Calcula valor estimado automaticamente

4. **`src/components/WhatsAppButton.tsx`**
   - Integrado tracking de conversão ao clicar no botão

---

## ⚠️ Troubleshooting

### **Problema: Conversões não aparecem no Google Ads**

**Soluções**:
1. Verifique se os labels estão configurados corretamente no `.env.local`
2. Verifique se a tag global está carregando (use o Google Tag Assistant)
3. Aguarde algumas horas (pode levar até 24h para aparecer)
4. Verifique se você está testando com um clique real de um anúncio (conversões só contam se vierem de um clique em anúncio)

### **Problema: "Tag Quality: Urgent" no Google Ads**

**Solução**: 
- Isso acontece quando a tag não está instalada ou não está carregando
- Após implementar este código, o problema deve ser resolvido
- Aguarde algumas horas e verifique novamente

### **Problema: Erro "gtag is not defined"**

**Solução**:
- Verifique se a tag global está carregando antes de disparar eventos
- O código já tem verificações de segurança, mas pode ser que a tag não tenha carregado ainda
- Aguarde alguns segundos após o carregamento da página

---

## 📚 Recursos Adicionais

- [Documentação do Google Ads Conversion Tracking](https://support.google.com/google-ads/answer/1722054)
- [Google Tag Assistant](https://support.google.com/tagassistant/answer/10085872)
- [Next.js Script Component](https://nextjs.org/docs/pages/building-your-application/optimizing/scripts)

---

## ✅ Checklist Final

- [ ] Criar ações de conversão no Google Ads
- [ ] Obter os labels de conversão
- [ ] Configurar variáveis de ambiente (`.env.local`)
- [ ] Testar no ambiente de desenvolvimento
- [ ] Configurar variáveis no Vercel (se aplicável)
- [ ] Fazer deploy
- [ ] Verificar conversões no Google Ads após 24h

---

**Última atualização**: Janeiro 2025
**Versão**: 1.0.0

