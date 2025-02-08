import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'UMURAVA EDTECH API',
        version: '1.0.0',
        description: 'This is Umurava edtech API documentation',
    },
    servers: [
        {
            url: 'http://localhost:5000/api',
            description: 'Development server',
        },
        {
            url: 'https://umurava-edtech.onrender.com/api-docs',
            description: 'Production server',
        },
    ],
    components: {
        schemas: {
            Challenge: {
                type: 'object',
                required: [
                    'challengeTitle',
                    'challengeDeadline',
                    'challengeDuration',
                    'moneyPrize',
                    'contactEmail',
                    'projectDescription',
                    'projectBrief',
                    'projectDescriptionTasks',
                    'status',
                    'levels',
                    'skills',
                    'category'
                ],
                properties: {
                    _id: {
                        type: 'string',
                        description: 'Unique identifier for the challenge',
                        example: '65d43a4f9c8d4b0012ef8a9b'
                    },
                    challengeTitle: {
                        type: 'string',
                        description: 'Title of the challenge',
                        example: 'Frontend UI Challenge'
                    },
                    challengeDeadline: {
                        type: 'string',
                        format: 'date',
                        description: 'Deadline for the challenge',
                        example: '2025-06-30'
                    },
                    challengeDuration: {
                        type: 'string',
                        description: 'Duration of the challenge',
                        example: '3 weeks'
                    },
                    moneyPrize: {
                        type: 'string',
                        description: 'Prize money for the challenge',
                        example: '$5000'
                    },
                    contactEmail: {
                        type: 'string',
                        format: 'email',
                        description: 'Contact email for the challenge',
                        example: 'contact@umurava.com'
                    },
                    projectDescription: {
                        type: 'string',
                        description: 'Detailed project description',
                        example: 'This project involves building a web-based dashboard...'
                    },
                    projectBrief: {
                        type: 'string',
                        description: 'Short summary of the project',
                        example: 'Create a dashboard UI for an e-learning platform'
                    },
                    projectDescriptionTasks: {
                        type: 'string',
                        description: 'Tasks required to complete the project',
                        example: 'Design UI, Implement API integration, Deploy'
                    },
                    status: {
                        type: 'string',
                        enum: ['open', 'closed', 'ongoing'],
                        description: 'Status of the challenge',
                        example: 'open'
                    },
                    levels: {
                        type: 'string',
                        description: 'Experience level required',
                        example: 'Senior'
                    },
                    skills: {
                        type: 'string',
                        description: 'Required skills for the challenge',
                        example: 'Frontend, UI/UX'
                    },
                    category: {
                        type: 'string',
                        description: 'Category of the challenge',
                        example: 'Web design'
                    },
                    createdAt: {
                        type: 'string',
                        format: 'date-time',
                        description: 'Timestamp when the challenge was created'
                    },
                    updatedAt: {
                        type: 'string',
                        format: 'date-time',
                        description: 'Timestamp when the challenge was last updated'
                    }
                }
            },
            Participant: {
                type: 'object',
                required: [
                    'challengeId',
                    'teamLeader',
                    'teamLeader.fullName',
                    'teamLeader.email',
                    'teamLeader.phoneNumber',
                ],
                properties: {
                    _id: {
                        type: 'string',
                        description: 'Unique identifier for the participant',
                        example: '65d43a4f9c8d4b0012ef8a9c'
                    },
                    challengeId: {
                        type: 'string',
                        description: 'Reference to the related challenge',
                        example: '65d43a4f9c8d4b0012ef8a9b'
                    },
                    teamLeader: {
                        type: 'object',
                        required: ['fullName', 'email', 'phoneNumber'],
                        properties: {
                            fullName: {
                                type: 'string',
                                description: 'Full name of the team leader',
                                example: 'John Doe'
                            },
                            email: {
                                type: 'string',
                                format: 'email',
                                description: 'Email address of the team leader',
                                example: 'johndoe@example.com'
                            },
                            phoneNumber: {
                                type: 'string',
                                description: 'Phone number of the team leader',
                                example: '+1234567890'
                            }
                        }
                    },
                    otherTeamMembers: {
                        type: 'array',
                        items: {
                            type: 'object',
                            required: ['fullName', 'email', 'phoneNumber'],
                            properties: {
                                fullName: {
                                    type: 'string',
                                    description: 'Full name of the team member',
                                    example: 'Jane Smith'
                                },
                                email: {
                                    type: 'string',
                                    format: 'email',
                                    description: 'Email address of the team member',
                                    example: 'janesmith@example.com'
                                },
                                phoneNumber: {
                                    type: 'string',
                                    description: 'Phone number of the team member',
                                    example: '+9876543210'
                                }
                            }
                        }
                    },
                    submittedWork: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                liveProjectLink: {
                                    type: 'string',
                                    description: 'Link to the live project',
                                    example: 'https://example.com/live-project'
                                },
                                resourcesLink: {
                                    type: 'string',
                                    description: 'Link to the project resources',
                                    example: 'https://example.com/resources'
                                }
                            }
                        }
                    },
                    createdAt: {
                        type: 'string',
                        format: 'date-time',
                        description: 'Timestamp when the participant was created'
                    },
                    updatedAt: {
                        type: 'string',
                        format: 'date-time',
                        description: 'Timestamp when the participant was last updated'
                    }
                }
            },
            User: {
                type: 'object',
                required: ['fullName', 'email', 'userRole', 'password'],
                properties: {
                    _id: {
                        type: 'string',
                        description: 'Unique identifier for the user',
                        example: '60c72b2f9b1d8f001f9b1a59'
                    },
                    fullName: {
                        type: 'string',
                        description: 'Full name of the user',
                        example: 'Jane Doe'
                    },
                    email: {
                        type: 'string',
                        format: 'email',
                        description: 'Email address of the user',
                        example: 'jane.doe@example.com'
                    },
                    userRole: {
                        type: 'string',
                        enum: ['talent', 'admin'],
                        description: 'Role of the user in the system',
                        example: 'talent'
                    },
                    password: {
                        type: 'string',
                        description: 'Password for the user',
                        example: 'password123'
                    },
                    createdAt: {
                        type: 'string',
                        format: 'date-time',
                        description: 'Timestamp when the user was created'
                    },
                    updatedAt: {
                        type: 'string',
                        format: 'date-time',
                        description: 'Timestamp when the user was last updated'
                    }
                }
            }
        }
    }
};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
