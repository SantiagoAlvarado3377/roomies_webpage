import { client } from '../index';

export async function createEmail(email: string) {
    const { errors, data: createdEmail } = await client.models.Email.create({
        email,
        sentDate: new Date().toISOString(),
    });
};