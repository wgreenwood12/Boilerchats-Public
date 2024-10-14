<template>
  <div class="app-container">
    <router-view></router-view>

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <router-link to="/reportBug" class="footer-header-link">
            <h2>Report a Bug</h2>
          </router-link>
          <p>Encountered an issue? Let us know so we can fix it!</p>
        </div>
        <div class="footer-section">
          <router-link to="/submitCourse" class="footer-header-link">
            <h2>Submit a Course</h2>
          </router-link>
          <p>Already have an established group chat for a course?<br>Submit the GroupMe link here so your classmates can join!</p>
        </div>
        <div class="footer-section">
          <router-link to="/contactUs" class="footer-header-link">
            <h2>Contact Us</h2>
          </router-link>
          <p>Have any questions or need assistance? Get in touch!</p>
        </div>
      </div>
      <p>Boiler up! 🚂</p>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Arial, sans-serif;
  color: #373A36;
  text-align: center;
  padding: 20px;
  background-color: #292626;
  min-height: 93vh;
}

.footer {
  background-color: #CEB888;
  padding: 16px 20px; /* Default padding for larger screens */
  border-radius: 8px;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  color: #292626;
}

.footer-section {
  flex: 1;
  margin: 0 15px; /* Default margin for larger screens */
}

.footer-header-link {
  display: inline-block;
  text-decoration: none;
}

.footer-header-link h2 {
  display: inline;
  font-size: 18px; /* Default font size for larger screens */
  margin-bottom: 5px;
  color: #373A36;
  transition: color 0.3s ease;
}

.footer-header-link h2:hover {
  color: #B89A5E;
}

.footer-section p {
  margin: 8px 0; /* Default margin for larger screens */
  font-size: 14px; /* Default font size for larger screens */
}

footer p {
  margin-top: 12px; /* Default margin-top for larger screens */
  font-size: 18px; /* Default font size for larger screens */
}

/* Media query for smaller screens (like mobile) */
@media screen and (max-width: 768px) {
  .footer {
    padding: 12px; /* Reduced padding for smaller screens */
  }

  .footer-section {
    margin: 0 10px; /* Reduced margin for smaller screens */
  }

  .footer-header-link h2 {
    font-size: 16px; /* Reduced font size for smaller screens */
  }

  .footer-section p {
    margin: 5px 0; /* Reduced margin for smaller screens */
    font-size: 12px; /* Reduced font size for smaller screens */
  }

  footer p {
    margin-top: 8px; /* Reduced margin-top for smaller screens */
    font-size: 16px; /* Reduced font size for smaller screens */
  }
}
</style>
