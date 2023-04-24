function App() {
  return (
    <div className="wrapper clear">
      <header className="header">
        <div className="top d-flex justify-between align-center">
          <div className="logo mr-40">
            <img width={235} height={57} src="/img/logo.svg" alt="Логотип" />
          </div>
          <ul className="nav d-flex mr-50">
            <li>главная</li>
            <li>мои книги</li>
            <li>журнал</li>
            <li>комментарии</li>
          </ul>
          <ul className="icon d-flex">
            <li>
              <img width={45} height={45} src="/img/search.svg" alt="Поиск" />
            </li>
            <li>
              <img width={45} height={45} src="/img/favourites.svg" alt="Избранное" />
            </li>
            <li>
              <img width={45} height={45} src="/img/alerts.svg" alt="Оповещения" />
            </li>
            <li>
              <img width={45} height={45} src="/img/user_lk.svg" alt="Лк" />
            </li>
          </ul>
        </div>
        <div className="gradUp"></div>
      </header>
      <main className="main"></main>
      <footer className="footer">
        <div className="gradDown"></div>
      </footer>
    </div>
  );
}

export default App;
