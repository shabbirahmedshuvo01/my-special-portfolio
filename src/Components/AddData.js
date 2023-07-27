import React from 'react';
import { useRef } from 'react';

const AddData = () => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const linkRef = useRef('');
    const imgRef = useRef('');
    const gitcRef = useRef('');
    const gitsRef = useRef('');
    const ss1Ref = useRef('');
    const ss2Ref = useRef('');
    const ss3Ref = useRef('');

    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value
        const description = descriptionRef.current.value;
        const projectLink = linkRef.current.value;
        const projectImg = imgRef.current.value;
        const gitcLink = gitcRef.current.value;
        const gitsLink = gitsRef.current.value;
        const ss1Link = ss1Ref.current.value;
        const ss2Link = ss2Ref.current.value;
        const ss3Link = ss3Ref.current.value;

        console.log(name, description, projectLink, projectImg, gitcLink, gitsLink, ss1Link, ss2Link, ss3Link)


        // api set

        const projectDetails = {
            name: name,
            description: description,
            link: projectLink,
            img: projectImg,
            gitc: gitcLink,
            gits: gitsLink,
            ss1: ss1Link,
            ss2: ss2Link,
            ss3: ss3Link
        }
        // console.log(feedbackDetails)

        fetch('https://shuvo-here-server.vercel.app/project', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(projectDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    window.alert('feedback submited')
                }
                else {
                    window.alert('Something Wrong')
                }
            })

    }

    return (
        <div style={{
            backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }} >
            <div className='w-50 mx-auto'>
                <form onSubmit={handleSubmit}>
                    <div class="form-floating mt-3">
                        <input ref={nameRef} type="name" name="name" class="form-control" id="floatingInput" placeholder="Name" />
                        <label for="floatingInput">Your Name</label>
                    </div>

                    <div class="form-floating mt-3">
                        <textarea ref={descriptionRef} type="description" name='description' class="form-control" placeholder="Description" />
                        <label for="floatingPassword">Description</label>
                    </div>

                    <div class="form-floating mt-3">
                        <input ref={linkRef} type="text" name="link" class="form-control" id="floatingInput" placeholder="Project-Link" />
                        <label for="floatingInput">Project Link</label>
                    </div>

                    <div class="form-floating mt-3">
                        <input ref={imgRef} type="link" name="img" class="form-control" id="floatingInput" placeholder="img" />
                        <label for="floatingInput">Img</label>
                    </div>

                    <div class="form-floating mt-3">
                        <input ref={gitcRef} type="link" name="gitc" class="form-control" id="floatingInput" placeholder="gitc" />
                        <label for="floatingInput">git-client</label>
                    </div>

                    <div class="form-floating mt-3">
                        <input ref={gitsRef} type="link" name="gits" class="form-control" id="floatingInput" placeholder="gits" />
                        <label for="floatingInput">git-server</label>
                    </div>

                    <div class="form-floating mt-3">
                        <input ref={ss1Ref} type="link" name="img-ss1" class="form-control" id="floatingInput" placeholder="img" />
                        <label for="floatingInput">img-ss1</label>
                    </div>

                    <div class="form-floating mt-3">
                        <input ref={ss2Ref} type="link" name="img-ss2" class="form-control" id="floatingInput" placeholder="img" />
                        <label for="floatingInput">img-ss2</label>
                    </div>

                    <div class="form-floating mt-3">
                        <input ref={ss3Ref} type="link" name="img-ss3" class="form-control" id="floatingInput" placeholder="img" />
                        <label for="floatingInput">img-ss3</label>
                    </div>

                    <input className='btn btn-primary mt-3' type="submit" value="Add Project" />
                </form>
            </div>
        </div>
    );
};

export default AddData;