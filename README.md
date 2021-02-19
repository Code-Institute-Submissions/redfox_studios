Readme file contents

### Access for educational purposes


### UX Design

### Purpose

The purpose of this site is to exhibit, 
promote and sell the artworks from studio 
to an ever-growing audience.  Telling the 
story of the studio’s history, a collection 
of past and present blog posts and able to 
interact through blog comments, the site aims 
to connect to its customers so they understand 
the story of the site, so it is more than a 
customer/shop transaction.

### User Stories

User stories are broken down into the following categories:

#### As a first time user I want to:

1. Navigate all areas of a site with ease so that I can 
2. Understand what the site purpose is
3. Clearly recognise the different make up of the site 
4. Be able to find a contact for the site owners
5. Be visually accessible
6. Be accessible on a range of devices
7. Read, search and comment on blog posts



#### As a casual shopper I want to:

1. Browse and search for products by name and price range
2. Look at a product in more detail without being unsure on what I am purchasing
3. Make a purchase securely and safely
4. Receive confirmation of my order
5. Have my order delivered 
6. Be made clearly aware of my delivery fees
7. Read, search and comment on blog posts

#### As a site member I want to:

1. I want to be able to 
2. Register and subsequently log into the site
3. View my profile and order history
4. Have my details pre-saved in order to make future purchases more streamlined
5. Be able to log into the site with ease
6. Not have being a member impact upon any of the other user stories
7. Read, search and comment on blog posts

#### As an admin user I want to:

1. I want to be able to 
2. Login securely
3. Add, edit and delete products in the store
4. Fulfil all other user stories without being obstructed
5. Create blog posts to update users on content
6. Read, search and comment on blog posts


### Business goals

The Business aims to grow its expanding customer base by making use of its website as an ‘online’ studio.  By beginning with a simple shop, blog and history, the company will seek to expand its online ‘presence’ through more features as it continues to grow.  

### Wire frames

Wireframes are mostly true to final site and can be access here:

### Inspiration 

Numerous websites were researched to take design inspiration, including the author’s previous Milestone Projects.  The intent was to make the site look clean, with a clear focus on each pages’ main focus, such as the artworks.  The heavy use of ‘white’ instead of different colours or shades was used to emphasise the content and also to resemble the look of the studio in person, where clutter is kept to a minimum.  

## Features

### Navigation

#### Navbar
For site navigation, the main features are the navbar and the footer.  The Navbar includes links to all key areas of the site, as well as a search bar for products.  The navbar is a dropdown item.  The shopping cart for the user is ever present in the top right hand corner of the navbar and is updated automatically.  The dropdown feature of the nav was implemented to keep the site clean and easy to follow.

#### Footer
The footer contains the same navigation as well as to external links.  The layout is slightly different but is still clear and concise.  

#### Buttons
The page has button links throughout to help with navigation to and from arenas.  

#### Search bar
The search bar allows a user to search for products based on name and price.  This is present on every page and is accessible through the navbar dropdown.  

#### Home Page
The home page contains information about the webpage.  It includes all the navigation features and contains FAQ information about the site.

#### About Page
The about page contains button features that give access to information about the studio both historically and in the present.  This is accessed by pressing the appropriate button.  The content is then followed by a close button so that users don’t have to continuously scroll through the page.  

#### Blog Page

The blog page presents users with blog content.  Each blog content contains a clickable link to view the blog in detail.  Each blog also includes the following functions:

- view blogs as a list and in detail
- make a comment
- read others’ comments
- view similar blogs (link included)
- view tagged words (link included)


#### Shopping
Features related to the shopping functionality of the page are cateogirsed below.

#### Products
Products are searchable both in the navbar (present on each page) as well as a search bar on the product page.  Each product is presented clearly and includes the following detail:
-	Image of artwork
-	Name of artwork
-	Size of artwork
Users are also able to update the quantity of a particular artwork both on the product details page and later in the checkout process.  

#### Bag
Users shopping bag lists all the items added for checkout.  Users are able to update their bag by either increasing or decreasing their quantity.  The shopping bag/cart is updated both on the checkout page and in the top right corner for the shopping icon.  The cost of delivery is also updated automatically on the bag/checkout page and in the top corner icon.

