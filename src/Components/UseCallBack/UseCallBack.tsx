import React, {useCallback, useMemo} from "react";

type UsersPropsType = {
    books: string[]
    addBock: () => void
}
const Books = (props: UsersPropsType) => {
    console.log('Books');
    return (
        <div>
            <button onClick={props.addBock}>add book</button>
            {props.books.map((book, index) => {
                return (
                    <div key={index}>-{book}</div>
                );
            })}
        </div>
    );
}

const BookContainer = React.memo(Books);

export const LikeUseCallBack = () => {
    console.log('LikeUseCallBack');
    const [books, setBooks] = React.useState<string[]>(['React', 'JS', 'CSS', 'HTML', 'Vue']);
    const [counter, setCounter] = React.useState<number>(0);

    // const newArray = useMemo(() => {
    //     return books.filter(book => book.toLowerCase().indexOf('a') > -1);
    // }, [books])


    // const addBook = () => {
    //     setBooks([...books, 'Angular']);
    //     console.log(books);
    // }

    // const memoizedAddBook = useMemo(() => addBook, []);

    const memoizedAddBook = useCallback(() => {
        setBooks([...books, 'Angular']);
    }, [books])

    return (
        <div className={'marginTop'}>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <div>
                <BookContainer books={books} addBock={memoizedAddBook}/>
            </div>
        </div>
    );
};