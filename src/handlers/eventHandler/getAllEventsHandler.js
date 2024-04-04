//
const { Event } = require("../../db");
const removeDuplicates = require("../../utils/removeDuplicates");

const getAllEventsHandler = async (req, res) => {
  const { search, city, category, access, order } = req.query;
  // search, city category, access, order
  try {
    const events = await Event.findAll();

    if (!events || events.length === 0) {
      return res.status(404).json({ message: "No events found" });
    }

    if (search && !city && !category) {
      const filteredByCategory = events.filter((event) =>
        event["category"].toLowerCase().includes(search.toLowerCase())
      );
      const filteredByDescription = events.filter((event) =>
        event["description"].toLowerCase().includes(search.toLowerCase())
      );
      const filteredByLocation = events.filter((event) =>
        event["location"].toLowerCase().includes(search.toLowerCase())
      );
      const filteredByName = events.filter((event) =>
        event["name"].toLowerCase().includes(search.toLowerCase())
      );
      const filteredBycity = events.filter((event) =>
        event["city"].toLowerCase().includes(search.toLowerCase())
      );
      const allFiltered = [
        ...filteredByCategory,
        ...filteredByDescription,
        ...filteredByLocation,
        ...filteredByName,
        ...filteredBycity,
      ];
      if (!allFiltered || allFiltered.length === 0) {
        return res.status(404).json({ message: "No events found" });
      }
      const uniqueObjects = removeDuplicates(allFiltered);

      if (access) {
        const filteredByAccess = uniqueObjects.filter(
          (event) => event["access"] === access
        );
        if (!filteredByAccess || filteredByAccess.length === 0) {
          return res.status(404).json({ message: "No events found" });
        }
        if (order === "DESC") {
          const sortedEvents = filteredByAccess.sort(
            (a, b) => new Date(b.start_date) - new Date(a.start_date)
          );
          return res.status(200).json(sortedEvents);
        }
        if (order === "ASC") {
          const sortedEvents = filteredByAccess.sort(
            (a, b) => new Date(a.start_date) - new Date(b.start_date)
          );
          return res.status(200).json(sortedEvents);
        }
      }
      if (order === "DESC") {
        const sortedEvents = uniqueObjects.sort(
          (a, b) => new Date(b.start_date) - new Date(a.start_date)
        );
        return res.status(200).json(sortedEvents);
      }
      if (order === "ASC") {
        const sortedEvents = uniqueObjects.sort(
          (a, b) => new Date(a.start_date) - new Date(b.start_date)
        );
        return res.status(200).json(sortedEvents);
      }
      return res.status(200).json(uniqueObjects);
    }
    // search, city category, access, order
    if (!search && city && !category) {
      const filteredByCity = events.filter((event) => event["city"] === city);
      if (!filteredByCity || filteredByCity.length === 0) {
        return res.status(404).json({ message: "No events found" });
      }
      if (access) {
        const filteredByAccess = filteredByCity.filter(
          (event) => event["access"] === access
        );
        if (!filteredByAccess || filteredByAccess.length === 0) {
          return res.status(404).json({ message: "No events found" });
        }
        if (order === "DESC") {
          const sortedEvents = filteredByAccess.sort(
            (a, b) => new Date(b.start_date) - new Date(a.start_date)
          );
          return res.status(200).json(sortedEvents);
        }
        if (order === "ASC") {
          const sortedEvents = filteredByAccess.sort(
            (a, b) => new Date(a.start_date) - new Date(b.start_date)
          );
          return res.status(200).json(sortedEvents);
        }
      }
      if (order === "DESC") {
        const sortedEvents = filteredByCity.sort(
          (a, b) => new Date(b.start_date) - new Date(a.start_date)
        );
        return res.status(200).json(sortedEvents);
      }
      if (order === "ASC") {
        const sortedEvents = filteredByCity.sort(
          (a, b) => new Date(a.start_date) - new Date(b.start_date)
        );
        return res.status(200).json(sortedEvents);
      }
      return res.status(200).json(filteredByCity);
    }
    // search, city category, access, order
    if (!search && city && category) {
      const filteredByCity = events.filter((event) => event["city"] === city);
      if (!filteredByCity || filteredByCity.length === 0) {
        return res.status(404).json({ message: "No events found" });
      }
      const filteredByCategory = filteredByCity.filter(
        (event) => event["category"] === category
      );
      if (!filteredByCategory || filteredByCategory.length === 0) {
        return res.status(404).json({ message: "No events found" });
      }
      if (access) {
        const filteredByAccess = filteredByCategory.filter(
          (event) => event["access"] === access
        );
        if (!filteredByAccess || filteredByAccess.length === 0) {
          return res.status(404).json({ message: "No events found" });
        }
        if (order === "DESC") {
          const sortedEvents = filteredByAccess.sort(
            (a, b) => new Date(b.start_date) - new Date(a.start_date)
          );
          return res.status(200).json(sortedEvents);
        }
        if (order === "ASC") {
          const sortedEvents = filteredByAccess.sort(
            (a, b) => new Date(a.start_date) - new Date(b.start_date)
          );
          return res.status(200).json(sortedEvents);
        }
      }
      if (order === "DESC") {
        const sortedEvents = filteredByCategory.sort(
          (a, b) => new Date(b.start_date) - new Date(a.start_date)
        );
        return res.status(200).json(sortedEvents);
      }
      if (order === "ASC") {
        const sortedEvents = filteredByCategory.sort(
          (a, b) => new Date(a.start_date) - new Date(b.start_date)
        );
        return res.status(200).json(sortedEvents);
      }
      return res.status(200).json(filteredByCategory);
    }
    if (!search && !city && category) {
      const filteredByCategory = events.filter(
        (event) => event["category"] === category
      );
      if (!filteredByCategory || filteredByCategory.length === 0) {
        return res.status(404).json({ message: "No events found" });
      }
      if (access) {
        const filteredByAccess = filteredByCategory.filter(
          (event) => event["access"] === access
        );
        if (!filteredByAccess || filteredByAccess.length === 0) {
          return res.status(404).json({ message: "No events found" });
        }
        if (order === "DESC") {
          const sortedEvents = filteredByAccess.sort(
            (a, b) => new Date(b.start_date) - new Date(a.start_date)
          );
          return res.status(200).json(sortedEvents);
        }
        if (order === "ASC") {
          const sortedEvents = filteredByAccess.sort(
            (a, b) => new Date(a.start_date) - new Date(b.start_date)
          );
          return res.status(200).json(sortedEvents);
        }
      }
      if (order === "DESC") {
        const sortedEvents = filteredByCategory.sort(
          (a, b) => new Date(b.start_date) - new Date(a.start_date)
        );
        return res.status(200).json(sortedEvents);
      }
      if (order === "ASC") {
        const sortedEvents = filteredByCategory.sort(
          (a, b) => new Date(a.start_date) - new Date(b.start_date)
        );
        return res.status(200).json(sortedEvents);
      }
      return res.status(200).json(filteredByCategory);
    }
    // return res.status(200).json();
    if (!search && !city && !category) {
      if (access) {
        const filteredByAccess = events.filter(
          (event) => event["access"] === access
        );
        if (!filteredByAccess || filteredByAccess.length === 0) {
          return res.status(404).json({ message: "No events found" });
        }
        if (order === "DESC") {
          const sortedEvents = filteredByAccess.sort(
            (a, b) => new Date(b.start_date) - new Date(a.start_date)
          );
          return res.status(200).json(sortedEvents);
        }
        if (order === "ASC") {
          const sortedEvents = filteredByAccess.sort(
            (a, b) => new Date(a.start_date) - new Date(b.start_date)
          );
          return res.status(200).json(sortedEvents);
        }
      }
      if (order === "DESC") {
        const sortedEvents = events.sort(
          (a, b) => new Date(b.start_date) - new Date(a.start_date)
        );
        return res.status(200).json(sortedEvents);
      }
      if (order === "ASC") {
        const sortedEvents = events.sort(
          (a, b) => new Date(a.start_date) - new Date(b.start_date)
        );
        return res.status(200).json(sortedEvents);
      }
      return res.status(200).json(events);
    }
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getAllEventsHandler;

//
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
