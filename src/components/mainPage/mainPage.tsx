import { Button, Paper } from "@material-ui/core";
import { Box } from "@material-ui/system";
import React from "react";
import "./mainPage.scss";
import { ReactComponent as Kid } from "./kid.svg";

const MainPage: React.FC = () => {
  const PaperStyle: Object = {
    bgcolor: "#FEFAE0",
    p: "1rem 2rem",
    color: "#283618",
    maxWidth: "90%",
    display: "flex",
    maxHeight: "90%",
  } as const;
  return (
    <Paper elevation={3} sx={PaperStyle}>
      <Kid className="page_mainPage_icon" />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <h1>Книгомен</h1>
        <p>
          Обмен книгами (буккроссинг) становится всё более популярен. Это даёт шанс
          бумажным книгам продлить свою жизнь, помогает владельцам книг делиться
          хорошими историями и получать новые впечатления. Все буккроссеры любят свои
          книги и любят их читать. Они щедрые, новаторские, дружелюбные,
          добросердечные, веселые и образованные люди. Наш сайт предлагает совершить
          не просто обмен, а добавить к этому увлекательному процессу элемент
          сюрприза. Подбор книг для обмена будет выполнен по пожеланиям участников,
          но только при получении книги станет известно, какая именно книга будет
          радовать своего владельца. Интересно? Тогда начинайте обмен и приглашайте
          своих друзей поучаствовать!
        </p>
        <div>
          <Button variant="contained" className="page_mainPage_button">
            Зарегистрироваться
          </Button>
        </div>
      </Box>
    </Paper>
  );
};

export default MainPage;
