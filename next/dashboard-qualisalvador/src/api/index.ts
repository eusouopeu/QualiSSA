import axios from 'axios';

interface DataResponse {
  // Defina a estrutura dos dados que você espera da API
  // Exemplo:
  // id: number;
  // name: string;
  // ...
}

interface FetchDataProps {
  setData: (data: DataResponse[]) => void;
}

const fetchData = ({ setData }: FetchDataProps): Promise<void> => {
  return axios.get<DataResponse[]>('https://api-dashboardqualisalvador.onrender.com/api/alto-das-pombas/listAll')
    .then(response => {
      setData(response.data);
    })
    .catch(error => {
      console.error("Erro ao buscar dados:", error);
      return [];
    });
};

export default fetchData;
