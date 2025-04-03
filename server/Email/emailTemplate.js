export function resetPasswordEmailTemplate(firstName,resetUrl){
    return `
    <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset password</title>
  </head>
  <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="background: linear-gradient(to right, #B67B0F , #100101); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <img src="https://res.cloudinary.com/dd9nujmdt/image/upload/v1743681982/Frame_1171276935_gxho9m.png" alt="Eggys-plae Logo" style=""max-width: 50.3px; max-height: 43.92px;" margin-bottom: 20px;border-radius: 10px;">

      <h1 style="color: white; margin: 0; font-size: 28px;">Reset password!</h1>
    </div>
    <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
      <p style="font-size: 18px; color: #B67B0F ;"><strong>Hello ${firstName},</strong></p>
      <p>Forgot your password?</p>
      <div style="background-color: #f3f6f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h1>You have requested for a password reset from Eggys-place</h1> <p>Please go to this link to reset password</p> <a href=${resetUrl} clicktracking = off>${resetUrl}</a>

      </div>
      
      <p>If you have any questions or need assistance, our support team is always here to help.</p>
      <p>Best regards,<br>The Eggys-place Team</p>
    </div>
  </body>
  </html>
    `;
}