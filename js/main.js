//api key
//addEventListner
//getMoviesData
//displayMoviesData
//display error 
//get title
//poster path
//relase Data
//overview
//backdrop path

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector('#userSerach');
    const movieGrid = document.getElementById('movieGrid');
    const defaultMovie = document.querySelector('.defaultCategory')
    const controlMenu = document.querySelector('#control-menu');
    const menu = document.querySelector('#menu');
    const apikey = "09e1c732565b19ca0ba926a174ff7a4a";
    const apiToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWUxYzczMjU2NWIxOWNhMGJhOTI2YTE3NGZmN2E0YSIsIm5iZiI6MTcyMTA0MzcxMy4xOTg0MjEsInN1YiI6IjY2OTRmODRkNGIxYTY5YmM2ZGJhYzYwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ff4NyWK0CE9KMppXUQseOrw62TIejdJl1Ci54GaCbPQ"
    const baseUrl = 'https://api.themoviedb.org/3';
    const getMovies = '/movie/now_playing';
    const base_img = 'https://image.tmdb.org/t/p/w500';

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim();
        if (query.length >= 3) {
            const searchUrl = `${baseUrl}/search/movie?api_key=${apikey}&query=${query}`;
            defaultMovie.innerHTML = `Results for "${query}"`;
            getMoviesData(searchUrl);
        }
        else {
            defaultMovie.innerHTML = `New playing`;
            getMoviesData(`${baseUrl}${getMovies}?api_key=${apikey}`);
        }
    });
    async function getMoviesData(api) {
        const response = await fetch(api);
        const data = await response.json();
        print_data(data.results);
    }
    function print_data(movies) {
        movieGrid.innerHTML = '';
        movies.forEach(movie => {
            const movieItem = document.createElement('div');
            movieItem.classList.add('movie-item');
            movieItem.innerHTML = ` 
            <img src="${base_img}${movie.poster_path}" alt="${movie.title}">
            <div class="movie-details">
                <img src="${base_img}${movie.backdrop_path}" alt="${movie.title}">
                <h4>${movie.title}</h4>
                <p>${movie.overview}</p>
                <p>${movie.vote_average}</p>
                <p>${movie.release_date}</p>
                 <button class="play-button"><i class="fa fa-play fa-1x"></i></button>
            </div>`;
            movieGrid.appendChild(movieItem);
        })
    }


    const api_url = `${baseUrl}${getMovies}?api_key=${apikey}`;
    getMoviesData(api_url)

    controlMenu.addEventListener("click", () => {
        if (menu.style.left === '-100%') {
            menu.style.left = '0';
        } else {
            menu.style.left = '-100%';
        }
    });

    const menuItems = document.querySelectorAll('#menu li a');
    menuItems.forEach(item => {
        if (item.textContent.trim() !== 'Contact Us') {
        item.addEventListener('click', (event) => {
            const category = event.target.id;
            const apiUrl = `${baseUrl}${category}?api_key=${apikey}`;
            const categoryText = event.target.textContent;
            defaultMovie.innerHTML = categoryText;
            getMoviesData(apiUrl);
        });
    }
    });
    })
    document.addEventListener('scroll', () => {
        const scrollButton = document.getElementById('btn-control');
        const middleOfPage = document.documentElement.scrollHeight / 4;
        const currentScroll = window.scrollY + window.innerHeight / 4;

        if (currentScroll >= middleOfPage) {
            scrollButton.classList.add('d-block');
            scrollButton.classList.remove('d-none');
        } else {
            scrollButton.classList.add('d-none');
            scrollButton.classList.remove('d-block');
        }
    });
    document.getElementById('btn-control').addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });



const nameError=document.getElementById('name-error')
const emailError=document.getElementById('email-error')
const phoneError=document.getElementById('phone-error')
const ageError=document.getElementById('age-error')
const passwordError=document.getElementById('password-error')
const supmitError=document.getElementById('registration')
const confirmPasswordError = document.getElementById('errorMatch');

function validateName()
{
    const regex=/^[A-Za-z]*\s{1}[A-Za-z]*$/;
    const name=document.getElementById('name').value;
    if(name.length==0)
    {
        nameError.innerHTML='Name is Required';
        return false;
    }
    if(!name.match(regex))
    {
        nameError.innerHTML='Not valid name';
        return false;
    }
    nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone()
{
    const regex=/^(010|011|012)[0-9]{8}$/;
    const phone=document.getElementById('phone').value;

    if(phone.length==0)
    {
        phoneError.innerHTML='phone no is required';
        return false;
    }
    if(phone.length!==11)
    {
        phoneError.innerHTML='phone no should be 11 digits';
        return false 
    }
    if(!phone.match(regex))
    {
        phoneError.innerHTML='Phone no should start with 010, 011, or 012 and be 11 digits long';
        return false
    }
    phoneError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateEmail() {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const email = document.getElementById('email').value;
    if (email.length == 0) {
      emailError.innerHTML = 'Email is Required';
      return false;
    }
    if (!email.match(regex)) {
      emailError.innerHTML = 'Not valid email';
      return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }

  function validateAge() {
    const regex = /^(?:1[89]|[2-9]\d)$/; 
    const age = document.getElementById('age').value;
    if (age.length == 0) {
      ageError.innerHTML = 'Age is Required';
      return false;
    }
    if (!age.match(regex)) {
      ageError.innerHTML = 'Not valid age. Age should be between 18 and 99';
      return false;
    }
    ageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
  function validatePassword() {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    const password = document.getElementById('password').value;
    if (password.length == 0) {
      passwordError.innerHTML = 'Password is Required';
      return false;
    }
    if (!password.match(regex)) {
      passwordError.innerHTML = 'Password must be 6-20 characters and include at least one numeric digit, one uppercase, and one lowercase letter';
      return false;
    }
    passwordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
  function validateConfirmPassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('passwordConfirm').value;
    if (confirmPassword.length == 0) {
      confirmPasswordError.innerHTML = 'Confirm Password is Required';
      return false;
    }
    if (password !== confirmPassword) {
      confirmPasswordError.innerHTML = 'Passwords do not match';
      return false;
    }
    confirmPasswordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }

  function validateForm()
  {
     if(!validateName()|| !validatePhone()||!validateEmail()||!validateAge()||!validatePassword()||!validateConfirmPassword())
     {
        supmitError.style.dispaly='block';
        supmitError.innerHTML="please registration form";
        setTimeout(function()
    {
        supmitError.style.display='none';
    },3000);
        return false;
     }

  } 
  document.addEventListener('DOMContentLoaded', () => {
    const togglePassword = document.getElementById('toggle-password')
    const password = document.getElementById('password');

    togglePassword.addEventListener('click', () => {
      const type = password.type === 'password' ? 'text' : 'password';
      password.type = type;
      togglePassword.classList.toggle('fa-eye');
      togglePassword.classList.toggle('fa-eye-slash');
    });
  });
  