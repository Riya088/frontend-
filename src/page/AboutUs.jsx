import carousal_1 from '../images/carousal_1.png';
const AboutUs = () => {
  return (
    <div className='container'>
      <img src={carousal_1} className="d-block w-100" alt="..." />
    <div>
      <h1>About Us</h1>
      <p>Welcome to our Hotel Management Code!</p>
      
      <h2>Our Mission</h2>
      <p>At Hotel Management Code, our mission is to provide efficient and reliable software solutions for hotel management. We strive to simplify hotel operations, enhance guest experiences, and optimize overall efficiency.</p>
      
      <h2>Our Team</h2>
      <p>We have a dedicated team of experienced developers and designers who are passionate about creating top-notch software solutions for the hospitality industry. Our team members have a deep understanding of hotel operations and are committed to delivering high-quality code that meets the specific needs of our clients.</p>
      
      <h2>What We Offer</h2>
      <p>Our hotel management code is designed to streamline various hotel processes, including reservation management, check-in/check-out, room allocation, billing, and reporting. We provide customizable and scalable solutions that can be tailored to suit hotels of all sizes, from small boutique establishments to large chains.</p>
      
      <h2>Client Testimonials</h2>
      <div className="testimonial">
        <h3>John Doe, Hotel Manager</h3>
        <p>"Hotel Management Code has revolutionized our hotel operations. The software is intuitive, easy to use, and has significantly improved our efficiency. We highly recommend their services!"</p>
      </div>
      
      <h2>Contact Us</h2>
      <p>For inquiries or to learn more about our hotel management code, please feel free to contact us:</p>
      <ul>
        <li>Phone: 123-456-7890</li>
        <li>Email: info@hotelmanagementcode.com</li>
        <li>Address: 123 Main Street, City, Country</li>
      </ul>
      
    </div>
 </div>
 
  );
};

export default AboutUs;
