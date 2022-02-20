import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { postsUrl } from './api'
import { useHistory } from 'react-router-dom'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'

export const useGetPosts = () => {
    return useQuery('posts', () => {
        return axios.get(postsUrl)
            .then((res) => res.data)
            .catch(err => {
                throw new Error(err)
            })
    }, {
        refetchOnWindowFocus: false,
    })

}

export const useLikePost = () => {
    const queryClient = useQueryClient();

    return useMutation(
        (updatedPost) => {
            return axios.put(`${postsUrl}${updatedPost.id}`, updatedPost)
                .then(res => res.data)
                .catch(err => {
                    throw new Error(err)
                })
        }, {
        onSuccess: (data) => {
            console.log('success', data);
            queryClient.invalidateQueries('posts');
        },
        onError: (error) => {
            console.log(error)
        },
    }
    )
}

export const useDeletePost = () => {
    const queryClient = useQueryClient();
    const history = useHistory();
    const location = useLocation();

    return useMutation(
        (blogPost) => {
            return axios.delete(`${postsUrl}${blogPost.id}`)
                .then(res => res.data)
                .catch(err => {
                    throw new Error(err)
                })
        }, {
        onSuccess: (data) => {
            console.log('success', data);
            queryClient.invalidateQueries('posts');
            if (location !== '/blog') {
                history.push('/blog');
            }
        },
        onError: (error) => {
            console.log(error)
        },
    }
    )
}

export const useEditPost = () => {
    const queryClient = useQueryClient();
    return useMutation(
        (updatedPost) => {
            return axios.put(`${postsUrl}${updatedPost.id}`, updatedPost)
                .then(res => res.data)
                .catch(err => {
                    throw new Error(err)
                })
        }, {
        onSuccess: (data) => {
            console.log('success', data);
            queryClient.invalidateQueries('posts');
        },
        onError: (error) => {
            console.log(error)
        },
    }
    )
}

export const useAddPost = () => {
    const queryClient = useQueryClient();
    return useMutation(
        (newBlogPost) => {
            return axios.post(postsUrl, newBlogPost)
                .then(res => res.data)
                .catch(err => {
                    throw new Error(err)
                })
        }, {
        onSuccess: (data) => {
            console.log('success', data);
            queryClient.invalidateQueries('posts');
        },
        onError: (error) => {
            console.log(error)
        },
    }
    )
}

export const useGetSinglePost = (postId) => {
    return useQuery(['posts', postId], () => {
        return axios.get(postsUrl + postId)
            .then(res => res.data)
            .catch(err => {
                throw new Error(err)
            })
    }, {
        refetchOnWindowFocus: false,
    })
} 
