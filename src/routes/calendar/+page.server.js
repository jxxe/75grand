import ical from 'ical';

// 4 = clubs
// 5 = sports
// 7 = lectures
// 8 = arts
// 13 = featured events
// 15 = campus
// 24 = films & videos

export async function load({ setHeaders }) {
    let events = {};

    for(const calendarId of [4, 5, 7, 8, 15, 24, 13]) {
        const request = await fetch(`http://webapps.macalester.edu/eventscalendar/events/ical/?calendarId=${calendarId}`);
        const raw = await request.text();

        let allEvents = Object.values(ical.parseICS(raw)).map(event => {
            event.calendarId = calendarId;
            return event;
        });

        allEvents.shift();

        // Remove duplicates by using a unique ID (the URL) as the key
        allEvents.forEach(event => events[event.url] = event);
    }

    events = Object.values(events);
    events = events.sort((a, b) => new Date(a.start) - new Date(b.start));
    events = events.filter(event => new Date(event.end).getTime() > Date.now());

    setHeaders({ 'cache-control': 'public, max-age=3600' });
    return { events: events };
}