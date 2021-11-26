import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Job {
  readonly id: string;
  readonly jobTitle?: string;
  readonly departmentCode?: string;
  readonly country?: string;
  readonly zipCode?: number;
  readonly isRemote?: boolean;
  readonly description?: string;
  readonly requirements?: string;
  readonly benefits?: string;
  readonly industry?: string;
  readonly jobFunction?: string;
  readonly subFunction?: string;
  readonly employmentType?: string;
  readonly experience?: string;
  readonly education?: string;
  readonly keywords?: string;
  readonly salaryFrom?: number;
  readonly salaryTo?: number;
  readonly currency?: number;
  readonly state?: string;
  readonly applicants?: string;
  readonly tags?: string;
  readonly publishedTime?: number;
  readonly Applications?: (Application | null)[];
  constructor(init: ModelInit<Job>);
  static copyOf(source: Job, mutator: (draft: MutableModel<Job>) => MutableModel<Job> | void): Job;
}

export declare class Application {
  readonly id: string;
  readonly firstName?: string;
  readonly lastName?: string;
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
  readonly createDate?: string;
  readonly emails?: string;
  readonly race?: string;
  readonly gender?: string;
  readonly veteran?: string;
  readonly disability?: string;
  readonly source?: string;
  readonly sourceCategory?: string;
  readonly referer?: string;
  readonly tags?: (string | null)[];
  readonly supportingDocs?: string;
  readonly comments?: string;
  readonly applicant?: string;
  readonly tasks?: string;
  readonly job?: string;
  readonly applicationImg?: string;
  readonly jobID?: string;
  constructor(init: ModelInit<Application>);
  static copyOf(source: Application, mutator: (draft: MutableModel<Application>) => MutableModel<Application> | void): Application;
}