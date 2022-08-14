import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      title: "Супер мышление",
      author: "Ali Connors",
      description: "Как быстро развить в себе мышление 21 века.",
      year: 2022,
      id: 123,
      status: false,
    },
    {
      title: "Изучаем React/Redux",
      author: "Джо Брэйни",
      description: "Прочитав эту книгу ваша зарплата будет $5000 в месяц",
      year: 2022,
      id: 124,
      status: true,
    },
    {
      title: "Идеальный программист. Как стать профессионалом разработки ПО",
      author: "Роберт Мартин",
      description: "Всех программистов, которые добиваются успеха в мире разработки ПО, отличает один общий признак: они больше всего заботятся о качестве создаваемого программного обеспечения.",
      year: 2011,
      id: 125,
      status: true,
    },
    {
      title: "Java. Эффективное программирование",
      author: "Джошуа Блох",
      description: "Прочитав эту книгу вы будете знать больше о Java и зарабатывать",
      year: 2001,
      id: 126,
      status: true,
    },
    {
      title: "Не заставляйте меня думать. Веб-юзабилити и здравый смысл",
      author: "Стив Круг",
      description: "Мобильные приложения и веб-сайты – визитные карточки компаний. От них в большой степени зависит, задержится пользователь или предпочтет провести время у конкурента.",
      year: 2022,
      id: 127,
      status: true,
    },
    {
      title: "#Сам себе программист.",
      author: "Кори Альтхофф",
      description: "Как за год научиться программировать и устроиться разработчиком в Ebay? Автор этой книги на собственном опыте знает, что это возможно, и делится знаниями с читателями. ",
      year: 2020,
      id: 128,
      status: true,
    },
  ],
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    add: (state, action) => {
      const book = action.payload;
      state.value.push(book);
      // const index = state.value.findIndex((item) => item.id === book.id);

      // if (index === -1) {
      //   state.value.push(book);
      // } else {
      //   state.value[index].quantity += 1;
      // }
    },
    del: (state, action) => {
      const book = action.payload;
      const index = state.value.findIndex((item) => item.id === book.id);

      if (index !== -1) {
        state.value.splice(index, 1);
      } else {
        state.value[index].quantity += 1;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, del } = bookSlice.actions;

export default bookSlice.reducer;
