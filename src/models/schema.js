export const schema = {
    "models": {},
    "enums": {
        "ModelAttributeTypes": {
            "name": "ModelAttributeTypes",
            "values": [
                "_null",
                "binary",
                "binarySet",
                "bool",
                "list",
                "map",
                "number",
                "numberSet",
                "string",
                "stringSet"
            ]
        },
        "ModelSortDirection": {
            "name": "ModelSortDirection",
            "values": [
                "ASC",
                "DESC"
            ]
        }
    },
    "nonModels": {
        "Application": {
            "name": "Application",
            "fields": {
                "FeedBacks": {
                    "name": "FeedBacks",
                    "isArray": false,
                    "type": {
                        "nonModel": "ModelFeedBackConnection"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "Interviews": {
                    "name": "Interviews",
                    "isArray": false,
                    "type": {
                        "nonModel": "ModelInterviewConnection"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "_deleted": {
                    "name": "_deleted",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "_lastChangedAt": {
                    "name": "_lastChangedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": true,
                    "attributes": []
                },
                "_version": {
                    "name": "_version",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "candidateID": {
                    "name": "candidateID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "city": {
                    "name": "city",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "comments": {
                    "name": "comments",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "disability": {
                    "name": "disability",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "email1": {
                    "name": "email1",
                    "isArray": false,
                    "type": "AWSEmail",
                    "isRequired": false,
                    "attributes": []
                },
                "email_threads": {
                    "name": "email_threads",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "experience": {
                    "name": "experience",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "feedback": {
                    "name": "feedback",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "first_name": {
                    "name": "first_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "gender": {
                    "name": "gender",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "interviews": {
                    "name": "interviews",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "job": {
                    "name": "job",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "jobID": {
                    "name": "jobID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "last_name": {
                    "name": "last_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "owners": {
                    "name": "owners",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "phone1": {
                    "name": "phone1",
                    "isArray": false,
                    "type": "AWSPhone",
                    "isRequired": false,
                    "attributes": []
                },
                "race": {
                    "name": "race",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "rating": {
                    "name": "rating",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "referer": {
                    "name": "referer",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "source": {
                    "name": "source",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "source_category": {
                    "name": "source_category",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "stage": {
                    "name": "stage",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "supporting_docs": {
                    "name": "supporting_docs",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "tags": {
                    "name": "tags",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "tasks": {
                    "name": "tasks",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "users": {
                    "name": "users",
                    "isArray": false,
                    "type": {
                        "nonModel": "ModelUserApplicationConnection"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "veteran": {
                    "name": "veteran",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ModelFeedBackConnection": {
            "name": "ModelFeedBackConnection",
            "fields": {
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "nonModel": "FeedBack"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "nextToken": {
                    "name": "nextToken",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "startedAt": {
                    "name": "startedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "FeedBack": {
            "name": "FeedBack",
            "fields": {
                "_deleted": {
                    "name": "_deleted",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "_lastChangedAt": {
                    "name": "_lastChangedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": true,
                    "attributes": []
                },
                "_version": {
                    "name": "_version",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "applicationID": {
                    "name": "applicationID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "feedback": {
                    "name": "feedback",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "interviewID": {
                    "name": "interviewID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "rating": {
                    "name": "rating",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "recommend": {
                    "name": "recommend",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "userId": {
                    "name": "userId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ModelInterviewConnection": {
            "name": "ModelInterviewConnection",
            "fields": {
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "nonModel": "Interview"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "nextToken": {
                    "name": "nextToken",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "startedAt": {
                    "name": "startedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Interview": {
            "name": "Interview",
            "fields": {
                "Candidate": {
                    "name": "Candidate",
                    "isArray": false,
                    "type": {
                        "nonModel": "Candidate"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "FeedBacks": {
                    "name": "FeedBacks",
                    "isArray": false,
                    "type": {
                        "nonModel": "ModelFeedBackConnection"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "_deleted": {
                    "name": "_deleted",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "_lastChangedAt": {
                    "name": "_lastChangedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": true,
                    "attributes": []
                },
                "_version": {
                    "name": "_version",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "applicationID": {
                    "name": "applicationID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "endDate": {
                    "name": "endDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "feed_back_status": {
                    "name": "feed_back_status",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "interview_status": {
                    "name": "interview_status",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "interviewer": {
                    "name": "interviewer",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "location": {
                    "name": "location",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "startDate": {
                    "name": "startDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "Candidate": {
            "name": "Candidate",
            "fields": {
                "Applications": {
                    "name": "Applications",
                    "isArray": false,
                    "type": {
                        "nonModel": "ModelApplicationConnection"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "_deleted": {
                    "name": "_deleted",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "_lastChangedAt": {
                    "name": "_lastChangedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": true,
                    "attributes": []
                },
                "_version": {
                    "name": "_version",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "city": {
                    "name": "city",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "email1": {
                    "name": "email1",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "experience": {
                    "name": "experience",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "feedback": {
                    "name": "feedback",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "first_name": {
                    "name": "first_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "gender": {
                    "name": "gender",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "last_name": {
                    "name": "last_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "owners": {
                    "name": "owners",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "phone1": {
                    "name": "phone1",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "race": {
                    "name": "race",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "rating": {
                    "name": "rating",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "ModelApplicationConnection": {
            "name": "ModelApplicationConnection",
            "fields": {
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "nonModel": "Application"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "nextToken": {
                    "name": "nextToken",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "startedAt": {
                    "name": "startedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ModelUserApplicationConnection": {
            "name": "ModelUserApplicationConnection",
            "fields": {
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "nonModel": "UserApplication"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "nextToken": {
                    "name": "nextToken",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "startedAt": {
                    "name": "startedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "UserApplication": {
            "name": "UserApplication",
            "fields": {
                "_deleted": {
                    "name": "_deleted",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "_lastChangedAt": {
                    "name": "_lastChangedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": true,
                    "attributes": []
                },
                "_version": {
                    "name": "_version",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "application": {
                    "name": "application",
                    "isArray": false,
                    "type": {
                        "nonModel": "Application"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "applicationID": {
                    "name": "applicationID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "user": {
                    "name": "user",
                    "isArray": false,
                    "type": {
                        "nonModel": "User"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "userID": {
                    "name": "userID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "User": {
            "name": "User",
            "fields": {
                "UserApplicationsOwned": {
                    "name": "UserApplicationsOwned",
                    "isArray": false,
                    "type": {
                        "nonModel": "ModelUserApplicationConnection"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "UserJobsOwned": {
                    "name": "UserJobsOwned",
                    "isArray": false,
                    "type": {
                        "nonModel": "ModelUserJobConnection"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "_deleted": {
                    "name": "_deleted",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "_lastChangedAt": {
                    "name": "_lastChangedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": true,
                    "attributes": []
                },
                "_version": {
                    "name": "_version",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "applications": {
                    "name": "applications",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "city": {
                    "name": "city",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "company_id": {
                    "name": "company_id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "email1": {
                    "name": "email1",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "first_name": {
                    "name": "first_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "last_name": {
                    "name": "last_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "phone1": {
                    "name": "phone1",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "rating": {
                    "name": "rating",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "ModelUserJobConnection": {
            "name": "ModelUserJobConnection",
            "fields": {
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "nonModel": "UserJob"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "nextToken": {
                    "name": "nextToken",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "startedAt": {
                    "name": "startedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "UserJob": {
            "name": "UserJob",
            "fields": {
                "_deleted": {
                    "name": "_deleted",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "_lastChangedAt": {
                    "name": "_lastChangedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": true,
                    "attributes": []
                },
                "_version": {
                    "name": "_version",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "job": {
                    "name": "job",
                    "isArray": false,
                    "type": {
                        "nonModel": "Job"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "jobID": {
                    "name": "jobID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "user": {
                    "name": "user",
                    "isArray": false,
                    "type": {
                        "nonModel": "User"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "userID": {
                    "name": "userID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "Job": {
            "name": "Job",
            "fields": {
                "Applications": {
                    "name": "Applications",
                    "isArray": false,
                    "type": {
                        "nonModel": "ModelApplicationConnection"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "_deleted": {
                    "name": "_deleted",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "_lastChangedAt": {
                    "name": "_lastChangedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": true,
                    "attributes": []
                },
                "_version": {
                    "name": "_version",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "benefits": {
                    "name": "benefits",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "companyID": {
                    "name": "companyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "country": {
                    "name": "country",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "currency": {
                    "name": "currency",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "department_code": {
                    "name": "department_code",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "education": {
                    "name": "education",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "employment_type": {
                    "name": "employment_type",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "experience": {
                    "name": "experience",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "industry": {
                    "name": "industry",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "is_remote": {
                    "name": "is_remote",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "job_function": {
                    "name": "job_function",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "job_title": {
                    "name": "job_title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "keywords": {
                    "name": "keywords",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "published_time": {
                    "name": "published_time",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "requirements": {
                    "name": "requirements",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "salary_from": {
                    "name": "salary_from",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "salary_to": {
                    "name": "salary_to",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "sub_function": {
                    "name": "sub_function",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "tags": {
                    "name": "tags",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "users": {
                    "name": "users",
                    "isArray": false,
                    "type": {
                        "nonModel": "ModelUserJobConnection"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "zip_code": {
                    "name": "zip_code",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Company": {
            "name": "Company",
            "fields": {
                "Jobs": {
                    "name": "Jobs",
                    "isArray": false,
                    "type": {
                        "nonModel": "ModelJobConnection"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "User": {
                    "name": "User",
                    "isArray": false,
                    "type": {
                        "nonModel": "User"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "_deleted": {
                    "name": "_deleted",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "_lastChangedAt": {
                    "name": "_lastChangedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": true,
                    "attributes": []
                },
                "_version": {
                    "name": "_version",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "company_name": {
                    "name": "company_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "plan": {
                    "name": "plan",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "ModelJobConnection": {
            "name": "ModelJobConnection",
            "fields": {
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "nonModel": "Job"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "nextToken": {
                    "name": "nextToken",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "startedAt": {
                    "name": "startedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "EmailThreads": {
            "name": "EmailThreads",
            "fields": {
                "_deleted": {
                    "name": "_deleted",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "_lastChangedAt": {
                    "name": "_lastChangedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": true,
                    "attributes": []
                },
                "_version": {
                    "name": "_version",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "PrivateNote": {
            "name": "PrivateNote",
            "fields": {
                "_deleted": {
                    "name": "_deleted",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "_lastChangedAt": {
                    "name": "_lastChangedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": true,
                    "attributes": []
                },
                "_version": {
                    "name": "_version",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "content": {
                    "name": "content",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "owner": {
                    "name": "owner",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "Task": {
            "name": "Task",
            "fields": {
                "_deleted": {
                    "name": "_deleted",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "_lastChangedAt": {
                    "name": "_lastChangedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": true,
                    "attributes": []
                },
                "_version": {
                    "name": "_version",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "assigned_to": {
                    "name": "assigned_to",
                    "isArray": false,
                    "type": {
                        "nonModel": "User"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "due_date": {
                    "name": "due_date",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "ModelCandidateConnection": {
            "name": "ModelCandidateConnection",
            "fields": {
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "nonModel": "Candidate"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "nextToken": {
                    "name": "nextToken",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "startedAt": {
                    "name": "startedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ModelCompanyConnection": {
            "name": "ModelCompanyConnection",
            "fields": {
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "nonModel": "Company"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "nextToken": {
                    "name": "nextToken",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "startedAt": {
                    "name": "startedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ModelEmailThreadsConnection": {
            "name": "ModelEmailThreadsConnection",
            "fields": {
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "nonModel": "EmailThreads"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "nextToken": {
                    "name": "nextToken",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "startedAt": {
                    "name": "startedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ModelPrivateNoteConnection": {
            "name": "ModelPrivateNoteConnection",
            "fields": {
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "nonModel": "PrivateNote"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "nextToken": {
                    "name": "nextToken",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "startedAt": {
                    "name": "startedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ModelTaskConnection": {
            "name": "ModelTaskConnection",
            "fields": {
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "nonModel": "Task"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "nextToken": {
                    "name": "nextToken",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "startedAt": {
                    "name": "startedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ModelUserConnection": {
            "name": "ModelUserConnection",
            "fields": {
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "nonModel": "User"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "nextToken": {
                    "name": "nextToken",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "startedAt": {
                    "name": "startedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
    "version": "a8967e1287d0326a8f87fe9cae978b6d"
};