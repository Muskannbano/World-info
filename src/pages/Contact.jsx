export const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    // console.log(formData.entries())
    const formInputData = Object.fromEntries(formData.entries())
    console.log(formInputData)
  }
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="username"
            className="form-control"
            required
            autoComplete="false"
            placeholder="Enter your name"
          />
          <input
            type="email"
            name="email"
            className="form-control"
            required
            autoComplete="false"
            placeholder="Enter your email"
          />
          <textarea
            name="message"
            className="form-control"
            rows="10"
            required
            autoComplete="false"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
