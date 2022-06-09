import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import ContactInfo from './ContactInfo';

const Contact = () => {

    const emailRef = useRef('');
    const descriptionRef = useRef('');
    const nameRef = useRef('');

    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value
        const subject = event.target.subject.value
        const email = emailRef.current.value;
        const description = descriptionRef.current.value;

        console.log(name, subject, email, description)

        emailjs.sendForm('service_h5syjfe', 'template_od2ekb8', event.target, '4rjlS9y1cer7zxOdj')
            .then((result) => {
                console.log(result.text);
                if (result.text) {
                    alert('Mail Sent')
                }
            }, (error) => {
                console.log(error.text);
            });
        event.target.reset();
    }

    return (
        <div className='d-flex align-items-center p-5 p-2 justify-content-evenly'>

            <div className='w-50 mx-auto container border' style={{
                marginTop: '50px', backgroundImage: `url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>

                <h2 className='mt-5'>Contact Me</h2>

                <form onSubmit={handleSubmit}>
                    <div class="form-floating mt-3">
                        <input ref={nameRef} type="name" name="name" class="form-control" id="floatingInput" placeholder="Name" />
                        <label for="floatingInput">Your Name</label>
                    </div>
                    <div class="form-floating mt-3">
                        <input type="subject" name="subject" class="form-control" id="floatingInput" placeholder="subject" />
                        <label for="floatingInput">Subject</label>
                    </div>
                    <div class="form-floating mt-3">
                        <input ref={emailRef} type="email" name="email" class="form-control" id="floatingInput" placeholder="Email" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mt-3">
                        <textarea ref={descriptionRef} type="description" name='description' class="form-control" placeholder="Description" />
                        <label for="floatingPassword">Description</label>
                    </div>
                    <input className='btn btn-primary mt-3' type="submit" value="Send Mail" />
                </form>
            </div>

            <div style={{
                marginTop: '50px', backgroundImage: `url('https://media.istockphoto.com/photos/dark-concrete-picture-id184601291?b=1&k=20&m=184601291&s=170667a&w=0&h=HffoEtC7p9h3ZlbJ0pI6XJ3uWRY6UnzfBK_1hrMQRKU=')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>
                <ContactInfo></ContactInfo>
            </div>
        </div>
    );
};

export default Contact;