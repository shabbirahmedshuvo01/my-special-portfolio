import React, { useRef } from 'react';

const Contact = () => {

    const emailRef = useRef('');
    const descriptionRef = useRef('');

    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const description = descriptionRef.current.value;

        console.log(email, description);
    }

    return (
        <div className='w-50 mx-auto'>

            <h2 className='mt-5'>Contact Me</h2>

            <form onSubmit={handleSubmit}>
                <div class="form-floating mt-3">
                    <input ref={emailRef} type="email" class="form-control" id="floatingInput" placeholder="Email" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mt-3">
                    <textarea ref={descriptionRef} type="description" class="form-control" placeholder="Description" />
                    <label for="floatingPassword">Description</label>
                </div>
                <input className='btn btn-primary mt-3' type="submit" value="Send Mail" />
            </form>
        </div>
    );
};

export default Contact;