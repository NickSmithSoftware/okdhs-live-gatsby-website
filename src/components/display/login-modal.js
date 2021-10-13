import React, {useRef, useState, useEffect} from 'react';

let loginModal = document.getElementById('loginModal');
let loginEmail = document.getElementById('loginEmail');

loginModal.addEventListener('shown.bs.modal', function () {
  loginEmail.focus();
});

export const LoginModal = () => {
  const loginElements = useRef({loginModal: undefined, loginEmail: undefined});

  useEffect(() => {
    loginElements.current.loginModal = document.getElementById('loginModal');
    loginElements.current.loginEmail = document.getElementById('loginEmail');
  }, []);

  return (
    <div className="modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            ...
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  )
}