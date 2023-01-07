import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { UseQueryResult } from "@tanstack/react-query/build/lib/types";
import axios, { AxiosPromise, AxiosRequestConfig, AxiosError } from "axios";
import { Product } from "./models/products";

const BASE_URL = "https://munchies-api.up.railway.app";

const getProducts = async (): AxiosPromise => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
};

export const useGetProducts = (): UseQueryResult<Product[], AxiosError> => {
  return useQuery({ queryKey: ["products"], queryFn: getProducts });
};
