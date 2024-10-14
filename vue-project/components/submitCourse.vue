<template>
    <div class="report-bug-container">
      <h2>📚Submit a Course✏️</h2>
      <form @submit.prevent="submitCourse">
        <div class="form-group">
          <label for="email">Enter your email (optional):</label>
          <input type="email" id="email" placeholder="purduepete@purdue.edu" v-model="email"/>
        </div>
        <div class="form-group">
          <label for="courseCode">Enter course code:</label>
          <input id="courseCode" placeholder="ex: (MA 26500 or BIOL 11000)" v-model="courseCode" required></input>
        </div>
        <div class="form-group">
          <label for="name">Enter course name:</label>
          <input id="name" placeholder="ex: (Linear Algebra or Fundamentals of Biology 1)" v-model="name" required></input>
        </div>
        <div class="form-group">
          <label for="link">Enter shareable GroupMe link:</label>
          <input id="link" placeholder="ex: https://groupme.com/join_group/109033274/ZqvGV8Xq" v-model="link" required></input>
        </div>
        
        <button type="submit">Submit</button>
      </form>
      
      <p v-if="message">{{ message }}</p>
      
      <p><router-link to="/">
        <br>
        Back to home</router-link></p>

    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        link: '',
        message: '',
        courseCode: '',
        name: '',
      };
    },
    methods: {
      async submitCourse() {
        try {
          const response = await axios.post('https://boilerchats.com/api/submitCourse', {
            email: this.email,
            link: this.link,
            courseCode: this.courseCode,
            name: this.name
          });
          this.message = response.data;
          this.email = '';
          this.link = '';
          this.courseCode = '';
          this.name = ''
        } catch (error) {
          this.message = 'Failed to send bug report.';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .report-bug-container {
    padding: 20px;
    background-color: #CEB888; /* Light Gray */
    border-radius: 8px;
<<<<<<< HEAD
    text-align: center; 
=======
    text-align: center; /* Center the content */
>>>>>>> 5143b5090d2c8ddb5728458517c8b6f766e0b200
    
  }
  
  .form-group {
    margin-bottom: 20px;
<<<<<<< HEAD
    text-align: left; 
=======
    text-align: left; /* Align form elements to the left */
>>>>>>> 5143b5090d2c8ddb5728458517c8b6f766e0b200
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    color: #373A36; /* Dark Gray */
  }
  
  input,
  textarea {
<<<<<<< HEAD
    width: calc(100% - 16px); 
=======
    width: calc(100% - 16px); /* Adjusting the width */
>>>>>>> 5143b5090d2c8ddb5728458517c8b6f766e0b200
    padding: 8px;
    border: 1px solid #a0a0a0; /* Gold */
    border-radius: 4px;
    background-color: #e4e4e4;
    font-family: inherit;
    font-size: inherit;
  }
  
  textarea {
<<<<<<< HEAD
    resize: vertical;
=======
    resize: vertical; /* Allowing vertical resizing */
>>>>>>> 5143b5090d2c8ddb5728458517c8b6f766e0b200
  }
  
  button {
    padding: 15px 25px;
    background-color: #373A36; /* Gold */
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: #fff;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #b89a5e; /* Darker Gold */
  }
  
  p {
    margin-top: 20px;
    color: #000000; /* Green */
  }
  </style>
  