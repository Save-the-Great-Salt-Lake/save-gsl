export default function ContactSection() {
    return (
        <section id="three" className="wrapper style1 fade-up">
            <div className="inner">
                <h2>Contact the Right People</h2>
                <p>Send an email to each of your government representatives!</p>
                <section>
                    <form method="post" action="#">
                        <div className="fields">
                            <div className="field half">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div className="field half">
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" id="email" />
                            </div>
                            <div className="field">
                                <label htmlFor="address">Address</label>
                                <input type="text" name="address" id="address" />
                            </div>
                            <div className="field">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" rows={5}></textarea>
                            </div>
                        </div>
                        <ul className="actions">
                            <li><a href="" className="button submit">Send Message</a></li>
                        </ul>
                    </form>
                </section>
            </div>
        </section>
    );
}
