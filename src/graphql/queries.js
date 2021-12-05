/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getApplication = /* GraphQL */ `
  query GetApplication($id: ID!) {
    getApplication(id: $id) {
      FeedBacks {
        items {
          _deleted
          _lastChangedAt
          _version
          applicationID
          createdAt
          feedback
          id
          interviewID
          rating
          recommend
          updatedAt
          userId
        }
        nextToken
        startedAt
      }
      Interviews {
        items {
          _deleted
          _lastChangedAt
          _version
          applicationID
          createdAt
          endDate
          feed_back_status
          id
          interview_status
          interviewer
          location
          startDate
          type
          updatedAt
        }
        nextToken
        startedAt
      }
      _deleted
      _lastChangedAt
      _version
      candidateID
      city
      comments
      createdAt
      disability
      email1
      email_threads
      experience
      feedback
      first_name
      gender
      id
      interviews
      job
      jobID
      last_name
      owners
      phone1
      race
      rating
      referer
      source
      source_category
      stage
      state
      supporting_docs
      tags
      tasks
      updatedAt
      users {
        items {
          _deleted
          _lastChangedAt
          _version
          applicationID
          createdAt
          id
          updatedAt
          userID
        }
        nextToken
        startedAt
      }
      veteran
    }
  }
`;
export const getCandidate = /* GraphQL */ `
  query GetCandidate($id: ID!) {
    getCandidate(id: $id) {
      Applications {
        items {
          _deleted
          _lastChangedAt
          _version
          candidateID
          city
          comments
          createdAt
          disability
          email1
          email_threads
          experience
          feedback
          first_name
          gender
          id
          interviews
          job
          jobID
          last_name
          owners
          phone1
          race
          rating
          referer
          source
          source_category
          stage
          state
          supporting_docs
          tags
          tasks
          updatedAt
          veteran
        }
        nextToken
        startedAt
      }
      _deleted
      _lastChangedAt
      _version
      city
      createdAt
      email1
      experience
      feedback
      first_name
      gender
      id
      last_name
      owners
      phone1
      race
      rating
      state
      updatedAt
    }
  }
`;
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
      Jobs {
        items {
          _deleted
          _lastChangedAt
          _version
          benefits
          companyID
          country
          createdAt
          currency
          department_code
          description
          education
          employment_type
          experience
          id
          industry
          is_remote
          job_function
          job_title
          keywords
          published_time
          requirements
          salary_from
          salary_to
          state
          sub_function
          tags
          updatedAt
          zip_code
        }
        nextToken
        startedAt
      }
      User {
        UserApplicationsOwned {
          nextToken
          startedAt
        }
        UserJobsOwned {
          nextToken
          startedAt
        }
        _deleted
        _lastChangedAt
        _version
        applications
        city
        company_id
        createdAt
        email1
        first_name
        id
        last_name
        phone1
        rating
        state
        updatedAt
      }
      _deleted
      _lastChangedAt
      _version
      company_name
      createdAt
      id
      plan
      updatedAt
    }
  }
`;
export const getEmailThreads = /* GraphQL */ `
  query GetEmailThreads($id: ID!) {
    getEmailThreads(id: $id) {
      _deleted
      _lastChangedAt
      _version
      createdAt
      id
      updatedAt
    }
  }
`;
export const getFeedBack = /* GraphQL */ `
  query GetFeedBack($id: ID!) {
    getFeedBack(id: $id) {
      _deleted
      _lastChangedAt
      _version
      applicationID
      createdAt
      feedback
      id
      interviewID
      rating
      recommend
      updatedAt
      userId
    }
  }
`;
export const getInterview = /* GraphQL */ `
  query GetInterview($id: ID!) {
    getInterview(id: $id) {
      Candidate {
        Applications {
          nextToken
          startedAt
        }
        _deleted
        _lastChangedAt
        _version
        city
        createdAt
        email1
        experience
        feedback
        first_name
        gender
        id
        last_name
        owners
        phone1
        race
        rating
        state
        updatedAt
      }
      FeedBacks {
        items {
          _deleted
          _lastChangedAt
          _version
          applicationID
          createdAt
          feedback
          id
          interviewID
          rating
          recommend
          updatedAt
          userId
        }
        nextToken
        startedAt
      }
      _deleted
      _lastChangedAt
      _version
      applicationID
      createdAt
      endDate
      feed_back_status
      id
      interview_status
      interviewer
      location
      startDate
      type
      updatedAt
    }
  }
