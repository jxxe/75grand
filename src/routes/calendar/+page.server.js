import ical from 'ical';

// 4 = clubs
// 5 = sports
// 7 = lectures
// 8 = arts
// 13 = featured events
// 15 = campus
// 24 = films & videos

export async function load(event) {
    let events = {};

    for(const calendarId of [4, 5, 7, 8, 15, 24, 13]) {
        // const request = await fetch(`http://webapps.macalester.edu/eventscalendar/events/ical/?calendarId=${calendarId}`);
        const request = await fetch(`https://75.jero.zone/cache.php?url=${encodeURIComponent(`http://webapps.macalester.edu/eventscalendar/events/ical/?calendarId=${calendarId}`)}`);
        const raw = await request.text();

        let allEvents = Object.values(ical.parseICS(raw)).map(event => {
            event.calendarId = calendarId;

            if(event.description) {
                const description = event.description.toLowerCase();

                event.features = [
                    ['Free Food', 'burger', description.includes('free') && (description.includes('breakfast') || description.includes('lunch') || description.includes('dinner') || description.includes('food') || description.includes('taco'))],
                    ['Home Game', 'person-running', calendarId === 5 && (event.location.includes('Macalester Stadium') || event.location.includes('(Home)'))],
                    ['Vegetarian', 'egg', description.includes('vegetarian') || description.includes('vegan')],
                    ['Vegan', 'carrot', description.includes('vegan')]
                ].filter(feature => feature[2]);
            }

            return event;
        });

        allEvents.shift();

        // Remove duplicates by using a unique ID (the URL) as the key
        allEvents.forEach(event => events[event.url] = event);
    }

    events = Object.values(events);
    events = events.sort((a, b) => new Date(a.start) - new Date(b.start));
    events = events.filter(event => new Date(event.end).getTime() > Date.now());

    const allFeatures = events.map(event => event.features).flat().filter(item => item);
    const featureSet = new Set(allFeatures.map(JSON.stringify));
    const uniqueFeatures = Array.from(featureSet).map(JSON.parse);

    return { events, uniqueFeatures };
}