# Angular .Net Core Quiz App
## Overview
This is a quiz maker application built using Angular, ASP.NET Core and Entity Framework.
I'm following along with a Lynda.com course called "Building Applications with Angular, ASP.NET Core, and Entity Framework. I'm adding supplemental information for it here, especially for setting up your development machine since it was lacking in the course.
## To build for deployment:
`ng build --base-href "/quizapp/" --prod`
This will produce the prod files in a `dist` folder inside your project folder. Just copy the contents of the `dist` folder into your remote server's web root folder. For information on deploying to IIS, see this link. [Deploy an Angular Application to IIS](https://medium.com/angular-in-depth/deploy-an-angular-application-to-iis-60a0897742e7)  
## Work Log 
1. Infrastructure 
2. Creating Forms with Angular  
   2.1 Our first Angular component - QuestionComponent  
        2.1.1 Create question.component.ts  
        2.1.2 Import question component in main app component, app.component.ts  
        2.1.3 Register QuestionComponent in main module, app.module.ts  
   2.2 New question layout - Create a form to submit our question  
        2.2.1 Use https://material.angular.io  - follow directions to install under "Getting Started"



