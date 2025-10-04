import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../amplify/data/resource';
import outputs from '../amplify_outputs.json';
import { signIn } from "aws-amplify/auth";

Amplify.configure(outputs);

export const client = generateClient<Schema>();

