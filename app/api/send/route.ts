import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, area, message } = body;

    const { data, error } = await resend.emails.send({
      from: "Camargo - Website <onboarding@resend.dev>",
      to: ["contato@camargoadvocacia.com.br"],
      subject: `⚖️ Novo Contato: ${name} - ${area}`,
      html: `
        <div style="background-color: #f6f9fc; padding: 40px 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
          <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
            <tr>
              <td bgcolor="#172554" style="padding: 40px 0; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 2px; text-transform: uppercase;">Camargo Advocacia</h1>
                <p style="color: #94a3b8; margin: 10px 0 0 0; font-size: 14px;">Solicitação de Atendimento</p>
              </td>
            </tr>
            
            <tr>
              <td style="padding: 40px 30px;">
                <h2 style="color: #1e293b; font-size: 20px; margin-top: 0;">Olá, equipe Camargo!</h2>
                <p style="color: #475569; font-size: 16px; line-height: 1.6;">
                  Um novo potencial cliente entrou em contato através do formulário do site. Confira os detalhes abaixo:
                </p>
                
                <table width="100%" style="margin-top: 30px; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px; width: 140px;"><strong>Nome:</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 16px;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px;"><strong>E-mail:</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 16px;">${email}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px;"><strong>Telefone:</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 16px;">${phone}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px;"><strong>Área de Interesse:</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 16px;">
                      <span style="background-color: #dbeafe; color: #1e40af; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; text-transform: uppercase;">
                        ${area}
                      </span>
                    </td>
                  </tr>
                </table>

                <div style="margin-top: 35px; padding: 20px; background-color: #f8fafc; border-left: 4px solid #1e40af; border-radius: 4px;">
                  <p style="margin: 0 0 10px 0; color: #64748b; font-size: 14px; font-weight: bold;">Mensagem Adicional:</p>
                  <p style="margin: 0; color: #334155; font-size: 15px; font-style: italic; line-height: 1.5;">"${message}"</p>
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding: 30px; background-color: #f1f5f9; text-align: center;">
                <p style="margin: 0; color: #94a3b8; font-size: 12px;">
                  Este é um e-mail automático enviado pelo sistema do site.<br>
                  © 2026 Camargo Advocacia. Todos os direitos reservados.
                </p>
              </td>
            </tr>
          </table>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
