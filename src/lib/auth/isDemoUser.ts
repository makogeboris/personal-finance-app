export function isDemoUser(userId: string) {
  return userId === process.env.DEMO_USER_ID;
}
