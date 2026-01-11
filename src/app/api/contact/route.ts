import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key-for-build');

export async function POST(request: NextRequest) {
  console.log('📧 Iniciando processamento do formulário de contato');

  try {
    // Verificar se a API key está configurada
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'dummy-key-for-build') {
      console.error('❌ API key do Resend não configurada');
      return NextResponse.json(
        {
          success: false,
          error: 'API key do Resend não configurada. Configure a variável RESEND_API_KEY.'
        },
        { status: 500 }
      );
    }

    const formData = await request.formData();
    console.log('📋 FormData recebido com sucesso');

    // Extrair dados do formulário
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const company = formData.get('company') as string;
    const projectType = formData.get('projectType') as string;
    const quantity = formData.get('quantity') as string;
    const message = formData.get('message') as string;
    const file = formData.get('file') as File;

    console.log('📝 Dados extraídos:', {
      name,
      email,
      phone,
      company,
      projectType,
      quantity,
      messageLength: message?.length,
      fileName: file?.name,
      fileSize: file?.size
    });

    // Validar dados obrigatórios
    if (!name || !email || !phone || !projectType || !quantity || !message || !file) {
      return NextResponse.json(
        {
          success: false,
          error: 'Todos os campos obrigatórios devem ser preenchidos'
        },
        { status: 400 }
      );
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Email inválido'
        },
        { status: 400 }
      );
    }

    // Validar tamanho do arquivo (máximo 10MB)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        {
          success: false,
          error: 'Arquivo muito grande. Máximo 10MB permitido.'
        },
        { status: 400 }
      );
    }

    // Converter arquivo para base64
    const fileBuffer = await file.arrayBuffer();
    const fileBase64 = Buffer.from(fileBuffer).toString('base64');

    // Template HTML para o email
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
        <div style="background: linear-gradient(135deg, #d4af37, #b8860b); padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: #1a1a1a; margin: 0; font-size: 24px;">🎨 Novo Orçamento DTF</h1>
          <p style="color: #1a1a1a; margin: 5px 0 0 0; font-size: 14px;">Kontes Express - Impressão DTF Premium</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <h2 style="color: #333; margin-top: 0; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">
            📋 Detalhes do Cliente
          </h2>
          
          <div style="margin-bottom: 20px;">
            <p style="margin: 8px 0; color: #555;"><strong>👤 Nome:</strong> ${name}</p>
            <p style="margin: 8px 0; color: #555;"><strong>📧 Email:</strong> ${email}</p>
            <p style="margin: 8px 0; color: #555;"><strong>📱 Telefone:</strong> ${phone}</p>
            ${company ? `<p style="margin: 8px 0; color: #555;"><strong>🏢 Empresa:</strong> ${company}</p>` : ''}
          </div>

          <h2 style="color: #333; margin-top: 25px; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">
            🎯 Detalhes do Projeto
          </h2>
          
          <div style="margin-bottom: 20px;">
            <p style="margin: 8px 0; color: #555;"><strong>📦 Tipo de Projeto:</strong> ${projectType}</p>
            <p style="margin: 8px 0; color: #555;"><strong>📏 Quantidade:</strong> ${quantity} metros</p>
            <p style="margin: 8px 0; color: #555;"><strong>💰 Preço por metro:</strong> R$ 60,00</p>
            <p style="margin: 8px 0; color: #555;"><strong>💵 Valor estimado:</strong> R$ ${(parseFloat(quantity) * 60).toFixed(2)}</p>
          </div>

          <h2 style="color: #333; margin-top: 25px; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">
            💬 Mensagem do Cliente
          </h2>
          
          <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #d4af37;">
            <p style="margin: 0; color: #555; line-height: 1.6;">${message}</p>
          </div>

          <div style="margin-top: 25px; padding: 15px; background: #e8f5e8; border-radius: 8px; border-left: 4px solid #28a745;">
            <p style="margin: 0; color: #155724; font-weight: bold;">
              📎 Arquivo de arte anexado: ${file.name}
            </p>
            <p style="margin: 5px 0 0 0; color: #155724; font-size: 14px;">
              Tamanho: ${(file.size / 1024).toFixed(2)} KB
            </p>
          </div>

          <div style="margin-top: 25px; text-align: center; padding: 20px; background: linear-gradient(135deg, #d4af37, #b8860b); border-radius: 8px;">
            <p style="margin: 0; color: #1a1a1a; font-weight: bold; font-size: 16px;">
              ⚡ Resposta em até 24 horas
            </p>
            <p style="margin: 5px 0 0 0; color: #1a1a1a; font-size: 14px;">
              WhatsApp: (11) 96188-5415 | Email: kontesexpress@gmail.com
            </p>
          </div>
        </div>
      </div>
    `;

    // Enviar email para a empresa
    let emailToCompany;
    try {
      emailToCompany = await resend.emails.send({
        from: 'noreply@resend.dev',
        to: ['kontesexpress@gmail.com'],
        subject: `🎨 Novo Orçamento DTF - ${name} (${projectType})`,
        html: emailHtml,
        attachments: [
          {
            filename: `arte-dtf-${name.replace(/\s+/g, '-').toLowerCase()}.pdf`,
            content: fileBase64,
          }
        ]
      });
    } catch (emailError) {
      console.error('Erro ao enviar email para empresa:', emailError);
      // Continuar mesmo se o email falhar
    }

    // Email de confirmação para o cliente
    const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
        <div style="background: linear-gradient(135deg, #d4af37, #b8860b); padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: #1a1a1a; margin: 0; font-size: 24px;">✅ Orçamento Recebido!</h1>
          <p style="color: #1a1a1a; margin: 5px 0 0 0; font-size: 14px;">Kontes Express - Impressão DTF Premium</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            Olá <strong>${name}</strong>! 👋
          </p>
          
          <p style="color: #555; line-height: 1.6;">
            Recebemos seu pedido de orçamento para impressão DTF e estamos muito felizes em atendê-lo!
          </p>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #d4af37;">
            <h3 style="color: #333; margin-top: 0;">📋 Resumo do seu pedido:</h3>
            <p style="margin: 5px 0; color: #555;"><strong>Projeto:</strong> ${projectType}</p>
            <p style="margin: 5px 0; color: #555;"><strong>Quantidade:</strong> ${quantity} metros</p>
            <p style="margin: 5px 0; color: #555;"><strong>Valor estimado:</strong> R$ ${(parseFloat(quantity) * 60).toFixed(2)}</p>
          </div>

          <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; margin: 20px 0;">
            <p style="margin: 0; color: #155724; font-weight: bold;">
              ⚡ Nossa equipe analisará seu projeto e retornará em até 24 horas!
            </p>
          </div>

          <div style="text-align: center; margin-top: 25px;">
            <p style="color: #333; font-weight: bold; margin-bottom: 15px;">📞 Precisa de algo urgente?</p>
            <a href="https://wa.me/5511961885415" style="display: inline-block; background: #25d366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">
              💬 Falar no WhatsApp
            </a>
          </div>

          <div style="margin-top: 25px; padding: 15px; background: #f8f9fa; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              <strong>Kontes Express</strong><br>
              📍 R. Bresser, 601 - Brás, São Paulo - SP<br>
              📧 kontesexpress@gmail.com | 📱 (11) 96188-5415
            </p>
          </div>
        </div>
      </div>
    `;

    // Enviar email de confirmação para o cliente
    let emailToClient;
    try {
      emailToClient = await resend.emails.send({
        from: 'noreply@resend.dev',
        to: [email],
        subject: '✅ Orçamento DTF Recebido - Kontes Express',
        html: confirmationHtml,
      });
    } catch (emailError) {
      console.error('Erro ao enviar email de confirmação:', emailError);
      // Continuar mesmo se o email de confirmação falhar
    }

    console.log('✅ Formulário processado com sucesso');

    return NextResponse.json(
      {
        success: true,
        message: 'Orçamento enviado com sucesso!',
        emailId: emailToCompany?.data?.id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erro ao processar formulário:', error);

    // Retornar resposta JSON válida mesmo em caso de erro
    return NextResponse.json(
      {
        success: false,
        error: 'Erro interno do servidor. Tente novamente.',
        details: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.message : String(error)) : undefined
      },
      { status: 500 }
    );
  }
}
