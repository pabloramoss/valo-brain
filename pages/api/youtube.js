
//Devuelve los videos subidos en la ultimas 24 hs
//Start v2.0//
/*
import axios from 'axios';
const KEY = 'AIzaSyBXZtNWAIPt_UFPzWBjbmkoacjsN9sR4QM';

const today = new Date()
const yesterday = new Date(today.getTime() - 86400000).toISOString() // 1 day in ms


const youtube = ()=>{
  const getData = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: {
          part: 'snippet',
          channelId: "UCjg1YvYLP3KbPPdEZ57GJuA",
          maxResults: 50,
          key: KEY,
          publishedAfter: yesterday
      }
  })
  const response = getData.get('/search').then(res => console.log(res.data.items))
  return (response)
}

export default youtube

/*
//End v2.0//

// baseURL PARA SEARCH: https://www.googleapis.com/youtube/v3/search

/* 
axios.get("url",).then(response => console.log(response.data)).catch(error => console.log("error", error))
*/

//Start v1.0//
import axios from 'axios';
const KEY = 'AIzaSyBXZtNWAIPt_UFPzWBjbmkoacjsN9sR4QM'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        channelId: "UCjg1YvYLP3KbPPdEZ57GJuA",
        maxResults: 50,
        key: KEY
    }
})
//End v1.0//
