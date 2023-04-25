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
      <main className="main">
        <div className="themeGray"></div>
        <div className="partOfTable"> <ul className="nameOfTable">
          <li>название</li>
          <li>автор</li>
          <li>дата выдачи</li>
          <li>дата сдачи</li>
          <li>статус</li>
          <li><img src="/img/tableIcon1.png"></img></li>
        </ul>
        <table className="table">
    <tr>
        <td>название</td>
        <td>автор</td>
        <td>10.05.2005</td>
        <td>23.02.2023</td>
        <td>сдано</td>
        <td><img src="/img/tableIcon2.png"></img></td>
    </tr>
    <tr>
        <td>название</td>
        <td>автор</td>
        <td>10.05.2005</td>
        <td>23.02.2023</td>
        <td>сдано</td>
        <td><img src="/img/tableIcon2.png"></img></td>
    </tr>
    <tr>
        <td>название</td>
        <td>автор</td>
        <td>10.05.2005</td>
        <td>23.02.2023</td>
        <td>сдано</td>
        <td><img src="/img/tableIcon2.png"></img></td>
    </tr>
    <tr>
        <td>название</td>
        <td>автор</td>
        <td>10.05.2005</td>
        <td>23.02.2023</td>
        <td>сдано</td>
        <td><img src="/img/tableIcon2.png"></img></td>
    </tr>
    <tr>
        <td>название</td>
        <td>автор</td>
        <td>10.05.2005</td>
        <td>23.02.2023</td>
        <td>сдано</td>
        <td><img src="/img/tableIcon2.png"></img></td>
    </tr>
    <tr>
        <td >название</td>
        <td>автор</td>
        <td>10.05.2005</td>
        <td>23.02.2023</td>
        <td>сдано</td>
        <td><img src="/img/tableIcon2.png"></img></td>
    </tr>
    <tr>
        <td>название</td>
        <td>автор</td>
        <td>10.05.2005</td>
        <td>23.02.2023</td>
        <td>сдано</td>
        <td><img src="/img/tableIcon2.png"></img></td>
    </tr>
</table>
    </div>
       
      </main>
      <footer className="footer">
      <div className="navigationOfHistory">
        <ul className="listOfNavigation">
          <li><a><img src="/img/previousPage.png"></img></a></li>
          <li><a><img src="/img/firstPage.png"></img></a></li>
          <li><a><img src="/img/twicePage.png"></img></a></li>
          <li><a><img src="/img/twirdPage.png"></img></a></li>
          <li><a><img src="/img/fourthPage.png"></img></a></li>
          <li><a><img src="/img/fifthyPage.png"></img></a></li>
          <li><a><img src="/img/sixthyPage.png"></img></a></li>
          <li><a><img src="/img/sevethyPage.png"></img></a></li>
          <li> <a><img src="/img/nextPage.png"></img></a></li>
        </ul>
        <div className="GradPictures d-flex ">
        <img src="/img/previousPageGrad.png"></img>
        <img src="img/pagesGrad.png"></img>
        <img src="img/pagesGrad.png"></img>
        <img src="img/pagesGrad.png"></img>
        <img src="img/pagesGrad.png"></img>
        <img src="img/pagesGrad.png"></img>
        <img src="img/pagesGrad.png"></img>
        <img src="img/pagesGrad.png"></img>
        <img src="/img/nextPageGrad.png"></img>
        </div>

      </div>
        <div className="gradDown"></div>
      </footer>
    </div>
  );
}

export default App;
/*<ul className="d-flex justify-around">
<li>книга</li>
<li>автор</li>
<li>дата выдачи</li>
<li>дата сдачи</li>
<li>статус</li>
<li>картинка</li>
</ul>
<ul className="d-flex justify-around">
<li>книга</li>
<li>автор</li>
<li>дата выдачи</li>
<li>дата сдачи</li>
<li>статус</li>
<li>картинка</li>
</ul>
<ul className="d-flex justify-around">
<li>книга</li>
<li>автор</li>
<li>дата выдачи</li>
<li>дата сдачи</li>
<li>статус</li>
<li>картинка</li>
</ul>
<ul className="d-flex justify-around">
<li>книга</li>
<li>автор</li>
<li>дата выдачи</li>
<li>дата сдачи</li>
<li>статус</li>
<li>картинка</li>
</ul>
<ul className="d-flex justify-around">
<li>книга</li>
<li>автор</li>
<li>дата выдачи</li>
<li>дата сдачи</li>
<li>статус</li>
<li>картинка</li>
</ul>
<ul className="d-flex justify-around">
<li>книга</li>
<li>автор</li>
<li>дата выдачи</li>
<li>дата сдачи</li>
<li>статус</li>
<li>картинка</li>
</ul>
<ul className="d-flex justify-around">
<li>книга</li>
<li>автор</li>
<li>дата выдачи</li>
<li>дата сдачи</li>
<li>статус</li>
<li>картинка</li>
</ul>
<ul className="d-flex justify-around">
<li>книга</li>
<li>автор</li>
<li>дата выдачи</li>
<li>дата сдачи</li>
<li>статус</li>
<li>картинка</li>
</ul>
/*  <table>
    <tr>
        <td>название</td>
        <td>автор</td>
        <td>дата выдачи</td>
        <td>дата сдачи</td>
        <td>статус</td>
        <td>иконка</td>
    </tr>
    <tr>
        <td className="indentLines">название</td>
        <td className="indentLines">автор</td>
        <td className="indentLines">10.05.2005</td>
        <td className="indentLines">23.02.2023</td>
        <td className="indentLines">сдано</td>
        <td className="indentLines">картинка</td>
    </tr>
    <tr>
        <td className="indentLines">название</td>
        <td className="indentLines">автор</td>
        <td className="indentLines">10.05.2005</td>
        <td className="indentLines">23.02.2023</td>
        <td className="indentLines">сдано</td>
        <td className="indentLines">картинка</td>
    </tr>
    <tr>
        <td className="indentLines">название</td>
        <td className="indentLines">автор</td>
        <td className="indentLines">10.05.2005</td>
        <td className="indentLines">23.02.2023</td>
        <td className="indentLines">сдано</td>
        <td className="indentLines">картинка</td>
    </tr>
    <tr>
        <td className="indentLines">название</td>
        <td className="indentLines">автор</td>
        <td className="indentLines">10.05.2005</td>
        <td className="indentLines">23.02.2023</td>
        <td className="indentLines">сдано</td>
        <td className="indentLines">картинка</td>
    </tr>
    <tr>
        <td className="indentLines">название</td>
        <td className="indentLines">автор</td>
        <td className="indentLines">10.05.2005</td>
        <td className="indentLines">23.02.2023</td>
        <td className="indentLines">сдано</td>
        <td className="indentLines">картинка</td>
    </tr>
    <tr>
        <td className="indentLines">название</td>
        <td className="indentLines">автор</td>
        <td className="indentLines">10.05.2005</td>
        <td className="indentLines">23.02.2023</td>
        <td className="indentLines">сдано</td>
        <td className="indentLines">картинка</td>
    </tr>
    <tr>
        <td className="indentLines">название</td>
        <td className="indentLines">автор</td>
        <td className="indentLines">10.05.2005</td>
        <td className="indentLines">23.02.2023</td>
        <td className="indentLines">сдано</td>
        <td className="indentLines">картинка</td>
    </tr>
  
</table>*/