export const calendarInit = () => {
  const myCalendar = document.querySelector(".myCalendar");

  const generateTable = () => {
    const html = `
    <table class="calendar">
      <thead>
        <tr>
          <th>Sun</th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
        </tr>
      </thead>

      <tbody class="calendar-body">
      </tbody>
    </table>
  `;

    myCalendar.insertAdjacentHTML("afterbegin", html);
  };

  const generateDates = (currentYear, currentMonth) => {
    const firstDay = new Date(currentYear, currentMonth).getDay();
    const daysOfMonth = (y, m) => 32 - new Date(y, m, 32).getDate();

    let html = "";
    let date = 1;
    let nextMonthDate = 1;
    let lastMonthDate = daysOfMonth(currentYear, currentMonth - 1);

    for (let i = 0; i < 6; i++) {
      html += "<tr>";

      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          html += `<td>${lastMonthDate - (firstDay - j)}</td>`;
        } else if (date > 42) {
          break;
        } else if (date > daysOfMonth(currentYear, currentMonth)) {
          html += `<td>${nextMonthDate}</td>`;
          nextMonthDate++;
        } else {
          html += `<td>${date}</td>`;
          date++;
        }
      }

      html += "</tr>";
    }

    const calendarBody = myCalendar.querySelector(".calendar-body");
    calendarBody.innerHTML = html;
  };

  let currentYear = new Date().getFullYear();
  let currentMonth = new Date().getMonth();

  generateTable();
  generateDates(currentYear, currentMonth);
};
