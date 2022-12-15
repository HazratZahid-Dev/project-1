import React from "react";
function Form() {
    return (
        <>

        <div className="container-fluid mt-4">
        <div className="row">
            <div className="col-md-12">
                <h3>Contact us</h3>
                <div className="underline"></div>
            </div>
        </div>
    </div>
    <div className="container mt-4">
        <div className="row">
            <div className="col-8 bg-light">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1"><h3>Contact Form</h3></label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
                           
                        <input type="email" class="form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <input type="text" class="form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Phone Number"/>
                            
                    </div>
                    <div class="form-group">
                        
                        <input type="password" class="form-control mt-3" id="exampleInputPassword1" placeholder="Password"/>
                        <input type="text-area" class="form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Write Message Here"/>
                           
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>

            </div>
            <div className="col-4 bg-light">
            <h3>Address Information</h3>
                <div className="underline"></div>
                <p><b>#Peshawar KPK Pakistan<br/>Phone: 03369454688<br/>Email:zahid9454688@gmail.com</b></p>


            </div>
        </div>
    </div>
    </>

    );
}
export default Form;