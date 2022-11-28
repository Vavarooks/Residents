import React from 'react';


const Contact = () => {

    return (
        <>
            <div className='container d-block mx-auto w-50 my-3 p-3' >
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Caution!</strong> Make sure you have an email!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <form method="post" action="mailto:araceliemerick@aol.com">
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Message</label>
                        <textarea className="form-control" rows="3"></textarea>
                    </div>
                    <button className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </>
    )

}

export default Contact