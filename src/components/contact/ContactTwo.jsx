import { useEffect, useRef, useState } from "react";
import $ from "jquery";
import userIcon from "../../assets/img/contact/user.png";
import envelopeIcon from "../../assets/img/contact/envelope-open.png";
import phoneIcon from "../../assets/img/contact/phone.png";
import penIcon from "../../assets/img/contact/pen.png";
import { ContactMap } from "./ContactMap";

export const ContactTwo = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleMouseEnter = function (e) {
      var x = e.pageX - $(this).offset().left;
      var y = e.pageY - $(this).offset().top;
      $(this).find(".td-btn-circle-dot").css({ top: y, left: x });
    };

    $(".td-btn-rounded").on("mouseenter", handleMouseEnter);

    return () => {
      $(".td-btn-rounded").off("mouseenter", handleMouseEnter);
    };
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    
    try {
      // Create URL encoded form data
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('timestamp', new Date().toISOString());

      console.log("Sending form data..."); // Debug log

      const response = await fetch("https://script.google.com/macros/s/AKfycbyyiP3G0julAwbgA4BdCDEolZFiau7PQG3lqV6_fu3t96vQYUqdq7KdzrdlC9kFq0KP/exec", {
        method: "POST",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend.toString()
      });

      console.log("Response status:", response.status); // Debug log
      console.log("Response:", await response.text()); // Debug log

      if (response.ok) {
        alert("Message sent successfully! We'll get back to you soon.");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setErrors({});
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
    } catch (error) {
      console.error("Form submission error:", error);
      alert(`Error: ${error.message}. Please check the browser console for more details.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="td-contact-3-area pt-140 pb-100">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-6 mb-40">
            <div className="td-contact-3-content mb-60">
              <h2 className="td-section-title mb-20">Schedule a call</h2>
              <p>
                If your portfolio feels scattered, or you're unsure where to begin,
                let's sit together. <br />
                One meaningful conversation can shift the way you look at your
                money — forever.
              </p>
            </div>
            <form ref={form} onSubmit={sendEmail} className="td-contact-form">
              <div className="row">
                <div className="col-lg-6">
                  <div className="td-contact-form td-contact-3-input">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={loading}
                    />
                    <img src={userIcon} alt="user" />
                    {errors.name && <small className="text-danger">{errors.name}</small>}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="td-contact-form td-contact-3-input">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={loading}
                    />
                    <img src={envelopeIcon} alt="envelope" />
                    {errors.email && <small className="text-danger">{errors.email}</small>}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="td-contact-form td-contact-3-input">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone no."
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={loading}
                    />
                    <img src={phoneIcon} alt="phone" />
                    {errors.phone && <small className="text-danger">{errors.phone}</small>}
                  </div>
                </div>
                <div className="col-lg-12 mb-40">
                  <div className="td-contact-form td-contact-3-input">
                    <textarea
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={loading}
                      rows="4"
                    />
                    <img className="envelope" src={penIcon} alt="pen" />
                    {errors.message && <small className="text-danger">{errors.message}</small>}
                  </div>
                </div>
              </div>
              <button type="submit" className="td-btn-rounded" disabled={loading}>
                <span className="td-btn-circle-dot"></span>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
          <div className="col-lg-6 container mb-40">
            <ContactMap />
          </div>
        </div>
      </div>
    </div>
  );
};