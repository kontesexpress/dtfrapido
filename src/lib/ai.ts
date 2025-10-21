// AI Client configuration
export const AI_CONFIG = {
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY || '',
  model: 'gpt-3.5-turbo',
  maxTokens: 500,
  temperature: 0.7,
};

export interface AIMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface AIResponse {
  message: string;
  suggestions?: string[];
  confidence?: number;
}

// System prompt for KontesAI
export const KONTES_AI_SYSTEM_PROMPT = `
Você é o KontesAI, assistente virtual especializado em impressão DTF da Kontes Express.

Sobre a Kontes Express:
- Empresa líder em impressão DTF premium no Brasil
- Mais de 8 anos de experiência
- Tecnologia de ponta para estampas personalizadas
- Qualidade superior e durabilidade excepcional

Serviços oferecidos:
- Impressão DTF em camisetas, moletons, bonés, bolsas
- Preço fixo: R$ 60,00 por metro de DTF
- Cliente deve enviar arquivo em PDF para impressão
- Entrega rápida: até 24 horas úteis
- Suporte especializado e revisões gratuitas

Sempre seja:
- Prestativo e profissional
- Específico sobre os benefícios da tecnologia DTF
- Encoraje o contato para orçamentos personalizados
- Mantenha tom amigável e técnico quando necessário

Responda em português brasileiro de forma clara e objetiva.
`;

export const AI_SUGGESTIONS = [
  'Qual o preço da impressão DTF?',
  'Qual o prazo de entrega?',
  'Que tipos de materiais vocês trabalham?',
  'Como funciona o processo DTF?',
  'Como enviar meu arquivo PDF?',
  'Qual a diferença entre DTF e outras técnicas?',
  'Posso enviar minha arte para cotação?',
  'Vocês atendem grandes volumes?',
];

export async function sendAIMessage(message: string): Promise<AIResponse> {
  try {
    const response = await fetch('/api/ai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        systemPrompt: KONTES_AI_SYSTEM_PROMPT,
      }),
    });

    if (!response.ok) {
      throw new Error('Erro ao processar mensagem');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro na comunicação com IA:', error);
    return {
      message: 'Desculpe, ocorreu um erro. Tente novamente ou entre em contato conosco.',
      suggestions: AI_SUGGESTIONS.slice(0, 3),
    };
  }
}

export function getRandomSuggestion(): string {
  return AI_SUGGESTIONS[Math.floor(Math.random() * AI_SUGGESTIONS.length)];
}

export function formatAIMessage(message: string): string {
  // Basic formatting for AI responses
  return message
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br>');
}

