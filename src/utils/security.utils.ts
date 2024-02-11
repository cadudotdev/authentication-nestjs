import * as bcrypt from 'bcrypt';

export async function generateCrypt(password: string, salt: string) {
  return await bcrypt.hash(password, salt);
}

export async function generateSalt(rouds: number) {
  return await bcrypt.genSalt(rouds);
}

export async function cryptPassword(
  password: string,
  saltRouds: number,
): Promise<string> {
  return await generateCrypt(password, await generateSalt(saltRouds));
}
