const Contact = ()=> {
    return ( 
        <>
            <div className="contact">
                <div className="container">
                    <div className="row header between">
                        <h3>Contact</h3>
                        <i class='bx bxs-contact'></i>
                    </div>
                    <hr />
                    <div className="row between links">
                        <div className="column">
                            <div className="row">
                                <b>Email: </b>
                                <a href="mailto:qobulovasror0@gmail.com"> qobulovasror0@gmail.com</a>
                            </div>
                            <div className="row">
                                <b>Tel: </b>
                                <a href="tel:+9989933582827"> +998 (93) 358 28 27</a>
                            </div>
                            <div className="row">
                                <b>Telegram: </b>
                                <a href="https://t.me/QobulovAsror"> QobulovAsror</a>
                            </div>
                        </div>
                    </div>
                    <div className="sendmsg">
                        <h3 className="t-center">Send message</h3>
                        <form onSubmit={(e)=>e.preventDefault()}>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" placeholder="Name..." />
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email..." />
                            <label htmlFor="text">Text</label>
                            <textarea name="text" id="text" cols="30" rows="3" placeholder="Enter message ..."></textarea>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Contact;