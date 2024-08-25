# Introduction
This document serves as a guide for understanding the codebaise of this project.
# Getting Started

## Setting up
To set the project up, run the following commands
```
git clone https://github.com/SimonDar/Fikse-Kodeprosjekt.git
```
```
cd Fikse-Kodeprosjekt
```
```
npm install
```
```
npm run dev
```

## Deployment
Here’s the revised Markdown text:

## Deployment

Because the project is integrated with GitHub Actions, you can simply push to the main branch. When you do this, Firebase will automatically run `npm run build` and generate the `dist` folder, which contains the HTML file and other web elements.


However, to deploy Firebase functions, you will need to navigate to the `functions` directory by running `cd functions`. Then, you can use the following command to redeploy all functions:

```
firebase deploy --only functions
```

Alternatively, if you want to deploy or redeploy a specific function, use:

```
firebase deploy --only functions:<functionName>
```


If GitHub Actions were to fail, one can force webpage deployment with
```
firebase deploy
```

## Project Structure

Here’s an explanation of the key elements in the project structure based on the image and additional elements:


1. **.github**:
   - In the `.github` directory, I keep configurations that are specific to GitHub. This often includes workflows for GitHub Actions, which automate tasks like continuous integration (CI) and continuous deployment (CD). I might also include issue templates, pull request templates, and other settings related to GitHub.

2. **functions**:
   - The `functions` directory is where I store my Firebase Cloud Functions. These are serverless functions that run in response to events triggered by Firebase features or HTTPS requests. Inside this directory, I usually have the code for these functions, along with a `package.json` file to manage dependencies.

3. **src**:
   - The `src` directory is where I keep my main application source code. This includes all the React components, TypeScript files, and any other JavaScript or CSS/SCSS files necessary for the application. Essentially, this directory is the core of my project, containing the logic, views, and assets that make up the frontend of my app.
   - 
## src structure

- **assets**  
  The `assets` folder contains utility and service files that support the application.

  - **emailService.ts**:  
    Currently discontinued, but this file could be re-enabled in the future to send emails directly from the browser through specific commands.

  - **firebase.ts**:  
    This file handles the configuration and initialization of Firebase. It sets up Firebase services such as Firestore and Authentication, making them accessible throughout the app.

- **components**  
  The `components` directory holds reusable React components that serve specific functions within the application.

  - **auth.tsx**:  
    This component is responsible for user authentication. It handles logging in and out and dynamically displays either a login button or a combination of "My Orders" and "Logout" options based on the user's authentication status.

  - **items.tsx**:  
    The `items.tsx` component displays items stored in the database. It is responsible for listing all items, likely representing available repair services or products.

  - **orderFunctions.tsx**:  
    This component manages the process of pushing orders to the Firestore database. It handles the logic for creating and managing orders within the application.

  - **newsletter.tsx**:  
    This component contains the functionality for subscribing users to the newsletter. It manages the subscription process and ensures users can sign up for updates.

- **Page**  
  The `Page` directory contains the main pages of the application, corresponding to different routes or views that users can navigate to from the top menu.

  - **Bestille.tsx**:  
    This page allows users to choose from multiple items. If the user is logged in, they can place an order directly from this page.

  - **FiksePage.tsx**:  
    The `FiksePage.tsx` serves as the landing page. It features interactive elements next to the phrase "Vi gjør det enkelt og raskt å fikse" and includes a button that takes users to the payment page.

  - **HvaSkjer.tsx**:  
    An informative page, potentially providing updates or news related to the services offered.

  - **HerErVi.tsx**:  
    This page includes an interactive list of drop-off locations and an email newsletter sign-up. The sign-up form clears after successful subscription.

  - **OmOss.tsx**:  
    An informative page that provides details about the Fikse service.

  - **ForReparis.tsx**:  
    A dedicated page for referees.

  - **ForRetail.tsx**:  
    A page specifically for retail partners or customers.

  - **Popup.tsx**:  
    An informative page that provides details about the popup events.

- **App.tsx**  
  The `App.tsx` file serves as the root component from which everything else branches out. It typically contains the main application logic, routing, and layout structure.

- **index.css**  
  The main CSS file that includes global styles for the application.

- **main.tsx**  
  The entry point of the application, where the React app is initialized and rendered.

- **vite-env.d.ts**  
  This file includes TypeScript definitions for the Vite environment, ensuring proper type checking and IntelliSense support during development.


# Firebase

## Storage
The database has two collections `newsletter` and `reparasjon`.


<p float="left">
  <img src="/img/epost.png" alt="Image 1" width="45%" />
  <img src="/img/reperasjon.png" alt="Image 2" width="45%" />
</p>

### newsletter
- **email**  
  Emil signed up for newsletters.

- **time**  
  time signed up for newsletters.

### reparasjon
- **UID**  
  Unique identifier for each user.

- **event**  
  Array of event that has taken place afther order.

- **eventTime**  
  Timestamps for the arrays.

- **internalNotes**
    internal notes

- **price**
    price of order.
- **time**
    time of order.
- **type**  
  what type of repair has been orderd.

  