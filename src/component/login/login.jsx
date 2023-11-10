
import React, { Component } from "react";
import logoIcon from "../../assets/cashier1.png";
import emailIcon from "../../assets/email.png";
import llaveIcon from "../../assets/llave.png";
import eyeOpenIcon from "../../assets/eyeOpen.png";
import eyeCloseIcon from "../../assets/eyeClose.png";
import imgLogin from "../../assets/imgLogin.png";

import "./login.scss";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validateField = (fieldName) => {};

  handleSubmit = (e) => {
    e.preventDefault();
    // Agrega tu lógica de manejo del formulario aquí si es necesario
  };
  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  render() {
    const { showPassword } = this.state;

    return (
      <div className="loginBox d-flex vh-100">
        {/* Mitad izquierda */}
        <div className="loginBox__left w-50">
          <div className="loginBox__left__container w-50">
            <div className="loginBox__left__container__imgContainer d-flex justify-content-center mb-5">
              <img src={logoIcon} alt="logo_icon" />
            </div>

            <form
              className="loginBox__left__container__form "
              onSubmit={this.handleSubmit}
            >
              <div className="loginBox__left__container__form__field">
                <label htmlFor="user">Correo</label>
                <div className="loginBox__left__container__form__field__box">
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder="example@gmail.com"
                    onBlur={() => this.validateField("email")}
                  />
                  <img
                    src={emailIcon}
                    alt="person_icon"
                  />
                </div>
                <div className="loginBox__left__container__form__field__message">
                  <span></span>
                </div>
              </div>

              <div className="loginBox__left__container__form__field">
                <label htmlFor="pass">Contraseña </label>
                <div className="loginBox__left__container__form__field__box">
                <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    onBlur={() => this.validateField("password")}
                  />
                  <img src={llaveIcon} alt="key_icon" />
                  <button
                    type="button"
                    onClick={this.togglePasswordVisibility}
                  >
                    <img
                      className="eye"
                      src={showPassword ? eyeOpenIcon : eyeCloseIcon}
                      alt="eye_icon"
                    />
                  </button>
                 
                </div>
                <div className="loginBox__left__container__form__field__message">
                  {/* <span>Mínimo 8 caracteres.</span> */}
                </div>
              </div>

              <div className="loginBox__left__container__form__actions">
                <button
                  type="submit"
                  className="btnLogin"
                >
                  Iniciar Sesión
                </button>
                <button
                  type="submit"
                  className="btnRegist"
                >
                  Desea Registrarse?
                </button>
              </div>
            </form>

            <div className="loginBox__left__container__message">
              {/* Contenido de mensaje */}
            </div>

            <div className="loginBox__left__container__terms d-flex justify-content-end">
              <a className="ms-2" href="#">
                Privacidad
              </a>
              <a className="ms-2" href="#">
                Condiciones
              </a>
            </div>
          </div>
        </div>

        {/* Mitad derecha */}
        <div className="loginBox__right w-50">
          <img src={imgLogin} alt="img-login" className="w-50 h-50" />
        </div>
      </div>
    );
  }
}

export default Login;