#### Empty Bag Quiz 
Users who click on the bag link for an empty bag are encountered by a page that informs them there is nothing
in their bag and a link to keep on shopping.  There is also a quiz on the page to help give them
inspiration for their choice, e.g, whether they might prefer a realistic artwork, or something more abstract.

#### Checkout 
Users are able to checkout and purchase their item securely.  This is able to be done both as a guest, registered user and super user.  The checkout app reflects the updated bag as described above.  The checkout app uses Stripe API to process purchases.


### Users

#### Profile 
Users are able to create a profile through the register function.  Once registered and their email validated, users are able to view their purchase history and save delivery details for future purchases.

#### Register 
Users can register with the site, in order to make purchasing easier upon each visit through saved personal details and previous purchases included.

#### Login
Users, after registering are able to then login into the site across all devices.  


### Admin rights/ Superusers
Users who are created as superusers/admins are able to fulfil all other user functions as well as edit and delete products and  write their own blog through the Django admin portal.
 

### Future features

Future features to be added include: 

-payment accepted from a wider range including Apple Pay
-A forum/message board application where registered users can post/comment.  This would also link up the blog with registered users.


## Information Architecture 
### Database

The database has 6 models across all its apps.  Each is set out in the tables below.


## Technologies used

### Languages
1. HTML5
2. CSS3
3. JavaScript
4. Python

### Frameworks, Libraries & Programs
Django
- Python Web framework used to build the site.

Git
- Git was used for version control through the Gitpod terminal to commit to Git and push to GitHub.

GitHub
- GitHub is used to store the project code after being pushed from Git.

Heroku
- Heroku is the app platform where the final project was deployed..

Heroku Postgres
- Heroku’s reliable and robustl database was used to store the data for the deployed Heroku App.

jQuery:
- Javascript Library

Bootstrap 4.5.3
- Bootstrap was used to set base templates across the site and incorporate different features..

Boto3
- Python SDK for AWS, used to directly create, update, and delete AWS resources from my Python scripts.

gunicorn
- WSGI server used to substantiate everything  between the web server and web application.

pillow
- Python Imaging Library (PIL), used to add support for opening, manipulating, and saving images.

psycopg2
- PostgreSQL database adapter

AWS
- A cloud-based storage service used to store static and, media files.

Stripe
- Stripe was used to manage payments.

Temp Mail
- Temp Mail was used to provide temporary, secure, anonymous, free, disposable email addresses for testing purposes.

Google fonts
- Google fonts were used to import the fonts into the CSS file which is used on all pages throughout the project.

Font Awesome 4.7.0
- Font Awesome was used to add icons for aesthetic and UX purposes.

HTML Formatter and CSS Formatter
- Used to format my HTML and CSS files with the desired indentation level for optimal readability.

W3 Validator and W3C CSS Validator
- Used to validate my HTML and CSS files

JShint
- Used to validate JS code

PEP8 online
- Used to check code for PEP8 requirements.

Favicon
- Used to create a favicon, displaying my logo on a web browser next to the web address bar, the browser tab, and the bookmarks bar.

Techsini
- Multi Device Website Mockup Generator Tool


## Testing




## Deployment


The page was created using Gitpod.  Git was used for version control and Github was used to host the repository.  Heroku is the final hosting platform for the project with AWS S3 hosting its static and media files.

### Local Deployment: 

To run this project locally you will need:

- IDE of your choice (such as Gitpod, preferred)

The following installations:
- Git
- Python3
- Pip

You will also need to have registered with the following services:

- Stripe
- AWS S3
- Heroku


### Clone Repository

To clone the repository the following options can be followed:

1.	paste the following into the terminal 

`git clone https://github.com/samc85/redfox_studios`

2.	Go to the repository for the site and click the ‘Code’ button and ‘Download Zip’ button.
Setting Environment Variables
Environment variables can be set up through two methods, as follows:
1.	Create .env file
Add .env to .gitignore
Add the following to .env

`import os`

`os.environ["DEVELOPMENT"] = "True"`
`os.environ["SECRET_KEY"] = "<Your Key>"`
`os.environ["STRIPE_PUBLIC_KEY"] = "<Your Key>"`
`os.environ["STRIPE_SECRET_KEY"] = "<Your Key>"`
`os.environ["STRIPE_WH_SECRET"] = "<Your Key>`

