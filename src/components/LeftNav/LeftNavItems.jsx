/*
  use this file to create the left nav information architecture.

  Example code for parent, child, second level parent, second level child:

  {
    name: 'Title of Parent drawer: Getting started',
    parentSlug: 'Parent path: getting-started',
    url: 'This is the page that the user should land on when clicking on the parent drawer. Can be any url: /docs/getting-started/introduction/',
    subMenuItems1: [
      {
        name: 'first level child: Introduction',
        url: 'path to the first level child: /docs/getting-started/introduction/',
      },
      {
        name: 'This is a first level child that is also the second level parent drawer title: Capturing Request Data',
        subParentSlug: 'second parent path: capturing-request-data',
        slug: 'Page that user should land on when clicking on second level parent. Can be any url: /docs/sending-requests/capturing-request-data/capturing-http-requests/',
        subMenuItems2: [
          {
            name: 'second level child: Capturing HTTP requests',
            url: 'path to second level child: /docs/sending-requests/capturing-request-data/capturing-http-requests/',
          },
        ],
      },
    ],
  }
*/


export const leftNavItems = [
  {
    name: 'Introduction',
    parentSlug: 'introduction',
    url: '/docs/introduction/overview/',
    subMenuItems1: [
      {
        name: 'Overview',
        url: '/docs/introduction/overview/',
      },
      {
        name: 'Resources',
        url: '/docs/introduction/resources/',
      },
      {
        name: 'Feedback',
        url: '/docs/introduction/feedback/',
      },
      {
        name: 'Troubleshooting',
        url: '/docs/introduction/troubleshooting-inapp/',
      },
    ],
  },
  {
    name: 'Get started',
    parentSlug: 'getting-started',
    url: '/docs/getting-started/overview/',
    subMenuItems1: [
      {
        name: 'Welcome',
        url: '/docs/getting-started/overview/',
      },
      {
        name: 'Postman first steps',
        subParentSlug: '/docs/getting-started/first-steps/',
        slug: '/docs/getting-started/first-steps/overview/',
        subMenuItems2: [
          {
            name: 'Overview',
            url: '/docs/getting-started/first-steps/overview/',
          },
          {
            name: 'Download',
            url: '/docs/getting-started/first-steps/get-postman/',
          },
          {
            name: 'Send a request',
            url: '/docs/getting-started/first-steps/sending-the-first-request/',
          },
          {
            name: 'Write a test',
            url: '/docs/getting-started/first-steps/write-your-first-test/',
          },
          {
            name: 'Sign in',
            url: '/docs/getting-started/first-steps/sign-in-to-postman/',
          },
          {
            name: 'Create a collection',
            url: '/docs/getting-started/first-steps/creating-the-first-collection/',
          },
          {
            name: 'Create a workspace',
            url: '/docs/getting-started/first-steps/creating-your-first-workspace/',
          },
          {
            name: 'Explore the Public API Network',
            url: '/docs/getting-started/first-steps/exploring-public-api-network/',
          },
          {
            name: 'Next steps',
            url: '/docs/getting-started/first-steps/next-steps/',
          },
        ],
      },
      {
        name: 'Postman basics',
        subParentSlug: '/docs/getting-started/basics/',
        slug: '/docs/getting-started/basics/postman-basics/',
        subMenuItems2: [
          {
            name: 'Overview',
            url: '/docs/getting-started/basics/postman-basics/',
          },
          {
            name: 'The Postman interface',
            url: '/docs/getting-started/basics/navigating-postman/',
          },
          {
            name: 'The Postman Agent',
            url: '/docs/getting-started/basics/about-postman-agent/',
          },
          {
            name: 'Postbot',
            url: '/docs/getting-started/basics/about-postbot/',
          },
          {
            name: 'Postman VS Code extension',
            url: '/docs/getting-started/basics/about-vs-code-extension/',
          },
          {
            name: 'Collaboration',
            url: '/docs/getting-started/basics/work-with-your-team/',
          },
          {
            name: 'Syncing',
            url: '/docs/getting-started/basics/syncing/',
          },
          {
            name: 'Lightweight API Client',
            url: '/docs/getting-started/basics/using-api-client/',
          },
          {
            name: 'Scratch Pad',
            url: '/docs/getting-started/basics/using-scratch-pad/',
          },
        ],
      },
      {
        name: 'Install and configure',
        subParentSlug: '/docs/getting-started/installation/',
        slug: '/docs/getting-started/installation/install-overview/',
        subMenuItems2: [
          {
            name: 'Overview',
            url: '/docs/getting-started/installation/install-overview/',
          },
          {
            name: 'Installation and updates',
            url: '/docs/getting-started/installation/installation-and-updates/',
          },
          {
            name: 'Settings',
            url: '/docs/getting-started/installation/settings/',
          },
          {
            name: 'Account management',
            url: '/docs/getting-started/installation/postman-account/',
          },
          {
            name: 'Profile customization',
            url: '/docs/getting-started/installation/postman-profile/',
          },
          {
            name: 'Proxy server configuration',
            url: '/docs/getting-started/installation/proxy/',
          },
        ],

      },
      {
        name: 'Import and export data',
        subParentSlug: 'importing-and-exporting',
        slug: '/docs/getting-started/importing-and-exporting/importing-and-exporting-overview/',
        subMenuItems2: [
          {
            name: 'Overview',
            url: '/docs/getting-started/importing-and-exporting/importing-and-exporting-overview/',
          },
          {
            name: 'Data import methods',
            url: '/docs/getting-started/importing-and-exporting/importing-data/',
          },
          {
            name: 'SoapUI import',
            url: '/docs/getting-started/importing-and-exporting/importing-from-soapui/',
          },
          {
            name: 'Hoppscotch import',
            url: '/docs/getting-started/importing-and-exporting/importing-from-hoppscotch/',
          },
          {
            name: 'Insomnia import',
            url: '/docs/getting-started/importing-and-exporting/importing-from-insomnia/',
          },
          {
            name: 'Thunder Client import',
            url: '/docs/getting-started/importing-and-exporting/importing-from-thunder-client/',
          },
          {
            name: 'Git import',
            url: '/docs/getting-started/importing-and-exporting/importing-from-git/',
          },
          {
            name: 'New Relic import',
            url: '/docs/getting-started/importing-and-exporting/importing-from-new-relic/',
          },
          {
            name: 'cURL command import',
            url: '/docs/getting-started/importing-and-exporting/importing-curl-commands/',
          },
          {
            name: 'Swagger API import',
            url: '/docs/getting-started/importing-and-exporting/importing-from-swagger/',
          },
          {
            name: 'Data export',
            url: '/docs/getting-started/importing-and-exporting/exporting-data/',
          },
        ],
      },
    ],
  },
  {
    name: 'Send requests',
    parentSlug: 'sending-requests',
    url: '/docs/sending-requests/requests/',
    subMenuItems1: [
      {
        name: 'Overview',
        url: '/docs/sending-requests/requests/',
      },
      {
        name: 'Create requests',
        subParentSlug: 'create-requests',
        slug: '/docs/sending-requests/create-requests/create-requests/',
        subMenuItems2: [
          {
            name: 'Overview',
            url: '/docs/sending-requests/create-requests/create-requests/',
          },
          {
            name: 'Request basics',
            url: '/docs/sending-requests/create-requests/request-basics/',
          },
          {
            name: 'Parameters and body data',
            url: '/docs/sending-requests/create-requests/parameters/',
          },
          {
            name: 'Request headers',
            url: '/docs/sending-requests/create-requests/headers/',
          },
          {
            name: 'Test data storage',
            url: '/docs/sending-requests/create-requests/test-data/',
          },
          {
            name: 'Customize request settings',
            url: '/docs/sending-requests/create-requests/request-settings/',
          },
          {
            name: 'Group requests in collections',
            url: '/docs/sending-requests/create-requests/intro-to-collections/',
          },
          {
            name: 'Generate client code',
            url: '/docs/sending-requests/create-requests/generate-code-snippets/',
          }
        ],
      },
      {
        name: 'Authentication and authorization',
        subParentSlug: 'authorization',
        slug: '/docs/sending-requests/authorization/authorization/',
        subMenuItems2: [
          {
            name: 'Overview',
            url: '/docs/sending-requests/authorization/authorization/',
          },
          {
            name: 'Add certificates',
            url: '/docs/sending-requests/authorization/certificates/',
          },
          {
            name: 'Request authorization',
            url: '/docs/sending-requests/authorization/specifying-authorization-details/',
          },
          {
            name: 'Public API authorization',
            url: '/docs/sending-requests/authorization/authentication-for-public-apis/',
          },
          {
            name: 'Authorization types',
            url: '/docs/sending-requests/authorization/authorization-types/',
          },
          {
            name: 'Digest',
            url: '/docs/sending-requests/authorization/digest-auth/',
          },
          {
            name: 'OAuth 1.0',
            url: '/docs/sending-requests/authorization/oauth-10/',
          },
          {
            name: 'OAuth 2.0',
            url: '/docs/sending-requests/authorization/oauth-20/',
          },
          {
            name: 'Hawk',
            url: '/docs/sending-requests/authorization/hawk-authentication/',
          },
          {
            name: 'AWS Signature',
            url: '/docs/sending-requests/authorization/aws-signature/',
          },
          {
            name: 'NTLM',
            url: '/docs/sending-requests/authorization/ntlm-authentication/',
          },
          {
            name: 'Akamai Edgegrid',
            url: '/docs/sending-requests/authorization/akamai-edgegrid/',
          },
          {
            name: 'ASAP (Atlassian)',
            url: '/docs/sending-requests/authorization/atlassian/',
          },
        ],
      },
      {
        name: 'Response data and cookies',
        subParentSlug: 'response-data',
        slug: '/docs/sending-requests/response-data/response-data/',
        subMenuItems2: [
          {
            name: 'Overview',
            url: '/docs/sending-requests/response-data/response-data/',
          },
          {
            name: 'API response structure',
            url: '/docs/sending-requests/response-data/responses/',
          },
          {
            name: 'Visualize request responses',
            url: '/docs/sending-requests/response-data/visualizer/',
          },
          {
            name: 'Create request response examples',
            url: '/docs/sending-requests/response-data/examples/',
          },
          {
            name: 'Create and send cookies',
            url: '/docs/sending-requests/response-data/cookies/',
          },
          {
            name: 'Debug requests',
            url: '/docs/sending-requests/response-data/troubleshooting-api-requests/',
          },
        ]
      },
      {
        name: 'Variables and environments',
        subParentSlug: 'variables',
        slug: '/docs/sending-requests/variables/variables-intro/',
        subMenuItems2: [
          {
            name: 'Overview',
            url: '/docs/sending-requests/variables/variables-intro/',
          },
          {
            name: 'Store values in variables',
            url: '/docs/sending-requests/variables/variables/',
          },
          {
            name: 'Create and use environments',
            url: '/docs/sending-requests/variables/managing-environments/',
          },
          {
            name: 'Set environment variables',
            url: '/docs/sending-requests/variables/environment-variables/',
          },
          {
            name: 'Manage team environments',
            url: '/docs/sending-requests/variables/team-environments/',
          },
        ]
      },
      {
        name: 'Capture API traffic',
        subParentSlug: 'capturing-request-data',
        slug: '/docs/sending-requests/capturing-request-data/capture-overview/',
        subMenuItems2: [
          {
            name: 'Overview',
            url: '/docs/sending-requests/capturing-request-data/capture-overview/',
          },
          {
            name: 'Capture traffic with Postman proxy',
            url: '/docs/sending-requests/capturing-request-data/capture-with-proxy/',
          },
          {
            name: 'Capture HTTP requests',
            url: '/docs/sending-requests/capturing-request-data/capturing-http-requests/',
          },
          {
            name: 'Capture HTTPS traffic',
            url: '/docs/sending-requests/capturing-request-data/capturing-https-traffic/',
          },
          {
            name: 'Capture traffic with Postman Interceptor',
            url: '/docs/sending-requests/capturing-request-data/interceptor/',
          },
          {
            name: 'Sync cookies',
            url: '/docs/sending-requests/capturing-request-data/syncing-cookies/',
          },
        ],
      },
      {
        name: 'GraphQL',
        subParentSlug: 'graphql',
        slug: '/docs/sending-requests/graphql/graphql-overview/',
        subMenuItems2: [
          {
            name: 'Overview',
            url: '/docs/sending-requests/graphql/graphql-overview/',
          },
          {
            name: 'Create GraphQL requests',
            url: '/docs/sending-requests/graphql/graphql-client-first-request/',
          },
          {
            name: 'The GraphQL interface',
            url: '/docs/sending-requests/graphql/graphql-client-interface/',
          },
          {
            name: 'Other GraphQL requests',
            url: '/docs/sending-requests/graphql/graphql-http/',
          },
        ]
      },
      {
        name: 'gRPC',
        subParentSlug: 'grpc',
        slug: '/docs/sending-requests/grpc/grpc-client-overview/',
        subMenuItems2: [
          {
            name: 'Overview',
            url: '/docs/sending-requests/grpc/grpc-client-overview/',
          },
          {
            name: 'Create a gRPC request',
            url: '/docs/sending-requests/grpc/grpc-request-interface/',
          },
          {
            name: 'Invoke a gRPC request',
            url: '/docs/sending-requests/grpc/first-grpc-request/',
          },
          {
            name: 'Manage gRPC service definitions',
            url: '/docs/sending-requests/grpc/using-service-definition/',
          },
          {
            name: 'Test gRPC requests',
            url: '/docs/sending-requests/grpc/scripting-in-grpc-request/',
          },
          {
            name: 'Write tests for gRPC requests',
            url: '/docs/sending-requests/grpc/test-examples/',
          },
          {
            name: 'Postman Sandbox API',
            url: '/docs/sending-requests/grpc/postman-sandbox-api/',
          },
          {
            name: 'gRPC mock servers',
            url: '/docs/sending-requests/grpc/using-grpc-mock/',
          },
          {
            name: 'gRPC request-response examples',
            url: '/docs/sending-requests/grpc/using-grpc-examples/',
          },
          {
            name: 'gRPC protobuf types',
            url: '/docs/sending-requests/grpc/understanding-grpc-types/',
          },
        ],
      },
      {
        name: 'WebSocket',
        subParentSlug: 'websocket',
        slug: '/docs/sending-requests/websocket/websocket-overview/',
        subMenuItems2: [
          {
            name: 'Overview',
            url: '/docs/sending-requests/websocket/websocket-overview/'
          },
          {
            name: 'Create a WebSocket request',
            url: '/docs/sending-requests/websocket/create-a-websocket-request/'
          },
          {
            name: 'Create a Socket.IO request',
            url: '/docs/sending-requests/websocket/create-a-socketio-request/'
          },
          {
            name: 'Work with WebSocket messages',
            url: '/docs/sending-requests/websocket/work-with-websocket-messages/'
          },
          {
            name: 'Listen to Socket.IO events',
            url: '/docs/sending-requests/websocket/listen-to-socketio-events/'
          },
          {
            name: 'Use variables in WebSocket requests',
            url: '/docs/sending-requests/websocket/use-variables-with-websocket/'
          },
          {
            name: 'Add details to a WebSocket request',
            url: '/docs/sending-requests/websocket/add-details-websocket/'
          },
          {
            name: 'Save WebSocket requests',
            url: '/docs/sending-requests/websocket/save-websocket-requests/'
          },
          {
            name: 'Document WebSocket requests',
            url: '/docs/sending-requests/websocket/document-websocket-requests/'
          },
          {
            name: 'Troubleshoot WebSocket requests',
            url: '/docs/sending-requests/websocket/troubleshoot-websocket-requests/'
          },
        ],
      },
      {
        name: 'MQTT',
        subParentSlug: 'mqtt-client',
        slug: '/docs/sending-requests/mqtt-client/mqtt-client-overview/',
        subMenuItems2: [
          {
            name: 'Overview',
            url: '/docs/sending-requests/mqtt-client/mqtt-client-overview/'
          },
          {
            name: 'Manage MQTT requests',
            url: '/docs/sending-requests/mqtt-client/mqtt-request-interface/'
          },
          {
            name: 'Create an MQTT request',
            url: '/docs/sending-requests/mqtt-client/first-mqtt-request/'
          },
        ],
      },
      {
        name: 'SOAP',
        subParentSlug: 'soap',
        slug: '/docs/sending-requests/soap/making-soap-requests/',
        subMenuItems2: [
          {
            name: 'Send SOAP requests',
            url: '/docs/sending-requests/soap/making-soap-requests/'
          },
        ],
      },
    ],
  },
  {
    name: 'Write scripts',
    parentSlug: 'writing-scripts',
    url: '/docs/writing-scripts/intro-to-scripts/',
    subMenuItems1: [
      {
        name: 'Overview',
        url: '/docs/writing-scripts/intro-to-scripts/',
      },
      {
        name: 'Write pre-requests scripts',
        url: '/docs/writing-scripts/pre-request-scripts/',
      },
      {
        name: 'Write tests',
        url: '/docs/writing-scripts/test-scripts/',
      },
      {
        name: 'Run tests with monitors',
        url: '/docs/writing-scripts/test-with-monitors/',
      },
      {
        name: 'Scripting reference',
        subParentSlug: 'script-references',
        slug: '/docs/writing-scripts/script-references/script-reference-overview/',
        subMenuItems2: [
          {
            name: 'Overview',
            url: '/docs/writing-scripts/script-references/script-reference-overview/',
          },
          {
            name: 'Script examples',
            url: '/docs/writing-scripts/script-references/test-examples/',
          },
          {
            name: 'Dynamic variables',
            url: '/docs/writing-scripts/script-references/variables-list/',
          },
          {
            name: 'Postman JavaScript reference',
            url: '/docs/writing-scripts/script-references/postman-sandbox-api-reference/',
          },
        ],
      },
    ],
  },
  {
    name: 'Postman Collections',
    parentSlug: 'collections',
    url: '/docs/collections/collections-overview/',
    subMenuItems1: [
      {
        name: 'Overview',
        url: '/docs/collections/collections-overview/',
      },
      {
        name: 'Create and manage collections',
        url: '/docs/collections/using-collections/',
      },
      {
        name: 'Run collections',
        subParentSlug: 'running-collections',
        slug: '/docs/collections/running-collections/running-collections-overview/',
        subMenuItems2: [
          {
            name: 'Overview',
            url: '/docs/collections/running-collections/running-collections-overview/',
          },
          {
            name: 'Collection Runner',
            url: '/docs/collections/running-collections/intro-to-collection-runs/',
          },
          {
            name: 'Automate collection runs',
            url: '/docs/collections/running-collections/scheduling-collection-runs/',
          },
          {
            name: 'View scheduled collection runs',
            url: '/docs/collections/running-collections/viewing-scheduled-collection-runs/',
          },
          {
            name: 'Schedule collection runs with monitors',
            url: '/docs/collections/running-collections/scheduling-collection-runs-monitors/',
          },
          {
            name: 'Trigger collection runs',
            url: '/docs/collections/running-collections/collection-webhooks/',
          },
          {
            name: 'Customize collection run order',
            url: '/docs/collections/running-collections/building-workflows/',
          },
          {
            name: 'Run a collection with imported data',
            url: '/docs/collections/running-collections/working-with-data-files/',
          },
        ],
      },
      {
        name: 'Test API performance',
        subParentSlug: 'performance-testing',
        slug: '/docs/collections/performance-testing/testing-api-performance/',
        subMenuItems2: [
          {
            name: 'Overview',
            url: '/docs/collections/performance-testing/testing-api-performance/',
          },
          {
            name: 'Run a performance test',
            url: '/docs/collections/performance-testing/performance-test-configuration/',
          },
          {
            name: 'View performance test metrics',
            url: '/docs/collections/performance-testing/performance-test-metrics/',
          },
          {
            name: 'Debug performance test errors',
            url: '/docs/collections/performance-testing/performance-test-errors/',
          },
          {
            name: 'Inject data into virtual users',
            url: '/docs/collections/performance-testing/performance-test-data-files/',
          },
        ],
      },
      {
        name: 'Newman CLI',
        subParentSlug: 'using-newman-cli',
        slug: '/docs/collections/using-newman-cli/command-line-integration-with-newman/',
        subMenuItems2: [
          {
            name: 'Run and test collections with Newman CLI',
            url: '/docs/collections/using-newman-cli/command-line-integration-with-newman/',
          },
          {
            name: 'Install and run Newman',
            url: '/docs/collections/using-newman-cli/installing-running-newman/',
          },
          {
            name: 'Newman command reference',
            url: '/docs/collections/using-newman-cli/newman-options/',
          },
          {
            name: 'Upload files with Newman',
            url: '/docs/collections/using-newman-cli/newman-file-uploads/',
          },
          {
            name: 'Use Newman built-in reporters',
            url: '/docs/collections/using-newman-cli/newman-built-in-reporters/',
          },
          {
            name: 'Use Newman external and custom reporters',
            url: '/docs/collections/using-newman-cli/newman-custom-reporters/',
          },
          {
            name: 'Newman with Docker',
            url: '/docs/collections/using-newman-cli/newman-with-docker/',
          },
          {
            name: 'CI with Newman',
            url: '/docs/collections/using-newman-cli/continuous-integration/',
          },
          {
            name: 'Travis CI with Newman',
            url: '/docs/collections/using-newman-cli/integration-with-travis/',
          },
          {
            name: 'Jenkins with Newman',
            url: '/docs/collections/using-newman-cli/integration-with-jenkins/',
          },
        ],
      },
    ],
  },
  {
    name: 'Postman Flows',
    parentSlug: 'postman-flows',
    url: '/docs/postman-flows/gs/flows-overview/',
    subMenuItems1: [
      {
        name: 'Get started with Flows',
        subParentSlug: 'gs',
        slug: '/docs/postman-flows/gs/flows-overview/',
        subMenuItems2: [
          {
            name: 'Develop APIs with Postman Flows',
            url: '/docs/postman-flows/gs/flows-overview/',
          },
          {
            name: 'Postman Flows interface',
            url: '/docs/postman-flows/gs/the-flows-interface/',
          },
          {
            name: 'Manage Flows usage',
            url: '/docs/postman-flows/gs/flows-usage/',
          }
        ],
      },
      {
        name: 'Flows concepts',
        subParentSlug: 'concepts',
        slug: '/docs/postman-flows/concepts/blocks-and-connections/',
        subMenuItems2: [
          {
            name: 'Blocks and connections',
            url: '/docs/postman-flows/concepts/blocks-and-connections/',
          },
          {
            name: 'Create a request',
            url: '/docs/postman-flows/concepts/requests-and-variables/',
          },
          {
            name: 'Select values',
            url: '/docs/postman-flows/concepts/selecting-information/',
          },
          {
            name: 'Pin variables',
            url: '/docs/postman-flows/concepts/pinning-variables/',
          },
          {
            name: 'Send data between blocks',
            url: '/docs/postman-flows/concepts/passing-information-between-blocks/',
          },
          {
            name: 'Authenticate an API in Flows',
            url: '/docs/postman-flows/concepts/adding-authentication/',
          },
          {
            name: 'Automate a Postman Flow run',
            url: '/docs/postman-flows/concepts/automatic-runs/',
          },
          {
            name: 'Organize a Flow',
            url: '/docs/postman-flows/concepts/organizing-a-flow/',
          }
        ],
      },
      {
        name: 'Flows tutorials',
        subParentSlug: 'tutorials',
        slug: '/docs/postman-flows/tutorials/flows-tutorials-overview/',
        subMenuItems2: [
          {
            name: 'Overview',
            url: '/docs/postman-flows/tutorials/flows-tutorials-overview/',
          },
          {
            name: 'Exchange data between systems',
            url: '/docs/postman-flows/tutorials/send-information-from-one-system-to-another/',
          },
          {
            name: 'Build a Slack bot',
            url: '/docs/postman-flows/tutorials/build-a-slack-bot/',
          },
          {
            name: 'Create a dashboard in Flows',
            url: '/docs/postman-flows/tutorials/creating-a-dashboard-in-flows/',
          },
          {
            name: 'Automate repetitive tasks',
            url: '/docs/postman-flows/tutorials/automating-repetitive-tasks/',
          },
          {
            name: 'Create a scheduled task',
            url: '/docs/postman-flows/tutorials/make-your-own-automatically-scheduled-tasks/',
          },
          {
            name: 'Run requests in sequence',
            url: '/docs/postman-flows/tutorials/running-requests-in-sequence/',
          },
        ],
      },
      {
        name: 'Flows reference',
        subParentSlug: 'reference',
        slug: '/docs/postman-flows/reference/blocks-list/',
        subMenuItems2: [
          {
            name: 'Flow Blocks',
            url: '/docs/postman-flows/reference/blocks-list/',
          },
          {
            name: 'Work with date and time',
            url: '/docs/postman-flows/reference/working-with-date-and-time/',
          },
          {
            name: 'Find and filter data',
            url: '/docs/postman-flows/reference/finding-and-filtering-data/',
          },
          {
            name: 'Visualize data',
            url: '/docs/postman-flows/reference/visualizing-data/',
          },
          {
            name: 'Debug Flows',
            url: '/docs/postman-flows/reference/debugging/',
          },
        ]
      },
      {
        name: 'Flows Query Language',
        subParentSlug: 'flows-query-language',
        slug: '/docs/postman-flows/flows-query-language/introduction-to-fql/',
        subMenuItems2: [
          {
            name: 'Overview',
            url: '/docs/postman-flows/flows-query-language/introduction-to-fql/',
          },
          {
            name: 'Get basic values',
            url: '/docs/postman-flows/flows-query-language/getting-basic-values/',
          },
          {
            name: 'Select conditional data',
            url: '/docs/postman-flows/flows-query-language/conditional-data-selection/',
          },
          {
            name: 'Return structured data',
            url: '/docs/postman-flows/flows-query-language/returning-structured-results/',
          },
          {
            name: 'Manipulate data',
            url: '/docs/postman-flows/flows-query-language/data-manipulation/',
          },
          {
            name: 'Function reference',
            url: '/docs/postman-flows/flows-query-language/function-reference/',
          },
        ],
      },
    ],
  },
  {
    name: 'Postman CLI',
    parentSlug: 'postman-cli',
    url: '/docs/postman-cli/postman-cli-overview/',
    subMenuItems1: [
      {
        name: 'Overview',
        url: '/docs/postman-cli/postman-cli-overview/',
      },
      {
        name: 'Install',
        url: '/docs/postman-cli/postman-cli-installation/',
      },
      {
        name: 'Command options',
        url: '/docs/postman-cli/postman-cli-options/',
      },
      {
        name: 'Run a collection',
        url: '/docs/postman-cli/postman-cli-run-collection/',
      },
    ],
  },
  {
    name: 'Collaborate',
    parentSlug: 'collaborating-in-postman',
    url: '/docs/collaborating-in-postman/collaborate-in-postman-overview/',
    subMenuItems1: [
      {
        name: 'Overview',
        url: '/docs/collaborating-in-postman/collaborate-in-postman-overview/',
      },
      {
        name: 'Collaborate with your team',
        subParentSlug: 'working-with-your-team',
        slug: '/docs/collaborating-in-postman/working-with-your-team/collaboration-overview/',
        subMenuItems2: [
          {
            name: 'Overview',
            url: '/docs/collaborating-in-postman/working-with-your-team/collaboration-overview/',
          },
          {
            name: 'Create and manage a team',
            url: '/docs/collaborating-in-postman/working-with-your-team/team-collaboration/',
          },
          {
            name: 'Team discovery',
            url: '/docs/collaborating-in-postman/working-with-your-team/enabling-team-discovery/',
          },
          {
            name: 'Team workspaces',
            url: '/docs/collaborating-in-postman/working-with-your-team/collaborating-in-team-workspaces/',
          },
          {
            name: 'Team discussions',
            url: '/docs/collaborating-in-postman/working-with-your-team/discussing-your-work/',
          },
        ],
      },
      {
        name: 'Define roles',
        url: '/docs/collaborating-in-postman/roles-and-permissions/',
      },
      {
        name: 'Manage user groups',
        url: '/docs/collaborating-in-postman/user-groups/',
      },
      {
        name: 'Manage access',
        url: '/docs/collaborating-in-postman/requesting-access-to-elements/',
      },
      {
        name: 'Share your work',
        url: '/docs/collaborating-in-postman/sharing/',
      },
      {
        name: 'Private API Network',
        subParentSlug: 'private-api-network',
        slug: '/docs/collaborating-in-postman/private-api-network/adding-private-network/',
        subMenuItems2: [
          {
            name: 'Overview',
            url: '/docs/collaborating-in-postman/private-api-network/adding-private-network/'
          },
          {
            name: 'Organize the Private API Network',
            url: '/docs/collaborating-in-postman/private-api-network/organizing-private-network/'
          },
          {
            name: 'Manage the Private API Network',
            url: '/docs/collaborating-in-postman/private-api-network/managing-private-network/'
          },
          {
            name: 'Request additions to the Private API Network',
            url: '/docs/collaborating-in-postman/private-api-network/private-network-requests/'
          },
          {
            name: 'Automate publishing to the Private API Network',
            url: '/docs/collaborating-in-postman/private-api-network/publish-private-network-elements-with-api/'
          },
        ],
      },
      {
        name: 'Version control',
        subParentSlug: 'using-version-control',
        slug: '/docs/collaborating-in-postman/using-version-control/version-control-overview/',
        subMenuItems2: [
          {
            name: 'Overview',
            url: '/docs/collaborating-in-postman/using-version-control/version-control-overview/',
          },
          {
            name: 'Fork Postman elements',
            url: '/docs/collaborating-in-postman/using-version-control/forking-elements/',
          },
          {
            name: 'Create pull requests',
            url: '/docs/collaborating-in-postman/using-version-control/creating-pull-requests/',
          },
          {
            name: 'Review pull requests',
            url: '/docs/collaborating-in-postman/using-version-control/reviewing-pull-requests/',
          },
          {
            name: 'Watch pull requests',
            url: '/docs/collaborating-in-postman/using-version-control/watching-pull-requests/',
          },
        ],
      },
      {
        name: 'Public elements',
        url: '/docs/collaborating-in-postman/manage-public-elements/',
      },
      {
        name: 'Workspaces',
        subParentSlug: 'using-workspaces',
        slug: '/docs/collaborating-in-postman/using-workspaces/creating-workspaces/',
        subMenuItems2: [
          {
            name: 'Create workspaces',
            url: '/docs/collaborating-in-postman/using-workspaces/creating-workspaces/',
          },
          {
            name: 'Use and manage workspaces',
            url: '/docs/collaborating-in-postman/using-workspaces/managing-workspaces/',
          },
          {
            name: 'Partner Workspaces',
            url: '/docs/collaborating-in-postman/using-workspaces/partner-workspaces/'
          },
          {
            name: 'Public workspaces',
            url: '/docs/collaborating-in-postman/using-workspaces/public-workspaces/'
          },
          {
            name: 'View changelogs and team activity',
            url: '/docs/collaborating-in-postman/using-workspaces/changelog-and-restoring-collections/',
          },
        ],
      },
      {
        name: 'Public API Network',
        subParentSlug: 'public-api-network',
        slug: '/docs/collaborating-in-postman/public-api-network/public-api-network-overview/',
        subMenuItems2: [
          {
            name: 'Overview',
            url: '/docs/collaborating-in-postman/public-api-network/public-api-network-overview/'
          },
          {
            name: 'Organize your public workspace',
            url: '/docs/collaborating-in-postman/public-api-network/organizing-your-workspace/',
          },
          {
            name: 'Share your public workspace',
            url: '/docs/collaborating-in-postman/public-api-network/sharing-your-workspace/',
          },
          {
            name: 'Maintain APIs in your public workspace',
            url: '/docs/collaborating-in-postman/public-api-network/maintain-api-in-workspace/',
          },
          {
            name: 'Sync APIs with your public workspace',
            url: '/docs/collaborating-in-postman/public-api-network/sync-api-with-workspace/',
          },
          {
            name: 'Share your collections',
            url: '/docs/collaborating-in-postman/public-api-network/share-collection-with-public-api-network/',
          },
        ],
      },

    ],
  },
  {
    name: 'Design and develop APIs',
    parentSlug: 'designing-and-developing-your-api',
    url: '/docs/designing-and-developing-your-api/the-api-workflow/',
    subMenuItems1: [
      {
        name: 'Overview',
        url: '/docs/designing-and-developing-your-api/the-api-workflow/',
      },
      {
        name: 'Create an API',
        url: '/docs/designing-and-developing-your-api/creating-an-api/',
      },
      {
        name: 'Import an API',
        url: '/docs/designing-and-developing-your-api/importing-an-api/',
      },
      {
        name: 'API version control',
        subParentSlug: 'versioning-an-api',
        slug: '/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/',
        subMenuItems2: [
          {
            name: 'Overview',
            url: '/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/',
          },
          {
            name: 'Cloud-hosted Git repository',
            url: '/docs/designing-and-developing-your-api/versioning-an-api/using-cloud-git-repo/',
          },
          {
            name: 'On-premises Git repository',
            url: '/docs/designing-and-developing-your-api/versioning-an-api/using-on-prem-git-repo/',
          },
          {
            name: 'Manage multiple APIs',
            url: '/docs/designing-and-developing-your-api/versioning-an-api/connecting-multiple-apis/',
          },
          {
            name: 'Manage Git changes in Postman',
            url: '/docs/designing-and-developing-your-api/versioning-an-api/managing-git-changes/',
          },
          {
            name: 'Publish an API version',
            url: '/docs/designing-and-developing-your-api/versioning-an-api/api-versions/',
          },
        ],
      },
      {
        name: 'Develop an API',
        subParentSlug: 'developing-an-api',
        slug: '/docs/designing-and-developing-your-api/developing-an-api/develop-an-api/',
        subMenuItems2: [
          {
            name: 'Overview',
            url: '/docs/designing-and-developing-your-api/developing-an-api/develop-an-api/',
          },
          {
            name: 'Manage API definitions',
            url: '/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/',
          },
          {
            name: 'Add elements to an API',
            url: '/docs/designing-and-developing-your-api/developing-an-api/adding-api-elements/',
          },
          {
            name: 'Generate server-side code',
            url: '/docs/designing-and-developing-your-api/developing-an-api/generating-server-code/',
          },
          {
            name: 'Validate an API',
            url: '/docs/designing-and-developing-your-api/developing-an-api/validating-elements-against-schema/',
          },
        ],
      },
      {
        name: 'Test an API',
        url: '/docs/designing-and-developing-your-api/testing-an-api/',
      },
      {
        name: 'Deploy an API',
        subParentSlug: 'deploying-an-api',
        slug: '/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-overview/',
        subMenuItems2: [
          {
            name: 'Overview',
            url: '/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-overview/',
          },
          {
            name: 'Amazon API Gateway',
            url: '/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-aws/',
          },
          {
            name: 'Apigee',
            url: '/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-apigee/',
          },
          {
            name: 'Azure API Management',
            url: '/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-azure/',
          },
        ],
      },
      {
        name: 'Observe an API',
        subParentSlug: 'observing-an-api',
        slug: '/docs/designing-and-developing-your-api/observing-an-api/observing-an-api/',
        subMenuItems2: [
          {
            name: 'Overview',
            url: '/docs/designing-and-developing-your-api/observing-an-api/observing-an-api/',
          },
          {
            name: 'New Relic',
            url: '/docs/designing-and-developing-your-api/observing-an-api/new-relic-apm/',
          },
          {
            name: 'Datadog',
            url: '/docs/designing-and-developing-your-api/observing-an-api/datadog-apm/',
          },
        ],
      },
      {
        name: 'Manage and share APIs',
        url: '/docs/designing-and-developing-your-api/managing-apis/',
      },
      {
        name: 'Mock an API',
        subParentSlug: 'mocking-data',
        slug: '/docs/designing-and-developing-your-api/mocking-data/mock-an-api/',
        subMenuItems2: [
          {
            name: 'Overview',
            url: '/docs/designing-and-developing-your-api/mocking-data/mock-an-api/',
          },
          {
            name: 'Set up mock servers',
            url: '/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/',
          },
          {
            name: 'Create dynamic mock responses',
            url: '/docs/designing-and-developing-your-api/mocking-data/creating-dynamic-responses/',
          },
          {
            name: 'Mock using saved examples',
            url: '/docs/designing-and-developing-your-api/mocking-data/mocking-with-examples/',
          },
          {
            name: 'Mock using the Postman API',
            url: '/docs/designing-and-developing-your-api/mocking-data/mock-with-api/',
          },
          {
            name: 'Matching algorithm',
            url: '/docs/designing-and-developing-your-api/mocking-data/matching-algorithm/',
          },
        ],
      },
    ],
  },
  {
    name: 'Document APIs',
    parentSlug: 'publishing-your-api',
    url: '/docs/publishing-your-api/api-documentation-overview/',
    subMenuItems1: [
      {
        name: 'Overview',
        url: '/docs/publishing-your-api/api-documentation-overview/',
      },
      {
        name: 'Document a collection',
        url: '/docs/publishing-your-api/document-a-collection/',
      },
      {
        name: 'Add API documentation',
        url: '/docs/publishing-your-api/documenting-your-api/',
      },
      {
        name: 'Write documentation',
        url: '/docs/publishing-your-api/authoring-your-documentation/',
      },
      {
        name: 'Publish documentation',
        url: '/docs/publishing-your-api/publishing-your-docs/',
      },
      {
        name: 'View documentation',
        url: '/docs/publishing-your-api/viewing-documentation/',
      },
      {
        name: 'Host API documentation',
        url: '/docs/publishing-your-api/custom-doc-domains/',
      },
      {
        name: 'Set up authentication for public APIs',
        url: '/docs/publishing-your-api/setting-up-authentication-for-public-apis/',
      },
      {
        name: 'Run in Postman',
        subParentSlug: 'run-in-postman',
        slug: '/docs/publishing-your-api/run-in-postman/introduction-run-button/',
        subMenuItems2: [
          {
            name: 'Overview',
            url: '/docs/publishing-your-api/run-in-postman/introduction-run-button/',
          },
          {
            name: 'Create Run in Postman buttons',
            url: '/docs/publishing-your-api/run-in-postman/creating-run-button/',
          },
          {
            name: 'Code with Run in Postman',
            url: '/docs/publishing-your-api/run-in-postman/run-button-API/',
          },
        ],
      },
    ],
  },
  {
    name: 'Monitor APIs',
    parentSlug: 'monitoring-your-api',
    url: '/docs/monitoring-your-api/intro-monitors/',
    subMenuItems1: [
      {
        name: 'Overview',
        url: '/docs/monitoring-your-api/intro-monitors/',
      },
      {
        name: 'Set up a monitor',
        url: '/docs/monitoring-your-api/setting-up-monitor/',
      },
      {
        name: 'View monitor results',
        url: '/docs/monitoring-your-api/viewing-monitor-results/',
      },
      {
        name: 'Manage monitors',
        url: '/docs/monitoring-your-api/monitor-usage/',
      },
      {
        name: 'Run monitors using static IPs',
        url: '/docs/monitoring-your-api/using-static-IPs-to-monitor/',
      },
      {
        name: 'Troubleshoot monitors',
        url: '/docs/monitoring-your-api/troubleshooting-monitors/',
      },
      {
        name: 'Monitoring FAQ',
        url: '/docs/monitoring-your-api/faqs-monitors/',
      },
    ],
  },
  {
    name: 'Administration',
    parentSlug: 'administration',
    url: '/docs/administration/admin-overview/',
    subMenuItems1: [
      {
        name: 'Overview',
        url: '/docs/administration/admin-overview/',
      },
      {
        name: 'Onboarding checklist',
        url: '/docs/administration/onboarding-checklist/',
      },
      {
        name: 'Migrate data between teams',
        url: '/docs/administration/team-merge/',
      },
      {
        name: 'Team management',
        subParentSlug: 'managing-your-team',
        slug: '/docs/administration/managing-your-team/managing-your-team/',
        subMenuItems2: [
          {
            name: 'Overview',
            url: '/docs/administration/managing-your-team/managing-your-team/',
          },
          {
            name: 'Manage team members',
            url: '/docs/administration/managing-your-team/manage-team-members/',
          },
          {
            name: "Manage team workspaces",
            url: '/docs/administration/managing-your-team/manage-team-workspaces/'
          },
          {
            name: "Manage product access",
            url: '/docs/administration/managing-your-team/manage-team-product-access/'
          },
          {
            name: 'Configure team settings',
            url: '/docs/administration/managing-your-team/team-settings/',
          },
          {
            name: 'Manage API keys',
            url: '/docs/administration/managing-your-team/managing-api-keys/',
          },
          {
            name: 'Secret Scanner',
            url: '/docs/administration/managing-your-team/secret-scanner/',
          },
          {
            name: 'Audit logs',
            url: '/docs/administration/managing-your-team/audit-logs/',
          },
        ],
      },
      {
        name: 'Enterprise',
        subParentSlug: 'enterprise',
        slug: '/docs/administration/enterprise/about-postman-enterprise/',
        subMenuItems2: [
          {
            name: 'Postman Enterprise plans',
            url: '/docs/administration/enterprise/about-postman-enterprise/',
          },
          {
            name: 'Enterprise deployment',
            url: '/docs/administration/enterprise/managing-enterprise-deployment/',
          },
        ],
      },
      {
        name: 'Single Sign-On (SSO)',
        subParentSlug: 'sso',
        slug: '/docs/administration/sso/intro-sso/',
        subMenuItems2: [
          {
            name: 'Intro to SSO',
            url: '/docs/administration/sso/intro-sso/',
          },
          {
            name: 'Configure SSO for a team',
            url: '/docs/administration/sso/admin-sso/',
          },
          {
            name: 'Sign in to an SSO team',
            url: '/docs/administration/sso/user-sso/',
          },
          {
            name: 'Microsoft AD FS',
            url: '/docs/administration/sso/microsoft-adfs/',
          },
          {
            name: 'Microsoft Entra ID',
            url: '/docs/administration/sso/azure-ad/',
          },
          {
            name: 'Custom SAML',
            url: '/docs/administration/sso/custom-saml/',
          },
          {
            name: 'Duo',
            url: '/docs/administration/sso/duo/',
          },
          {
            name: 'Google Workspace',
            url: '/docs/administration/sso/google-workspace/',
          },
          {
            name: 'Okta',
            url: '/docs/administration/sso/okta/',
          },
          {
            name: 'OneLogin',
            url: '/docs/administration/sso/onelogin/',
          },
          {
            name: 'Ping Identity',
            url: '/docs/administration/sso/ping-identity/',
          },
        ],
      },
      {
        name: 'SCIM provisioning',
        subParentSlug: 'scim-provisioning',
        slug: '/docs/administration/scim-provisioning/scim-provisioning-overview/',
        subMenuItems2: [
          {
            name: 'SCIM provisioning overview',
            url: '/docs/administration/scim-provisioning/scim-provisioning-overview/',
          },
          {
            name: 'Configure SCIM with Okta',
            url: '/docs/administration/scim-provisioning/configuring-scim-with-okta/',
          },
          {
            name: 'Configure SCIM with Microsoft Entra ID',
            url: '/docs/administration/scim-provisioning/configuring-scim-with-azure-ad/',
          },
          {
            name: 'Configure SCIM with OneLogin',
            url: '/docs/administration/scim-provisioning/configuring-scim-with-onelogin/'
          }
        ],
      },
      {
        name: 'Domain verification and capture',
        subParentSlug: 'domain-verification-and-capture',
        slug: '/docs/administration/domain-verification-and-capture/domain-capture-overview/',
        subMenuItems2: [
          {
            name: 'Overview',
            url: '/docs/administration/domain-verification-and-capture/domain-capture-overview/',
          },
          {
            name: 'Add and verify a domain',
            url: '/docs/administration/domain-verification-and-capture/add-and-verify-a-domain/',
          },
          {
            name: 'Enable domain capture',
            url: '/docs/administration/domain-verification-and-capture/enable-domain-capture/',
          },
          {
            name: 'Domain capture support and FAQs',
            url: '/docs/administration/domain-verification-and-capture/domain-capture-faqs/'
          }
        ],
      },
      {
        name: 'Admin FAQs',
        url: '/docs/administration/admin-faqs/',
      },
    ],
  },
  {
    name: 'Billing',
    parentSlug: 'billing',
    url: '/docs/billing/billing-overview/',
    subMenuItems1: [
      {
        name: 'Overview',
        url: '/docs/billing/billing-overview/',
      },
      {
        name: 'Manage billing',
        url: '/docs/billing/billing/',
      },
      {
        name: 'Purchase Postman',
        url: '/docs/billing/buying/',
      },
      {
        name: 'About resource usage',
        url: '/docs/billing/resource-usage/',
      },
    ],
  },
  {
    name: 'API Governance',
    parentSlug: 'api-governance',
    url: '/docs/api-governance/api-governance-overview/',
    subMenuItems1: [
      {
        name: 'Overview',
        url: '/docs/api-governance/api-governance-overview/',
      },
      {
        name: 'API rules',
        subParentSlug: 'api-definition',
        slug: '/docs/api-governance/api-definition/api-definition-warnings/',
        subMenuItems2: [
          {
            name: 'Overview',
            url: '/docs/api-governance/api-definition/api-definition-warnings/',
          },
          {
            name: 'OpenAPI 3 rules',
            url: '/docs/api-governance/api-definition/openapi3/',
          },
          {
            name: 'OpenAPI 2 rules',
            url: '/docs/api-governance/api-definition/openapi2/',
          },
        ],
      },
      {
        name: 'API request warnings',
        subParentSlug: 'api-testing',
        slug: '/docs/api-governance/api-testing/api-testing-warnings/',
        subMenuItems2: [
          {
            name: 'Overview',
            url: '/docs/api-governance/api-testing/api-testing-warnings/',
          },
          {
            name: 'Security warnings',
            url: '/docs/api-governance/api-testing/security-warnings/',
          },
        ],
      },
      {
        name: 'Configurable rules',
        subParentSlug: 'configurable-rules',
        slug: '/docs/api-governance/configurable-rules/configurable-rules-overview/',
        subMenuItems2: [
          {
            name: 'Overview',
            url: '/docs/api-governance/configurable-rules/configurable-rules-overview/',
          },
          {
            name: 'API Governance rules',
            url: '/docs/api-governance/configurable-rules/configuring-api-governance-rules/',
          },
          {
            name: 'API Security rules',
            url: '/docs/api-governance/configurable-rules/configuring-api-security-rules/',
          },
          {
            name: 'Custom governance functions',
            url: '/docs/api-governance/configurable-rules/configuring-custom-governance-functions/',
          },
          {
            name: 'Spectral',
            url: '/docs/api-governance/configurable-rules/spectral/',
          },
        ],
      },
    ],
  },

  {
    name: 'Reports',
    parentSlug: 'reports',
    url: '/docs/reports/reports-overview/',
    subMenuItems1: [
      {
        name: 'Overview',
        url: '/docs/reports/reports-overview/',
      },
      {
        name: 'Overview report',
        url: '/docs/reports/overview-reports/',
      },
      {
        name: 'Members overview report',
        url: '/docs/reports/members-overview-reports/',
      },
      {
        name: 'Content activity report',
        url: '/docs/reports/content-activity-reports/',
      },
      {
        name: 'API Security report',
        url: '/docs/reports/api-security-reports/',
      },
      {
        name: 'API Governance report',
        url: '/docs/reports/api-gov-reports/',
      },
      {
        name: 'Public workspace metrics report',
        url: '/docs/reports/public-workspace-metrics-reports/',
      },
      {
        name: 'Billing overview report',
        url: '/docs/reports/billing-overview-reports/',
      },
      {
        name: 'Secret Scanner report',
        url: '/docs/reports/security-audit-reports/',
      },
    ],
  },
  {
    name: 'Developer resources',
    parentSlug: 'developer',
    url: '/docs/developer/resources-intro/',
    subMenuItems1: [
      {
        name: 'Overview',
        url: '/docs/developer/resources-intro/',
      },
      {
        name: 'Postman API reference',
        subParentSlug: 'postman-api',
        slug: '/docs/developer/postman-api/intro-api/',
        subMenuItems2: [
          {
            name: 'Postman API overview',
            url: '/docs/developer/postman-api/intro-api/'
          },
          {
            name: 'Postman API authentication',
            url: '/docs/developer/postman-api/authentication/'
          },
          {
            name: 'Postman API access rate limits',
            url: '/docs/developer/postman-api/postman-api-rate-limits/'
          },
          {
            name: 'Make a call with the Postman API',
            url: '/docs/developer/postman-api/make-postman-api-call/'
          }
        ]
      },
      {
        name: 'Postman Echo service',
        url: '/docs/developer/echo-api/',
      },
      {
        name: 'Postman Collection SDK',
        url: '/docs/developer/collection-sdk/',
      },
      {
        name: 'Postman Runtime library',
        url: '/docs/developer/runtime-library/',
      },
      {
        name: 'Postman code generator',
        url: '/docs/developer/code-generators/',
      },
      {
        name: 'API format conversion',
        url: '/docs/developer/collection-conversion/',
      },
    ],
  },
  {
    name: 'Integrations',
    parentSlug: 'integrations',
    url: '/docs/integrations/intro-integrations/',
    subMenuItems1: [
      {
        name: 'Overview',
        url: '/docs/integrations/intro-integrations/',
      },
      {
        name: 'Custom webhooks',
        url: '/docs/integrations/webhooks/',
      },
      {
        name: 'Installed apps',
        url: '/docs/integrations/installed-apps/'
      },
      {
        name: 'CI integrations',
        url: '/docs/integrations/ci-integrations/',
      },
      {
        name: 'Postman integrations',
        subParentSlug: 'available-integrations',
        slug: '/docs/integrations/available-integrations/postman-integrations/',
        subMenuItems2: [
          {
            name: 'All integrations',
            url: '/docs/integrations/available-integrations/postman-integrations/',
          },
          {
            name: 'APIMatic',
            url: '/docs/integrations/available-integrations/apimatic/',
          },
          {
            name: 'Apigee',
            url: '/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-apigee/',
          },
          {
            name: 'AWS API Gateway',
            url: '/docs/integrations/available-integrations/aws-api-gateway/',
          },
          {
            name: 'Azure API Management',
            url: '/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-azure/',
          },
          {
            name: 'Azure DevOps',
            url: '/docs/integrations/available-integrations/azure-devops/',
          },
          {
            name: 'Azure Pipelines',
            url: '/docs/integrations/available-integrations/ci-integrations/azure-pipelines/',
          },
          {
            name: 'BigPanda',
            url: '/docs/integrations/available-integrations/bigpanda/',
          },
          {
            name: 'Bitbucket',
            url: '/docs/integrations/available-integrations/bitbucket/',
          },
          {
            name: 'Bitbucket Pipelines',
            url: '/docs/integrations/available-integrations/ci-integrations/bitbucket-pipelines/',
          },
          {
            name: 'CircleCI',
            url: '/docs/integrations/available-integrations/ci-integrations/circleci/',
          },
          {
            name: 'Coralogix',
            url: '/docs/integrations/available-integrations/coralogix/',
          },
          {
            name: 'Datadog',
            url: '/docs/integrations/available-integrations/datadog/',
          },
          {
            name: 'Dropbox',
            url: '/docs/integrations/available-integrations/dropbox/',
          },
          {
            name: 'GitHub',
            url: '/docs/integrations/available-integrations/github/',
          },
          {
            name: 'GitHub Actions',
            url: '/docs/integrations/available-integrations/ci-integrations/github-actions/',
          },
          {
            name: 'GitLab',
            url: '/docs/integrations/available-integrations/gitlab/',
          },
          {
            name: 'GitLab CI/CD',
            url: '/docs/integrations/available-integrations/ci-integrations/gitlab-ci/',
          },
          {
            name: 'Jenkins',
            url: '/docs/integrations/available-integrations/ci-integrations/jenkins/',
          },
          {
            name: 'Keen',
            url: '/docs/integrations/available-integrations/keen/',
          },
          {
            name: 'Microsoft Power Automate',
            url: '/docs/integrations/available-integrations/microsoft-power-automate/',
          },
          {
            name: 'Microsoft Teams',
            url: '/docs/integrations/available-integrations/microsoft-teams/',
          },
          {
            name: 'New Relic',
            url: '/docs/integrations/available-integrations/new-relic/',
          },
          {
            name: 'OpenAPI',
            url: '/docs/integrations/available-integrations/working-with-openAPI/',
          },
          {
            name: 'Opsgenie',
            url: '/docs/integrations/available-integrations/opsgenie/',
          },
          {
            name: 'PagerDuty',
            url: '/docs/integrations/available-integrations/pagerduty/',
          },
          {
            name: 'Slack',
            url: '/docs/integrations/available-integrations/slack/',
          },
          {
            name: 'Splunk',
            url: '/docs/integrations/available-integrations/splunk/',
          },
          {
            name: 'Splunk On-Call',
            url: '/docs/integrations/available-integrations/splunk-on-call/',
          },
          {
            name: 'Statuspage',
            url: '/docs/integrations/available-integrations/statuspage/',
          },
          {
            name: 'Travis CI',
            url: '/docs/integrations/available-integrations/ci-integrations/travis-ci/',
          },
        ],
      },
    ],
  },
];

// export default parentSlugItems;