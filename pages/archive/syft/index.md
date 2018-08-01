# Syft Software Platform

The Syft Software Platform (SSP) provides an open architecture for developing software applications for SIFT-MS instruments. 

## Why? 

* Increase instrument sales by expanding application of SIFT-MS technology. 
* Enable us to move from Product to Solutions by moving from an Instrument for measuring to a Platform for discovering.
* Platform makes it easier to develop customer/vertical specific applications. 
* Enable an open business model allowing us to capture and create value through collaborative development.
* Participate in established ecosystems for rapid application development and machine learning. 

## Benefits

- Flexibility.
- Speed of development.
- Reduced cost of change.
- Single self-documenting API for internal and external applications.
- Enable vertical specific application discovery and development.
- Core Syft software applications written in a common language (JavaScript), common data format (JSON), and use common user interface design and components.
- Easier to grow software team with view to having developers work as members of sales teams to develop market/customer specific solutions.
- Improved production and support through easy instrument data and control access.
- Improve support with ability to replicate virtual instruments by copying the intrument data.
- Enable data and instrument access for exploratory applications such as machine learning.
- Leverage JavaScript and Python language ecosystems.

## Architecture

SIFT-MS instrument software runs on the Linux operating system.

### Voice 200

![SIFT-MS Voice 200](/static/syft/voice-200.svg)

The Voice 200 software is written in Java and embedded controller specific languages, typically C++. The Java applications comprise:

* Touch screen User Interface, built with Java Swing UI toolkit and together with Kiosk provides the application and data transfer layer to the instrument core.
* Core handles data and control across the instrument, UI and Linux file system. It is also responsible for overall instrument system management and communicates with embedded controllers (electronics).  
* Method and scan result data are stored as XML format text files. 

Application like LabSyft connect to the instrument using network protocols  such as websockets for real-time data, and to access files. Files can also be accessed via the instrument Linux operating system, typically by using a remote terminal program.

### Voice NEXT ("Merlin") 

![SIFT-MS NEXT (Merlin)](/static/syft/voice-next.svg)

I use Voice NEXT to avoid project code name confusion. Currently Voice NEXT = next generation SIFT-MS instrument codenamed "Merlin". 

The Voice NEXT instrument has a layered architecture. 

The User Interface is a web application built in JavaScript. 

Voice NEXT Java core differs significantly from Voice 200. It uses the Java Spring framework. The file based storage is replaced with a relational database. A housekeeper coordinates communication and control across the embedded controllers (electronics) via CANBus. 

Using a database makes it easier for the core to update data (instrument settings) and store data (scan results). Database access is not limited to the core. Other layers can access the database via the operating system using native database connectors.

The API is written in Java and provides request/response (typically REST over HTTP) and real-time (websockets) access using a common data format (JSON) to communicate with the instrument. The API connects directly to the database, and uses a service layer to connect to the core. The service layer translates native core data into API suitable formats.

### Web Application

![Web Application](/static/syft/web-app.svg)

The Web Application provides the primary user interface for next generation instruments. The application runs in current cross-platform mobile and desktop web browsers. Web applications can also be packaged and distributed as stand-alone desktop applications. 

The application is written in JavaScript and built with standard web technologies using open source libraries. 

In the absence of a working instrument and/or API application development uses a separate front-end (application) and back-end (server). The back-end being swapped out with the instrument/API as these become available.

The back-end is written in JavaScript running on the Node.js runtime. 

Node.js uses an efficient, non-blocking, event-driven architecture making it ideal for data-intensive real-time services. The back-end is primarily an API server providing access to the database and other instrument data sources such as the file system. It also serves the Web Application and associated static assets (images, icons) to the web browser.

The API uses GraphQL. GraphQL is the preferred protocol for new APIs. It replaces REST (request/response) and separate web sockets implementation with a single protocol handling both request/response and real-time data.  GraphQL provides a flexible query language together with a common data format, is self-documenting, and easy to update. It does not have the documentation and versioning issues common with REST APIs.

Adoption of GraphQL significantly simplifies the front-end architecture and implementation. 

GraphQL enables rapid front-end development by giving developers the ability to request exactly the data they need for a specific part of the user interface. With a REST API this typically requires different developers to work on the different front-end and back-end technology stacks.

JavaScript across the stack unifies the language and data format (JSON) allowing optimal developer use and onboarding, and common tools, and development processes and practices.

## Syft Software Platform

![Syft Software Platform](/static/syft/ssp.svg)

The SSP uses the Web Application prototype architecture with Voice NEXT and could also be used with Voice 200 instruments. 

The Web Application cleanly separates the Application and Instrument layers.

The Web Application connects natively with the database. 

Voice NEXT services provide real-time data via web sockets. The Java Messaging Service (JMS) is available in the Java stack (Spring framework) where fire-and-forget messaging is appropriate.

Voice 200 integration will require development of a SQL layer to the database if this is required. The Web Application can read the Voice 200 files directly without additional Voice 200 development.

![Syft Software Platform Layers](/static/syft/ssp-layers.svg)

### Application Layer

* Focus is application discovery and delivery.
* Easy development and deployment.
* Lower risk and development costs.
* JavaScript stack is flexible and enables rapid development.
* New application development driven by customers needs.
* Standard GraphQL API for accessing data and instrument control.
* Enable future application development outside the company.
* Enable integration with 3rd party hardware at the data layer.
* Leverage JavaScript and Python ecosystems.
* Open source development process.

### Instrument Layer

* Focus is instrument stability, performance and safety.
* Longer development and deployment cycles.
* Higher risk and development costs.
* Software encapsulates our proprietary knowledge.
* New development primarily driven by hardware capabilities.
* Instrument software development inside the company.
* Existing development process.

## Development Plan

The SSP allows parallel development of the Application and Instrument layers.

### Web Application

Web Application development continues with the current prototype which uses the proposed architecture. 

Development tooling, standards, and processes are aligned with the open source community.

Current work includes building out user interface components and mocking instrument data via the database and instrument data files. 

A partial schema for the database is available. The prototype development can inform further database schema and services design. Mocked prototype data can be switched with real instrument data as this becomes available.

The Web Application layer also exposes a GraphQL API for external applications. The majority of development for the GraphQL server is adding data resolvers that handle the data specified in the schema. Doing this in the application layer versus the instrument layer provides more flexibility when defining resolvers.

### Voice NEXT 

The plan has been to develop REST APIs from the Java layer. This is no longer required and is replaced with the database and a service API.

The database can be accessed directly from the Web Application with no Java development required. 

Services need to be developed for real-time data and other integration points not handled via the database. These services are most likely to use web sockets and message queues.

Whilst the GraphQL API can be added to this layer we loose the flexibility and speed of development enabled on the application layer. Any changes would have to be rolled into instrument core updates which necessarily have longer schedules.  

### Voice 200

It would be nice if Voice 200 instruments could use the Web Application user interface. This is most likely to be limited and read-only since we do not want to undertake signifcant development on the Voice 200 Kiosk/Core. The Web Application layer can read files via the operating system so this may for a easy path to providing useful data for the Web user interface.

## Recommendations

* Web Application development continues unchanged.
* Voice NEXT ("Merlin") API development continues with database. 
* Voice NEXT ("Merlin") do not develop a REST API. Design and implement Services (web socket, message queue, Java bridge) as appropriate. 
* Voice 200 no immediate action required. As we progress with Web Application we can use instrument data files to explore options. 

*Johan Steenkamp, 31 July 2018, Revision: 1.1*