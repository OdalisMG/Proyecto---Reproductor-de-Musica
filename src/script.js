const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const muteBtn = document.getElementById('mute');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const addToFavoritesBtn = document.getElementById('add-to-favorites');
const playlistList = document.getElementById('playlist-list');
const favoritesList = document.getElementById('favorites-list');
const logoutBtn = document.getElementById('logout');
const volumeSlider = document.getElementById('volume-slider');

const songDetails = {
    cover: document.getElementById('cover'),
    title: document.getElementById('song-title'),
    artist: document.getElementById('song-artist'),
    year: document.getElementById('song-year'),
    duration: document.getElementById('song-duration'),
    genre: document.getElementById('song-genre')
};

let currentSongIndex = 0;

// Lista de canciones
    const songs = [
        { title: 'Back in Black', artist: 'AC DC', year: '1980', genre: 'Hard Rock', cover: 'assets/images/ACDC_Black.jpg', src: 'assets/audio/AC_DC - Back In Black.mp3' },
        { title: 'Nightmare', artist: 'Avenged Sevenfold', year: '2010', genre: 'Heavy Metal', cover: 'assets/images/Avenged_Sevenfold_Nightmare.png', src: 'assets/audio/Avenged Sevenfold - Nightmare.mp3' },
        { title: 'Livin On A Player', artist: 'Bon Jovi', year: '1986', genre: 'Heavy Metal', cover: 'assets/images/Bon_Jove_Livin.jpg', src: 'assets/audio/Bon Jovi - Livin On A Player.mp3' },
        { title: 'Can You Feel My Heart', artist: 'Bring Me The Horizon', year: '2013', genre: 'Post Hardcore', cover: 'assets/images/Bring_the_heart_CanYouFeelMyHeart.jpeg', src: 'assets/audio/Bring Me The Horizon - Can You Feel my Heart.mp3' },
        { title: 'Havana', artist: 'Camila Cabello', year: '2017', genre: 'Latin pop', cover: 'assets/images/Havana_Camila.png', src: 'assets/audio/Camila Cabello - Havana.mp3' },
        { title: 'Have Mercy', artist: 'Chloe', year: '2021', genre: 'Trap', cover: 'assets/images/Have_mercy.jpg', src: 'assets/audio/Chlöe - Have Mercy.mp3' },
        { title: 'Level Up', artist: 'Ciara', year: '2004', genre: 'Jersey club electronic', cover: 'assets/images/Ciara_-_Level_Up.png', src: 'assets/audio/Ciara - Level Up.mp3' },
        { title: 'Five More Hours', artist: 'Deorro x Chris Brown', year: '2015', genre: 'Music electronic', cover: 'assets/images/Deorro_Five_More_Hours.jpg', src: 'assets/audio/Deorro x Chris Brown - Five More Hours.mp3' },
        { title: 'Crack A Bottle', artist: 'Eminem, Dr.Dre, & 50 Cent', year: '2008', genre: 'Hip Hop', cover: 'assets/images/Eminem_Crack_a_Bottle.jpg', src: 'assets/audio/Eminem, Dr. Dre, & 50 Cent - Crack A Bottle.mp3' },
        { title: 'Right Round', artist: 'Florida & Ke_ha', year: '2009', genre: 'Hip Hop & Pop', cover: 'assets/images/Florida_right_round.jpg', src: 'assets/audio/Flo Rida feat. Ke_ha - Right Round.mp3' },
        { title: 'Gangsta Paradise', artist: 'Coolio', year: '1995', genre: 'Gangsta rap, West coast rap', cover: 'assets/images/Coolio_Paradise.jpg', src: 'assets/audio/Gangsta-s Paradise.mp3' },
        { title: 'Black Widow', artist: 'Iggy Azalea', year: '2013', genre: 'Trap & Pop Rap', cover: 'assets/images/Black_Widow.png', src: 'assets/audio/Iggy Azalea - Black Widow.mp3' },
        { title: 'Pop Stars', artist: 'K_DA', year: '2018', genre: 'Kpop', cover: 'assets/images/KDA_PopStars.jpg', src: 'assets/audio/K_DA - POP_STARS.mp3' },
        { title: 'Bang Bang', artist: 'Adam Levine - KNAAN', year: '2009', genre: 'Hip-Hop Rap', cover: 'assets/images/Bang_bang.jpg', src: 'assets/audio/Adam Levine - KNAAN - Bang Bang.mp3' },
        { title: 'Sorry For Party Rocking', artist: 'LMFAO', year: '2011', genre: 'Pop', cover: 'assets/images/Sorry_for_Party_Rocking.png', src: 'assets/audio/LMFAO - Sorry For Party Rocking.mp3' },
        { title: 'Genius', artist: 'Diplo,Cia,LSD', year: '2018', genre: 'Pop Electronic psicodelico / trip hop', cover: 'assets/images/LSD_genius.jpg', src: 'assets/audio/LSD - Diplo - Cia - Genius.mp3' },
        { title: 'Hip', artist: 'Mamamoo', year: '2022', genre: 'Pop,R&B,Retro,Jazz', cover: 'assets/images/MAMAMOO_HIP.jpeg', src: 'assets/audio/MAMAMOO - HIP.mp3' },
        { title: 'Payphone', artist: 'Maroon 5', year: '2011', genre: 'Pop', cover: 'assets/images/Payphone_Maroon5.jpg', src: 'assets/audio/Maroon 5 - Payphone.mp3' },
        { title: 'Friends', artist: 'Marshmello & Anne Marie', year: '2018', genre: 'Electropop', cover: 'assets/images/Marshemello_friends.jpeg', src: 'assets/audio/Marshmello & Anne-Marie - FRIENDS.mp3' },
        { title: 'Animals', artist: 'Martin Garrix', year: '2013', genre: 'Big Room House', cover: 'assets/images/Garrix_Animals.jpg', src: 'assets/audio/Martin Garrix - Animals.mp3' },
        { title: 'Troublemaker', artist: 'Olly Murs', year: '2012', genre: 'Pop', cover: 'assets/images/Olly_Troublemaker.png', src: 'assets/audio/Olly Murs - Troublemaker.mp3' },
        { title: 'I Ain’t Worried', artist: 'One Republic', year: '2023', genre: 'Pop Rock', cover: 'assets/images/One_Republic.jpg', src: 'assets/audio/One_Republic.mp3' },
        { title: 'Rain Over Me', artist: 'Pitbull', year: '2010', genre: 'Electro Pop', cover: 'assets/images/Pitbull_featuring_Marc_Anthony_Rain_Over_Me.jpg', src: 'assets/audio/Pitbull - Rain Over Me.mp3' },
        { title: 'That That', artist: 'Psy', year: '2022', genre: 'K-Pop', cover: 'assets/images/Psy_That_That.jpg', src: 'assets/audio/PSY - That That.mp3'},
        { title: 'Walk this way', artist: 'Run DMC', year: '1986', genre: 'Rap Rock', cover: 'assets/images/Run DMC_walk_this_way.jpg', src: 'assets/audio/RUN DMC - Walk This Way.mp3' },
        { title: 'Say Say Say', artist: 'Paul & Michael', year: '1983', genre: 'Funk', cover: 'assets/images/Say_say_say.jpg', src: 'assets/audio/Say Say Say - Paul Mcartney.mp3' },
        { title: 'Contra la pared', artist: 'J Balvin & Sean Paul', year: '2019', genre: 'Dancehall', cover: 'assets/images/Jbalvin_contra_la_pared.png', src: 'assets/audio/Sean Paul, J Balvin - Contra La Pared.mp3' },
        { title: 'Feel Invincible', artist: 'Skillet', year: '2000', genre: 'Industrial Metal', cover: 'assets/images/Skillet_Feel.jpg', src: 'assets/audio/Skillet - Feel Invincible.mp3' },
        { title: 'Psychosocial', artist: 'Slipknot', year: '2008', genre: 'Metal Alternativo', cover: 'assets/images/Slipknot_Psychosocial.jpg', src: 'assets/audio/Slipknot - Psychosocial.mp3' },
        { title: 'I Know', artist: 'Travis Scott', year: '2023', genre: 'Cactus', cover: 'assets/images/Travis_I_know.jpg', src: 'assets/audio/Travis Scott - I KNOW.mp3' },
    
    ];

