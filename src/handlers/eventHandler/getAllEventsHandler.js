const { Event } = require("../../db");
const removeDuplicates = require("../../utils/removeDuplicates");

const getAllEventsHandler = async (req, res) => {
  const { criterion, filter, order, from, to } = req.query;
  try {
    const events = await Event.findAll();

    if (!events || events.length === 0) {
      return res.status(404).json({ message: "No events found" });
    }

    if (!criterion && !filter && !order) {
      if (from) {
        return res.status(200).json(events.slice(from - 1, to));
      }
      return res.status(200).json(events);
    }

    if (criterion && filter ) {
      const filteredEvents = events.filter(
        (event) => event[criterion] === filter
      );
      // some code to implement here
      if (order === "DESC") {
        const sortedEvents = filteredEvents.sort(
          (a, b) => new Date(b.start_date) - new Date(a.start_date)
        );
        if (from) {
          return res.status(200).json(sortedEvents.slice(from - 1, to));
        }
        return res.status(200).json(sortedEvents);
      } else if(order==="ASC") {
        const sortedEvents = filteredEvents.sort(
          (a, b) => new Date(a.start_date) - new Date(b.start_date)
        );
        if (from) {
          return res.status(200).json(sortedEvents.slice(from - 1, to));
        }
        return res.status(200).json(sortedEvents);
      }
      if (from) {
        return res.status(200).json(filteredEvents.slice(from - 1, to));
      }
      return res.status(200).json(filteredEvents);
    }

    if (filter) {
      const filteredByCategory = events.filter((event) =>
        event["category"].toLowerCase().includes(filter.toLowerCase())
      );
      const filteredByDescription = events.filter((event) =>
        event["description"].toLowerCase().includes(filter.toLowerCase())
      );
      const filteredByLocation = events.filter((event) =>
        event["location"].toLowerCase().includes(filter.toLowerCase())
      );
      const filteredByName = events.filter((event) =>
        event["name"].toLowerCase().includes(filter.toLowerCase())
      );
      const filteredBycity = events.filter((event) =>
        event["city"].toLowerCase().includes(filter.toLowerCase())
      );
      const allFiltered = [
        ...filteredByCategory,
        ...filteredByDescription,
        ...filteredByLocation,
        ...filteredByName,
        ...filteredBycity
      ];

      const uniqueObjects = removeDuplicates(allFiltered);
      if (order === "DESC") {
        const sortedEvents = uniqueObjects.sort(
          (a, b) => new Date(b.start_date) - new Date(a.start_date)
        );
        if (from) {
          return res.status(200).json(sortedEvents.slice(from - 1, to));
        }
        return res.status(200).json(sortedEvents);
      } else if (order === "ASC") {
        const sortedEvents = uniqueObjects.sort(
          (a, b) => new Date(a.start_date) - new Date(b.start_date)
        );
        if (from) {
          return res.status(200).json(sortedEvents.slice(from - 1, to));
        }
        return res.status(200).json(sortedEvents);
      }

      if (from) {
        return res.status(200).json(uniqueObjects.slice(from - 1, to));
      }
      return res.status(200).json(uniqueObjects);
    }
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getAllEventsHandler;

// const getAllEventsController = require("../../controllers/eventController/getAllEventsController");

// const getAllEventsHandler = async (req, res) => {
//   const { criterion, filter, order, from, to } = req.query;

//   try {
//     const events = await getAllEventsController(
//       criterion,
//       filter,
//       order,
//       from,
//       to
//     );
//     res.status(200).json(events);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// module.exports = getAllEventsHandler;