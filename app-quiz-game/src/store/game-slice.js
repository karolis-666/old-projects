import { createSlice } from '@reduxjs/toolkit';

const initialGameState = {
  gameInitialScreen: true,
  gameCategoryScreen: false,
  gameplayScreen: false,
  categoryID: '',
  quizQuestions: '',
  questionNumber: 1,
};

const gameSlice = createSlice({
  name: 'game',

  initialState: initialGameState,

  reducers: {
    startCategoryScreen(state) {
      state.gameInitialScreen = false;
      state.gameCategoryScreen = true;
    },
    startQuiz(state) {
      state.gameCategoryScreen = false;
      state.gameplayScreen = true;
    },
    setCategoryID(state, action) {
      state.categoryID = action.payload;
    },
    setQuizQuestions(state, action) {
      state.quizQuestions = action.payload;
    },
    callNextQuestion(state) {
      state.questionNumber++;
    },
    restartGame(state) {
      state.gameCategoryScreen = true;
      state.gameplayScreen = false;
      state.categoryID = '';
      state.quizQuestions = '';
      state.questionNumber = 1;
    },
  },
});

export const gameActions = gameSlice.actions;
export default gameSlice.reducer;