const users = [
    { username: 'Emily', password: 'emi' },
    { username: 'Odalis', password: 'oda' }
];

// Función para cargar la lista de canciones
function loadPlaylist() {
    playlistList.innerHTML = '';
    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = `${song.title} - ${song.artist}`;
        li.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(currentSongIndex);
        });
        playlistList.appendChild(li);
    });
}

// Función para cargar una canción
function loadSong(index) {
    const song = songs[index];
    audio.src = song.src;
    songDetails.cover.src = song.cover;
    songDetails.title.textContent = song.title;
    songDetails.artist.textContent = song.artist;
    songDetails.year.textContent = song.year;
    songDetails.duration.textContent = '';
    songDetails.genre.textContent = song.genre;
    audio.addEventListener('loadedmetadata', () => {
        const duration = formatTime(audio.duration);
        songDetails.duration.textContent = duration;
    });

}

// Event listener para controlar el volumen
volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
});

// Función para formatear el tiempo en minutos y segundos
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsRemainder = Math.floor(seconds % 60);
    const formattedTime = `${minutes}:${secondsRemainder.toString().padStart(2, '0')}`;
    return formattedTime;
}

// Función para cargar favoritos
function loadFavorites() {
    const loggedUser = localStorage.getItem('loggedUser');
    const favorites = JSON.parse(localStorage.getItem(`${loggedUser}-favorites`)) || [];
    favoritesList.innerHTML = '';
    favorites.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = `${song.title} - ${song.artist}`;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => {
            favorites.splice(index, 1);
            localStorage.setItem(`${loggedUser}-favorites`, JSON.stringify(favorites));
            loadFavorites();
        });
        li.appendChild(removeBtn);
        favoritesList.appendChild(li);
    });
}

