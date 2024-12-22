import { ClientService as DeprecatedService } from './client';
import { ClientService } from './pglite';
import { ServerService } from './server';

const clientService =
  process.env.NEXT_PUBLIC_CLIENT_DB === 'pglite' ? new ClientService() : new DeprecatedService();

export const topicService =
  process.env.NEXT_PUBLIC_SERVICE_MODE === 'server' ? new ServerService() : clientService;
