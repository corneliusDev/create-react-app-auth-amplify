/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createApplication = /* GraphQL */ `
  mutation CreateApplication(
    $condition: ModelApplicationConditionInput
    $input: CreateApplicationInput!
  ) {
    createApplication(condition: $condition, input: $input) {
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
export const createCandidate = /* GraphQL */ `
  mutation CreateCandidate(
    $condition: ModelCandidateConditionInput
    $input: CreateCandidateInput!
  ) {
    createCandidate(condition: $condition, input: $input) {
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
export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $condition: ModelCompanyConditionInput
    $input: CreateCompanyInput!
  ) {
    createCompany(condition: $condition, input: $input) {
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
export const createEmailThreads = /* GraphQL */ `
  mutation CreateEmailThreads(
    $condition: ModelEmailThreadsConditionInput
    $input: CreateEmailThreadsInput!
  ) {
    createEmailThreads(condition: $condition, input: $input) {
      _deleted
      _lastChangedAt
      _version
      createdAt
      id
      updatedAt
    }
  }
`;
export const createFeedBack = /* GraphQL */ `
  mutation CreateFeedBack(
    $condition: ModelFeedBackConditionInput
    $input: CreateFeedBackInput!
  ) {
    createFeedBack(condition: $condition, input: $input) {
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
export const createInterview = /* GraphQL */ `
  mutation CreateInterview(
    $condition: ModelInterviewConditionInput
    $input: CreateInterviewInput!
  ) {
    createInterview(condition: $condition, input: $input) {
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
export const createJob = /* GraphQL */ `
  mutation CreateJob(
    $condition: ModelJobConditionInput
    $input: CreateJobInput!
  ) {
    createJob(condition: $condition, input: $input) {
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
export const createPrivateNote = /* GraphQL */ `
  mutation CreatePrivateNote(
    $condition: ModelPrivateNoteConditionInput
    $input: CreatePrivateNoteInput!
  ) {
    createPrivateNote(condition: $condition, input: $input) {
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
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $condition: ModelTaskConditionInput
    $input: CreateTaskInput!
  ) {
    createTask(condition: $condition, input: $input) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $condition: ModelUserConditionInput
    $input: CreateUserInput!
  ) {
    createUser(condition: $condition, input: $input) {
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
export const createUserApplication = /* GraphQL */ `
  mutation CreateUserApplication(
    $condition: ModelUserApplicationConditionInput
    $input: CreateUserApplicationInput!
  ) {
    createUserApplication(condition: $condition, input: $input) {
      _deleted
      _lastChangedAt
      _version
      application {
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
      applicationID
      createdAt
      id
      updatedAt
      user {
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
      userID
    }
  }
`;
export const createUserJob = /* GraphQL */ `
  mutation CreateUserJob(
    $condition: ModelUserJobConditionInput
    $input: CreateUserJobInput!
  ) {
    createUserJob(condition: $condition, input: $input) {
      _deleted
      _lastChangedAt
      _version
      createdAt
      id
      job {
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
      jobID
      updatedAt
      user {
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
      userID
    }
  }
`;
export const deleteApplication = /* GraphQL */ `
  mutation DeleteApplication(
    $condition: ModelApplicationConditionInput
    $input: DeleteApplicationInput!
  ) {
    deleteApplication(condition: $condition, input: $input) {
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
export const deleteCandidate = /* GraphQL */ `
  mutation DeleteCandidate(
    $condition: ModelCandidateConditionInput
    $input: DeleteCandidateInput!
  ) {
    deleteCandidate(condition: $condition, input: $input) {
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
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $condition: ModelCompanyConditionInput
    $input: DeleteCompanyInput!
  ) {
    deleteCompany(condition: $condition, input: $input) {
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
export const deleteEmailThreads = /* GraphQL */ `
  mutation DeleteEmailThreads(
    $condition: ModelEmailThreadsConditionInput
    $input: DeleteEmailThreadsInput!
  ) {
    deleteEmailThreads(condition: $condition, input: $input) {
      _deleted
      _lastChangedAt
      _version
      createdAt
      id
      updatedAt
    }
  }
`;
export const deleteFeedBack = /* GraphQL */ `
  mutation DeleteFeedBack(
    $condition: ModelFeedBackConditionInput
    $input: DeleteFeedBackInput!
  ) {
    deleteFeedBack(condition: $condition, input: $input) {
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
export const deleteInterview = /* GraphQL */ `
  mutation DeleteInterview(
    $condition: ModelInterviewConditionInput
    $input: DeleteInterviewInput!
  ) {
    deleteInterview(condition: $condition, input: $input) {
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
export const deleteJob = /* GraphQL */ `
  mutation DeleteJob(
    $condition: ModelJobConditionInput
    $input: DeleteJobInput!
  ) {
    deleteJob(condition: $condition, input: $input) {
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
export const deletePrivateNote = /* GraphQL */ `
  mutation DeletePrivateNote(
    $condition: ModelPrivateNoteConditionInput
    $input: DeletePrivateNoteInput!
  ) {
    deletePrivateNote(condition: $condition, input: $input) {
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
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $condition: ModelTaskConditionInput
    $input: DeleteTaskInput!
  ) {
    deleteTask(condition: $condition, input: $input) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $condition: ModelUserConditionInput
    $input: DeleteUserInput!
  ) {
    deleteUser(condition: $condition, input: $input) {
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
export const deleteUserApplication = /* GraphQL */ `
  mutation DeleteUserApplication(
    $condition: ModelUserApplicationConditionInput
    $input: DeleteUserApplicationInput!
  ) {
    deleteUserApplication(condition: $condition, input: $input) {
      _deleted
      _lastChangedAt
      _version
      application {
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
      applicationID
      createdAt
      id
      updatedAt
      user {
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
      userID
    }
  }
`;
export const deleteUserJob = /* GraphQL */ `
  mutation DeleteUserJob(
    $condition: ModelUserJobConditionInput
    $input: DeleteUserJobInput!
  ) {
    deleteUserJob(condition: $condition, input: $input) {
      _deleted
      _lastChangedAt
      _version
      createdAt
      id
      job {
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
      jobID
      updatedAt
      user {
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
      userID
    }
  }
`;
export const updateApplication = /* GraphQL */ `
  mutation UpdateApplication(
    $condition: ModelApplicationConditionInput
    $input: UpdateApplicationInput!
  ) {
    updateApplication(condition: $condition, input: $input) {
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
export const updateCandidate = /* GraphQL */ `
  mutation UpdateCandidate(
    $condition: ModelCandidateConditionInput
    $input: UpdateCandidateInput!
  ) {
    updateCandidate(condition: $condition, input: $input) {
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
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $condition: ModelCompanyConditionInput
    $input: UpdateCompanyInput!
  ) {
    updateCompany(condition: $condition, input: $input) {
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
export const updateEmailThreads = /* GraphQL */ `
  mutation UpdateEmailThreads(
    $condition: ModelEmailThreadsConditionInput
    $input: UpdateEmailThreadsInput!
  ) {
    updateEmailThreads(condition: $condition, input: $input) {
      _deleted
      _lastChangedAt
      _version
      createdAt
      id
      updatedAt
    }
  }
`;
export const updateFeedBack = /* GraphQL */ `
  mutation UpdateFeedBack(
    $condition: ModelFeedBackConditionInput
    $input: UpdateFeedBackInput!
  ) {
    updateFeedBack(condition: $condition, input: $input) {
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
export const updateInterview = /* GraphQL */ `
  mutation UpdateInterview(
    $condition: ModelInterviewConditionInput
    $input: UpdateInterviewInput!
  ) {
    updateInterview(condition: $condition, input: $input) {
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
export const updateJob = /* GraphQL */ `
  mutation UpdateJob(
    $condition: ModelJobConditionInput
    $input: UpdateJobInput!
  ) {
    updateJob(condition: $condition, input: $input) {
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
export const updatePrivateNote = /* GraphQL */ `
  mutation UpdatePrivateNote(
    $condition: ModelPrivateNoteConditionInput
    $input: UpdatePrivateNoteInput!
  ) {
    updatePrivateNote(condition: $condition, input: $input) {
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
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $condition: ModelTaskConditionInput
    $input: UpdateTaskInput!
  ) {
    updateTask(condition: $condition, input: $input) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $condition: ModelUserConditionInput
    $input: UpdateUserInput!
  ) {
    updateUser(condition: $condition, input: $input) {
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
export const updateUserApplication = /* GraphQL */ `
  mutation UpdateUserApplication(
    $condition: ModelUserApplicationConditionInput
    $input: UpdateUserApplicationInput!
  ) {
    updateUserApplication(condition: $condition, input: $input) {
      _deleted
      _lastChangedAt
      _version
      application {
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
      applicationID
      createdAt
      id
      updatedAt
      user {
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
      userID
    }
  }
`;
export const updateUserJob = /* GraphQL */ `
  mutation UpdateUserJob(
    $condition: ModelUserJobConditionInput
    $input: UpdateUserJobInput!
  ) {
    updateUserJob(condition: $condition, input: $input) {
      _deleted
      _lastChangedAt
      _version
      createdAt
      id
      job {
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
      jobID
      updatedAt
      user {
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
      userID
    }
  }
`;
