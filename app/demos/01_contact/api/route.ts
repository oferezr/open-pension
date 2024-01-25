import { sendEmail } from '@/lib/utils/server';
import { type NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  // get the data from the request
  const { name, email, message } = await request.json();
  const fullMessage = `Hey ${name}, here is your message:\n\n${message}`;

  // send the email, based on the data and the email configuration we have
  const success = await sendEmail({ name, email, message: fullMessage });

  // construct a response to send back to the client
  const response = {
    success,
    message: success ? 'Thank you for your message. We will get back to you soon.' : 'Oops. Something went wrong.'
  }
  // log our response to the console for debugging purposes
  console.log(response);

  // return our response to the client
  return Response.json(response);
}