2.	Go to the Gitpod home page and click the icon in top right corner.
Click on the dropdown arrow and ‘settings.’
Environment variables can be added by:
e.g,
KEY: STRIPE_PUBLIC_KEY  Value: <value>
It is vital that all env variables are consistent with the settings.py file.
Requirements 
3.	Install requirements from requirements.txt file
•	paste the following command into the terminal:
o	pip3 install -r requirements.txt
Migrations
Migrate the models to create a database
•	paste the following commands into the terminal:
o	python3 manage.py makemigrations
o	python3 manage.py migrate
Superusers
6.	Create a superuser (user with admin rights)
•	paste the following command into the terminal:
o	python3 manage.py createsuperuser
•	enter an e-mail, username and password for the superuser
7.	Run the web app
•	paste the following command into the terminal:
o	python3 manage.py runserver
8.	Log into Django admin
•	after running the web app, add /admin at the end of the URL and log in with the superuser credentials from the previous step

Heroku Deployment
1.	Create a requirements.txt file
•	paste the following command into the terminal:
o	pip freeze > requirements.txt
2.	Create a Procfile
•	create a Procfile in the root directory
•	add the following code into it:
o	web: gunicorn ecosio.wsgi:application
3.	Push the code to GitHub
•	paste the following commands into the terminal:
o	git add .
o	git commit -m "<your commit note>"
o	git push
4.	Create a new app on Heroku
•	create a new app (click on 'New' > 'Create new app')
•	give it a unique name
•	set region closest to you
5.	Set Heroku Postgres
•	go to 'Resources' tab
•	search for 'Heroku Postgres'
•	select the 'Hobby Dev' free plan
6.	Set config variables in Heroku
Key	Value
AWS_ACCESS_KEY_ID	< your AWS access key ID >
AWS_SECRET_ACCESS_KEY	< your AWS secret access key >
DATABASE_URL	< your postgres database URL >
SECRET_KEY	< your secret key >
STRIPE_PUBLIC_KEY	< your stripe public key >
STRIPE_SECRET_KEY	< your stripe secret key >
STRIPE_WH_SECRET	< your stripe webhook key >
USE_AWS	True
7.	Set up new database
•	in settings.py:
o	import dj_database_url
o	comment out DATABASES (temporarily, do not commit/push this code to GitHub until instructed so)
o	add the following code:
DATABASES = {
        'default': dj_database_url.parse("<your Postrgres database URL>")
    }
8.	Migrate the models to Postgres database
•	paste the following commands into the terminal:
o	python3 manage.py makemigrations
o	python3 manage.py migrate
9.	Load the data fixtures in this exact order
•	paste the following commands into the terminal:
o	python3 manage.py loaddata categories
o	python3 manage.py loaddata brands
o	python3 manage.py loaddata products
o	python3 manage.py loaddata blogs
10.	Create a superuser (user with admin rights)
•	paste the following command into the terminal:
o	python3 manage.py createsuperuser
•	enter an e-mail, username and password for the superuser
11.	Correct the settings.py database from step 7.
•	uncomment the DATABASES
•	remove the code added in step 7.
12.	Add the hostname of Heroku app to allowed EMAIL_HOST_USER
•	in settings.py:
o	add the following code:
ALLOWED_HOSTS = ['<your Heroku app URL>', 'localhost]
13.	Push the code to GitHub
•	paste the following commands into the terminal:
o	git add .
o	git commit -m "<your commit note>"
o	git push
14.	Set up automatic deployment to Heroku (optional)
•	in Heroku go to 'Deploy' > 'Deployment method' > 'Connect to GitHub'
•	search for your repository and click on it
•	go to 'Automatic Deployment' > click 'Enable Automatic Deploys'
15.	Test automatic deployment
•	your code should be automatically deployed to Heroku after pushing your code
Hosting Files with AWS
In order to host static files and images with AWS, you will need to create an AWS account. Additionally, you have to create:
•	an AWS S3 Bucket
•	a Bucket Policy
•	a Group
•	an Access Policy
•	a User
It is a lengthy process but you can learn more about Amazon Simple Storage Service here. After that, you will need to connect Django to S3.

