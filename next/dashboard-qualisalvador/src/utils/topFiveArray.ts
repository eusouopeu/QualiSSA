/* eslint-disable @typescript-eslint/no-explicit-any */
interface DataItem {
  [key: string]: any;
}

interface TopFiveItem {
  id: string;
  label: string;
  value: number;
}

const topFiveArray = (dados: DataItem[], categoria: string): TopFiveItem[] => {
  const contagem = dados.reduce((acc: Record<string, number>, item: DataItem) => {
    const valor = item[categoria];
    acc[valor] = (acc[valor] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(contagem)
    .sort((a, b) => b[1] - a[1]) // Ordena por frequência decrescente
    .slice(0, 5) // Pega os 5 primeiros
    .map(([id, value]) => ({ id, label: id, value }));
};

export default topFiveArray;