`;
export const getJob = /* GraphQL */ `
  query GetJob($id: ID!) {
    getJob(id: $id) {
      Applications {
        items {
          _deleted
          _lastChangedAt
          _version
          candidateID
          city
          comments
          createdAt
          disability
          email1
          email_threads
          experience
          feedback
          first_name
          gender
          id
          interviews
          job
          jobID
          last_name
          owners
          phone1
          race
          rating
          referer
          source
          source_category
          stage
          state
          supporting_docs
          tags
          tasks
          updatedAt
          veteran
        }
        nextToken
        startedAt
      }
      _deleted
      _lastChangedAt
      _version
      benefits
      companyID
      country
      createdAt
      currency
      department_code
      description
      education
      employment_type
      experience
      id
      industry
      is_remote
      job_function
      job_title
      keywords
      published_time
      requirements
      salary_from
      salary_to
      state
      sub_function
      tags
      updatedAt
      users {
        items {
          _deleted
          _lastChangedAt
          _version
          createdAt
          id
          jobID
          updatedAt
          userID
        }
        nextToken
        startedAt
      }
      zip_code
    }
  }
`;
export const getPrivateNote = /* GraphQL */ `
  query GetPrivateNote($id: ID!) {
    getPrivateNote(id: $id) {
      _deleted
      _lastChangedAt
      _version
      content
      createdAt
      id
      owner
      updatedAt
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      _deleted
      _lastChangedAt
      _version
      assigned_to {
        UserApplicationsOwned {
          nextToken
          startedAt
        }
        UserJobsOwned {
          nextToken
          startedAt
        }
        _deleted
        _lastChangedAt
        _version
        applications
        city
        company_id
        createdAt
        email1
        first_name
        id
        last_name
        phone1
        rating
        state
        updatedAt
      }
      createdAt
      description
      due_date
      id
      status
      title
      updatedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      UserApplicationsOwned {
        items {
          _deleted
          _lastChangedAt
          _version
          applicationID
          createdAt
          id
          updatedAt
          userID
        }
        nextToken
        startedAt
      }
      UserJobsOwned {
        items {
          _deleted
          _lastChangedAt
          _version
          createdAt
          id
          jobID
          updatedAt
          userID
        }
        nextToken
        startedAt
      }
      _deleted
      _lastChangedAt
      _version
      applications
      city
      company_id
      createdAt
      email1
      first_name
      id
      last_name
      phone1
      rating
      state
      updatedAt
    }
  }
`;
export const listApplications = /* GraphQL */ `
  query ListApplications(
    $filter: ModelApplicationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApplications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        FeedBacks {
          nextToken
          startedAt
        }
        Interviews {
          nextToken
          startedAt
        }
        _deleted
        _lastChangedAt
        _version
        candidateID
        city
        comments
        createdAt
        disability
        email1
        email_threads
        experience
        feedback
        first_name
        gender
        id
        interviews
        job
        jobID
        last_name
        owners
        phone1
        race
        rating
        referer
        source
        source_category
        stage
        state
        supporting_docs
        tags
        tasks
        updatedAt
        users {
          nextToken
          startedAt
        }
        veteran
      }
      nextToken
      startedAt
    }
  }
`;
export const listCandidates = /* GraphQL */ `
  query ListCandidates(
    $filter: ModelCandidateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCandidates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Applications {
          nextToken
          startedAt
        }
        _deleted
        _lastChangedAt
        _version
        city
        createdAt
        email1
        experience
        feedback
        first_name
        gender
        id
        last_name
        owners
        phone1
        race
        rating
        state
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const listCompanys = /* GraphQL */ `
  query ListCompanys(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Jobs {
          nextToken
          startedAt
        }
        User {
          _deleted
          _lastChangedAt
          _version
          applications
          city
          company_id
          createdAt
          email1
          first_name
          id
          last_name
          phone1
          rating
          state
          updatedAt
        }
        _deleted
        _lastChangedAt
        _version
        company_name
        createdAt
        id
        plan
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const listEmailThreadss = /* GraphQL */ `
  query ListEmailThreadss(
    $filter: ModelEmailThreadsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmailThreadss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        _deleted
        _lastChangedAt
        _version
        createdAt
        id
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const listFeedBacks = /* GraphQL */ `
  query ListFeedBacks(
    $filter: ModelFeedBackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFeedBacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        _deleted
        _lastChangedAt
        _version
        applicationID
        createdAt
        feedback
        id
        interviewID
        rating
        recommend
        updatedAt
        userId
      }
      nextToken
      startedAt
    }
  }
`;
export const listInterviews = /* GraphQL */ `
  query ListInterviews(
    $filter: ModelInterviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInterviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Candidate {
          _deleted
          _lastChangedAt
          _version
          city
          createdAt
          email1
          experience
          feedback
          first_name
          gender
          id
          last_name
          owners
          phone1
          race
          rating
          state
          updatedAt
        }
        FeedBacks {
          nextToken
          startedAt
        }
        _deleted
        _lastChangedAt
        _version
        applicationID
        createdAt
        endDate
        feed_back_status
        id
        interview_status
        interviewer
        location
        startDate
        type
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const listJobs = /* GraphQL */ `
  query ListJobs(
    $filter: ModelJobFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Applications {
          nextToken
          startedAt
        }
        _deleted
        _lastChangedAt
        _version
        benefits
        companyID
        country
        createdAt
        currency
        department_code
        description
        education
        employment_type
        experience
        id
        industry
        is_remote
        job_function
        job_title
        keywords
        published_time
        requirements
        salary_from
        salary_to
        state
        sub_function
        tags
        updatedAt
        users {
          nextToken
          startedAt
        }
        zip_code
      }
      nextToken
      startedAt
    }
  }
