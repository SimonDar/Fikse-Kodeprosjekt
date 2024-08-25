# Introduction
[https://fikse-kodeprosjekt-analy-f6ff2.web.app](https://fikse-kodeprosjekt-analy-f6ff2.web.app)

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
   - In the `.github` directory, one can find configurations that are specific to GitHub Actions. This includes workflows for GitHub Actions, which automate tasks like continuous integration (CI) and continuous deployment (CD).
   

2. **functions**:
   - The `functions` directory is where I store my Firebase Cloud Functions. These are serverless functions that run in response to events triggered by Firestore requests, but could be expanded to support future HTTPS requests. Inside this directory, I have the code for these functions, along with a `package.json` file to manage dependencies seperatly from the main React project.
   - There are two firebase fucntions currently active 

       - **`sendEmailOnNewReparasjon`**:  
         This function is responsible for using SendGrid to send an email when a new order is created in the database.

       - **`sendEmailOnReparasjonFinish`**:  
         This function monitors changes in the database and sends out a confirmation email when the status of an order is changed to `finish`.

3. **src**:
   - The `src` directory is where I keep the main application source code. This includes all the React components and TypeScript files in use for the end user application. Essentially, this directory is the core of my project, containing the logic, and views.
  
## src structure

- **assets**  
  The `assets` folder contains utility and service files that support the application.

  - **emailService.ts**:  
    Currently discontinued, but this file could be re-enabled in the future to send emails directly from the browser through HTTPS commands.

  - **firebase.ts**:  
    This file handles the configuration and initialization of Firebase. It sets up Firebase service configuration making Firestore and Authentication accessible throughout the app.

- **components**  
  The `components` directory holds reusable React components that serve specific functions within the application.

  - **auth.tsx**:  
    This component is responsible for user authentication status. It handles logging in and out and dynamically displays either a login button or a combination of "My Orders" and "Logout" options based on the user's authentication status.

  - **items.tsx**:  
    The `items.tsx` component is responsible for displaying items stored in the database. This component serves as a blend of an admin panel and a user panel. It only displays the items that belong to the user but also provides administrative options, such as deleting and editing orders.

  - **orderFunctions.tsx**:  
    This component manages the process of pushing orders to the Firestore database. It handles the logic for creating and managing orders within the application.

  - **newsletter.tsx**:  
    This component contains the functionality for subscribing to the newsletter. It manages the subscription process and ensures users can sign up for updates even without needing to be loggin in.

- **Page**  
  The `Page` directory contains the main pages of the application, corresponding to different routes or views that users can navigate to from the top menu.

  - **Bestille.tsx**:  
    This page allows users to choose from multiple items. If the user is logged in, they can place an order directly from this page.

  - **FiksePage.tsx**:  
    The `FiksePage.tsx` serves as the landing page. It features interactive elements next to the phrase "Vi gjør det enkelt og raskt å fikse" and includes a button that takes users to the payment page.

  - **HvaSkjer.tsx**:  
    An informative page.

  - **HerErVi.tsx**:  
    This page includes an interactive list of drop-off locations and an email newsletter sign-up. The sign-up form clears after successful subscription.

  - **OmOss.tsx**:  
    An informative page.

  - **ForReparis.tsx**:  
    An informative page with an email button.

  - **ForRetail.tsx**:  
    An informative page with an email button.

- **App.tsx**  
  The `App.tsx` file serves as the root component from which everything else branches out. 

- **index.css**  
  The main CSS file that includes global styles for the application.

- **main.tsx**  
  The entry point of the application, where the React app is initialized and rendered.


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
  Timestamps for the arrays. For better logging.

- **internalNotes**
    Internal notes

- **price**
    Price of order.

- **time**
    Time of order.

- **type**  
  What type of repair has been orderd.



# Final notes

There are a few bugs in the system, particularly in the order panel. One issue occurs when you start making changes to an order, then switch to another order, and later return to submit the first order. In this scenario, the status of the last modified order is incorrectly applied to the first order. To resolve this, each entity needs to maintain its own state independently.

Additionally, the UI lacks responsiveness and currently requires fullscreen viewing to function properly. To address this, further work on responsive design is necessary, including using Tailwind CSS to ensure compatibility across all screen sizes, such as mobile, tablet, and laptop.

When sending out mail, the emails are getting flagged as spam. This issue might be due to certificate errors, which require further investigation.

Additionally, when utilizing DNS forwarding, such as with [https://fikse.dargahi.no](https://fikse.dargahi.no), the Gmail sign-up API fails to work. This could be due to fraud prevention measures on Google's part, and further work is needed to address this issue.

When clicking the logo to navigate to the home screen, even if the user is already logged in, the "Log in with Google" button briefly flashes.

Additionally, there is no use of `.env` files for environment variables, resulting in the exposure of private API keys.