import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum ModelAttributeTypes {
  NULL = "_null",
  BINARY = "binary",
  BINARY_SET = "binarySet",
  BOOL = "bool",
  LIST = "list",
  MAP = "map",
  NUMBER = "number",
  NUMBER_SET = "numberSet",
  STRING = "string",
  STRING_SET = "stringSet"
}

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export declare class Application {
  readonly FeedBacks?: ModelFeedBackConnection;
  readonly Interviews?: ModelInterviewConnection;
  readonly _deleted?: boolean;
  readonly _lastChangedAt: number;
  readonly _version: number;
  readonly candidateID?: string;
  readonly city?: string;
  readonly comments?: string;
  readonly createdAt: string;
  readonly disability?: string;
  readonly email1?: string;
  readonly email_threads?: string;
  readonly experience?: string;
  readonly feedback?: string;
  readonly first_name?: string;
  readonly gender?: string;
  readonly id: string;
  readonly interviews?: string;
  readonly job?: string;
  readonly jobID?: string;
  readonly last_name?: string;
  readonly owners?: string;
  readonly phone1?: string;
  readonly race?: string;
  readonly rating?: string;
  readonly referer?: string;
  readonly source?: string;
  readonly source_category?: string;
  readonly stage?: string;
  readonly state?: string;
  readonly supporting_docs?: string;
  readonly tags?: (string | null)[];
  readonly tasks?: string;
  readonly updatedAt: string;
  readonly users?: ModelUserApplicationConnection;
  readonly veteran?: string;
  constructor(init: ModelInit<Application>);
}

export declare class ModelFeedBackConnection {
  readonly items: FeedBack[];
  readonly nextToken?: string;
  readonly startedAt?: number;
  constructor(init: ModelInit<ModelFeedBackConnection>);
}

export declare class FeedBack {
  readonly _deleted?: boolean;
  readonly _lastChangedAt: number;
  readonly _version: number;
  readonly applicationID?: string;
  readonly createdAt: string;
  readonly feedback?: string;
  readonly id: string;
  readonly interviewID?: string;
  readonly rating?: number;
  readonly recommend?: boolean;
  readonly updatedAt: string;
  readonly userId?: string;
  constructor(init: ModelInit<FeedBack>);
}

export declare class ModelInterviewConnection {
  readonly items: Interview[];
  readonly nextToken?: string;
  readonly startedAt?: number;
  constructor(init: ModelInit<ModelInterviewConnection>);
}

export declare class Interview {
  readonly Candidate?: Candidate;
  readonly FeedBacks?: ModelFeedBackConnection;
  readonly _deleted?: boolean;
  readonly _lastChangedAt: number;
  readonly _version: number;
  readonly applicationID?: string;
  readonly createdAt: string;
  readonly endDate?: string;
  readonly feed_back_status?: string;
  readonly id: string;
  readonly interview_status?: string;
  readonly interviewer?: string;
  readonly location?: string;
  readonly startDate?: string;
  readonly type?: string;
  readonly updatedAt: string;
  constructor(init: ModelInit<Interview>);
}

export declare class Candidate {
  readonly Applications?: ModelApplicationConnection;
  readonly _deleted?: boolean;
  readonly _lastChangedAt: number;
  readonly _version: number;
  readonly city?: string;
  readonly createdAt: string;
  readonly email1?: string;
  readonly experience?: string;
  readonly feedback?: string;
  readonly first_name?: string;
  readonly gender?: string;
  readonly id: string;
  readonly last_name?: string;
  readonly owners?: string;
  readonly phone1?: string;
  readonly race?: string;
  readonly rating?: string;
  readonly state?: string;
  readonly updatedAt: string;
  constructor(init: ModelInit<Candidate>);
}

export declare class ModelApplicationConnection {
  readonly items: Application[];
  readonly nextToken?: string;
  readonly startedAt?: number;
  constructor(init: ModelInit<ModelApplicationConnection>);
}

export declare class ModelUserApplicationConnection {
  readonly items: UserApplication[];
  readonly nextToken?: string;
  readonly startedAt?: number;
  constructor(init: ModelInit<ModelUserApplicationConnection>);
}

export declare class UserApplication {
  readonly _deleted?: boolean;
  readonly _lastChangedAt: number;
  readonly _version: number;
  readonly application: Application;
  readonly applicationID: string;
  readonly createdAt: string;
  readonly id: string;
  readonly updatedAt: string;
  readonly user: User;
  readonly userID: string;
  constructor(init: ModelInit<UserApplication>);
}