// Event listener para añadir a favoritos
addToFavoritesBtn.addEventListener('click', () => {
    const loggedUser = localStorage.getItem('loggedUser');
    const favorites = JSON.parse(localStorage.getItem(`${loggedUser}-favorites`)) || [];
    const currentSong = songs[currentSongIndex];
    if (!favorites.some(song => song.src === currentSong.src)) {
        favorites.push(currentSong);
        localStorage.setItem(`${loggedUser}-favorites`, JSON.stringify(favorites));
        loadFavorites();
    }
});

// Event listeners para control de reproducción
playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseBtn.textContent = 'Play';
    }
});

prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playPauseBtn.textContent = 'Pause';
});

nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playPauseBtn.textContent = 'Pause';
});

muteBtn.addEventListener('click', () => {
    audio.muted = !audio.muted;
    muteBtn.textContent = audio.muted ? 'Unmute' : 'Mute';
});

// Event listener para logout
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('isLogged');
    localStorage.removeItem('loggedUser');
    window.location.href = 'login.html';
});

// Cargar las listas al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    loadPlaylist();
    loadSong(currentSongIndex);
    loadFavorites();

    // Event listener para controlar el volumen
    volumeSlider.addEventListener('input', () => {
        audio.volume = volumeSlider.value;
    });
});

// Función para filtrar la lista de canciones basada en el término de búsqueda
function filterSongs(searchTerm) {
    const filteredSongs = songs.filter(song => {
        const titleMatch = song.title.toLowerCase().includes(searchTerm.toLowerCase());
        const artistMatch = song.artist.toLowerCase().includes(searchTerm.toLowerCase());
        return titleMatch || artistMatch;
    });

    playlistList.innerHTML = '';
    filteredSongs.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = `${song.title} - ${song.artist}`;
        li.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(currentSongIndex);
        });
        playlistList.appendChild(li);
    });

    // Si no hay canciones filtradas, mostrar un mensaje
    if (filteredSongs.length === 0) {
        playlistList.innerHTML = '<li>No se encontraron canciones</li>';
    }
}

// Event listener para el botón de búsqueda
searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== '') {
        filterSongs(searchTerm);
    } else {
        loadPlaylist(); // Cargar la lista completa si el término de búsqueda está vacío
    }
});

// Event listener para la tecla "Enter" en el input de búsqueda
searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const searchTerm = searchInput.value.trim();
        if (searchTerm !== '') {
            filterSongs(searchTerm);
        } else {
            loadPlaylist(); // Cargar la lista completa si el término de búsqueda está vacío
        }
    }
});

// Función para cargar el nombre de usuario logueado
function loadLoggedUser() {
    const loggedUser = localStorage.getItem('loggedUser');
    const loggedUserElement = document.getElementById('logged-user');
    if (loggedUserElement) {
        loggedUserElement.textContent = loggedUser || 'Desconocido';
    }
}

// Cargar las listas y el usuario logueado al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    loadPlaylist();
    loadSong(currentSongIndex);
    loadFavorites();
    loadLoggedUser(); // Cargar el nombre de usuario logueado

});




