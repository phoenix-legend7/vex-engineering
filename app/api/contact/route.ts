import { projectBudgetRanges, projectTimelines, projectTypes } from '@/lib/constants';
import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    
    // Validate required fields
    if (!body.firstName || !body.lastName || !body.email || !body.message || !body.projectType || !body.budget || !body.timeline) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate field values against allowed options
    if (!projectTypes.some(pt => pt.value === body.projectType)) {
      return NextResponse.json(
        { error: 'Invalid project type' },
        { status: 400 }
      );
    }

    if (!projectTimelines.some(tl => tl.value === body.timeline)) {
      return NextResponse.json(
        { error: 'Invalid timeline' },
        { status: 400 }
      );
    }

    if (!projectBudgetRanges.some(br => br.value === body.budget)) {
      return NextResponse.json(
        { error: 'Invalid budget range' },
        { status: 400 }
      );
    }

    // Get Telegram configuration from environment variables
    const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    if (!telegramBotToken || !telegramChatId) {
      console.error('Telegram configuration missing');
      return NextResponse.json(
        { error: 'Telegram configuration not found' },
        { status: 500 }
      );
    }

    const projectType = projectTypes.find(t => t.value === body.projectType) || body.projectType;
    const timeline = projectTimelines.find(t => t.value === body.timeline) || body.timeline;
    const budget = projectBudgetRanges.find(r => r.value === body.budget) || body.budget;

    // Format the message for Telegram
    const telegramMessage = `
🆕 *New Contact Form Submission*

👤 *Name:* ${body.firstName} ${body.lastName}
📧 *Email:* ${body.email}
${body.phone ? `📞 *Phone:* ${body.phone}` : ''}
${body.company ? `🏢 *Company:* ${body.company}` : ''}
${projectType ? `🔧 *Project Type:* ${projectType}` : ''}
${budget ? `💰 *Budget:* ${budget}` : ''}
${timeline ? `⏰ *Timeline:* ${timeline}` : ''}

📝 *Message:*
\`\`\`
${body.message}
\`\`\`
---
*Submitted at:* ${new Date().toLocaleString()}
    `.trim();

    // Send message to Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: telegramMessage,
          parse_mode: 'Markdown',
        }),
      }
    );

    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.json();
      console.error('Telegram API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to send message to Telegram' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
