// Function to remove classes for left-aligned elements
function removeLeftAlignedClasses() {
  const elements = document.querySelectorAll('#leftAligned');
  elements.forEach(element => {
    element.classList.remove('col-sm-8');
  });
}

// Function to remove classes for right-aligned elements
function removeRightAlignedClasses() {
  const elements = document.querySelectorAll('#rightAligned');
  elements.forEach(element => {
    element.classList.remove('col-sm-8', 'rightcollumn');
  });
}

// Function to remove the row class
function removeRowClasses() {
  const elements = document.querySelectorAll('#row');
  elements.forEach(element => {
    element.classList.remove('row');
  });
}

// Function to add classes back to left-aligned elements
function addLeftAlignedClasses() {
  const elements = document.querySelectorAll('#leftAligned');
  elements.forEach(element => {
    element.classList.add('col-sm-8');
  });
}

// Function to add classes back to right-aligned elements
function addRightAlignedClasses() {
  const elements = document.querySelectorAll('#rightAligned');
  elements.forEach(element => {
    element.classList.add('col-sm-8', 'rightcollumn');
  });
}

// Function to add the row class back
function addRowClasses() {
  const elements = document.querySelectorAll('#row');
  elements.forEach(element => {
    element.classList.add('row');
  });
}

// Add a listener for screen size changes
const mediaQuery = window.matchMedia('(max-width: 37em)'); // Matches max-width: 37em

// Check the media query on load
if (mediaQuery.matches) {
  removeLeftAlignedClasses();
  removeRightAlignedClasses();
  removeRowClasses(); // Remove row class for mobile view
} else {
  addLeftAlignedClasses();
  addRightAlignedClasses();
  addRowClasses(); // Add row class for larger screens
}

// Listen for changes in the media query status
mediaQuery.addListener((e) => {
  if (e.matches) {
    removeLeftAlignedClasses();
    removeRightAlignedClasses();
    removeRowClasses(); // Remove row class for mobile view
  } else {
    addLeftAlignedClasses();
    addRightAlignedClasses();
    addRowClasses(); // Add row class for larger screens
  }
});
