<template>
  <div>
    <header class="header">
      <div class="header-content">
        <div class="header-left">
          <img class="header-image" src="../ghost1.png" alt="Left Image">
        </div>
        <div class="header-center">
          <h1 class="title">
            <span class="emoji">🔔</span>
            Boilerchats
            <span class="emoji">🚂</span>
          </h1>
          <p class="description">
            Easily find and join GroupMe groupchats for your courses at Purdue University
          </p>
          <p class="instruction">Simply type your course code in the search bar below, and connect with your classmates!<br> Try "ENGR 131" or "MA"</p>
        </div>
        <div class="header-right">
          <img class="header-image" src="../ghost1.png" alt="Right Image">
        </div>
      </div>
    </header>

    <div class="search-bar-container">
      <SearchBar/>
    </div>
  </div>
</template>

<script setup>
import SearchBar from './SearchBar.vue';
</script>

<style scoped>
.header {
  background-color: #CEB888; /* Gold */
  padding: 15px; 
  border-radius: 8px;
  margin-bottom: 15px;
}

.title {
  font-size: 2em; 
  margin: 0;
  color: #000000; /* Black */
}

.description {
  font-size: 1.3em; 
  margin-top: 10px;
  color: #000000; /* Black */
}

.instruction {
  font-size: 1.1em; 
  margin-top: 10px;
  color: #373A36; /* Gray */
}

.search-bar-container {
  margin: 15px auto; 
  width: 96%;
}

.header-content {
  display: flex;
  align-items: center;
  max-width: 100%;
}

.header-left,
.header-right {
  flex: 0 0 auto;
  margin: 0 18px; 
}

.header-center {
  flex: 1 1 auto;
  text-align: center;
  max-width: 80%; 
  margin: 0 auto; 
}

.header-image {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Show emojis always */
.emoji {
  display: inline;
}



/* Medium screens */
@media screen and (max-width: 768px) {
  .header {
    padding: 10px; 
  }

  .header-image {
    display: none;
  }

  .title {
    font-size: 1.5em; 
  }

  .description {
    font-size: 1.1em; 
  }

  .instruction {
    font-size: 0.9em;
  }

  .header-center {
    max-width: 90%; 
    margin: 0 auto;
  }
}

/* Small screens */
@media screen and (max-width: 480px) {
  .header {
    padding: 8px; 
    margin-bottom: 10px; 
  }

  .title {
    font-size: 1.3em; 
  }

  .description {
    font-size: 1em; 
  }

  .instruction {
    font-size: 0.8em; 
  }

  .header-center {
    max-width: 100%;
    margin: 0 auto; 
  }

  .search-bar-container {
    margin: 10px auto;
  }
}
</style>
