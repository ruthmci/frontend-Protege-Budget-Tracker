
### A link (URL) to your published App: (screenshot in docs)

https://proteges-budget-tracker.netlify.com

### A link to your GitHub repository: (screenshot in docs)

https://github.com/ruthmci/backend-Protege-Budget-Tracker

https://github.com/ruthmci/frontend-Protege-Budget-Tracker

### Description of our project:

Our Client, Mark is the manager of the proteges within MYOB. Each protege is given a learning budget each year that he must manage. Currently he’s using an excel sheet. When he receives a request from a protege, it is usually through slack. He has to check the excel sheet and update it, when necessary. He would prefer to have a functioning app where he could achieve this with the hope to merge it with another protege app that he is also using. Within the app, he can view the complete list of current protege’s. From this page, Mark can create another protege, delete the protege listing or view the list of expenses incurred by each protege. Once he is viewing the list of expenses, Mark can create, edit or delete items from this page or edit protege details and save.

### Tech stack (e.g. html, css, deployment platform, etc)

Axios (Promise based HTTP client for the browser and node.js.)
Express (Express is a minimal and flexible Node.js web application framework)
Node (Node.js is cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser)
Now (for rapid deployment to a live production environment (backend))
Netlify (for rapid deployment to a live production environment (frontend))
Mongo DB (to store data)
Git SCM & GitHub (for effective distributed version control)
Visual Studio Code (as the team's preferred text editor)
Figma (for designing)
HTML/CSS/JS (for rendering views, in built to React)
Bootstrap (for rapid production quality websites through modern CSS)

### Instructions on how to setup, configure, deploy and use your App.

### Design documentation:
#### OO Diagram
![OO Diagram](https://user-images.githubusercontent.com/31295147/61612469-03351280-aca2-11e9-9a5f-7d8b4abbfb21.png)


### Design process ### Wireframes
! [Design Concept](https://github.com/ruthmci/frontend-Protege-Budget-Tracker/blob/master/docs/Design%20Concept.png)


### User Stores
! [User Stories](https://github.com/ruthmci/frontend-Protege-Budget-Tracker/blob/master/docs/User%20Stories.jpg)


I am a protege manager, I want to;

Keep a record of all the proteges and their purchases in the program 
See an overview of total spent in the FMA
See a detailed view of the total spend of individual proteges
Track the protege learning budget
View individual protege details
See the overview for each protege
Analyse how the proteges are spending , sort purchases by category and by amount
Log amount spent by individual proteges
I want to create a new protege
I want to update a protege details
I want to sort purchases by category or by spend
Delete protege from view/Archive (status update). Read-only.
I want to edit budget item or amount
I want to be able to sign up new users
I want to be able to upload images of the proteges to help identify them

…so that I can;
track how much is left in the Future Makers Academy learning budget.
Track how much is remaining in their overall budget.
See what proteges are finding most valuable as a source of learning.
So I can check the protege’s individual budget.
So that I can manage and edit the protege list and expenses.
To make sure not to go over FMA budget
To make sure each protege stays within their budget
So I can keep expenses up to date
See only current list of protege’s
So I can edit any typo’s made a previous time

#### Test-coverage of user stories

![User Testing](https://github.com/ruthmci/frontend-Protege-Budget-Tracker/blob/master/docs/User%20Testing%20I.png)

![User Client Testing](https://github.com/ruthmci/frontend-Protege-Budget-Tracker/blob/master/docs/User:Client%20testing.png)

![Client Feedback](https://github.com/ruthmci/frontend-Protege-Budget-Tracker/blob/master/docs/Client%20testing:feedback.png)

##### Development site testing

Test | First test | Second test | Final test
---------|----------|---------|---
 View all proteges with spend and balance | ✅ | ✅ | ✅
 View one protege with spend and balance  | ✅ | ✅ | ✅
 Edit a protege's details | Not rendering change on view page | ✅ | ✅ | ✅
 Data validation on protege add and edit | Handling duplicate email on backend but not frontend | ❌| ✅ | ✅
Delete a protege | ✅ | ✅ | ✅ | ✅
View protge items and balance | ✅ | ✅ | ✅ | ✅
Add a purchase | ✅ | ✅ | ✅ | ✅
Edit a purchase | ✅ | ✅ | ✅ | ✅
Delete a purchase | ✅ | ✅ | ✅ | ✅
 Data validation on protege add and edit | Not handling 'expenditure required' on backend or frontend | ❌ | ✅ 

##### Production site testing
Test | First test | Second test | Third test
---------|----------|---------|---
 View all proteges with spend and balance | ✅ | ✅ | ✅
 View one protege with spend and balance  | ✅ | ✅ | ✅
 Edit a protege's details | Not rendering change on view page | ✅ | ✅ 
 Data validation on protege add and edit | Handling duplicate email on backend but not frontend | ❌ | ✅ | ✅
Delete a protege | ✅ | ✅ | ✅ | ✅
View protge items and balance | ✅ | ✅ | ✅ | ✅
Add a purchase | ❌ | ❌ | ✅ |
Edit a purchase | ✅ | ✅ | ✅ | ✅
Delete a purchase | ❌ | ❌ | ✅ | ✅
 Data validation on protege add and edit | Not handling 'expenditure required' on backend or frontend | ❌ | ✅ 



### A workflow diagram of the user journey/s

![Workflow Diagram](https://github.com/ruthmci/frontend-Protege-Budget-Tracker/blob/master/docs/Workflow%20Diagram.png)

### Database Entity Relationship Diagrams

![Entity Relationship Diagrams](https://github.com/ruthmci/frontend-Protege-Budget-Tracker/blob/master/docs/ERD.png)

### Data Flow Diagram

![Data Flow Diagram](https://github.com/ruthmci/frontend-Protege-Budget-Tracker/blob/master/docs/Dataflow%20Diagram.png)


### Details of Project Management & Planning:

![Team Charter](https://github.com/ruthmci/frontend-Protege-Budget-Tracker/blob/master/docs/Team%20Charter.jpg)

![Kanban Week 1](https://github.com/ruthmci/frontend-Protege-Budget-Tracker/blob/master/docs/kanban%20I.jpg)

![Kanban Week 2](https://github.com/ruthmci/frontend-Protege-Budget-Tracker/blob/master/docs/Kanban%20II.jpg)


### Project plan & timeline

![Project plan & timeline](https://github.com/ruthmci/frontend-Protege-Budget-Tracker/blob/master/docs/Project%20Timeline.png)

### Screenshots of Trello board(s)

![Trello I](https://github.com/ruthmci/frontend-Protege-Budget-Tracker/blob/master/docs/Trello%20I.png)

![Trello II](https://github.com/ruthmci/frontend-Protege-Budget-Tracker/blob/master/docs/Trello%20II.png)

![Trello III](https://github.com/ruthmci/frontend-Protege-Budget-Tracker/blob/master/docs/Trello%20III.png)

### Post Project Review 


### Project Management
![Retro](https://github.com/ruthmci/frontend-Protege-Budget-Tracker/blob/master/docs/Retro.jpg)


_____________________________________________________________
### Obtain final project sign-off /Create a questionnaire for the client to ascertain the satisfaction with your products and services:
Please take a moment to tell us about your experience and how well our web app has been meeting your expectations. 
How often do you use the product?
Does the product help you achieve your goals?
What is your favourite aspect of the product?
What would you improve if you could? 
How satisfied are you with your experience working with us?

Very satisfied
Satisfied
Neutral
Dissatisfied
Very Dissatisfied
Can you share your reasons why?

__________________________________________________________
### Record interactions with your client in a diary format/Client communications

Client Meeting 05/07/19 through Skype 
Mark gave us a brief description of an idea he has for an app.
He currently uses excel to monitor the annual learning budget for each protege. He receives an email, usually through slack requesting money for a book or conference. He must check that there is money available in the budget and then he adds the item, the amount and date to a the protege table. He wants an app where he can achieve all these things without having to use excel.

Client Meeting 12/07/19 through Skype 
Sent Mark through our wireframes to get some feedback with the direction we are going.
Questions: Does every protege get a fixed budget? Yes.
Is there branding regulations we should follow? Identikit is available on intranet with all details.
Does he want an image of protege’s with their information? Not at this stage.
We confirmed MVP needs to be
-	Create, Read, Update and Delete on proteges
-	Create, Read, Update and Delete on items purchased
-	Date on items purchased and protege
-	Ability to see total spend + balance for each protégé
-	Ability to see items purchased for each protégé
-	User cannot delete protégé until all items have been deleted
Figma boards are signed off.
Nice to have if we have time after we reach MVP
-   login with authentication
show previous year transactions with edit functions
incorporate this app into a backend API that was built for Mark previously and holds data on all proteges (as well as their rotation details)
-  get API data
-  compare against your database to see if there are any proteges in the API data that aren't in your database
if there are, add new protege to database using API details (name, email) and give default budget of $1000

Client Testing 19/07/19
Sent our Client a link to our prototype for him to use and let us know any feedback he has on the functionality.
The link we sent wasn't working, we discovered that we needed to include redirects file so netlify could follow the routes.

Client Testing 23/07/19
We again sent our Client a functioning deployed app. This one included styling and was our final product. Mark came back to us to say that he was very happy with the final product.

Client Survey 24/07/19
We sent Mark a survey to get some feedback on his experience in dealing with us.




### Short Answer Questions: 

## A. What are the most important aspects of quality software?
Reliability is the risk of software failure and the stability of a program when exposed to unexpected conditions. Reliable software has minimal downtime, good data integrity, and no errors that directly affect users.
Number of failures, calendar time
Performance/usability refers to an application’s use of resources and how that affects its scalability, customer satisfaction, and response times. Software architecture, source code design, and individual architectural components all contribute to performance efficiency.
Load testing, stress testing, response time.
Security assesses how well an application protects information against the risk of software breaches. The quantity and severity of vulnerabilities found in a software system are indicators of its security level. Poor coding and architectural weaknesses often lead to software vulnerabilities.
Time to fix failures, number of error messages
Maintainability is the ease with which you can modify software, adapt it for other purposes, or transfer it from one development team to another. Compliance with software architectural rules and use of consistent coding across the application combine to make software maintainable.
(Lines of code)






## B. What libraries are being used in the app and why?
ReactJS is fast so it can handle complex updates and still be quick. It is modular, using smaller, reusable files which makes it more maintainable. It is also scalable, so it can handle large programs that display a lot of changing data. React is popular so there is a lot of information available online.
Mocha runs on Node.js and the browser to do simple testing. It runs tests serially, which makes it easy to track and report what’s going on.
Babel is used as a simple javascript compiler. It supports the latest version of JavaScript so it can be used without waiting for the browser support to catch up.
ESLint is used for catching syntax errors and style issues in the command line.
Jester is a cross-platform javascript testing tool which uses the karma test runner for running unittests on multiple browsers.
Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output.

## C. A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?
Programming: Javascript, HTML, CSS, MongoDB or equivalent, React, API
Testing : Before giving the web app to the client, make sure its compatible with most browsers, links are working, forms work, navigation menu works, pages are loading fast. 
Basic Knowledge of Design: understand basic principles of a good web app layout and also responsive design. At a minimum, a developer of a website should be able to crop or resize an image, customise colours, apply some effects.
SEO: Developers have to be aware of redirecting, so that both users and search engines can be sent to different URLs from the page the was originally requested, using 301, 302 or Meta Refresh. (Meta tags and titles, subdomains, internal linking, sitemap are all key components of SEO). 
Security: Security skills are indispensable when creating a website. You need to be ready for any security attack and know how to provide a safe solution for it. (egs include SQL injection is an attack of data-driven software (applications), Cross-site scripting attack occurs when a hacker uses a malicious script to infect a web page, Error messages can be a source of information for hackers).  
Time Management and Planning: Plan tasks in detail, have a checklist system, have a to-do list everyday, break down larger more difficult tasks into manageable pieces, include rest time!)
And testability: number of technologies needed to test, quality of documentation.

## D. Within your own project what knowledge or skills were required to complete your project, and overcome challenges?

A variety of knowledge and skills were required to complete the project, including: 
 - Planning and project management skills to ensure the project stayed on schedule and within scope
 - Communication skills within the team to ensure the team was working cohesively.
 - Collaboration and team work skills to ensure that knowledge and skills were shared, tasks were divided up for efficiency when needed and other tasks were worked on together when needed.
 - Communication skills in liaising with the client to ensure the project was meeting our client's needs and staying on track
 - Software design knowledge and skills to ensure we planned and designed our database, user flows and data flows adequately before we started building. 
 - Empathy with our client to ensure we considered their needs and requirements in our design.
 -  Technical knowledge and skills working with Mongo, Mongoose, Express, NodeJS, React, testing, data validation, Figma, HTML and CSS, deployment. 

## E) Evaluate how effective your knowledge and skills were for this project, using examples, and suggest changes or improvements for future projects of a similar nature?

 - Planning and project management skills were demonstrated through our daily standups, our Trello board planning with tasks allocated by person/people and due date, our retros and our constant communication. Our strong project management ensured we hit our MVP by the deadline at the end of the second week.   
  
 - Communication skills within the team were demonstrated through our daily, standups, constant communication face-to-face throughout the day, our Trello board and via the Slack Channel where we communicated about issues, decisions and pull requests. This communication ensured we always knew what others were working on and didn't overlap. It ensured we discussed issues early so they could be solved early. It also meant we had very few merge conflicts in Github. One aspect we could improve on would be with our morning standups with CoderAcademy staff. Sometimes we missed these because of technical or other issues on our end. 
  
 - Collaboration and team work skills were demonstrated through the project management and communication activities mentioned in the above two points. Our good collaboration skills ensured we hit our MVP on time and stayed on track throughout the project. 

- Software design knowledge and skills were demonstrated through our design of our ERD and user flows. This planning and design ensured that when we created our database schema and routes we had a clear path to follow and very few issues with setting up the backend and we made very few changes to the backend once we started building the frontend.  
  
- Communication and empathy with our client was shown through our regular communication with the client, user story writing and journey mapping. One aspect we could improve on would be to confirm our MVP with the client a little earlier and provide him with a schedule. In our second meeting with the client we realised he had a slightly different idea of what could be accomplished by the project. Once we discussed timeframes with him he agreed to a smaller scoped proejct with room to grow later down the track. 
 
 - We demonstrated our technical knowledge and skills working with Mongo, Mongoose, Express, NodeJS, React, testing, data validation, Figma, HTML and CSS and deployment. Since many of these skills were still very new to us, we were lacking in some of them but the project provided an excellent opportunity for us to learn and improve our knowledge and skills on the job. We also strenghtened our growth mindset because we each took on parts of the project that were challenging for us. By working through these challenges, figuring things out and asking for help when needed we learnt skills and knowledge that will set us ahead for many future projects.   

____________________________________________________________






