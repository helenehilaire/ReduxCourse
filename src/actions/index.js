export function selectBook(book){
    // selectBook is an ActionCreator,
    // it needs to return an action: an object with a type property.
    // An action always contains a type, and sometimes a payload.
    return {
        type: "BOOK_SELECTED",
        payload: book
    };
}