<template>
  <div class="search-container">
    <div class="search-wrapper" ref="searchWrapper">
      <input type="text"
             @input="debounceSearch"
             v-model="query"
             @keyup.enter="handleEnterKey"
             placeholder="Search..."
             class="search-input"
             ref="searchInput">
      <div v-if="query.length > 1 && !loading"
           class="dropdown"
           :class="{ active: query.length > 1 && searchResults.length > 0 }"
           :style="{ width: dropdownWidth + 'px', top: dropdownTop + 'px', left: dropdownLeft + 'px' }">
        <ul class="search-results">
          <li v-for="result in searchResults"
              :key="result.id"
              @click="selectCourse(result)"
              class="search-item">
            {{ result.course_type + " " + result.course_number + " " + result.name }}
          </li>
        </ul>
      </div>
      <p v-else-if="!displayTable" class="no-results">No Results Found</p>
    </div>
    <div class="table-wrapper" v-if="displayTable">
      <table class="course-table">
        <thead>
          <tr>
            <th>Course Tag</th>
            <th>Course Number</th>
            <th>Name</th>
            <th>Groupchat</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(course, index) in hidden"
              :key="course.id"
              class="course-row"
              :class="{ 'light-gray': index % 2 !== 0 }">
            <td>{{ course.course_type }}</td>
            <td>{{ course.course_number }}</td>
            <td>{{ course.name }}</td>
            <td><a :href="course.groupme_link" target="_blank">Join</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { debounce } from 'lodash';

export default {
  data() {
    return {
      query: '',
      searchResults: [],
      hidden: [],
      allResults: [],
      displayTable: false,
      loading: false,
      dropdownWidth: 0,
      dropdownTop: 0,
      dropdownLeft: 0
    };
  },
  methods: {
    async search() {
      this.loading = true;
      try {
        const response = await axios.get(`https://boilerchats.com/api/search?q=${this.query}`);
        this.searchResults = response.data.slice(0, 5);
        this.allResults = response.data;
      } finally {
        this.loading = false;
      }
    },
    selectCourse(course) {
      if (course) {
        this.hidden = [course, ...this.allResults.filter(item => item !== course)];
      } else {
        this.hidden = this.allResults;
      }
      this.displayTable = true;
      this.query = "";
    },
    handleEnterKey() {
      if (!this.loading && this.searchResults.length > 0) {
        this.selectCourse(this.searchResults[0]);
      }
    },
    updateDropdownWidth() {
      const searchInput = this.$refs.searchInput;
      if (searchInput) {
        const inputRect = searchInput.getBoundingClientRect();
        this.dropdownWidth = inputRect.width;
      }
    }
  },
  watch: {
    query() {
      if (this.query.length > 1) {
        this.updateDropdownWidth();
        const searchInput = this.$refs.searchInput;
        const searchWrapper = this.$refs.searchWrapper;
        const inputRect = searchInput.getBoundingClientRect();
        const wrapperRect = searchWrapper.getBoundingClientRect();
        
        this.dropdownTop = inputRect.bottom - wrapperRect.top + 2; // Adjust to position directly below input
        this.dropdownLeft = inputRect.left - wrapperRect.left;
      } else {
        this.dropdownWidth = 0;
        this.dropdownTop = 0;
        this.dropdownLeft = 0;
      }
    }
  },
  mounted() {
    this.debounceSearch = debounce(this.search, 400);
    window.addEventListener('resize', this.updateDropdownWidth);
    this.updateDropdownWidth();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateDropdownWidth);
  }
};
</script>

<style scoped>
.search-container {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}

.search-wrapper, .table-wrapper {
  width: 100%;
  max-width: 1150px;
  box-sizing: border-box;
<<<<<<< HEAD
  position: relative; 
=======
  position: relative; /* Ensure relative positioning for proper dropdown placement */
>>>>>>> 5143b5090d2c8ddb5728458517c8b6f766e0b200
}

.search-input {
  padding: 8px;
  border: 1px solid #CEB888;
  border-radius: 8px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
}

.dropdown {
  position: absolute;
  background-color: white;
  border: 1px solid #CEB888;
  border-radius: 4px;
  z-index: 10;
  display: none;
  box-sizing: border-box;
}

.dropdown.active {
  display: block;
}

.search-results {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.search-item {
  padding: 8px;
  cursor: pointer;
  border-bottom: 1px solid #9D968D;
  transition: background-color 0.3s ease;
}

.search-item:hover {
  background-color: #b8b8b8;
}

.no-results {
  margin-top: 10px;
  color: #666;
}

.table-wrapper {
  margin-top: 20px;
}

.course-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
  box-sizing: border-box;
}

.course-table th, .course-table td {
  border-bottom: 1px solid #ddd;
  padding: 8px;
}

.course-table th {
  background-color: #454644;
  color: #CEB888;
}

.course-table th:first-child {
  border-top-left-radius: 8px;
}

.course-table th:last-child {
  border-top-right-radius: 8px;
}

.course-row:last-child td:first-child {
  border-bottom-left-radius: 8px;
}

.course-row:last-child td:last-child {
  border-bottom-right-radius: 8px;
}

.course-row {
  background-color: #eaeaeaf0;
}

.course-row.light-gray {
  background-color: #f5f5f5;
}

.course-row:hover {
  background-color: #b8b8b8;
}

.course-row:last-child {
  border-bottom: none;
}

@media screen and (max-width: 768px) {
  .search-container {
    padding: 0 10px;
  }
  .course-table {
    font-size: 14px;
  }
  .course-table th, .course-table td {
    padding: 6px;
  }
}

@media screen and (max-width: 480px) {
  .course-table {
    font-size: 12px;
  }
  .course-table th, .course-table td {
    padding: 4px;
  }
}
</style>
