// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Company, Job, Application, FeedBack, Interview, Candidate, UserApplication, User, UserJob, EmailThreads, Task, PrivateNote } = initSchema(schema);

export {
  Company,
  Job,
  Application,
  FeedBack,
  Interview,
  Candidate,
  UserApplication,
  User,
  UserJob,
  EmailThreads,
  Task,
  PrivateNote
};