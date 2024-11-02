// Get the canvas element and its context
const canvas = document.getElementById('tablechart-dev');
const ctx = canvas.getContext('2d');

// Define the chemical data
const chemicals = [
    { name: 'Water', volume: 50 },
    { name: 'Sodium Chloride', volume: 30 },
    { name: 'Acetic Acid', volume: 20 },
    { name: 'Ethanol', volume: 10 },
    { name: 'Hydrogen Peroxide', volume: 5 },
    { name: 'Sulfuric Acid', volume: 15 },
    { name: 'Potassium Hydroxide', volume: 25 },
    { name: 'Calcium Chloride', volume: 12 },
    { name: 'Ammonium Nitrate', volume: 18 },
    { name: 'Sodium Bicarbonate', volume: 22 }
];

// Function to draw a table on the canvas
function drawTable() {
    const rowHeight = 30; // Height of each row
    const colWidth = 180; // Width of each column
    const startX = 20;    // Starting X position
    const startY = 20;    // Starting Y position

    // Draw the header
    ctx.fillStyle = '#3498db'; // Header color
    ctx.fillRect(startX, startY, colWidth * 2, rowHeight); // Draw header background
    ctx.fillStyle = '#ffffff'; // Text color
    ctx.font = '16px Arial';
    ctx.fillText('Chemical Name', startX + 10, startY + 20);
    ctx.fillText('Volume (mL)', startX + colWidth + 10, startY + 20);

    // Draw the data rows
    ctx.fillStyle = '#ffffff'; // Row background color
    for (let i = 0; i < chemicals.length; i++) {
        const y = startY + (i + 1) * rowHeight; // Calculate Y position for each row
        ctx.fillStyle = (i % 2 === 0) ? '#f2f2f2' : '#ffffff'; // Alternate row colors
        ctx.fillRect(startX, y, colWidth * 2, rowHeight); // Draw row background

        ctx.fillStyle = '#333'; // Text color
        ctx.fillText(chemicals[i].name, startX + 10, y + 20);
        ctx.fillText(chemicals[i].volume, startX + colWidth + 10, y + 20);
    }
}

// Call the function to draw the table
drawTable();
