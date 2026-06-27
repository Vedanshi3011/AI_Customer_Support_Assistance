import api from "./api";

export const sendQuery = async (
  question: string
) => {
  const response = await api.post(
    "/chat/query",
    {
      question,
    }
  );

  return response.data;
};