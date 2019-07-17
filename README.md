

Client Meeting 05/07/19 through Skype.

Mark gave us a brief description of an idea he has for an app.
He currently uses excel to monitor the annual learning budget for each protege. He receives an email, usually through slack requesting money for a book or conference. He must check that there is money available in the budget and then he adds the item, the amount and date to a the protege table. He wants an app where he can achieve all these things without having to use excel.


Client Meeting 12/07/19 through Skype.

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
-   show previous year transactions with edit functions
-   incorporate this app into a backend API that was built for Mark previously and holds data on all proteges (as well as their rotation details)
-  get API data
-  compare against your database to see if there are any proteges in the API data that aren't in your database
-  if there are, add new protege to database using API details (name, email) and give default budget of $1000


User Stores
I am a protege manager, I want to;

-   Keep a record of all the proteges and their purchases in the program 
-   See an overview of total spent in the FMA
-   See a detailed view of the total spend of individual proteges
-   Track the protege learning budget
-   View individual protege details
-   See the overview for each protege
-   Analyse how the proteges are spending , sort purchases by category and by amount
-   Log amount spent by individual proteges
-   I want to create a new protege
-   I want to update a protege details
-   I want to sort purchases by category or by spend
-   Delete protege from view/Archive (status update). Read-only.
-   I want to edit budget item or amount
-   I want to be able to sign up new users
-   I want to be able to upload images of the proteges to help identify them

…so that I can;
-   track how much is left in the Future Makers Academy learning budget.
-   Track how much is remaining in their overall budget.
-   See what proteges are finding most valuable as a source of learning.
-   So I can check the protege’s individual budget.
-   So that I can manage and edit the protege list and expenses.
-   To make sure not to go over FMA budget
-   To make sure each protege stays within their budget
-   So I can keep expenses up to date
-   See only current list of protege’s
-   So I can edit any typo’s made a previous time




Short Answer Questions: 

A. What are the most important aspects of quality software?
Reliability is the risk of software failure and the stability of a program when exposed to unexpected conditions. Reliable software has minimal downtime, good data integrity, and no errors that directly affect users.
Number of failures, calendar time
Performance efficiency refers to an application’s use of resources and how that affects its scalability, customer satisfaction, and response times. Software architecture, source code design, and individual architectural components all contribute to performance efficiency.
Load testing, stress testing, response time.
Security assesses how well an application protects information against the risk of software breaches. The quantity and severity of vulnerabilities found in a software system are indicators of its security level. Poor coding and architectural weaknesses often lead to software vulnerabilities.
Time to fix failures, number of error messages
Maintainability is the ease with which you can modify software, adapt it for other purposes, or transfer it from one development team to another. Compliance with software architectural rules and use of consistent coding across the application combine to make software maintainable.
(Lines of code)
Also the assessment of product usability: Completion rate, satisfaction level.






B. What libraries are being used in the app and why?
ReactJS is fast so it can handle complex updates and still be quick. It is modular, using smaller, reusable files which makes it more maintainable. It is also scalable, so it can handle large programs that display a lot of changing data. React is popular so there is a lot of information available online.
Mocha runs on Node.js and the browser to do simple testing. It runs tests serially, which makes it easy to track and report what’s going on.
Babel is used as a simple javascript compiler. It supports the latest version of JavaScript so it can be used without waiting for the browser support to catch up.
ESLint is used for catching syntax errors and style issues in the command line.



C. A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?
Programming: Javascript, HTML, CSS, MongoDB or equivalent, React, API

Testing : Before giving the web app to the client, make sure its compatible with most browsers, links are working, forms work, navigation menu works, pages are loading fast. 
Basic Knowledge of Design: understand basic principles of a good web app layout and also responsive design. 
SEO: Developers have to be aware of redirecting, so that both users and search engines can be sent to different URLs from the page the was originally requested, using 301, 302 or Meta Refresh. (Meta tags and titles, subdomains, internal linking, sitemap are all key components of SEO). 
Security: Security skills are indispensable when creating a website. You need to be ready for any security attack and know how to provide a safe solution for it. (egs include SQL injection is an attack of data-driven software (applications), Cross-site scripting attack occurs when a hacker uses a malicious script to infect a web page, Error messages can be a source of information for hackers).  
Image Resizing: At a minimum, a developer of a website should be able to crop or resize an image, customise colours, apply some effects.
Time Management and Planning: Plan tasks in detail, have a checklist system, have a to-do list everyday, break down larger more difficult tasks into manageable pieces, include rest time!)
And testability: number of technologies needed to test, quality of documentation.



