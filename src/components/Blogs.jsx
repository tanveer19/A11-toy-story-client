import React from "react";
import { Helmet } from "react-helmet-async";

const Blogs = () => {
  return (
    <div>
      <Helmet>
        <title>Toy Story | Blog </title>
      </Helmet>

      <div>
        <h2 className="text-2xl bg-blue-300 p-2">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h2>
        <div className="text-xl bg-white p-2">
          A user's access to restricted resources or APIs is authenticated and
          authorized using an access token, a type of credential. It often has a
          short lifespan and an expiration date. After a user successfully
          authenticates with their credentials (such as username and password)
          or through another authentication mechanism (like OAuth), access
          tokens are often granted. <br />
          When the current access token expires, a refresh token, which has a
          lengthy lifespan, is used to get a new access token. Without forcing
          the user to provide their credentials again, it is used to renew their
          authentication session. <br />
          The following methods can be used to save them safely on the
          client-side: <br />
          Cookies: Cross-site scripting (XSS) attacks can be thwarted by storing
          tokens as secure, HTTP-only cookies. However, cookies have a limited
          amount of storage and might not be appropriate for storing big tokens.{" "}
          <br />
          Tokens can be kept in local storage or session storage within the
          browser. Be wary, though, as cross-site scripting (XSS) attacks can
          exploit these storage systems. Before utilizing the tokens, make sure
          you validate and sanitize them appropriately.
          <br />A client-side database called IndexedDB offers more storage
          space than cookies or local storage. In IndexedDB, tokens can be
          safely stored, but compared to other storage methods, it needs more
          coding and management.
        </div>

        <h2 className="text-2xl bg-blue-300 p-2">
          Compare SQL and NoSQL databases?
        </h2>
        <div className="text-xl bg-white p-2">
          Data Model: SQL: SQL databases adhere to a relational data model,
          which is a structured data model. A preset schema is used to organize
          the data into tables, and keys are used to construct relationships
          between the tables. NoSQL: NoSQL databases can use key-value pairs,
          documents, wide-column tables, or graphs as data models. They offer
          versatility in data representation because they are made to
          accommodate unstructured or semi-structured data. <br />
          <br />
          Schema: SQL: SQL databases impose a strict schema in which the
          organization of the data is predetermined. The table structure must be
          changed in order to make changes to the schema, which can be difficult
          and time-consuming. NoSQL: NoSQL databases can change their data
          structure dynamically without requiring modifications to the entire
          database since they are schema-less or have a flexible schema. Each
          record or document may have a unique structure.
        </div>

        <h2 className="text-2xl bg-blue-300 p-2">
          What is express js? What is Nest JS ?
        </h2>
        <div className="text-xl bg-white p-2">
          A well-liked web application framework for Node.js is called
          Express.js. It is a simple, adaptable framework that offers a complete
          set of functionality for creating APIs and online applications. The
          handling of HTTP requests, routing, middleware integration, and
          serving of static files are all made simpler by Express.js. It adheres
          to the middleware pattern, making it simple for developers to expand
          the features and alter the behavior of their applications. There is a
          sizable ecosystem of libraries and extensions for Express.js that
          expand its functionalities. <br />
          <br />A progressive server-side framework for creating scalable and
          maintainable online applications is called Nest.js. It was created
          using TypeScript and was greatly influenced by the architecture and
          ideas of Angular. Building strong and modular apps is made easy using
          Nest.js, which blends components of functional, reactive, and
          object-oriented programming. Developers may simply design reusable
          components and manage dependencies because to its
          dependency-injection-based modular architecture. Numerous programming
          paradigms are supported by Nest.js, which also has sophisticated
          capabilities including built-in routing, validation, and support for a
          variety of databases and message brokers.
        </div>

        <h2 className="text-2xl bg-blue-300 p-2">
          What is MongoDB aggregate and how does it work
        </h2>
        <div className="text-xl bg-white p-2">
          In MongoDB, the aggregate method is used to perform advanced data
          aggregation operations on collections. It allows you to process and
          transform data in a flexible and powerful manner, including grouping,
          filtering, sorting, joining, and performing calculations on the data.
          <br /> <br />
          The aggregate method takes an array of pipeline stages as its
          argument. Each stage represents a specific operation or transformation
          to be applied to the data. The documents in the collection are
          processed through these stages in the order they appear in the
          pipeline.
        </div>
      </div>
    </div>
  );
};

export default Blogs;
