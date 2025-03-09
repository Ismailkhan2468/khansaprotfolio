
import './contectme.css'

const ContectMe = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Me</h2>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows="4" placeholder="Your Message"></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContectMe;