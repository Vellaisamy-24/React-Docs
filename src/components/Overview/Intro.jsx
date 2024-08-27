import React from "react";
import SideNav from "../../pages/SideNav";

const Intro = () => {
  return (
    <section >
      {/* <div className="hidden lg:flex w-1/6 border-r ">
        <SideNav />
      </div> */}
      <div className="flex flex-col gap-10 px-5 w-full lg:max-w-7xl">
        <div className="flex flex-col gap-3">
          <h1 className="font-medium text-lg lg:text-3xl text-heading">
            Intro
          </h1>
          <p className="tex-xs lg:text-[17px] text-para ">
            Welcome to the world of React! React is a powerful JavaScript
            library for building user interfaces, especially single-page
            applications where performance and responsiveness are key. Developed
            by Facebook, React allows developers to create reusable UI
            components, manage state effectively, and handle complex updates
            with ease. Whether you're a beginner or an experienced developer,
            understanding React's core concepts will set a solid foundation for
            your journey.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-medium text-lg lg:text-3xl text-heading">
            Getting Started with React
          </h1>
          <p className="tex-xs lg:text-[19px] text-para ">
            Getting started with React is straightforward. Begin by setting up
            your development environment. You can quickly create a new React
            project using Create React App with the command npx create-react-app
            my-app. This will set up everything you need, including a build
            system and development server. From there, you can start building
            your application by creating components, defining routes, and
            styling your app
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-medium text-lg  lg:text-3xl text-heading">
            React Fundamentals
          </h1>
          <p className="tex-xs lg:text-[19px] text-para ">
            At the heart of React are components. These are the building blocks
            of your UI. React supports both function and class components,
            though function components with hooks are now more common. JSX is a
            syntax extension that looks like HTML but allows you to write
            elements and components in a more readable and expressive way. Props
            and state are essential concepts for managing data and interactions
            within your components. Event handling in React is also crucial for
            creating interactive applications.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-medium text-lg lg:text-3xl text-heading">
            Advanced React Concepts
          </h1>
          <p className="tex-xs lg:text-[19px] text-para ">
            Once you grasp the basics, you can dive into advanced topics. Hooks,
            such as useState and useEffect, allow you to use state and other
            React features without writing class components. The Context API is
            useful for managing global state and avoiding "prop drilling"
            (passing props through many layers of components). Error boundaries
            help catch JavaScript errors anywhere in your component tree,
            preventing crashes and providing fallback UIs.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-medium text-lg lg:text-3xl text-heading">
            State Management
          </h1>
          <p className="tex-xs lg:text-[19px] text-para ">
            Managing state in React can range from simple to complex. For local
            state, React’s built-in useState and useReducer hooks are
            sufficient. For global state, consider using Context API, Redux,
            Zustand, or Recoil. Each solution has its strengths depending on the
            complexity of your state management needs. For handling server data,
            libraries like React Query or SWR offer powerful features for data
            fetching and caching.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
