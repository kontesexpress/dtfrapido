# 🔗 Configuração das Avaliações do Google

## 📋 **Passo a Passo para Integração Real**

### **1. Obter Chave da API do Google**

1. **Acesse o Google Cloud Console:**
   - URL: https://console.cloud.google.com/
   - Faça login com sua conta Google

2. **Criar/Selecionar Projeto:**
   - Crie um novo projeto ou selecione um existente
   - Anote o ID do projeto

3. **Ativar a Places API:**
   - Vá para "APIs & Services" > "Library"
   - Procure por "Places API"
   - Clique em "Enable"

4. **Criar Credenciais:**
   - Vá para "APIs & Services" > "Credentials"
   - Clique em "Create Credentials" > "API Key"
   - Copie a chave gerada

### **2. Obter Place ID do Seu Negócio**

1. **Acesse o Place ID Finder:**
   - URL: https://developers.google.com/maps/documentation/places/web-service/place-id
   - Ou use: https://developers.google.com/maps/documentation/places/web-service/place-id

2. **Digite as Informações:**
   - Nome: "Kontes Express"
   - Endereço: "R. Bresser, 601 - Brás, São Paulo - SP, 03017-000"
   - Clique em "Find Place ID"

3. **Copie o Place ID:**
   - O Place ID será algo como: `ChIJ...` (string longa)
   - Copie este ID

### **3. Configurar Variáveis de Ambiente**

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Google Places API
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=sua_chave_api_aqui
NEXT_PUBLIC_GOOGLE_PLACE_ID=seu_place_id_aqui
```

### **4. Implementar no Código**

Substitua no arquivo `src/components/GoogleReviewsAPI.tsx`:

```typescript
const PLACE_ID = 'SEU_PLACE_ID_AQUI'; // Substitua pelo Place ID real
```

### **5. Configurar Restrições de Segurança**

No Google Cloud Console:

1. **Vá para "APIs & Services" > "Credentials"**
2. **Clique na sua API Key**
3. **Configure restrições:**
   - **Application restrictions:** HTTP referrers
   - **Website restrictions:** Adicione seu domínio
   - **API restrictions:** Places API

### **6. Testar a Integração**

```bash
npm run dev
```

Acesse o site e verifique se as avaliações carregam corretamente.

## 🚨 **Importante:**

- **Nunca exponha sua API Key** no código
- **Use sempre variáveis de ambiente**
- **Configure restrições de domínio**
- **Monitore o uso da API** para evitar custos

## 💰 **Custos:**

- **Places API:** $17 por 1000 requests
- **Primeiros $200/mês são gratuitos**
- **Aproximadamente 11.700 requests gratuitos**

## 🔧 **Alternativas Mais Simples:**

### **Opção 1: Google My Business Widget**
```html
<iframe 
  src="https://www.google.com/maps/embed/v1/place?key=SUA_API_KEY&q=Kontes+Express,São+Paulo"
  width="100%" 
  height="400">
</iframe>
```

### **Opção 2: Google Reviews Widget**
Use serviços como:
- **ReviewBoard**
- **Trustpilot**
- **Google Reviews Widget**

## 📞 **Suporte:**

Se precisar de ajuda com a configuração, entre em contato!
