import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/princeali415
*/

axios.get('https://api.github.com/users/princeali415')
.then(res => {
console.log(res.data) 
})
.catch(err => {
console.log('this is the error', err) 
})


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

axios.get('https://api.github.com/users/princeali415')
.then(res => {
CardMaker(res.data) 
})
.catch(err => {
console.log('this is the error', err) 
})



/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach(i => {
  axios.get(`https://api.github.com/users/${i}`)
  .then( res => {
    return CardMaker(res.data)
  })
  .catch(err => {
    console.log('this is the error:', err)
  })
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function CardMaker(obj){

  //create the elements

  const card = document.createElement('div')
  const img = document.createElement('img')
  const info = document.createElement('div')
  const h3 = document.createElement('h3')
  const username = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const profileLink = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  // add classes to elements

  card.classList.add('card')
  img.setAttribute('src', obj.avatar_url)
  info.classList.add('card-info')
  h3.classList.add('name')
  h3.textContent = `Name: ${obj.name}`
  username.classList.add('username')
  username.textContent = obj.login
  location.textContent = `Location: ${obj.location}`
  profileLink.href = obj.html_url
  profileLink.textContent = 'Here is my HTML'
  profile.textContent = 'Profile:'
  followers.textContent = `Followers: ${obj.followers}`
  following.textContent = `Following: ${obj.following}`
  bio.textContent = `Bio: ${obj.bio}`

  // add structure 

  card.appendChild(img);
  card.appendChild(info);
  info.appendChild(h3);
  info.appendChild(username);
  info.appendChild(location);
  info.appendChild(profile);
  profile.appendChild(profileLink);
  info.appendChild(followers);
  info.appendChild(following);
  info.appendChild(bio);

  // append to class container in body 

  const entryP = document.querySelector('.container')

  //return 
  
  return entryP.append(card)
  
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
