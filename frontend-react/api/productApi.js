import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 8000,
});

// 상품 목록 조회
export async function getProducts({
  type,
  color,
  size,
  gender,
  clothingType,
  sort,
}) {
  const params = {};
  if (color) params.color = color;
  if (size) params.size = size;
  if (gender) params.gender = gender;
  if (clothingType) params.type = clothingType;
  if (sort) params.sort = sort;

  const response = await api.get(`/${type}`, { params });
  return response.data;
}

// 상품 상세 조회
export async function getProductDetail(type, id) {
  const response = await api.get(`/${type}/${id}`);
  return response.data;
}
