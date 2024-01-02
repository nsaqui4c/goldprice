export function parseTableToJSON(table,$) {
    const json = {};
    const rows = $(table).find('tr');
    const header={0:'date',1:'oneGram',2:'eightGram',3:'tenGram',4:'hundGram',5:'oneKiloGram',6:'oneTola'}  
    let currentKey = '';
    rows.each((index, row) => {
        const cells = $(row).find('th, td');
        if (cells.hasClass('center')) {
            currentKey = $(cells).text().trim();
            json[currentKey] = [];
        } 
        else if($(row).hasClass('active')){ }
        else {
            const rowData = {};
            cells.each((idx, cell) => {
                const cellData = idx? parseInt($(cell).text().trim().replace(/\D/g, ''), 10) :convertToDate($(cell).text().trim());                           
                rowData[ header[idx]] = cellData;
                
            });
            json[currentKey].push(rowData);
        }
    });

    return json;
}




export function convertToDate(dateString) {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'
    ];
  
    const parts = dateString.split(' ');
    const day = parseInt(parts[1].replace(/[^0-9]/g, ''), 10); // Extract the day
    const monthIndex = months.indexOf(parts[2]); // Get month index from the array
    const year = parseInt(parts[3], 10); // Extract the year
  
    // Create a new Date object
    const date = new Date(year, monthIndex, day);
    return date;
  }

