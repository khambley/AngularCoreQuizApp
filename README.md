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
   2.1 **Our first Angular component** - QuestionComponent  
        2.1.1 Create question.component.ts  
        2.1.2 Import question component in main app component, app.component.ts  
        2.1.3 Register QuestionComponent in main module, app.module.ts
   
   2.2 **New question layout** - Create a form to submit our question  
     2.2.1 Use https://material.angular.io  - follow directions to install under "Getting Started"
        2.2.2 Imported MatButtonModule in app.module.ts  
        2.2.3 Added button component to app.component.html  
        2.2.4 Got indigo-pink.css prebuilt theme working by including link in index.html and added mat-app-background class to body tag  
        2.2.5 Added question.component.html and change question.component.ts template to URL of question.component.html  
        2.2.6 Added input fields to question component
        2.2.7 Added question component as our inline template for app.component.ts  
        2.2.8 Added Card element from Material to our template

   2.3 **New Question Functionality** (3/9/20)  
       2.3.1 - Added a Submit button and click event functionality to question form  
       2.3.2 - Added `<mat-card-content>` and `<mat-card-actions>` elements to add click functionality to button  
       2.3.3 - Created `post()` function inside class QuestionComponent - tested in `console.log("test")`  
       2.3.4 - Get the submitted value from our Question input field  using ngModel binding and pass in "question" into post function, `post(question)`  
       2.3.5 - Bound to click event for POST and we are getting the submitted value from the Question input field  
  
   2.4 **Angular Service** (3/9/20)
       2.4.1 - Added api.service.ts injectable to handle frontend http request -> response from API  









