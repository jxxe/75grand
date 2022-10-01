import ical from 'ical';

export async function load() {
    let events = {};

    for(const [index, calendarUrl] of [
        'https://calendar.google.com/calendar/ical/uak49d5n6hmg87onlafliquagq621es4%40import.calendar.google.com/public/basic.ics', // clubs
        'https://calendar.google.com/calendar/ical/184a3fl8g2kgctprchksv9ohoev4csm3%40import.calendar.google.com/public/basic.ics', // sports
        'https://calendar.google.com/calendar/ical/rgcupookhah3fr2uq5lbemckof8upsfo%40import.calendar.google.com/public/basic.ics', // lectures
        'https://calendar.google.com/calendar/ical/287oc73evs3aaodd897kmkfv83lh4ukb%40import.calendar.google.com/public/basic.ics', // arts
        'https://calendar.google.com/calendar/ical/1umva68vh7qjhvpm0ua1dje051h34q9c%40import.calendar.google.com/public/basic.ics', // featured
        'https://calendar.google.com/calendar/ical/9247mqjnbg08hthcfqe0ebmusi0k7ohf%40import.calendar.google.com/public/basic.ics', // campus
        'https://calendar.google.com/calendar/ical/uv4vv7rnmoulifk9989ftnoooigdq4ev%40import.calendar.google.com/public/basic.ics' // carreer
    ].entries()) {
        const request = await fetch(`https://75.jero.zone/cache.php?url=${encodeURIComponent(calendarUrl)}`);
        const raw = await request.text();

        let allEvents = Object.values(ical.parseICS(raw)).map(event => {
            event.calendarId = index;

            if(event.description) {
                const description = event.description.toLowerCase();

                event.features = [
                    ['Maybe Free Food', 'burger', description.includes('free') && !description.includes('gluten free') && (description.includes('breakfast') || description.includes('lunch') || description.includes('dinner') || description.includes('food') || description.includes('taco'))],
                    ['Home Game', 'person-running', (event.location.includes('Macalester Stadium') || event.location.includes('(Home)'))],
                    ['Vegetarian', 'egg', description.includes('vegetarian') || description.includes('vegan')],
                    ['Vegan', 'carrot', description.includes('vegan')],
                    ['Gluten Free', 'wheat-awn-circle-exclamation', description.includes('gluten free') || description.includes('gluten-free')]
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
    
    events.forEach(event => event.features?.length && console.log(event.features));

    const allFeatures = events.map(event => event.features).flat().filter(item => item !== undefined);
    const featureSet = new Set(allFeatures.map(JSON.stringify));
    const uniqueFeatures = Array.from(featureSet).map(JSON.parse);

    return { events, uniqueFeatures };
}