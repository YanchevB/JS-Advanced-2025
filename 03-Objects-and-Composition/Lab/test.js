function fromJSONToHTMLTable(input) {
  const data = JSON.parse(input);
  
  if (data.length === 0) return console.log('<table></table>');

  const headers = getHeaders(data);
  const rows = getDataRows(data);
  const table = `<table>\n${headers}\n${rows}</table>`;
  console.log(table);

  function escapeHTML(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
  }
  
  function getHeaders(data) {
    const keys = Object.keys(data[0])
    let row = ' <tr>';
    for (let key of keys) {
      row += `<th>${escapeHTML(key)}</th>`
    }
    row += '</tr>';
    return row;
  }

  function getDataRows(data) {
    let rows = '';
    for (let obj of data) {
      rows += ' <tr>'
      for (let value of Object.values(obj)) {
        rows += `<td>${escapeHTML(value)}</td>`;
      }
      rows += '</tr>\n'
    }
    return rows;
  }
}

fromJSONToHTMLTable(['[{"Name":"Stamat","Price":5.5},{"Name":"Rumen","Price":6}]']);