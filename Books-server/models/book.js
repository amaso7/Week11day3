'use strict';
export default (sequalize, DataTypes) => {
    const Book = sequalize.define('Book',{
        title: DataTypes.STRING,
        genre: DataTypes.STRING,
        publisher: DataTypes.STRING,
        year: DataTypes.INTEGER,
        imageUrl: DataTypes.STRING
    })
    return Book
}