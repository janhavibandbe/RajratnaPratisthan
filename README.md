### Rajratna Pratisthan static website

## Link of hsoted website
    https://www.rajratnapratisthan.com/

## Run this project on your local computer
    1. Open project in VS code
    2. Open .env file and change the values accordingly
    3. To get EmailJs values in .env file, refer this video to get started with EmailJs service
        https://www.youtube.com/watch?v=bMq2riFCF90
    4. Open VS code terminal
    5. Type this command - npm install
    6. node_modules will get installed.
    7. Then type this command - npm run dev
    8. You will see http://localhost:{{port_number}} link in terminal. Open this link in browser.

## Technologies used
    1. React js using VITE
    2. HTML
    3. CSS

## Features
    1. Responsive Design: Optimized for various screen sizes and devices
    2. Attractive Carousels and Swiper Components: Enhance visual appeal and user engagement.
    3. Email feature in Get Invloved and Contact pages
    4. Success Toast Notifications: Confirm successful email submissions
    5. Dynamic Counter: Displays increasing statistics on the homepage
    6. Use of masonry layout for Photo gallery and Video gallery
    7. Full-Page Modals: Open when clicking images in the Gallery and News Articles sections of the Media Center page
    8. Embedded google map
    9. Embedded youtube videos
    10. Dynamic 'Read More' links to read detailed content of Events and Our Works on separate page
    11. Scroll Fade Animations: Engaging visual effects as users scroll down pages
    12. 'Not Found' page when user accidently type invalid url path in browser
    13. Direct Access to Social Media: Footer icons open respective apps or websites.
    14. One-Click Dialing: Phone numbers in the footer open the default dialer on mobile devices
    15. One-Click Email Access: Email addresses in the footer launch the default mail application on mobile or desktop
    16. Location Links: Clicking the address in the footer opens the office location in Google Maps on mobile devices.

## References

## Demo

## Hosting process
    1. Created an account on Hostinger on 10th Oct 2024.
    2. Selected a hosting plan by reviewing various options and reached the final payment stage.
        (Using UPI automatically activated the autopay feature and increased the cost by nearly 100%.)
        (The price displayed for each plan on the homepage was not the actual amount due. Additional components and taxes were added during the purchase process.)
    3. Selected 4 year hosting plan of INR --- and paid the amount from credit card of Prof. Spruha Aathlye. 
        (When making a payment, ensure that you do not activate any autopay / auto-renewal features.)
        (Also, confirm that the hosting plan includes an SSL certificate; otherwise, it will need to be purchased separately.)
    4. Claimed a free domain with this hosting plan for the first year. The free domain needs to be renewed after October 9, 2025.
    5. Added a .htaccess file to the public folder. This file helps suppress the '404 - Page Not Found' error when refreshing the page afte hosting.
        If you are deploying single page application with '/' route for home page, then no need to .htaccess file.
    6. After purchasing the hosting plan and domain, created the website.----------
    7. Accessed the Files section and deleted the existing index.html file.-----------
    8. Opened the working project in VS Code, opened the terminal, and typed the command: npm run build.
    9. Generated a dist folder (or a build folder if only using React JS).
    10. Dragged and dropped the folder into the Hostinger File section.