const displayFav = (e)=>{
    const favList = document.querySelector('aside');
    const openList = document.querySelector('#favIcon');
    const closeList = document.querySelector('#closeFav');
    //Open favList
    if(e.target.id === 'favIcon'){

        if(window.innerWidth < 1000){
            favList.style.width = '100%';
        }else{
            favList.style.width = '45%';
        }

        
        favList.style.right = '0';
    }
    //Close favList
    else if(e.target.id === 'closeFav'){
        favList.style.width = '0';
        favList.style.right = '-4em';
    }
}

module.exports = displayFav;