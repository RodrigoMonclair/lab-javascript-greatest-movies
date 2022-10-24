// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const onlyDirectors = moviesArray.map((element)=>{
        return element.director
    })
    return onlyDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter((element)=>{
        return element.director === 'Steven Spielberg' && element.genre.includes('Drama')
    }).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
        return 0
    }
    let sum = moviesArray.reduce((contador, elm)=>{
      return contador + (elm.score||0)
    }, 0)

    let media = Math.round(sum/moviesArray.length*100)/100

    return media
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    // if(!moviesArray.includes('Drama')){ return 0}

    return scoresAverage(moviesArray.filter(element => 
        element.genre.includes("Drama")))

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    moviesArray.sort((a,b)=>{
        if (a.year<b.year){
            return -1
        }
        if (a.year>b.year){
            return1
        }
        if(a.title<b.title){
            return -1
        }

        if(a.title>b.title){
            return 1
        } else{
        return 0
    }
   })
        return [...moviesArray]

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray.map(element => element.title).sort().slice(0, 20);

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
