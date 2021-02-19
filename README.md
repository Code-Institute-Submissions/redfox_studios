# Readme file contents



![Page Banner](https://github.com/samc85/redfox_studios/blob/master/media/page_display.png)

Live Site:  https://redfox-studios.herokuapp.com/

GitHub Repository: https://github.com/samc85/redfox_studios

## Access for educational purposes

For ease of access, visitors to the site can access its different elements via the following ways:
To make any purchases (as a guest, user, superuser):

* Fill in in personal details when prompted.

* Credit Card:  4242 4242 4242 4242 
* Exp: 42/42
* CVC:  424
* Zip: 42424



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

1. Navigate all areas of a site with ease so that I can find what I am looking for.
2. Understand what the site purpose is so that I can make informed choices.
3. Clearly recognise the different make up of the site so that I can recall its key features for future visits.
4. Be able to find a contact for the site owners so that I can make any customer queries.
5. Be visually accessible so that the site is easy to navigate and view.
6. Be accessible on a range of devices so that I can access wherever I am.
7. Read, search and comment on blog posts so that I can be part of an online community.



#### As a casual shopper I want to:

1. browse and search for products by name and price range so that I can make informed purchases.
2. look at a product in more detail without being unsure on what I am purchasing so that I feel confident as a shopper.
3. make a purchase securely and safely so that I do not fear any security reasons.
4. receive confirmation of my order so that I have peace of mind for my order.
5. be made clearly aware of my delivery fees so that I know exactly what my expenses are.
6. read, comment and be aware of similar blog posts so that I can read up on a topic easily.

#### As a site member I want to:


1. register and subsequently log into the site so that I can have my personal details and order history saved.
2. view my profile and order history so that I can keep track of my site usage.
3. have my details pre-saved in order to make future purchases more streamlined so that I can save time.
4. be able to log into the site with ease so that I do not face barriers in using the site.
5. not have being a member impact upon any of the other user stories so that I am not negatively impacted.


#### As an admin user I want to:

1. add 'data' to the site in the form of products and blogs so that I can reach my customers.
2. be able to log in with extra features so that I can access what I need.
3. be able to Add, edit and delete products in the store so that I can keep products up to date and relevant.
4. fulfil all other user stories without being obstructed by being an admin so that I can experience the site as a customer.
5. create blog posts to update users on content so that I can stay connected to my customer base.
6. read, search and comment on blog posts so that I can interact further with my customers.


### Business goals

The Business aims to grow its expanding customer base by making use of its website as an ‘online’ studio.  By beginning with a simple shop, blog and history, the company will seek to expand its online ‘presence’ through more features as it continues to grow.  

### Wire frames

Wireframes are mostly true to final site and can be access here:


![Page Banner](https://github.com/samc85/redfox_studios/blob/master/media/wireframe.png)


![Page Banner](https://github.com/samc85/redfox_studios/blob/master/media/products_wf.png)


![Page Banner](https://github.com/samc85/redfox_studios/blob/master/media/blog_wf.png)

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

The database has 6 models across all its apps.  Each is set out below and relational model is
included below:

Model:  Blog_Post
The blog post model sets the values for posting a blog.

![Page Banner](https://github.com/samc85/redfox_studios/blob/master/media/blogpost_model.png)

Model: Blog_Comment
The blog comment model sets the values for leaving a blog comment.

![Page Banner](https://github.com/samc85/redfox_studios/blob/master/media/blogcomment_model.png)

Model: Checkout
The checkout model sets the values for checking out. 

![Page Banner](https://github.com/samc85/redfox_studios/blob/master/media/checkout_model.png)

Model: Checkout Line order
The checkout line order model sets the values for the users checkout details.
![Page Banner](https://github.com/samc85/redfox_studios/blob/master/media/checkoutorder_model.png)

Model: Profile 

The profile model sets the values for a user profile.
![Page Banner](https://github.com/samc85/redfox_studios/blob/master/media/profile_model.png)


Database Relationship Model
The DR model shows how each model is related.  
![Page Banner](https://github.com/samc85/redfox_studios/blob/master/media/model_relationship.png)



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

Please refer to the TESTING.md file for information on site testing procedures.

    TESTING.md 


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

*	Paste the following into the terminal 

        git clone https://github.com/samc85/redfox_studios

*	Go to the repository for the site and click the ‘Code’ button and ‘Download Zip’ button.
Setting Environment Variables

Environment variables can be set up through two methods, as follows:

1.	Create .env file
Add .env to .gitignore
Add the following to .env

        import os

        os.environ["DEVELOPMENT"] = "True"
        os.environ["SECRET_KEY"] = "<Your Key>"
        os.environ["STRIPE_PUBLIC_KEY"] = "<Your Key>"
        os.environ["STRIPE_SECRET_KEY"] = "<Your Key>"
        os.environ["STRIPE_WH_SECRET"] = "<Your Key>

2.	Go to the Gitpod home page and click the icon in top right corner.
Click on the dropdown arrow and ‘settings.’
Environment variables can be added by:

e.g: 

        KEY: STRIPE_PUBLIC_KEY  Value: <value>

It is vital that all env variables are consistent with the 'settings.py' file.

### Requirements 

* Install requirements from requirements.txt file
paste the following command into the terminal:

        pip3 install -r requirements.txt

### Migrations

Migrate the models to create a database

Paste the following commands into the terminal:

    python3 manage.py makemigrations
    python3 manage.py migrate

### Superusers

1. Create a superuser (user with admin rights)
paste the following command into the terminal:

        python3 manage.py createsuperuser
	
    enter an e-mail, username and password for the superuser.

2. Run the web app

    Paste the following command into the terminal:

        python3 manage.py runserver

3.  Log into Django admin

    After running the web app, add `/admin` at the end of the URL and log in with the superuser credentials from the previous step


### Heroku Deployment

1.	Create a requirements.txt file:
	
    Paste the following command into the terminal:
	
        pip freeze > requirements.txt

2.	Create a Procfile:
	
    Create a Procfile in the root directory
	add the following code into it:
	
        web: gunicorn ecosio.wsgi:application

3.	Push the code to GitHub:

    Paste the following commands into the terminal:

        git add -A
    
        git commit -m "<your commit note>"
        
        git push

4.	Create a new app on Heroku:

    Create a new app (click on 'New' > 'Create new app')
    Give it a unique name
    Set region closest to you

5.	Set Heroku Postgres:

    Go to 'Resources' tab
    Search for 'Heroku Postgres'
    Select the 'Hobby Dev' free plan

6.	Set config variables in Heroku:

    ### Key	Value:

        AWS_ACCESS_KEY_ID	< your AWS access key ID >

        AWS_SECRET_ACCESS_KEY	< your AWS secret access key >

        DATABASE_URL	< your postgres database URL >

        SECRET_KEY	< your secret key >

        STRIPE_PUBLIC_KEY	< your stripe public key >

        STRIPE_SECRET_KEY	< your stripe secret key >

        STRIPE_WH_SECRET	< your stripe webhook key >
    
        USE_AWS	True

7.	Set up new database:

    In settings.py:
    
        import dj_database_url
    
    Comment out DATABASES (temporarily, do not commit/push this code to GitHub until mentioned in later steps)
    
    Add the following code:

        DATABASES = {
        default': dj_database_url.parse("<your Postrgres database URL>")
            }
    
8.	Migrate the models to Postgres database:

    Paste the following commands into the terminal:

        python3 manage.py makemigrations

        python3 manage.py migrate

9.	If using data fixutres, follow the procedure to load the data fixtures below.  Otherwise data fixtures
can be added manually in the django admin portal.
    
    Paste the following commands into the terminal:

        e.g,    python3 manage.py loaddata categories
                python3 manage.py loaddata products


10.	Create a superuser (user with admin rights)

    Paste the following command into the terminal:
    
        python3 manage.py createsuperuser

    Then enter an e-mail, username and password for the superuser


11.	Correct the settings.py database from step 7.
    
    * uncomment the DATABASES
    * remove the code added in step 7.

12.	Add the hostname of Heroku app to allowed EMAIL_HOST_USER in settings.py:
    
    then add the following code:

        ALLOWED_HOSTS = ['<your Heroku app URL>', 'localhost]

13.	Push the code to GitHub

    (follow previous add, commit and push steps for github)

14.	Set up automatic deployment to Heroku (optional)

    * in Heroku go to 'Deploy' > 'Deployment method' > 'Connect to GitHub'
    * search for your repository and click on it (if done correctly, your git profile should appear to make search easier)
    * go to 'Automatic Deployment' > click 'Enable Automatic Deploys'


15.	Test automatic deployment

    Your code should be automatically deployed to Heroku after pushing your code.

    Hosting Files with AWS:

    In order to host static files and images with AWS, you will need to create an AWS account. Additionally, you have to create:
    * an AWS S3 Bucket
    * a Bucket Policy
    * a Group
    * an Access Policy
    * an User

Please refer to AWS documentation for walkthrough of the process.  

Whilst your static/ file should upload automatically after automatic deployment is enabled
you will need to create a media/ file in order to host all media.


## Credits 

The following resources can be accredited for reasons stated below:

### Project set up, Bag, Checkout and Profile apps


### Blog app


### General resources:





## Acknowledgements 


