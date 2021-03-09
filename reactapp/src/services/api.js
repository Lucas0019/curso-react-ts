//Aqui fica todas as requisições do AXIO

import Axios from 'axios';

//Criando um seção do Axios
export default Axios.create({
    baseURL : 'https://api.github.com/users/' 
}) 

//Basicamente iremos trazer os dados de qualquer usuário no front