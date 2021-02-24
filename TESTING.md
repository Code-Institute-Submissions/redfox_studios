# Testing

### Features

Features of the page were tested as follows.  Tests included entering 'wrong' information or data in order to test for 'breaks' in code.

#### Navbar
- The Navbar was tested to ensure that both its links all worked and that its dropdown
feature worked responsively.  This was tested and found successful.  Initial examples 
required styling of the elements in order to come to its final rendering.

- All links were checked to follow the correct path and the drop down was tested on a variety of screens to check responsive view.  There were
no discrepencies in navbar view or link paths.

#### Footer
- The footer was tested to ensure that all links were working.  The footer was also
tested across devices to ensure that its style across a range of devices was consistent.
Initially, the footer was slightly off center, however, adjustment of CSS styles
corrected this with a decrease in the margin-right padding.  All links to external pages open up in seperate windows.

![Mobile display](https://github.com/samc85/redfox_studios/blob/master/media/footer.png)

#### Quiz
- The quiz was tested by going through random responses.  If a user clicks submit before any submissions it will prompt them
to try again.  If the user scores 1 for each of the categories in the code, a try again message will appear.  However, answers have been
set out so that one of the 3 categories will receive 3 points.  The reset button works throughout the quiz process.  If a user only 
answers 3 or less questions and the scores are even for the two different categories, a try again message will appear.  If a user comes across a score 
where there is no higher total, the try again message will appear.

#### Bag 
- The bag was tested through adding a range of products.  This included trying to 'break' the
quantity increment value.  Quantity is capped at 10 and an alert appears if the user tries to go beyond through either button.
If the user clicks on the bag without anything in there they are directed towards the quiz.  If the user adds/removes the items
these are updated accordingly and the totals (including delivery) are updated to reflect this both on the bag page and in the top right
corner on display.

![Mobile display](https://github.com/samc85/redfox_studios/blob/master/media/quantity.png)


#### Checkout
- The checkout was tested by processing a purchase and also trying to make a purchase with
incorrect details.  Alerts appear if a user tries to enter an incorrect number eg. 
if the cc number entered is all 1's.  Checkout has been tested as a guest, user and 
superuser without any discrepencies in consistency other than those expected (e.g, 
being able to save personal details).  All checkouts were then followed up on the Stripe API for successful
webhooks recieved.  

- If the checkout is attempted with an incorrect card number, an error appears telling the user their details are wrong.
If a user has not filled in a section that is required, the process will not be completed and the user is redirected to complete.


![Mobile display](https://github.com/samc85/redfox_studios/blob/master/media/webhooks.png)

#### Profile
- The profile app was tested by registering, logging in and using page features as 
a user.  This is most evident in the checkout and bag apps.  Superusers are also able
to post blogs through the django admin portal and this appears when blog has been posted.
Only superusers are able to view the the Product Management Page and it does not appear for other users.
For general users, the My Profile page will appear but no product management.
Superusers are able to access the edit / delete buttons on products.  
General users are unable to access products this way and will just see the products themselves. 

- If a general user is logged in and tries to access the Django admin, they are given a message that they do not
have access.  This is the same for users not logged in who try to access the admin are prompted to log in.  

![Mobile display](https://github.com/samc85/redfox_studios/blob/master/media/successsignin.png)


#### Links
- External page links have all been tested and work.

### Blog and Commenting

- The blog was tested by going to list view, reading blog detail page, clicking on tags and
similar post options for verification.  Comments can be left by any user and are posted clearly.
If a user tries to post a comment without filling in all the fields an error message appears telling the user to 
fill in the requested field. 

- Pagination appears at the bottom of the blog and increases page count beyond 3 blog posts.  Users are able to move around the blog pages, 
through tags, pagination and similar posts without breaking any page paths.

![Mobile display](https://github.com/samc85/redfox_studios/blob/master/media/blogcomment.png)


### About Page (studio)

- The about page studio dropdown works as expected.  Users can click on either the old or new studio button and the content drops down.  
Users can click on the same button or a 'close' button appears at the bottom of the content in order for the content to hide.  If a user
doesn't close after viewing, the new studio content will appear under the old studio page.  Both can be closed again with either the 
close button or clicking on the old or new studio buttons.

### Search bar

- The search bar is present in the nav dropdown and on the products page.  The search bar searches by name and
by numbers and states this to the user in the placeholder.  The search works both lower and uppercase, for example searching
for for 'penguin' and 'PENGUIN' returns a penguin product.  In searching for price a user can search for either 10.00 or 10 to return products
for that price.  


### Responsivness and Compatibility

All areas were tested on a macbook pro 13inch, ipad pro 11inch, iphone 12 mini and a Samsung Galaxy and Huawei mobile.  

Testing was also done on the Google Developers Tab Emulator across the following devices:

- Iphone 5 through to X
- Ipad and ipad pro
- Responsiveness tested through range of media sizes.  CSS tricks was referenced as well for different
sizes.

https://css-tricks.com/snippets/css/media-queries-for-standard-devices/

Examples of the site on different screens can be seen below:



![Mobile display](https://github.com/samc85/redfox_studios/blob/master/media/phone.png)


![Tablet display](https://github.com/samc85/redfox_studios/blob/master/media/tablet.png)


![Desktop display](https://github.com/samc85/redfox_studios/blob/master/media/desktop1.png)


### Responsiveness Test

The site, in addition to above was deemed 'mobile friendly' through use of:

https://search.google.com/test/mobile-friendly 

### User Testing

The site was also shared amongst friends and families.  The following was fed back:

- Footer was off center on mobile devices (this was later corrected)
- Overly stylised font choice, this was changed to one more readable
- Site was found to be professional looking, clear and fit for purpose.
- Blog and Quiz were valued sections and the product page was well set out to show products clearly 

Users were provided with both the test card number and an incorrect one.  Users who used the correct one were successful, however
the incorrect numbers returned an error. 

### Validation Services

HTML

- https://validator.w3.org/

- https://webformatter.com/html


All code passed the validator, with errors corrected relating to stray tags and ul elements.

CSS

- https://jigsaw.w3.org/css-validator/

All code passed validator.

Javascript

- https://jshint.com/

- https://esprima.org/demo/validate.html

All code passed as syntactically valid.

Python

- http://pep8online.com/

    Within the gitpod IDE, warnings appear for some Python code where the line is too lone (> 79).  This is corrected,
however on some lines, where the number is just over, lines are kept as single to make the code easier to read.  This
was done at my discretion and also reading general comments through stack overflow about line length.


### Testing against User Stories

Tests against user stories are as follows:

#### As a first time user I want to:

1. Navigate all areas of a site with ease so that I can find what I am looking for.

![Mobile display](https://github.com/samc85/redfox_studios/blob/master/media/navbar.png)

2. Understand what the site purpose is so that I can make informed choices.
3. Clearly recognise the different make up of the site so that I can recall its key features for future visits.

![Mobile display](https://github.com/samc85/redfox_studios/blob/master/media/desktop3.png)

4. Be able to find a contact for the site owners so that I can make any customer queries.
5. Be visually accessible so that the site is easy to navigate and view.
6. Be accessible on a range of devices so that I can access wherever I am.

![Mobile display](https://github.com/samc85/redfox_studios/blob/master/media/phone2.png)

7. Read, search and comment on blog posts so that I can be part of an online community.



#### As a casual shopper I want to:

1. browse and search for products by name and price range so that I can make informed purchases.

![Mobile display](https://github.com/samc85/redfox_studios/blob/master/media/shoppage.png)

2. look at a product in more detail without being unsure on what I am purchasing so that I feel confident as a shopper.

![Mobile display](https://github.com/samc85/redfox_studios/blob/master/media/productinfo.png)

3. make a purchase securely and safely so that I do not fear any security reasons.
4. receive confirmation of my order so that I have peace of mind for my order.

![Mobile display](https://github.com/samc85/redfox_studios/blob/master/media/orderconfirmation.png)

5. be made clearly aware of my delivery fees so that I know exactly what my expenses are.

![Mobile display](https://github.com/samc85/redfox_studios/blob/master/media/checkout.png)

6. read, comment and be aware of similar blog posts so that I can read up on a topic easily.

![Mobile display](https://github.com/samc85/redfox_studios/blob/master/media/blogcomment.png)

#### As a site member I want to:


1. register and subsequently log into the site so that I can have my personal details and order history saved.

![Mobile display](https://github.com/samc85/redfox_studios/blob/master/media/signup.png)

2. view my profile and order history so that I can keep track of my site usage.

![Mobile display](https://github.com/samc85/redfox_studios/blob/master/media/signin.png)

3. have my details pre-saved in order to make future purchases more streamlined so that I can save time.

![Mobile display](https://github.com/samc85/redfox_studios/blob/master/media/personal_form.png)

4. be able to log into the site with ease so that I do not face barriers in using the site.
5. not have being a member impact upon any of the other user stories so that I am not negatively impacted.




#### As an admin user I want to:

1. add 'data' to the site in the form of products and blogs so that I can reach my customers.

![Mobile display](https://github.com/samc85/redfox_studios/blob/master/media/productmanage.png)

2. be able to log in with extra features so that I can access what I need.
3. be able to Add, edit and delete products in the store so that I can keep products up to date and relevant.

![Mobile display](https://github.com/samc85/redfox_studios/blob/master/media/productinfo.png)

4. fulfil all other user stories without being obstructed by being an admin so that I can experience the site as a customer.
5. create blog posts to update users on content so that I can stay connected to my customer base.
6. read, search and comment on blog posts so that I can interact further with my customers.

![Mobile display](https://github.com/samc85/redfox_studios/blob/master/media/blog.png)


### Bugs

Two bugs were found during development and solved as detailed below:

### Error regarding favicon icon

* This was resolved by importing a custom fav icon onto the page.

### Appearance of page on IOS devices.

* Certain CSS elements wouldn’t translate to IoS devices, such as initial font chosen, but in particular the hero image on the page.  This was initially coded as a css background image, which upon research, seemed consistent across IoS devices according to StackOverflow and other forums.  Attempting different solutions suggested by users, it was decided not to use the css background image property.  Going back to previous projects and after trialling different methods, the Bootstrap ‘Carousel’ componenet was chosen.  Initially, this was used for multiple images, however, after testing with other users, just one image was kept on.

### Port 8000 not found

* Towards the end of development, the page would not load via GitPod or Heroku without showing a 404 error and product not found.  This was despite
no changes to code (at this point readme and minor style upgrades were being made).  This also only appeared on Google Chrome when using my laptop.
Upon investigation, no clear reason was given, however one post in stack overflow suggested clearing the browser history and cache, which resolved the problem.

### Debug false 

* When environ variable debug is turned false (for production), static files do not work in the local server (Github), however, all 
functionality works in the deployed version on Heroku.  In looking at both the Slack CI channel and StackOverflow this is not an
uncommon problem and if the page is worked on in a development scenario in the future the debug can be changed back to True.