export declare class User {
  readonly UserApplicationsOwned?: ModelUserApplicationConnection;
  readonly UserJobsOwned?: ModelUserJobConnection;
  readonly _deleted?: boolean;
  readonly _lastChangedAt: number;
  readonly _version: number;
  readonly applications?: string;
  readonly city?: string;
  readonly company_id?: string;
  readonly createdAt: string;
  readonly email1?: string;
  readonly first_name?: string;
  readonly id: string;
  readonly last_name?: string;
  readonly phone1?: string;
  readonly rating?: string;
  readonly state?: string;
  readonly updatedAt: string;
  constructor(init: ModelInit<User>);
}

export declare class ModelUserJobConnection {
  readonly items: UserJob[];
  readonly nextToken?: string;
  readonly startedAt?: number;
  constructor(init: ModelInit<ModelUserJobConnection>);
}

export declare class UserJob {
  readonly _deleted?: boolean;
  readonly _lastChangedAt: number;
  readonly _version: number;
  readonly createdAt: string;
  readonly id: string;
  readonly job: Job;
  readonly jobID: string;
  readonly updatedAt: string;
  readonly user: User;
  readonly userID: string;
  constructor(init: ModelInit<UserJob>);
}

export declare class Job {
  readonly Applications?: ModelApplicationConnection;
  readonly _deleted?: boolean;
  readonly _lastChangedAt: number;
  readonly _version: number;
  readonly benefits?: string;
  readonly companyID?: string;
  readonly country?: string;
  readonly createdAt: string;
  readonly currency?: string;
  readonly department_code?: string;
  readonly description?: string;
  readonly education?: string;
  readonly employment_type?: string;
  readonly experience?: string;
  readonly id: string;
  readonly industry?: string;
  readonly is_remote?: boolean;
  readonly job_function?: string;
  readonly job_title?: string;
  readonly keywords?: string;
  readonly published_time?: string;
  readonly requirements?: string;
  readonly salary_from?: number;
  readonly salary_to?: number;
  readonly state?: string;
  readonly sub_function?: string;
  readonly tags?: (string | null)[];
  readonly updatedAt: string;
  readonly users?: ModelUserJobConnection;
  readonly zip_code?: number;
  constructor(init: ModelInit<Job>);
}

export declare class Company {
  readonly Jobs?: ModelJobConnection;
  readonly User?: User;
  readonly _deleted?: boolean;
  readonly _lastChangedAt: number;
  readonly _version: number;
  readonly company_name?: string;
  readonly createdAt: string;
  readonly id: string;
  readonly plan?: string;
  readonly updatedAt: string;
  constructor(init: ModelInit<Company>);
}

export declare class ModelJobConnection {
  readonly items: Job[];
  readonly nextToken?: string;
  readonly startedAt?: number;
  constructor(init: ModelInit<ModelJobConnection>);
}

export declare class EmailThreads {
  readonly _deleted?: boolean;
  readonly _lastChangedAt: number;
  readonly _version: number;
  readonly createdAt: string;
  readonly id: string;
  readonly updatedAt: string;
  constructor(init: ModelInit<EmailThreads>);
}

export declare class PrivateNote {
  readonly _deleted?: boolean;
  readonly _lastChangedAt: number;
  readonly _version: number;
  readonly content: string;
  readonly createdAt: string;
  readonly id: string;
  readonly owner?: string;
  readonly updatedAt: string;
  constructor(init: ModelInit<PrivateNote>);
}

export declare class Task {
  readonly _deleted?: boolean;
  readonly _lastChangedAt: number;
  readonly _version: number;
  readonly assigned_to?: User;
  readonly createdAt: string;
  readonly description?: string;
  readonly due_date?: string;
  readonly id: string;
  readonly status?: string;
  readonly title: string;
  readonly updatedAt: string;
  constructor(init: ModelInit<Task>);
}

export declare class ModelCandidateConnection {
  readonly items: Candidate[];
  readonly nextToken?: string;
  readonly startedAt?: number;
  constructor(init: ModelInit<ModelCandidateConnection>);
}

export declare class ModelCompanyConnection {
  readonly items: Company[];
  readonly nextToken?: string;
  readonly startedAt?: number;
  constructor(init: ModelInit<ModelCompanyConnection>);
}

export declare class ModelEmailThreadsConnection {
  readonly items: EmailThreads[];
  readonly nextToken?: string;
  readonly startedAt?: number;
  constructor(init: ModelInit<ModelEmailThreadsConnection>);
}

export declare class ModelPrivateNoteConnection {
  readonly items: PrivateNote[];
  readonly nextToken?: string;
  readonly startedAt?: number;
  constructor(init: ModelInit<ModelPrivateNoteConnection>);
}

export declare class ModelTaskConnection {
  readonly items: Task[];
  readonly nextToken?: string;
  readonly startedAt?: number;
  constructor(init: ModelInit<ModelTaskConnection>);
}

export declare class ModelUserConnection {
  readonly items: User[];
  readonly nextToken?: string;
  readonly startedAt?: number;
  constructor(init: ModelInit<ModelUserConnection>);
}

