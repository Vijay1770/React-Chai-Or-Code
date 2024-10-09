export const Contact = () => {
 
 //Handle FOrm code...
 const handleFormSubmit = (formData)=>{
    const formInputData=Object.fromEntries(formData.entries());
   console.log(formInputData);
   
}
 
    return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Name"
            name="username"
            required
            autoComplete="false"
          />

          <input
            type="email"
            className="form-control"
            placeholder="Enter Your Email"
            name="email"
            required
            autoComplete="false"
          />
          <textarea
            name="message"
            id=""
            className="form-control"
            placeholder="Enter Your Message"
            required
            autoComplete="off"
          ></textarea>

          <button type="submit" value="send">Send</button>
        </form>
      </div>
    </section>
  );
};
