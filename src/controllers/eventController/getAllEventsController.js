const { Event } = require("../../db");
const removeDuplicates = require("../../utils/removeDuplicates");

const getAllEventsController = async (criterion, filter, order, from, to) => {
  // search, city category, access, order
  let events;
  // filter = search
  //  
  try {
    events = await Event.findAll();

    if (!events || events.length === 0) {
      throw new Error("No events found");
    }

    if (!criterion && !filter && !order) {
      return from ? events.slice(from - 1, to) : events;
    }

    if (criterion && filter) {
      const filteredEvents = events.filter(
        (event) => event[criterion] === filter
      );
      return sortAndPaginate(filteredEvents, order, from, to);
    }

    if (filter) {
      const filteredByCategory = events.filter((event) =>
        event.category.toLowerCase().includes(filter.toLowerCase())
      );
      const filteredByDescription = events.filter((event) =>
        event.description.toLowerCase().includes(filter.toLowerCase())
      );
      const filteredByLocation = events.filter((event) =>
        event.location.toLowerCase().includes(filter.toLowerCase())
      );
      const filteredByName = events.filter((event) =>
        event.name.toLowerCase().includes(filter.toLowerCase())
      );
      const filteredByCity = events.filter((event) =>
        event.city.toLowerCase().includes(filter.toLowerCase())
      );
      const allFiltered = [
        ...filteredByCategory,
        ...filteredByDescription,
        ...filteredByLocation,
        ...filteredByName,
        ...filteredByCity,
      ];
      const uniqueObjects = removeDuplicates(allFiltered);
      return sortAndPaginate(uniqueObjects, order, from, to);
    }
  } catch (error) {
    throw new Error("Error fetching events: " + error.message);
  }
};

const sortAndPaginate = (events, order, from, to) => {
  const sortedEvents =
    order === "DESC" ? sortEventsDesc(events) : sortEventsAsc(events);
  return from ? sortedEvents.slice(from - 1, to) : sortedEvents;
};

const sortEventsDesc = (events) =>
  events.sort((a, b) => new Date(b.start_date) - new Date(a.start_date));

const sortEventsAsc = (events) =>
  events.sort((a, b) => new Date(a.start_date) - new Date(b.start_date));

module.exports = getAllEventsController;
