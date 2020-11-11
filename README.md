ETHIO-CONNECT - a Javascript/React and Ruby/Rails web application

<image src="./src/Images/ETHIO-CONNECT2.png"></image>

Flatiron School - Capstone Final Project by Solomon Yismaw

<h4>
Frontend: 
</h4> github
<h4>
Backend: 
</h4> github
<h4>
Demo Video: 
</h4>video link

<h3>
Project functionalities
</h3>

A user can
1. Create account
2. A registered member can
   - host, edit and delete an event
   - invite other member for an event
   - post announcements
   - add and view pictures from events
3. Can see invitations sent from members hosting an event

<h3>
Libraries and gems used:
</h3>

- react-router-dom
- Semantic UI - CSS framework
- FullCalendar.io
- gem bcrypt
- gem rest-client
- gem json
- gem jwt

<h1>
Installation instructions:
</h1>

1. Clone both the frontend and backend repositories to your computer
2. Run bundle install on the backend repository to install the required gems
3. Run rails db:migrate && rails db:create, then rails db:seed to migrate the schema and seed your data
4. Run rails s to start the backend server
5. Run yarn install on the frontend repository (this one) to install the required libraries
6. Run yarn start to start the frontend server
7. Open http://localhost:3001 to view your server
8. To end, cmd + C in the terminal that is running your server (for both your frontend and backend) to stop running the server.
