import Image from "next/image";

import jsLogo from "../../../../public/skill/programming-language/js-logo.png";
import pythonLogo from "../../../../public/skill/programming-language/python-logo.png";
import javaLogo from "../../../../public/skill/programming-language/java-logo.jpg";
import tsLogo from "../../../../public/skill/programming-language/ts-logo.png";

import htmlLogo from "../../../../public/skill/front-end/html-logo.png";
import cssLogo from "../../../../public/skill/front-end/css-logo.png";
import reactLogo from "../../../../public/skill/front-end/react-logo.png";
import nextLogo from "../../../../public/skill/front-end/nextjs-logo.png";

import nestLogo from "../../../../public/skill/back-end/nest-logo.svg";
import expressLogo from "../../../../public/skill/back-end/express-logo.png";
import nodeLogo from "../../../../public/skill/back-end/nodejs-logo.png";

import postgressLogo from "../../../../public/skill/database/postgress-logo.png";
import mongodbLogo from "../../../../public/skill/database/mongodb-logo.png";

import awsLogo from "../../../../public/skill/devops-tool/aws-logo.png";
import dockerLogo from "../../../../public/skill/devops-tool/docker-logo.webp";

export const skillGroups = [
  {
    group: 1,
    name: "Programming Languages",
    skills: [
      {
        src: jsLogo,
        alt: "javascript logo",
        detail: (
          <div>
            <ul>
              <li>
                <span style={{ fontWeight: 700 }}>Syntax and Operators:</span>
                <span> </span>Understand the basic syntax, including variables,
                data types, operators, and control flow (if/else, loops, switch,
                etc.).
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>Functions:</span> Mastery of
                functions, including function expressions, arrow functions,
                higher-order functions, and closures.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>
                  Asynchronous Programming:
                </span>
                Understanding callbacks, Promises, async/await, and how to
                handle asynchronous operations effectively.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>Error Handling:</span>{" "}
                Proficiency in using try/catch blocks and error handling
                patterns.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>
                  DOM Traversal and Manipulation:
                </span>{" "}
                Selecting and manipulating DOM elements using vanilla
                JavaScript.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>Classes:</span> Knowledge of
                ES6+ class syntax, constructors, methods, and inheritance using
                extends.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>
                  Promises and async/await:
                </span>{" "}
                Advanced usage of Promises, chaining, error handling, and
                converting callbacks to Promises.
              </li>
            </ul>
          </div>
        ),
      },
      {
        src: pythonLogo,
        alt: "python logo",
        detail: (
          <div>
            <ul>
              <li>
                <span style={{ fontWeight: 700 }}>Syntax and Operators:</span>
                <span> </span>Understand the basic syntax, including variables,
                data types, operators, and control flow (if/else, loops, etc.).
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>Functions:</span> Defining and
                using functions, understanding parameters, return values, and
                lambda functions.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>REST APIs:</span> REST APIs:
                Building RESTful APIs using Django REST Framework.
              </li>
            </ul>
          </div>
        ),
      },
      {
        src: javaLogo,
        alt: "java logo",
        detail: (
          <div>
            <ul>
              <li>
                <span style={{ fontWeight: 700 }}>Syntax and Operators:</span>
                <span> </span>Understand the basic syntax, including variables,
                data types, operators, and control flow (if/else, loops, etc.).
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>Classes and Objects:</span>{" "}
                Creating and using classes, understanding constructors, and
                initializing objects.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>Lists, Sets, and Maps:</span>{" "}
                Using core interfaces like List, Set, and Map, and their
                implementations (e.g., ArrayList, HashSet, HashMap).
              </li>
            </ul>
          </div>
        ),
      },
      {
        src: tsLogo,
        alt: "typescript logo",
        detail: (
          <div>
            <ul>
              <li>
                <span style={{ fontWeight: 700 }}>
                  Strong Typing and Static Analysis:
                </span>
                <span> </span>Proficient in leveraging TypeScript’s static type
                system to catch errors at compile time and improve code quality,
                including defining and using types, interfaces, and enums.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>Advanced Type Features:</span>{" "}
                Experienced with advanced TypeScript features such as generics,
                type inference, and conditional types to create flexible and
                reusable components and functions.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>
                  Integration with JavaScript Libraries:
                </span>{" "}
                Capable of integrating TypeScript with existing JavaScript
                libraries and frameworks, including adding type definitions and
                ensuring compatibility with tools like React, Node.js, and
                Express.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>Codebase Refactoring:</span>{" "}
                Skilled in refactoring existing JavaScript codebases to
                TypeScript to enhance maintainability, scalability, and
                robustness of the code.
              </li>
            </ul>
          </div>
        ),
      },
    ],
  },
  {
    group: 2,
    name: "Front End",
    skills: [
      {
        src: htmlLogo,
        alt: "html logo",
        detail: (
          <div>
            <ul>
              <li>
                <span style={{ fontWeight: 700 }}>Proficient in HTML5:</span>
                <span> </span> Capable of creating well-structured, semantic
                HTML documents using appropriate tags and attributes for clear
                content hierarchy and enhanced accessibility.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>Responsive Design:</span>
                <span> </span> Skilled in developing responsive web pages with
                mobile-friendly layouts, leveraging the viewport meta tag,
                responsive images, and integrating HTML with CSS media queries.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>Form Development:</span>
                <span> </span> Experienced in designing accessible forms,
                implementing various input types, and using HTML5 validation
                techniques to ensure user-friendly data collection.
              </li>
            </ul>
          </div>
        ),
      },
      {
        src: cssLogo,
        alt: "css logo",
        detail: (
          <div>
            <ul>
              <li>
                <span style={{ fontWeight: 700 }}>
                  Advanced CSS3 Proficiency:
                </span>
                <span> </span> Expertise in styling web pages using CSS3,
                including layouts, typography, and color schemes, to create
                visually appealing and user-friendly designs.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>Responsive Design:</span>
                <span> </span> Skilled in crafting responsive designs with media
                queries, flexible grid layouts, and fluid images to ensure
                optimal display across various devices and screen sizes.
              </li>
            </ul>
          </div>
        ),
      },
      {
        src: reactLogo,
        alt: "react logo",
        detail: (
          <div>
            <ul>
              <li>
                <span style={{ fontWeight: 700 }}>
                  Advanced React Development:
                </span>
                <span> </span> Proficient in building dynamic, high-performance
                user interfaces using React.js, including functional and class
                components.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>Routing and Navigation:</span>
                <span> </span> Expertise in implementing client-side routing and
                navigation using React Router, including dynamic routing and
                nested routes.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>Form Handling:</span>
                <span> </span> Capable of managing complex form states and
                validations using libraries such as Formik or React Hook Form.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>State Management:</span>
                <span> </span> Experienced with state management libraries and
                patterns, including React’s built-in useState, useReducer, and
                context API.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>React Hooks:</span>
                <span> </span> Skilled in utilizing React Hooks (useEffect,
                useContext, useMemo, useCallback, etc.) to manage side effects,
                context, and performance optimizations.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>Integration with APIs:</span>
                <span> </span> Capable of integrating React applications with
                RESTful APIs like Axios.
              </li>
            </ul>
          </div>
        ),
      },
      {
        src: nextLogo,
        alt: "next logo",
        detail: (
          <div>
            <ul>
              <li>
                <span style={{ fontWeight: 700 }}>
                  Advanced Next.js Development:
                </span>
                <span> </span> Proficient in building server-rendered and
                statically generated React applications using Next.js, including
                understanding its file-based routing system and API routes.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>
                  Server-Side Rendering (SSR):
                </span>
                <span> </span>Experienced in implementing server-side rendering
                to enhance SEO and performance, using getServerSideProps for
                dynamic data fetching on each request.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>
                  Static Site Generation (SSG):
                </span>
                <span> </span> Skilled in using static site generation with
                getStaticProps and getStaticPaths for pre-rendering pages at
                build time, optimizing performance and load times.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>API Routes:</span>
                <span> </span> Capable of creating API endpoints within Next.js
                applications using the /api directory, handling serverless
                functions and backend logic.
              </li>
            </ul>
          </div>
        ),
      },
    ],
  },
  {
    group: 3,
    name: "Back End",
    skills: [
      {
        src: nodeLogo,
        alt: "nodeJS logo",
        detail: (
          <div>
            <ul>
              <li>
                <span style={{ fontWeight: 700 }}>
                  Server-Side Development:
                </span>
                <span> </span> Proficient in building scalable server-side
                applications using Node.js, leveraging its asynchronous,
                event-driven architecture.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>Core Node.js Modules:</span>
                <span> </span>Proficient in using built-in Node.js modules such
                as http, fs (file system), path, events, and stream to build
                server-side applications and manage low-level operations.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>
                  Asynchronous Programming:
                </span>
                <span> </span> Skilled in working with Node.js's asynchronous
                nature using callbacks, promises, and async/await for efficient
                I/O operations and concurrent processing.
              </li>
            </ul>
          </div>
        ),
      },
      {
        src: expressLogo,
        alt: "express logo",
        detail: (
          <div>
            <ul>
              <li>
                <span style={{ fontWeight: 700 }}>API Development:</span>
                <span> </span> Proficient in designing and implementing RESTful
                APIs using Express.js, including handling routes, middleware,
                and HTTP methods (GET, POST, PUT, DELETE).
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>
                  Middleware Implementation:
                </span>
                <span> </span>Experienced in using and creating custom
                middleware functions to handle tasks such as logging,
                authentication, error handling, and request validation.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>
                  Request and Response Handling:
                </span>
                <span> </span> Capable of managing HTTP requests and responses,
                including handling query parameters, request bodies, and
                response status codes.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>Database Integration:</span>
                <span> </span> Skilled in connecting Express.js applications to
                various databases, including relational databases (e.g.,
                PostgreSQL, MySQL) and NoSQL databases (e.g., MongoDB) using
                ORM/ODM libraries like Sequelize or Mongoose.
              </li>
            </ul>
          </div>
        ),
      },
      {
        src: nestLogo,
        alt: "nest logo",
        detail: (
          <div>
            <ul>
              <li>
                <span style={{ fontWeight: 700 }}>
                  Advanced NestJS Development:
                </span>
                <span> </span> Proficient in building scalable and maintainable
                server-side applications using NestJS, leveraging its modular
                architecture and TypeScript support.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>Dependency Injection:</span>
                <span> </span>Skilled in utilizing NestJS’s dependency injection
                system to manage and inject services, repositories, and other
                components across the application.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>Database Integration:</span>
                <span> </span> Experienced in integrating databases with NestJS
                using ORMs like TypeORM or Sequelize, including managing
                entities and repositories.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>RESTful APIs:</span>
                <span> </span> Skilled in building and managing RESTful APIs as
                well as implementing GraphQL endpoints using NestJS’s built-in
                support or additional libraries.
              </li>
            </ul>
          </div>
        ),
      },
      {
        src: nextLogo,
        alt: "next logo",
        detail: (
          <div>
            <ul>
              <li>
                <span style={{ fontWeight: 700 }}>
                  Advanced Next.js Development:
                </span>
                <span> </span> Proficient in building server-rendered and
                statically generated React applications using Next.js, including
                understanding its file-based routing system and API routes.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>
                  Server-Side Rendering (SSR):
                </span>
                <span> </span>Experienced in implementing server-side rendering
                to enhance SEO and performance, using getServerSideProps for
                dynamic data fetching on each request.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>
                  Static Site Generation (SSG):
                </span>
                <span> </span> Skilled in using static site generation with
                getStaticProps and getStaticPaths for pre-rendering pages at
                build time, optimizing performance and load times.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>API Routes:</span>
                <span> </span> Capable of creating API endpoints within Next.js
                applications using the /api directory, handling serverless
                functions and backend logic.
              </li>
            </ul>
          </div>
        ),
      },
    ],
  },
  {
    group: 4,
    name: "Database",
    skills: [
      {
        src: postgressLogo,
        alt: "postgress logo",
        detail: (
          <div>
            <ul>
              <li>
                <span style={{ fontWeight: 700 }}>
                  Schema Design and Management:
                </span>
                <span> </span> Experienced in designing and managing relational
                database schemas, including table creation, constraints,
                indexes, and relationships.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>
                  Data Integrity and Constraints:
                </span>
                <span> </span>Knowledgeable in implementing data integrity
                through constraints such as primary keys, foreign keys, unique
                constraints, and check constraints.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>Data Import and Export:</span>
                <span> </span> Experienced in importing and exporting data using
                PostgreSQL tools and utilities such as pg_dump, pg_restore, and
                COPY.
              </li>
            </ul>
          </div>
        ),
      },
      {
        src: mongodbLogo,
        alt: "mongoDB logo",
        detail: (
          <div>
            <ul>
              <li>
                <span style={{ fontWeight: 700 }}>Data Modeling:</span>
                <span> </span> Experienced in designing and implementing data
                models using MongoDB’s document-based approach, including schema
                design, embedding, and referencing strategies.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>CRUD Operations:</span>
                <span> </span>Skilled in performing CRUD (Create, Read, Update,
                Delete) operations using MongoDB’s query language, including
                complex queries and aggregation pipelines.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>Aggregation Framework:</span>
                <span> </span> Proficient in using MongoDB’s aggregation
                framework for data transformation, analysis, and reporting,
                including stages like $match, $group, $sort, and $lookup.
              </li>
            </ul>
          </div>
        ),
      },
    ],
  },
  {
    group: 5,
    name: "Devops & Tools",
    skills: [
      {
        src: dockerLogo,
        alt: "docker logo",
        detail: (
          <div>
            <ul>
              <li>
                <span style={{ fontWeight: 700 }}>Docker Basics:</span>
                <span> </span>Proficient in using Docker for containerizing
                applications, including creating, managing, and running Docker
                containers to ensure consistent and isolated environments.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>Docker Images:</span>
                <span> </span> Skilled in building Docker images from
                Dockerfiles, optimizing image size, and managing image versions
                using Docker Hub or other container registries.
              </li>
            </ul>
          </div>
        ),
      },
      {
        src: awsLogo,
        alt: "aws logo",
        detail: (
          <div>
            <ul>
              <li>
                <span style={{ fontWeight: 700 }}>VPC:</span>
                <span> </span> Proficient in designing and creating a Virtual
                Private Cloud (VPC) in AWS, including defining IP address
                ranges, setting up subnets (public and private), and configuring
                route tables and internet gateways.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>EC2:</span>
                <span> </span>Experienced in launching, configuring, and
                managing EC2 instances, including selecting instance types,
                managing EBS volumes, and configuring security groups.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>Lambda:</span>
                <span> </span>Skilled in creating and managing serverless
                applications using AWS Lambda, including setting up triggers,
                integrating with other AWS services, and optimizing function
                performance.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>S3:</span>
                <span> </span> Proficient in using Amazon S3 for object storage,
                including creating and managing buckets, configuring bucket
                policies, and implementing lifecycle policies and versioning.
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>CloudWatch:</span>
                <span> </span> Skilled in using Amazon CloudWatch for monitoring
                AWS resources and applications, including setting up alarms,
                dashboards, and logs for performance and troubleshooting.
              </li>
            </ul>
          </div>
        ),
      },
    ],
  },
];
