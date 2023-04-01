// import { getPosts } from '~/utils/api';

const posts = [
  { title: `10 Tips for Writing Clean JavaScript Code` },
  { title: `How to Build a Responsive Website with Bootstrap 5` },
  { title: `Introduction to Machine Learning with Python` },
  { title: `5 Essential Tools for Web Developers in 2023` },
  { title: `Creating Scalable Node.js Applications with Express` },
  { title: `The Future of Artificial Intelligence: A Comprehensive Guide` },
  { title: `Debugging Tips and Tricks for JavaScript Developers` },
  { title: `Building Interactive Web Applications with React` },
  { title: `Getting Started with Data Science: A Beginner's Guide` },
  { title: `The Power of CSS Grid: A Complete Tutorial` },
  { title: `10 Must-Have JavaScript Libraries for Web Developers` },
  { title: `Developing iOS Applications with Swift` },
  { title: `How to Build a RESTful API with Node.js and MongoDB` },
  { title: `Mastering CSS Flexbox: A Complete Guide` },
  { title: `Introduction to Deep Learning: A Comprehensive Overview` },
  { title: `Building Real-Time Applications with Socket.io` },
  { title: `The State of Web Development in 2023` },
  { title: `Advanced JavaScript Techniques for Experienced Developers` },
  { title: `Creating Dynamic User Interfaces with Vue.js` },
  { title: `Getting Started with TensorFlow: A Beginner's Guide` },
  { title: `How to Optimize Website Performance for Mobile Users` },
  { title: `Building Powerful Web Applications with Angular` },
  { title: `The Future of Cybersecurity: Trends and Predictions` },
  { title: `10 Common Mistakes to Avoid in JavaScript Development` },
  { title: `Designing Responsive Emails with HTML and CSS` },
  { title: `Introduction to Blockchain Technology: A Comprehensive Guide` },
  { title: `Creating Interactive Data Visualizations with D3.js` },
  { title: `Getting Started with AWS: A Beginner's Guide` },
  { title: `Building High-Performance Websites with Gatsby` },
];

export default defineEventHandler(async () => {
  // const mock = true;
  // const posts = mock ? dummyPosts : await getPosts();
  return posts;
});
