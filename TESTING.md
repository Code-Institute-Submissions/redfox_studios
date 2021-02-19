# Testing
During manual testing of the page, 2 errors consistently appeared.  These were

### Error regarding favicon icon

* This was resolved by importing a custom fav icon onto the page.

### Appearance of page on IOS devices.

* Certain CSS elements wouldn’t translate to IoS devices, such as initial font chosen, but in particular the hero image on the page.  This was initially coded as a css background image, which upon research, seemed consistent across IoS devices according to StackOverflow and other forums.  Attempting different solutions suggested by users, it was decided not to use the css background image property.  Going back to previous projects and after trialling different methods, the Bootstrap ‘Carousel’ componenet was chosen.  Initially, this was used for multiple images, however, after testing with other users, just one image was kept on.



### Features

Features of the page were tested as follows:

#### Navbar
- The Navbar was tested to ensure that both its links all worked and that its dropdown
feature worked responsively.  This was tested and found successful.  Initial examples 
required styling of the elements in order to come to its final rendering.

#### Footer
-The footer was tested to ensure that all links were working.  The footer was also
tested across devices to ensure that its style across a range of devices was consistent.
Initially, the footer was slightly off center, however, adjustment of CSS styles
corrected this with a decrease in the margin-right padding.

#### Quiz
-The quiz was tested by going through random responses.  Overall, most combinations lead to 
a pre-selected answer e.g, You might like animals.  It is only if the user selects three distinct
answer categories a try again message will appear.  This is only achievable through one combination 
and was left in to encourage the user to be more decisive.

#### Bag 
- The bag was tested through adding a range of products.  This included trying to 'break' the
quantity increment value.  Quantity is capped at 20 and an alert appears if the user tries.

#### Checkout
- The checkout was tested by processing a purchase and also trying to make a purchase with
incorrect details.  Alerts appear if a user tries to enter an incorrect number eg. 
if the cc number entered is all 1's.  Checkout has been tested as a guest, user and 
superuser without any discrepencies in consistency other than those expected (e.g, 
being able to save personal details)

#### Profile
- The profile app was tested by registering, logging in and using page features as 
a user.  This is most evident in the checkout and bag apps.  Superusers are also able
to post blogs through the django admin portal and this appears when blog has been posted.


#### Links
- External page links have all been tested and work.

### Blog and Commenting

- The blog was tested by going to list view, reading blog detail page, clicking on tags and
similar post options for verification.  Comments can be left by any user and are posted clearly.


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


### Bugs