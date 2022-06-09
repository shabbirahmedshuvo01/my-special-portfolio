import React from 'react';

const Contact = () => {
    return (
        <div className='w-50 mx-auto'>

            <h2 className='mt-5'>GET IN TOUCH</h2>

            <form>
                <div class="form-floating mt-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="Email" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mt-3">
                    <textarea type="description" class="form-control" placeholder="Description" />
                    <label for="floatingPassword">Description</label>
                </div>
                <input className='btn btn-primary mt-3' type="submit" value="Send Mail" />
            </form>
        </div>
    );
};

export default Contact;