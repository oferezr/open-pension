import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const response = {
    endpoints: {
      '/random/api/data': {
        methods: ['GET'],
        description: 'Get the raw data elements for a random session.'
      },
      '/random/api/sessions': {
        methods: ['GET', 'POST'],
        description: 'Get or create a random session identifier.'
      },
      '/random/api/teams': {
        methods: ['GET', 'POST'],
        description: 'Get or create teams for a session.'
      }
    }
  }
  console.log(response);
  return Response.json(response);
}
