/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateApplication = /* GraphQL */ `
  subscription OnCreateApplication {
    onCreateApplication {
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
export const onCreateCandidate = /* GraphQL */ `
  subscription OnCreateCandidate {
    onCreateCandidate {
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
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany {
    onCreateCompany {
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
export const onCreateEmailThreads = /* GraphQL */ `
  subscription OnCreateEmailThreads {
    onCreateEmailThreads {
      _deleted
      _lastChangedAt
      _version
      createdAt
      id
      updatedAt
    }
  }
`;
export const onCreateFeedBack = /* GraphQL */ `
  subscription OnCreateFeedBack {
    onCreateFeedBack {
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
export const onCreateInterview = /* GraphQL */ `
  subscription OnCreateInterview {
    onCreateInterview {
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
export const onCreateJob = /* GraphQL */ `
  subscription OnCreateJob {
    onCreateJob {
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
export const onCreatePrivateNote = /* GraphQL */ `
  subscription OnCreatePrivateNote($owner: String) {
    onCreatePrivateNote(owner: $owner) {
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onCreateUserApplication = /* GraphQL */ `
  subscription OnCreateUserApplication {
    onCreateUserApplication {
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
export const onCreateUserJob = /* GraphQL */ `
  subscription OnCreateUserJob {
    onCreateUserJob {
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
export const onDeleteApplication = /* GraphQL */ `
  subscription OnDeleteApplication {
    onDeleteApplication {
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
export const onDeleteCandidate = /* GraphQL */ `
  subscription OnDeleteCandidate {
    onDeleteCandidate {
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
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany {
    onDeleteCompany {
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
export const onDeleteEmailThreads = /* GraphQL */ `
  subscription OnDeleteEmailThreads {
    onDeleteEmailThreads {
      _deleted
      _lastChangedAt
      _version
      createdAt
      id
      updatedAt
    }
  }
`;
export const onDeleteFeedBack = /* GraphQL */ `
  subscription OnDeleteFeedBack {
    onDeleteFeedBack {
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
export const onDeleteInterview = /* GraphQL */ `
  subscription OnDeleteInterview {
    onDeleteInterview {
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
export const onDeleteJob = /* GraphQL */ `
  subscription OnDeleteJob {
    onDeleteJob {
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
export const onDeletePrivateNote = /* GraphQL */ `
  subscription OnDeletePrivateNote($owner: String) {
    onDeletePrivateNote(owner: $owner) {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onDeleteUserApplication = /* GraphQL */ `
  subscription OnDeleteUserApplication {
    onDeleteUserApplication {
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
export const onDeleteUserJob = /* GraphQL */ `
  subscription OnDeleteUserJob {
    onDeleteUserJob {
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
export const onUpdateApplication = /* GraphQL */ `
  subscription OnUpdateApplication {
    onUpdateApplication {
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
export const onUpdateCandidate = /* GraphQL */ `
  subscription OnUpdateCandidate {
    onUpdateCandidate {
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
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany {
    onUpdateCompany {
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
export const onUpdateEmailThreads = /* GraphQL */ `
  subscription OnUpdateEmailThreads {
    onUpdateEmailThreads {
      _deleted
      _lastChangedAt
      _version
      createdAt
      id
      updatedAt
    }
  }
`;
export const onUpdateFeedBack = /* GraphQL */ `
  subscription OnUpdateFeedBack {
    onUpdateFeedBack {
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
export const onUpdateInterview = /* GraphQL */ `
  subscription OnUpdateInterview {
    onUpdateInterview {
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
export const onUpdateJob = /* GraphQL */ `
  subscription OnUpdateJob {
    onUpdateJob {
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
export const onUpdatePrivateNote = /* GraphQL */ `
  subscription OnUpdatePrivateNote($owner: String) {
    onUpdatePrivateNote(owner: $owner) {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onUpdateUserApplication = /* GraphQL */ `
  subscription OnUpdateUserApplication {
    onUpdateUserApplication {
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
export const onUpdateUserJob = /* GraphQL */ `
  subscription OnUpdateUserJob {
    onUpdateUserJob {
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
