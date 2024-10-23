import api from "./api";

export const login = async (email, senha) => {
  try {
    const response = await api.postForm('login', { email, senha })
    const token = response.data.access_token
    localStorage.setItem('token', token)
    console.log(`Login com sucesso!`)
    console.log(token)
    return token
  } catch (error) {
    console.log(`Erro no login!`)
    throw error; 
  }
};