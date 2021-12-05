// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ModelAttributeTypes = {
  "NULL": "_null",
  "BINARY": "binary",
  "BINARY_SET": "binarySet",
  "BOOL": "bool",
  "LIST": "list",
  "MAP": "map",
  "NUMBER": "number",
  "NUMBER_SET": "numberSet",
  "STRING": "string",
  "STRING_SET": "stringSet"
};

const ModelSortDirection = {
  "ASC": "ASC",
  "DESC": "DESC"
};

const { Application, ModelFeedBackConnection, FeedBack, ModelInterviewConnection, Interview, Candidate, ModelApplicationConnection, ModelUserApplicationConnection, UserApplication, User, ModelUserJobConnection, UserJob, Job, Company, ModelJobConnection, EmailThreads, PrivateNote, Task, ModelCandidateConnection, ModelCompanyConnection, ModelEmailThreadsConnection, ModelPrivateNoteConnection, ModelTaskConnection, ModelUserConnection } = initSchema(schema);

export {
  ModelAttributeTypes,
  ModelSortDirection,
  Application,
  ModelFeedBackConnection,
  FeedBack,
  ModelInterviewConnection,
  Interview,
  Candidate,
  ModelApplicationConnection,
  ModelUserApplicationConnection,
  UserApplication,
  User,
  ModelUserJobConnection,
  UserJob,
  Job,
  Company,
  ModelJobConnection,
  EmailThreads,
  PrivateNote,
  Task,
  ModelCandidateConnection,
  ModelCompanyConnection,
  ModelEmailThreadsConnection,
  ModelPrivateNoteConnection,
  ModelTaskConnection,
  ModelUserConnection
};