`;
export const listPrivateNotes = /* GraphQL */ `
  query ListPrivateNotes(
    $filter: ModelPrivateNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrivateNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        _deleted
        _lastChangedAt
        _version
        content
        createdAt
        id
        owner
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        _deleted
        _lastChangedAt
        _version
        assigned_to {
          _deleted
          _lastChangedAt
          _version
          applications
          city
          company_id
          createdAt
          email1
          first_name
          id
          last_name
          phone1
          rating
          state
          updatedAt
        }
        createdAt
        description
        due_date
        id
        status
        title
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        UserApplicationsOwned {
          nextToken
          startedAt
        }
        UserJobsOwned {
          nextToken
          startedAt
        }
        _deleted
        _lastChangedAt
        _version
        applications
        city
        company_id
        createdAt
        email1
        first_name
        id
        last_name
        phone1
        rating
        state
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncApplications = /* GraphQL */ `
  query SyncApplications(
    $filter: ModelApplicationFilterInput
    $lastSync: AWSTimestamp
    $limit: Int
    $nextToken: String
  ) {
    syncApplications(
      filter: $filter
      lastSync: $lastSync
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        FeedBacks {
          nextToken
          startedAt
        }
        Interviews {
          nextToken
          startedAt
        }
        _deleted
        _lastChangedAt
        _version
        candidateID
        city
        comments
        createdAt
        disability
        email1
        email_threads
        experience
        feedback
        first_name
        gender
        id
        interviews
        job
        jobID
        last_name
        owners
        phone1
        race
        rating
        referer
        source
        source_category
        stage
        state
        supporting_docs
        tags
        tasks
        updatedAt
        users {
          nextToken
          startedAt
        }
        veteran
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCandidates = /* GraphQL */ `
  query SyncCandidates(
    $filter: ModelCandidateFilterInput
    $lastSync: AWSTimestamp
    $limit: Int
    $nextToken: String
  ) {
    syncCandidates(
      filter: $filter
      lastSync: $lastSync
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        Applications {
          nextToken
          startedAt
        }
        _deleted
        _lastChangedAt
        _version
        city
        createdAt
        email1
        experience
        feedback
        first_name
        gender
        id
        last_name
        owners
        phone1
        race
        rating
        state
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCompanies = /* GraphQL */ `
  query SyncCompanies(
    $filter: ModelCompanyFilterInput
    $lastSync: AWSTimestamp
    $limit: Int
    $nextToken: String
  ) {
    syncCompanies(
      filter: $filter
      lastSync: $lastSync
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        Jobs {
          nextToken
          startedAt
        }
        User {
          _deleted
          _lastChangedAt
          _version
          applications
          city
          company_id
          createdAt
          email1
          first_name
          id
          last_name
          phone1
          rating
          state
          updatedAt
        }
        _deleted
        _lastChangedAt
        _version
        company_name
        createdAt
        id
        plan
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEmailThreads = /* GraphQL */ `
  query SyncEmailThreads(
    $filter: ModelEmailThreadsFilterInput
    $lastSync: AWSTimestamp
    $limit: Int
    $nextToken: String
  ) {
    syncEmailThreads(
      filter: $filter
      lastSync: $lastSync
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        _deleted
        _lastChangedAt
        _version
        createdAt
        id
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFeedBacks = /* GraphQL */ `
  query SyncFeedBacks(
    $filter: ModelFeedBackFilterInput
    $lastSync: AWSTimestamp
    $limit: Int
    $nextToken: String
  ) {
    syncFeedBacks(
      filter: $filter
      lastSync: $lastSync
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        _deleted
        _lastChangedAt
        _version
        applicationID
        createdAt
        feedback
        id
        interviewID
        rating
        recommend
        updatedAt
        userId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncInterviews = /* GraphQL */ `
  query SyncInterviews(
    $filter: ModelInterviewFilterInput
    $lastSync: AWSTimestamp
    $limit: Int
    $nextToken: String
  ) {
    syncInterviews(
      filter: $filter
      lastSync: $lastSync
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        Candidate {
          _deleted
          _lastChangedAt
          _version
          city
          createdAt
          email1
          experience
          feedback
          first_name
          gender
          id
          last_name
          owners
          phone1
          race
          rating
          state
          updatedAt
        }
        FeedBacks {
          nextToken
          startedAt
        }
        _deleted
        _lastChangedAt
        _version
        applicationID
        createdAt
        endDate
        feed_back_status
        id
        interview_status
        interviewer
        location
        startDate
        type
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncJobs = /* GraphQL */ `
  query SyncJobs(
    $filter: ModelJobFilterInput
    $lastSync: AWSTimestamp
    $limit: Int
    $nextToken: String
  ) {
    syncJobs(
      filter: $filter
      lastSync: $lastSync
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        Applications {
          nextToken
          startedAt
        }
        _deleted
        _lastChangedAt
        _version
        benefits
        companyID
        country
        createdAt
        currency
        department_code
        description
        education
        employment_type
        experience
        id
        industry
        is_remote
        job_function
        job_title
        keywords
        published_time
        requirements
        salary_from
        salary_to
        state
        sub_function
        tags
        updatedAt
        users {
          nextToken
          startedAt
        }
        zip_code
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPrivateNotes = /* GraphQL */ `
  query SyncPrivateNotes(
    $filter: ModelPrivateNoteFilterInput
    $lastSync: AWSTimestamp
    $limit: Int
    $nextToken: String
  ) {
    syncPrivateNotes(
      filter: $filter
      lastSync: $lastSync
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        _deleted
        _lastChangedAt
        _version
        content
        createdAt
        id
        owner
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTasks = /* GraphQL */ `
  query SyncTasks(
    $filter: ModelTaskFilterInput
    $lastSync: AWSTimestamp
    $limit: Int
    $nextToken: String
  ) {
    syncTasks(
      filter: $filter
      lastSync: $lastSync
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        _deleted
        _lastChangedAt
        _version
        assigned_to {
          _deleted
          _lastChangedAt
          _version
          applications
          city
          company_id
          createdAt
          email1
          first_name
          id
          last_name
          phone1
          rating
          state
          updatedAt
        }
        createdAt
        description
        due_date
        id
        status
        title
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserApplications = /* GraphQL */ `
  query SyncUserApplications(
    $filter: ModelUserApplicationFilterInput
    $lastSync: AWSTimestamp
    $limit: Int
    $nextToken: String
  ) {
    syncUserApplications(
      filter: $filter
      lastSync: $lastSync
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        _deleted
        _lastChangedAt
        _version
        application {
          _deleted
          _lastChangedAt
          _version
          candidateID
          city
          comments
          createdAt
          disability
          email1
          email_threads
          experience
          feedback
          first_name
          gender
          id
          interviews
          job
          jobID
          last_name
          owners
          phone1
          race
          rating
          referer
          source
          source_category
          stage
          state
          supporting_docs
          tags
          tasks
          updatedAt
          veteran
        }
        applicationID
        createdAt
        id
        updatedAt
        user {
          _deleted
          _lastChangedAt
          _version
          applications
          city
          company_id
          createdAt
          email1
          first_name
          id
          last_name
          phone1
          rating
          state
          updatedAt
        }
        userID
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserJobs = /* GraphQL */ `
  query SyncUserJobs(
    $filter: ModelUserJobFilterInput
    $lastSync: AWSTimestamp
    $limit: Int
    $nextToken: String
  ) {
    syncUserJobs(
      filter: $filter
      lastSync: $lastSync
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        _deleted
        _lastChangedAt
        _version
        createdAt
        id
        job {
          _deleted
          _lastChangedAt
          _version
          benefits
          companyID
          country
          createdAt
          currency
          department_code
          description
          education
          employment_type
          experience
          id
          industry
          is_remote
          job_function
          job_title
          keywords
          published_time
          requirements
          salary_from
          salary_to
          state
          sub_function
          tags
          updatedAt
          zip_code
        }
        jobID
        updatedAt
        user {
          _deleted
          _lastChangedAt
          _version
          applications
          city
          company_id
          createdAt
          email1
          first_name
          id
          last_name
          phone1
          rating
          state
          updatedAt
        }
        userID
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $lastSync: AWSTimestamp
    $limit: Int
    $nextToken: String
  ) {
    syncUsers(
      filter: $filter
      lastSync: $lastSync
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        UserApplicationsOwned {
          nextToken
          startedAt
        }
        UserJobsOwned {
          nextToken
          startedAt
        }
        _deleted
        _lastChangedAt
        _version
        applications
        city
        company_id
        createdAt
        email1
        first_name
        id
        last_name
        phone1
        rating
        state
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
