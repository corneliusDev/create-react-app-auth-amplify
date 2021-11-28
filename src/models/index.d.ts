import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Company {
  readonly id: string;
  readonly company_name?: string;
  readonly plan?: string;
  readonly Jobs?: (Job | null)[];
  readonly User?: User;
  constructor(init: ModelInit<Company>);
  static copyOf(source: Company, mutator: (draft: MutableModel<Company>) => MutableModel<Company> | void): Company;
}

export declare class Job {
  readonly id: string;
  readonly job_title?: string;
  readonly department_code?: string;
  readonly country?: string;
  readonly zip_code?: number;
  readonly is_remote?: boolean;
  readonly description?: string;
  readonly requirements?: string;
  readonly benefits?: string;
  readonly industry?: string;
  readonly job_function?: string;
  readonly sub_function?: string;
  readonly employment_type?: string;
  readonly experience?: string;
  readonly education?: string;
  readonly keywords?: string;
  readonly salary_to?: number;
  readonly salary_from?: number;
  readonly currency?: string;
  readonly state?: string;
  readonly tags?: (string | null)[];
  readonly published_time?: string;
  readonly Applications?: (Application | null)[];
  readonly users?: (UserJob | null)[];
  readonly companyID?: string;
  constructor(init: ModelInit<Job>);
  static copyOf(source: Job, mutator: (draft: MutableModel<Job>) => MutableModel<Job> | void): Job;
}

export declare class Application {
  readonly id: string;
  readonly first_name?: string;
  readonly last_name?: string;
  readonly email1?: string;
  readonly phone1?: string;
  readonly city?: string;
  readonly state?: string;
  readonly owners?: string;
  readonly rating?: string;
  readonly stage?: string;
  readonly interviews?: string;
  readonly feedback?: string;
  readonly experience?: string;
  readonly email_threads?: string;
  readonly race?: string;
  readonly gender?: string;
  readonly veteran?: string;
  readonly disability?: string;
  readonly source?: string;
  readonly source_category?: string;
  readonly referer?: string;
  readonly tags?: (string | null)[];
  readonly supporting_docs?: string;
  readonly comments?: string;
  readonly tasks?: string;
  readonly job?: string;
  readonly jobID?: string;
  readonly FeedBacks?: (FeedBack | null)[];
  readonly Interviews?: (Interview | null)[];
  readonly candidateID?: string;
  readonly users?: (UserApplication | null)[];
  constructor(init: ModelInit<Application>);
  static copyOf(source: Application, mutator: (draft: MutableModel<Application>) => MutableModel<Application> | void): Application;
}

export declare class FeedBack {
  readonly id: string;
  readonly feedback?: string;
  readonly recommend?: boolean;
  readonly rating?: number;
  readonly userId?: string;
  readonly applicationID?: string;
  readonly interviewID?: string;
  constructor(init: ModelInit<FeedBack>);
  static copyOf(source: FeedBack, mutator: (draft: MutableModel<FeedBack>) => MutableModel<FeedBack> | void): FeedBack;
}

export declare class Interview {
  readonly id: string;
  readonly type?: string;
  readonly startDate?: string;
  readonly endDate?: string;
  readonly location?: string;
  readonly interviewer?: string;
  readonly feed_back_status?: string;
  readonly interview_status?: string;
  readonly applicationID?: string;
  readonly FeedBacks?: (FeedBack | null)[];
  readonly Candidate?: Candidate;
  constructor(init: ModelInit<Interview>);
  static copyOf(source: Interview, mutator: (draft: MutableModel<Interview>) => MutableModel<Interview> | void): Interview;
}

export declare class Candidate {
  readonly id: string;
  readonly first_name?: string;
  readonly last_name?: string;
  readonly email1?: string;
  readonly phone1?: string;
  readonly city?: string;
  readonly state?: string;
  readonly owners?: string;
  readonly rating?: string;
  readonly feedback?: string;
  readonly experience?: string;
  readonly race?: string;
  readonly gender?: string;
  readonly Applications?: (Application | null)[];
  constructor(init: ModelInit<Candidate>);
  static copyOf(source: Candidate, mutator: (draft: MutableModel<Candidate>) => MutableModel<Candidate> | void): Candidate;
}

export declare class UserApplication {
  readonly id: string;
  readonly user: User;
  readonly application: Application;
  constructor(init: ModelInit<UserApplication>);
  static copyOf(source: UserApplication, mutator: (draft: MutableModel<UserApplication>) => MutableModel<UserApplication> | void): UserApplication;
}

export declare class User {
  readonly id: string;
  readonly first_name?: string;
  readonly last_name?: string;
  readonly phone1?: string;
  readonly email1?: string;
  readonly city?: string;
  readonly state?: string;
  readonly rating?: string;
  readonly company_id?: string;
  readonly applications?: string;
  readonly UserApplicationsOwned?: (UserApplication | null)[];
  readonly UserJobsOwned?: (UserJob | null)[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class UserJob {
  readonly id: string;
  readonly user: User;
  readonly job: Job;
  constructor(init: ModelInit<UserJob>);
  static copyOf(source: UserJob, mutator: (draft: MutableModel<UserJob>) => MutableModel<UserJob> | void): UserJob;
}

export declare class EmailThreads {
  readonly id: string;
  constructor(init: ModelInit<EmailThreads>);
  static copyOf(source: EmailThreads, mutator: (draft: MutableModel<EmailThreads>) => MutableModel<EmailThreads> | void): EmailThreads;
}

export declare class Task {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly status?: string;
  readonly due_date?: string;
  readonly assigned_to?: User;
  constructor(init: ModelInit<Task>);
  static copyOf(source: Task, mutator: (draft: MutableModel<Task>) => MutableModel<Task> | void): Task;
}

export declare class PrivateNote {
  readonly id: string;
  readonly content: string;
  constructor(init: ModelInit<PrivateNote>);
  static copyOf(source: PrivateNote, mutator: (draft: MutableModel<PrivateNote>) => MutableModel<PrivateNote> | void): PrivateNote;
}