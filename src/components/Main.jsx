export default function Main() {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="text">
            <h1 className="title">facebook</h1>
            <p className="description">
              Facebook допомагає тримати зв'язок з рідними та близькими.
            </p>
          </div>
          <div className="signIn-wrapper">
            <div className="signIn-form">
              <input
                className="email"
                type="text"
                placeholder="Електронна пошта або номер телефону"
              />
              <input className="password" type="text" placeholder="Пароль" />
              <button className="signIn">Увійти</button>
              <a href="#">Забули пароль?</a>
              <hr className="line" />
              <button className="register">Створити обліковий запис</button>
            </div>
            <p className="signIn-description"> <strong>Створити сторінку</strong> для знаменитості, бренду чи компанії</p>
          </div>
        </div>
      </div>
    </>
  );
}
