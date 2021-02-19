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

https://validator.w3.org/

https://webformatter.com/html


All code passed the validator, with errors corrected relating to 

CSS

https://jigsaw.w3.org/css-validator/

Javascript

https://jshint.com/

https://esprima.org/demo/validate.html

Python

http://pep8online.com/


### Testing against User Stories



### Bugs