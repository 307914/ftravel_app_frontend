import axios from 'axios';

export const loginHandler = async (number, password) => {
  try {
    const {
      data: {
        data: { username },
        token,
      },
    } = await axios.post('http://localhost:3500/user/login', {
      number: number,
      password: password,
    });
    return { username, token };
  } catch (error) {
    console.log('the error is in loginhandler', error);
  }
};
