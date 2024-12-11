export function generateCaptcha(): string {
  const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export function validateCaptcha(input: string, captcha: string): boolean {
  return input.toUpperCase() === captcha.toUpperCase();
}