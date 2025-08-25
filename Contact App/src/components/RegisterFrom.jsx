import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUserData, remove, edit } from "../feature/formSlice";

const RegisterFrom = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [editIndex, seteditIndex] = useState(null);

  const userData = useSelector((state) => state.userData.userData);

  const dispatch = useDispatch();

  const handleAddAndUpdateData = () => {
    if (editIndex !== null) {
      dispatch(edit({ index: editIndex, name, email, number }));
      seteditIndex(null);
    } else {
      dispatch(
        addUserData({
          name: name,
          email: email,
          number: number,
        })
      );
    }
    setname("");
    setemail("");
    setnumber("");
  };

  return (
    <div>
      <h1 className="fw-bold text-center">Contact App</h1>

      <div className="container d-flex flex-column align-items-center">
        <div className="w-50 border p-5 rounded-4 ">
          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              value={name}
              placeholder="Name "
              onChange={(el) => setname(el.target.value)}
              required
            />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">
              Email
            </label>
            <input
              className="form-control"
              value={email}
              type="email"
              placeholder="Email "
              onChange={(el) => setemail(el.target.value)}
              required
            />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">
              Mobile Number
            </label>
            <input
              className="form-control"
              type="tel"
              placeholder="Mobile Number"
              onChange={(el) => setnumber(el.target.value)}
              maxLength={10}
              required
            />
          </div>

          <button
            disabled={!name || !email || !number}
            className="mb-3 btn btn-primary w-100"
            onClick={() => handleAddAndUpdateData()}
          >
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </div>

        <div className="w-50 border p-5 rounded-4 mt-5">
          {userData.length > 0 ? (
            userData.map((el, index) => (
              <section key={index} className="d-flex justify-content-between">
                <div>
                  <h5 className="text-dark">{index + 1 + "."}</h5>
                  <span>
                    <strong>
                      <h2 className="text-primary text-uppercase">{el.name}</h2>
                    </strong>
                  </span>
                  <span>
                    <strong>Email : </strong>
                    {el.email}
                  </span>
                  <br />
                  <span>
                    <strong>No: </strong>
                    {el.number}
                  </span>
                </div>
                <div  className="d-flex" >
                  
                  <button
                    className=" btn btn-light m-2 d-block"
                    onClick={() => {
                      seteditIndex(index);
                      setname(el.name);
                      setemail(el.email);
                      setnumber(el.number);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="me-3 btn btn-danger m-2 d-block"
                    onClick={() => dispatch(remove())}
                  >
                    Remove
                  </button>
                </div>
              </section>
            ))
          ) : (
            <h2 className="text-center ">Add Your Contact !</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterFrom;
