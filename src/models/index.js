// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Job, Application } = initSchema(schema);

export {
  Job,
  Application
};