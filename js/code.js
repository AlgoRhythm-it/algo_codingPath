const weekProblems = {

    'Week 1': [
      { category: 'BASIC MATH', problem: 'CHECK FOR BINARY', level: 'BASIC', week: 'Week 1', link: 'https://www.geeksforgeeks.org/problems/check-for-binary/1?page=1&difficulty=School&sortBy=submissions' },
      { category: 'BASIC MATH', problem: 'ARMSTRONG NUMBER', level: 'BASIC', week: 'Week 1', link: 'https://www.geeksforgeeks.org/problems/armstrong-numbers2727/1' },
      { category: 'BASIC MATH', problem: 'PALINDROME', level: 'BASIC', week: 'Week 1', link: 'https://leetcode.com/problems/palindrome-number/description/?envType=problem-list-v2&envId=math' },
      { category: 'BASIC MATH', problem: 'ODD OR EVEN', level: 'BASIC', week: 'Week 1', link: 'https://www.geeksforgeeks.org/problems/odd-or-even3618/1?page=2&difficulty=School&sortBy=submissions' },
      { category: 'BASIC MATH', problem: 'POWER OF TWO', level: 'BASIC', week: 'Week 1', link: 'https://leetcode.com/problems/power-of-two/description/?envType=problem-list-v2&envId=math' },
      { category: 'BASIC MATH', problem: 'POWER(X, N)', level: 'MEDIUM', week: 'Week 1', link: 'https://leetcode.com/problems/powx-n/description/?envType=problem-list-v2&envId=math' },
      { category: 'BASIC MATH', problem: 'PERMUTATION SEQUENCE', level: 'HARD', week: 'Week 1', link: 'https://leetcode.com/problems/permutation-sequence/description/?envType=problem-list-v2&envId=math' },
    ],
  
    'Week 2': [
      { category: 'ARRAYS', problem: 'TWO SUM', level: 'BASIC', week: 'Week 2', link: 'https://leetcode.com/problems/two-sum/description/?envType=problem-list-v2&envId=array' },
      { category: 'ARRAYS', problem: 'PLUS ONE', level: 'BASIC', week: 'Week 2', link: 'https://leetcode.com/problems/plus-one/description/?envType=problem-list-v2&envId=array' },
      { category: 'ARRAYS', problem: 'ROTATE ARRAY', level: 'MEDIUM', week: 'Week 2', link: 'https://leetcode.com/problems/rotate-array/description/' },
      { category: 'ARRAYS', problem: 'NO OF SUB ARRAYS WITH ODD SUM', level: 'MEDIUM', week: 'Week 2', link: 'https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/description/' },
      { category: 'ARRAYS', problem: 'FIND KTH SMALLEST ELEMENT', level: 'MEDIUM', week: 'Week 2', link: 'https://www.geeksforgeeks.org/problems/kth-smallest-element5635/1' },
      { category: 'ARRAYS', problem: '3 SUM', level: 'MEDIUM', week: 'Week 2', link: 'https://leetcode.com/problems/3sum/description/?envType=problem-list-v2&envId=array' },
      { category: 'ARRAYS', problem: 'MEDIAN OF 2 SORTED ARRAYS', level: 'HARD', week: 'Week 2', link: 'https://leetcode.com/problems/median-of-two-sorted-arrays/description/?envType=problem-list-v2&envId=array' },
    ],
  
    'Week 3': [
    { category: 'STRINGS', problem: 'REVERSE THE STRING', level: 'HARD', week: 'Week 3', link: 'https://dummy-link.com' },
    { category: 'STRINGS', problem: 'LONGEST COMMON PREFIX', level: 'HARD', week: 'Week 3', link: 'https://dummy-link.com' },
    { category: 'STRINGS', problem: 'DIVISIBLE BY 7', level: 'HARD', week: 'Week 3', link: 'https://dummy-link.com' },
    { category: 'STRINGS', problem: 'GROUP ANAGRAMS', level: 'HARD', week: 'Week 3', link: 'https://dummy-link.com' },
    { category: 'STRINGS', problem: 'IMPLEMENT ATOI', level: 'HARD', week: 'Week 3', link: 'https://dummy-link.com' },
    { category: 'STRINGS', problem: 'MULTIPLY 2 STRINGS', level: 'HARD', week: 'Week 3', link: 'https://dummy-link.com' },
    { category: 'STRINGS', problem: 'LAST MATCH', level: 'HARD', week: 'Week 3', link: 'https://dummy-link.com' },
  ],
  
    'Week 4': [
  { category: 'ARRAYS AND STRINGS', problem: 'ARRAY DUPLICATES', level: 'HARD', week: 'Week 4', link: 'https://dummy-link.com' },
  { category: 'ARRAYS AND STRINGS', problem: 'MAJORITY ELEMENT', level: 'HARD', week: 'Week 4', link: 'https://dummy-link.com' },
  { category: 'ARRAYS AND STRINGS', problem: 'ISOMORPHIC STRINGS', level: 'HARD', week: 'Week 4', link: 'https://dummy-link.com' },
  { category: 'ARRAYS AND STRINGS', problem: 'PANAGRAM CHECKING', level: 'HARD', week: 'Week 4', link: 'https://dummy-link.com' },
  { category: 'ARRAYS AND STRINGS', problem: 'LICENSE KEY FORMATTING', level: 'HARD', week: 'Week 4', link: 'https://dummy-link.com' },
  { category: 'ARRAYS AND STRINGS', problem: 'SMALLEST WINDOW', level: 'HARD', week: 'Week 4', link: 'https://dummy-link.com' },
  { category: 'ARRAYS AND STRINGS', problem: 'EDIT DISTANCE', level: 'HARD', week: 'Week 4', link: 'https://dummy-link.com' },
]

  
  };
  
  
  const weeks = Object.keys(weekProblems);
  let currentWeekIndex = 0;
  
  function displayTable() {
    const tableBody = document.getElementById('problemTable');
    tableBody.innerHTML = '';
    const week = weeks[currentWeekIndex];
    const problems = weekProblems[week];
  
    problems.forEach(problem => {
      const row = `<tr>
        <td>${problem.category}</td>
        <td><a href="${problem.link}" target="_blank">${problem.problem}</a></td>
        <td>${problem.level}</td>
        <td>${week}</td>
      </tr>`;
      tableBody.innerHTML += row;
    });
    displayPagination();
    displaySubmitButtons();
  }
  
  function displayPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
  
    weeks.forEach((week, index) => {
      const pageItem = `<li class="page-item ${index === currentWeekIndex ? 'active' : ''}">
        <a class="page-link" href="#" onclick="goToWeek(${index})">${week}</a>
      </li>`;
      pagination.innerHTML += pageItem;
    });
  }
  
  function goToWeek(weekIndex) {
    currentWeekIndex = weekIndex;
    displayTable();
  }
  
  function displaySubmitButtons() {
    const submitButtonsContainer = document.getElementById('submitButtons');
    submitButtonsContainer.innerHTML = '';
  
    weeks.forEach((week, index) => {
        const button = `<button class="btn btn-primary btn-sm ${index === currentWeekIndex ? '' : 'd-none'}" onclick="openGoogleForm(${index})">
   Submit ${week}
      </button>`;
      
      submitButtonsContainer.innerHTML += button;
    });
  }
  
  function openGoogleForm(weekIndex) {
    const formLinks = [
      'https://forms.gle/form1', // Replace with actual form links
      'https://forms.gle/form2',
      'https://forms.gle/form3',
      'https://forms.gle/form4',
    ];
    window.open(formLinks[weekIndex], '_blank');
  }
  
 document.getElementById('searchInput').addEventListener('input', (e) => {
  const searchText = e.target.value.toLowerCase();
  
  // Combine all week problems into a single array for global search
  const allProblems = Object.keys(weekProblems).flatMap(week => 
    weekProblems[week].map(problem => ({ ...problem, week }))
  );

  // Filter problems based on search text
  const filteredProblems = allProblems.filter(problem =>
    problem.problem.toLowerCase().includes(searchText) ||
    problem.category.toLowerCase().includes(searchText) ||
    problem.week.toLowerCase().includes(searchText) // Optional: Search by week
  );

  // Update table with filtered results
  const tableBody = document.getElementById('problemTable');
  tableBody.innerHTML = '';
  filteredProblems.forEach(problem => {
    const row = `<tr>
      <td>${problem.category}</td>
      <td><a href="${problem.link}" target="_blank">${problem.problem}</a></td>
      <td>${problem.level}</td>
      <td>${problem.week}</td>
    </tr>`;
    tableBody.innerHTML += row;
  });

  // If the search box is cleared, reset to the current week
  if (searchText === '') {
    displayTable();
  }
});
  
 displayTable();

  