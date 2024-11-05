import { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { audioData } = JSON.parse(event.body || '{}');
    if (!audioData) {
      throw new Error('No audio data provided');
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        data: {
          timestamp: new Date().toISOString(),
        },
      }),
    };
  } catch (error) {
    console.error('Error processing audio:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to process audio',
        details: error instanceof Error ? error.message : 'Unknown error',
      }),
    };
  }
};