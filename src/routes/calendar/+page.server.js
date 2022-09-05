import parseICS from 'ical';
import { calendar } from '../../lib/stores.js';
import { get } from 'svelte/store';

// 4 = clubs
// 5 = sports
// 7 = lectures
// 8 = arts
// 15 = campus
// 24 = films & videos

export async function load(event) {
    let events = get(calendar);

    if(calendar.length === 0) {
        for(const calendarId of [4, 5, 7, 8, 15, 24]) {
            const request = await fetch(`http://webapps.macalester.edu/eventscalendar/events/ical/?calendarId=${calendarId}`);
            const raw = await request.text();
    
            let parsedData = Object.values(parseICS(raw)).map(event => {
                event.calendarId = calendarId;
                return event;
            });
    
            parsedData.shift();
            events.push(...parsedData);
        }
    
        events.sort((a, b) => new Date(a.start) - new Date(b.start));
        calendar.set(events);
    }

    return { events: events };
}