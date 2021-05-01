const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'Summer' : 'Winter';
    } else {
        return lat > 0 ? 'Winter' : 'Summer';
    }
}

const seasonConfig = {
    Summer : {
        text : 'Let\'s hit the beach',
        iconName : 'sun'
    },
    Winter: {
        text : 'Burr! It is chilly',
        iconName: 'snowflake'
    }
}

export {getSeason, seasonConfig};