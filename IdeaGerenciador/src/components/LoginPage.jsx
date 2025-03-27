import bannerLogin from "../assets/bannerlogin.jpg";
import LoginGoogle from "../assets/google.svg";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.bannerlogin}>
        <img src={bannerLogin} alt="" />
      </div>
      <div className={styles.formLogin}>
        <img
          className={styles.logoform}
          src="https://www.ideacont.com.br/assets/img/logo.png"
          alt=""
        />
        <h2>É um prazer te ver Novamente</h2>
        <form className={styles.form}>
          <label htmlFor="email">Usuário</label>
          <input className={styles.InputName} name="email" type="email" />
          <label htmlFor="password">Senha</label>
          <input name="password" type="password" />
          <a href="#">Esqueceu sua senha?</a>
          <input className="btn-login" type="submit" value="Login" />
          <p>ou utilize o google</p>
          <hr />
          <input
            className="btn-google"
            name="btn-google"
            type="image"
            src={LoginGoogle}
          />
          <div className={styles.signup}>
            <p>Ainda não tem Cadastro?</p>
            <a href="#">Inscreva-se Agora</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
