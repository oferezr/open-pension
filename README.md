# Starter Kit

This is a Starter Kit for the Digital Product Jam course. It provides a configuration of the [Next.js](https://nextjs.org/) framework, and a number of examples of common patterns and components.

See [the course reference materials for frameworks](https://github.com/digital-product-jam-2024/course/blob/main/reference/frameworks.md) for futher reading on Next.js and React, and in general, other [reference materials](https://github.com/digital-product-jam-2024/course/tree/main/reference) to help you with various technologies and aspects of web development.

# How to use the Starter Kit

First up, you should be using GitHub's template functionality to create your own code repository using this repository as a starting point. [See ther GitHub documentation on creating a repository from a template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).

Once you have created your own repository from this template, you can use Git to clone the repository to your local machine. See our [reference material on Git for further details](https://github.com/digital-product-jam-2024/course/blob/main/reference/git.md).

When you have a local copy of your repository, you can proceed with the next steps in this document.

# Getting Started

Ensure you have a local copy of the repository, and, in your terminal, navigate to the root of the repository.

## Install the dependencies

The codebase has libraries it depends on to run - these are refered to as "dependencies". You need to install these dependencies before you can run the codebase. To install the dependencies, run the following command in your terminal:

```bash
npm install
```

## Configure local environment variables

See the section on environment variables below for more explanation on this step. For now, just run the command from the root of the project.

```bash
cp .env.local.template .env.local
```

Then, open the `.env.local` file in your code editor, and update the values with real data. We can provide some configuration for you for ease of use - we will update in class.

## Run the development server

The codebase uses a development server to run the code. This is a server that runs on your local machine, and allows you to view the code in your browser. To run the development server, run the following command in your terminal:

```bash
npm run dev
```

# View the application in your browser

Once the server is running, you can view the application in your browser. To do this, open Chrome (or Chromium), and type the following into the address bar:

```bash
http://localhost:3000
```

# Other commands you can run

The codebase is set up with a number of commands you can run. These are defined in the `package.json` file, in the `scripts` section. The following are available:

**Lint your code to detect style and some syntax errors**

```bash
npm run lint
```

**Compile a production build of your app**

```bash
npm run build
```

**Run the compiled production build of the server**

```bash
npm run start
```

**Print out some system info related to your server**

```bash
npm run info
```

# Environment variables

Environment variables provide a way to pass configuration to your application without including configuration values directly in the codebase. This is useful for things like API keys, or other sensitive information that you don't want to be publicly available.

- [Read about Environment variables in Next.js and Vercel here](https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables)
- [See this video we created on Environment variables](https://youtu.be/f4sXU4d3Zd8)

# Helpers

## CSS Debug

Whent he Environment Variable `CSS_DEBUG` is set to `css_debug`, then additional visual outlines will appear in the UI to help you debug CSS issues.

# Demos

Go to the demos page on the running app to use the demos. The demos are provided to provide real examples of common patterns and components. You can use these as a starting point for your own work.

## Contact Form

This demonstrates how to implement an HTML form. Several fundamental concepts are demonstrated here:

- Using a react component to render a form
- Using the browser's native form validation
- Overriding the default submit behaviour of a form in JavaScript
- Using the `fetch` API to send form data to a server
- Implementing a server API endpoint to receive data from the form
- Sending an email with information from the form
- After handling the data and the email on the server, responding back to the client with a status message

If you understand this example well, you have a good start on most of the fundamentals of web development.

## Random Team Generator

This is a full app that builds random teams and product ideas out of this year's students! It demonstrates the following concepts:

- Working with data in a database
- Managing UI state with an ad hoc state machine
- Running almost all code on the client (see usage of 'use client' throughout)
- Right-to-left (RTL) layout for Hebrew
- Nested component organization
- Logic in Javascript for the "business rules" of the application (shuffling, picking from remaining students, etc.)

Review the other demos before reviewing this one.
