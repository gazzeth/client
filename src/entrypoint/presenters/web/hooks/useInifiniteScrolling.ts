import { useEffect, useState } from "react";
import Pagination from "@domain/Pagination/Pagination";
import Filter from "@domain/Filter/NewsFilter";
import News from "@domain/News/News";

const useInfiniteScrolling = (getPage: (handleNewList: ((newsList: News[]) => void),
    pagination: Pagination, filter: Filter) => void, filter: Filter, pageSize: number):
    [boolean, Pagination, Filter, (f: Filter) => void, News[]] => {

    const [newsList, setNewList] = useState<News[]>([]);
    const [pageState, setPageState] = useState({
        pagination: new Pagination(pageSize, 0),
        filter: filter,
        loading: true
    })
    const setFilter = (f: Filter) => {
        setPageState({
            ...pageState,
            filter: f,
        })
    }

    useEffect(() => {
        const defaultPagination = new Pagination(pageSize, 0)
        getPage((newsListResponce) => {
            setNewList(newsListResponce);
            setPageState(p => {
                return {
                    ...p,
                    pagination: defaultPagination,
                    loading: false
                }
            })
        }, defaultPagination, pageState.filter);
    }, [pageState.filter]); //TODO check warning

    useEffect(() => {
        const handleScroll = () => {
            setPageState(p => {
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !p.loading) {
                    const newPagination = p.pagination.advancePage();
                    getPage((newsListResponce) => {
                        setNewList(n => [...n, ...newsListResponce]);
                        setPageState(p => { return { ...p, loading: false } });
                    },
                        newPagination, p.filter);
                    return {
                        ...p,
                        pagination: newPagination,
                        loading: true,
                    }
                }
                return p;
            })

        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])//TODO check warning

    return [pageState.loading, pageState.pagination, pageState.filter, setFilter, newsList]
}

export default useInfiniteScrolling;
