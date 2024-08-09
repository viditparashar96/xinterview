import {
  createUrl,
  getAllUrlsById,
  hitUrl,
} from "@/services/actions/url.actions";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "./queryKeys";

export const useCreateUrl = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      original_url,
      user_id,
    }: {
      original_url: string;
      user_id: number;
    }) => createUrl({ original_url, user_id }),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.getUrl] });
    },
  });
};

export const useHitUrl = () => {
  return useMutation({
    mutationFn: ({ id }: { id: string }) => hitUrl({ id }),
  });
};

// Get all urls by User===>
export const useGetUrls = ({ user_id }: { user_id: number }) => {
  return useQuery({
    queryFn: () => getAllUrlsById({ user_id }),
    queryKey: [QUERY_KEY.getUrl],
  });
};
