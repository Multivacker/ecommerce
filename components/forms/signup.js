const registrarse = document.getElementById("registrarse");
registrarse.innerHTML = `
<section class="vh-120 bg-image" style="background-image: url('')">
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
          <div class="container h-100">
            <div
              class="row d-flex justify-content-center align-items-center h-100"
            >
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card" style="border-radius: 15px">
                  <div class="card-body p-5">
                    <h2 class="fw-bold mb-2">
                      Create an account
                    </h2>
                    <form>
                    <div class="mb-3">
                      <label class="form-label" for="username"
                          >Your User Name</label
                        >
                        <input
                          type="text"
                          id="username"
                          class="form-control"
                          placeholder="joedoe2024"
                        />
                        
                      </div>

                      <div class="mb-3">
                      <label class="form-label" for="name"
                          >Your Name</label
                        >
                        <input
                          type="text"
                          id="name"
                          class="form-control"
                          placeholder="Joe V. Doe"
                        />
                        
                      </div>

                      <div class="mb-3">
                      <label for="email" class="form-label"
                        >Email address</label
                      >
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="name@example.com"
                      />
                    </div>

                    <div class="mb-3">
                      <label class="form-label" for="adress"
                          >Your Adress</label
                        >
                        <input
                          type="text"
                          id="adress"
                          class="form-control"
                          placeholder="198 West 21th Street, Suite 721 New York NY 10016"
                        />
                        
                      </div>

                      <div class="mb-3">
                      <label class="form-label" for="phone"
                          >Your Phone</label
                        >
                        <input
                          type="text"
                          id="phone"
                          class="form-control"
                          placeholder="+ 1235 2355 98"
                        />
                        
                      </div>

                    <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      placeholder="*******"
                    />
                  </div>

                  <div class="mb-3">
                  <label for="password" class="form-label">Repeat your password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="*******"
                  />
                </div>

                      <div
                        class="form-check d-flex justify-content-center mb-5"
                      >
                        <input
                          class="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                        />
                        <label class="form-check-label" for="form2Example3g">
                          I agree all statements in
                          <a href="#!" class="text-body"
                            ><u>Terms of service</u></a
                          >
                        </label>
                      </div>

                      <div class="d-flex justify-content-center">
                        <button
                          type="button"
                          class="btn btn-secondary btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Register
                        </button>
                      </div>

                      <p class="text-center text-muted mt-5 mb-0">
                        Have already an account?
                        <a href="#!" class="fw-bold text-body"
                          ><u>Login here</u></a
                        >
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
`