ETHIO-CONNECT - a Javascript/React and Ruby/Rails web application

Flatiron School - Capstone Final Project by Solomon Yismaw

Frontend: github
Backend: github
Demo Video: video link

Detail

ETHIO-CONNECT is web based application

A user can

1. Create account
2. A registered member can
   - host, edit and delete an event
   - invite other member for an event
   - post announcements
   - add and view pictures from events
3. Can see invitations sent from members hosting an event

Libraries and gems used:

react-router-dom
Semantic UI
FullCalendar.io
gem bcrypt
gem rest-client
gem json
gem jwt

Installation instructions:

1. Clone both the frontend and backend repositories to your computer
2. Run bundle install on the backend repository to install the required gems
3. Run rails db:migrate && rails db:create, then rails db:seed to migrate the schema and seed your data
4. Run rails s to start the backend server
5. Run yarn install on the frontend repository (this one) to install the required libraries
6. Run yarn start to start the frontend server
7. Open http://localhost:3001 to view your server
8. To end, cmd + C in the terminal that is running your server (for both your frontend and backend) to stop running the server.
