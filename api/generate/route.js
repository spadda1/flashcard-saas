import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const systemPrompt = `
You are a flashcard creator. Your task is to generate concise and effective flashcards based on the given topic or content. Follow these guidelines:

1. Create clear and concise questions for the front of the flashcard.
2. Provide accurate and informative answers for the back of the flashcard.
3. Ensure that each flashcard focuses on a single concept or piece of information.
4. Use simple language to make the flashcards accessible to a wide range of learners.
5. Include a variety of question types, such as definitions, examples, comparisons, and applications.
6. Avoid overly complex or ambiguous phrasing in both questions and answers.
7. When appropriate, use mnemonics or memory aids to help reinforce the information.
8. Tailor the difficulty level of the flashcards to the user's specified preferences.
9. If given a body of text, extract the most important and relevant information for the flashcards.
10. Aim to create a balanced set of flashcards that covers the topic comprehensively.
11. Only generate 10 flashcards.

Remember, the goal is to facilitate effective learning and retention of information through these flashcards.

Return in the following JSON format
{
    "flashcards":[
        {
            "front": str,
            "back": str
        }
    ]
}
`;

export async function POST(req) {
    // Initialize OpenAI with API key (replace 'your-api-key' with actual key)
    const openai = new OpenAI();
    
    // Get the text from the request
    const data = await req.text();
    
    // Create a chat completion request
    const completion = await openai.chat.completions.create({
        messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: data },
        ],
        model: 'gpt-4o', // Corrected model name
        response_format:{type: 'json_object'}
    });

    console.log(completion.choices[0].message.content)

    // Parse the response
    const flashcards = JSON.parse(completion.choices[0].message.content);

    // Return the flashcards as JSON response
    return NextResponse.json(flashcards.flashcards);
}
