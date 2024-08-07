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
  padding: 15px; /* Reduced padding */
  border-radius: 8px;
  margin-bottom: 15px;
}

.title {
  font-size: 2em; /* Increased font size */
  margin: 0;
  color: #000000; /* Black */
}

.description {
  font-size: 1.3em; /* Increased font size */
  margin-top: 10px;
  color: #000000; /* Black */
}

.instruction {
  font-size: 1.1em; /* Larger initial font size */
  margin-top: 10px;
  color: #373A36; /* Gray */
}

.search-bar-container {
  margin: 15px auto; /* Reduced margin */
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
  margin: 0 18px; /* Adjust margin as needed */
}

.header-center {
  flex: 1 1 auto;
  text-align: center;
  max-width: 80%; /* Adjust the maximum width as needed */
  margin: 0 auto; /* Center align and add margin */
}

.header-image {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Show emojis always */
.emoji {
  display: inline; /* Ensure emojis are always displayed */
}

/* Media Queries */

/* Medium screens */
@media screen and (max-width: 768px) {
  .header {
    padding: 10px; /* Further reduced padding */
  }

  .header-image {
    display: none;
  }

  .title {
    font-size: 1.5em; /* Further decreased font size of title */
  }

  .description {
    font-size: 1.1em; /* Further decreased font size of description */
  }

  .instruction {
    font-size: 0.9em; /* Reduced font size for instruction paragraph */
  }

  .header-center {
    max-width: 90%; /* Increase the maximum width */
    margin: 0 auto; /* Center align and add margin */
  }
}

/* Small screens */
@media screen and (max-width: 480px) {
  .header {
    padding: 8px; /* Further reduced padding */
    margin-bottom: 10px; /* Reduced margin-bottom */
  }

  .title {
    font-size: 1.3em; /* Further decreased font size of title */
  }

  .description {
    font-size: 1em; /* Further decreased font size of description */
  }

  .instruction {
    font-size: 0.8em; /* Further reduced font size for instruction paragraph */
  }

  .header-center {
    max-width: 100%; /* Increase the maximum width */
    margin: 0 auto; /* Center align and add margin */
  }

  .search-bar-container {
    margin: 10px auto; /* Reduce margin */
  }
}
</style>
