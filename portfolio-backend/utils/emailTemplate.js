exports.contactEmailTemplate = ({ name, email, message }) => `
  <!DOCTYPE html>
  <html>
  <head>
    <style>
      body { font-family: Arial, sans-serif; background: #f4f4f4; padding: 20px; }
      .container { max-width: 600px; margin: 0 auto; background: #fff; padding: 20px; border-radius: 8px; }
      h2 { color: #333; }
      p { color: #555; }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>New Contact Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    </div>
  </body>
  </html>
`;