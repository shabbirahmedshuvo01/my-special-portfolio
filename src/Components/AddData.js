import React from 'react';
import { useRef } from 'react';

const AddData = () => {

    const emailRef = useRef('');
    const descriptionRef = useRef('');
    const nameRef = useRef('');

    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value
        const subject = event.target.subject.value
        const link = emailRef.current.value;
        const description = descriptionRef.current.value;

        console.log(name, subject, link, description)
    }

    return (
        <div>
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
    );
};

export default AddData;