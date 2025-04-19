const fetch = require('node-fetch');
const fs = require('fs').promises;

const SHEET_ID = '1p5_QRMi2L_tN13EeLg58sMS__XGCIfx7T9Wp0ZLZU58';
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=Announcements`;

async function fetchAnnouncements() {
    try {
        const response = await fetch(SHEET_URL);
        const text = await response.text();
        // Remove the extra "google.visualization.Query.setResponse(" and ");" text
        const jsonText = text.replace('/*O_o*/\ngoogle.visualization.Query.setResponse(', '').replace(/\);$/, '');
        const data = JSON.parse(jsonText);
        
        let message = '';
        if (data.table && data.table.rows && data.table.rows.length > 1) {
            message = data.table.rows[1].c[0]?.v || '';
        }
        
        // Save to announcements.txt
        await fs.writeFile('announcements.txt', message);
        console.log("Successfully updated announcements.txt");
        
    } catch (error) {
        console.error('Error fetching announcements:', error);
        // If there's an error, write an empty file to ensure it exists
        await fs.writeFile('announcements.txt', '');
    }
}

// Run the function
fetchAnnouncements(); 